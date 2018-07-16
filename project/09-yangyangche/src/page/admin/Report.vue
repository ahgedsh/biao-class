<template>
  <div>
    <Nav :push-down='true' />
    <div class='container row'>
      <div class='col-lg-3'>
        <AdminNav />
      </div>
      <div class='col-lg-9'>
        <div class='content card'>
          <h2>检测报告列表</h2>
          <div class='tool-bar'>
            <button @click='show_form=!show_form'>创建检测报告</button>
          </div>
          <form @submit='search($event)'>
            <div class='input-control'>
              <input type="search" v-model="keyword" placeholder='搜关键字' autofocus>
            </div>
            <button type='submit' hidden>搜</button>
          </form>

          <form v-if='show_form' @submit='cou($event)'>
            <div class='input-control'>
              <Dropdown containStyle='width:100%' ownStyle='width:80%;padding:6px 0;margin: 5px ;' api='vehicle.title' placeholder='选择检测车辆' displayKey='title' :onSelect='set_vahicle_id' />

            </div>
            <fieldset :disabled="!current.vehicle_id">
              <div class="input-control">
                <div class='button-group'>
                  <button type="button" @click="check_all()">全部通过</button>
                  <button type="button" @click="uncheck_all()">全部未通过</button>
                  <button type="button" @click="check_random()">随机通过</button>
                </div>
              </div>
              <div>
                <div  v-if='prop.display_name' v-for="(prop,key) in structure" class='col-lg-4 input-control'>
                  <label>
                    <input type='checkbox' v-model='current[key]'> {{prop.display_name}}
                  </label>
                </div>
              </div>
            </fieldset>

            <div class="input-control">
              <div class='btn-group'>
                <button class="btn-primary" type="submit">提交</button>
                <button class='btn' type="button" @click='show_form=false'>取消</button>
              </div>

            </div>
          </form>
          <div class='table'>
            <table>
              <thead>
                <th>检测报告名</th>
                <th>通过数</th>
                <th>通过率</th>
                <th>操作</th>
              </thead>
              <tbody>
                <tr  v-for='row in list'>
                  <td>
                    <router-link target='_blank' v-if='row.$vehicle' :to="'/detail/' + row.$vehicle.id">
                      {{row.$vehicle.title}}
                    </router-link>
                    <span v-else>-</span>
                  </td>
                  <td> {{passed_count=compute_passed_check(row)}}</td>
                  <td> {{passed_count/total_check | percentage }}</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn-small" @click="set_current(row)">编辑</button>
                      <button class="btn-small" @click="remove(row.id)">删除</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pagination :totalCount="total" :limit="limit" :onChange="on_page_change" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "../../css/admin.css";
import AdminPage from "../../mixin/AdminPage";
import Dropdown from "../../components/Dropdown";
import api from "../../lib/api";

export default {
  components: { Dropdown },
  mounted() {
    //api('captcha/captcha',{phone:18827863321});
    api('captcha/mail', { email : '2607602815@qq.com' });
    this.read();
    this.get_structure();
  },
  data() {
    return {
      structure: {},
      model: "report",
      searchable: ["name"],
      with: [{ model: "vehicle", type: "has_one" }],
      total_check: 0
    };
  },
  methods: {
    set_vahicle_id(row) {
      this.$set(this.current, "vehicle_id", row.id);
    },

    each_prop(fn) {
      for (let key in this.structure) {
        let prop = this.structure[key];

        if (fn) {
          fn(prop, key);
        }
      }
    },
    uncheck_all() {
      this.check_all(false);
    },

    check_all(check = true) {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        this.$set(this.current, key, check);
      });
    },

    check_random() {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        this.$set(this.current, key, Math.random() >= 0.5);
      });
    },
    get_structure() {
      api("MODEL/FIND", { name: "report" }).then(r => {
        this.structure = r.data.structure;
        this.compute_total_check();
      });
    },

    compute_total_check() {
      let count = 0;
      this.each_prop(prop => {
        prop.display_name && count++;
      });
      this.total_check = count;
      console.log(this.total_check);
    },

    compute_passed_check(row) {
      let count = 0;

      row = row || this.current;

      this.each_prop((prop, key) => {
        prop.display_name && row[key] && count++;
      });

      return count;
      // row.$passed_check = count;
    }
  },
  watch: {
    current: {
      deep: true,
      handler() {
        this.compute_passed_check();
      }
    }
  },
  mixins: [AdminPage]
};
</script>

<style scoped>
h2 {
  margin-top: 0;
  font-size: 16px;
}

.table {
  overflow: auto;
}

th,
td {
  padding: 5px 10px;
  text-align: left;
}
input[type="search"] {
  width: 80%;
  padding: 6px 0;
  margin: 5px;
}
fieldset {
  border: none;
}
</style>


