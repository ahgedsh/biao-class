<template>
    <div>
        <Nav :push-down='true' />
        <div class='container row'>
            <div class='col-lg-3'>
                <AdminNav />
            </div>
            <div class='col-lg-9'>
                <div class='content card'>
                    <h2>型号列表</h2>
                    <div class='tool-bar'>
                        <button @click='show_form=!show_form'>创建型号</button>
                    </div>
                    <form @submit='search($event)'>
                        <div class='input-control'>
                            <input type="search" v-model="keyword" placeholder='搜关键字' autofocus>
                        </div>
                        <button type='submit' hidden>搜</button>
                    </form>

                    <form v-if='show_form' @submit='cou($event)'>
                        <div class="input-control">
                            <label>型号名</label>
                            <input type="text"  
                                   v-validator="'required'" 
                                   error-el='#name-error'
                                   v-model="current.name">
                                   <div class="error-list">
                                       <div id='name-error'></div>
                                   </div>
                        </div>

                        <div class="input-control">
                            <label>品牌</label>
                            <Dropdown :list='brand_list' :onSelect='set_brand_id' />
                        </div>
                        <div class="input-control">
                            <label>设计</label>
                            <Dropdown :list='design_list' :onSelect='set_design_id' />
                        </div>

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
                                <th>用户名</th>
                                <th>品牌</th>
                                <th>设计</th>
                                <th>操作</th>

                            </thead>
                            <tbody>
                                <tr :key='row.username' v-for='row in list'>
                                    <td>{{row.name}}</td>
                                    <td>{{row.$brand ? row.$brand.name :'-'}}</td>
                                    <td>{{row.$design ? row.$design.name :'-'}}</td>
                                      
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
import "../../css/admin.css";
import api from "../../lib/api";
import AdminPage from "../../mixin/AdminPage.vue";
import Dropdown  from "../../components/Dropdown";
import validator from "../../directive/validator";

export default {
    directives: { validator },
    mounted(){
        this.read_brand();
        this.read_design();
    },
    components:{Dropdown},

  data() {
      return {
         brand_list : [],
         design_lsit:[],
         model:'model',
      searchable: ["name"],

    with       : [
          { model : 'brand', type : 'has_one' },
          { model : 'design', type : 'has_one' },
        ],
    };

  },

  methods:{
      read_brand(){
          api('brand/read')
          .then(r=>{
              this.brand_list=r.data;
          });
      },
      read_design(){
          api('design/read')
          .then(r=>{
            
              this.design_list=r.data;
             
              
             
          });
      },
      set_brand_id(row){
          this.$set(this.current,'brand_id',row.id)
      },
        set_design_id(row){
          this.$set(this.current,'design_id',row.id)
          console.log(this.current)
      },
      
      
  },
  mixins: [AdminPage]
};

</script>

<style scoped>
.input-control > *,
search {
  display: block;
  padding-bottom: 5px;
  padding-top: 10px;
}
.dib {
  display: inline-block;
  width: 3%;
}
input {
  outline: 0;
  width: 100%;
}

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
tr:hover {
  background: rgba(0, 80, 200, 0.07);
}
table {
  width: 100%;
  border-collapse: collapse;
}
</style>

