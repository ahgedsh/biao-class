

<template>
  <div>
    <Nav :push-down='true' />
    <div class='container row'>
      <div class='col-lg-3'>
        <AdminNav />
      </div>
      <div class='col-lg-9'>
        <div class="location">
    <div class="search">
      <input type="search" v-model="keyword" placeholder="输入城市名称搜索">
    </div>
    <div class="step-list">
      <div v-if="location.state.length" class="step">
        <div :key='lo.name' :class="{active: lo.id == current.state, item:true}" @click="select(lo, 'state')"
             v-for="lo in location.state">{{lo.name}}
        </div>
      </div>
      <div v-if="location.city.length" class="step">
        <div :key='lo.name' :class="{active: lo.id == current.city, item:true}" @click="select(lo, 'city')"
             v-for="lo in location.city">{{lo.name}}
        </div>
      </div>
      <div v-if="location.region.length" class="step">
        <div  :key='lo.name' :class="{active: lo.id == current.region, item:true}" @click="select(lo, 'region')"
             v-for="lo in location.region">{{lo.name}}
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>
<script>
const china_id = 1;

import api from "../lib/api";

import AdminNav from './AdminNav.vue';
export default {
  props: {
    onSelect: {}
  },
  components:{AdminNav},

  mounted() {
    this.read(china_id, "state");
  },

  data() {
    return {
      keyword: "", // 搜索关键词
      parent_id: null, // 父级id
      location: {
        // 存放检索结果
        state: [],
        city: [],
        region: []
      },
      current: {
        // 当前选中的地址id
        state: null,
        city: null,
        region: null
      }
    };
  },

  methods: {
    read(parent_id, type) {
      this.parent_id = parent_id;

      return api("location/read", {
        where: {
          and: { parent_id }
        }
      }).then(r => {
        let data = r.data;
        this.location[type] = data;
        return data;
      });
    },
    select(row, type) {
      let child_type;
      this.current[type] = row.id;

      switch (type) {
        case "state":
          child_type = "city";
          break;
        case "city":
          child_type = "region";
          break;
      }
      this.read_children_and_select(row, child_type);
    },
    read_children_and_select(parent, type) {
      this.read(parent.id, type).then(data => {
        if (!data.length || parent.type == "city") this.onSelect(parent);
      });
    },
    reset_location() {
      this.location = {
        state: [],
        city: [],
        region: []
      };
    },
    search() {
      this.reset_location();
      api("location/search", {
        or: {
          name: this.keyword
        }
      }).then(r => {
        this.group(r.data);
      });
    },
    group(list) {
      list.forEach(row => {
        let sub = this.location[row.type];
        sub.push(row);
      });
    }
  },
  watch: {
    keyword() {
      this.search();
    }
  }
};
</script>
<style scoped>
.location {
  max-width: 200px;
}

.step-list {
  border: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 0;
  border-top-width: 0;
}

.location .step {
  line-height: 1.7;
  display: inline-block;
  width: 33.333333333%;
  max-height: 100px;
  overflow: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

.location .step:last-child {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.location .step:first-child {
  border-left: 0;
}

.location .item {
  cursor: pointer;
  padding: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.location .item.active {
  background: #fd521d;
  color: #fff;
}
</style>
