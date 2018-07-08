<template>
     <div>
         <Nav :push-down='true' />
         <div class='container row'>
             <div class='col-lg-3'>
                 <AdminNav />
             </div>
             <div class='col-lg-9'>
                 <div class='content card'>
                     <h2>品牌列表</h2>
                     <div class='tool-bar'>
              <button @click='show_form=!show_form'>创建品牌</button>
            </div>
            <form @submit='search($event)'>
              <div class='input-control'>
              <input type="search" v-model="keyword"  placeholder='搜关键字' autofocus>
             </div>
              <button type='submit' hidden>搜</button>
            </form>


            <form v-if='show_form' @submit='cou($event)' >
            <div class="input-control">
              <label>品牌名</label>
              <input type="text"
                     v-validator="'required'"
                     error-el='#name-error' 
               v-model="current.name">
               <div class='error-list'>
                <div id='name-error'></div>
              </div>
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
                             <th>品牌名</th>
                             
                             <th>操作</th>
                            
                         </thead>
                         <tbody>
                             <tr :key='row.name' v-for='row in list'>
                                <td>{{row.name}}</td>
                                
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
                 <Pagination :totalCount="total" :limit="limit" :onChange="on_page_change"/>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
import '../../css/admin.css';

import AdminPage from '../../mixin/AdminPage.vue';
import validator from "../../directive/validator";





export default {
    directives: { validator },
  
    
    data(){
        return {
            model:'brand',
           searchable:['name'],
        };
    },
    mixins:[AdminPage],
}
</script>

<style scoped>

.input-control > *,
search {
  display: block;
  padding-bottom: 5px;
  padding-top: 10px;
}
.dib {
  display: inline;
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
tr:hover{
  background: rgba(0,80,200,.07);
}
table{
  width:100%;
  border-collapse: collapse;

}

</style>

