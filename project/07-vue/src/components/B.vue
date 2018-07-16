<template>
   <div>
       <button @click="show_form=!show_form">创建用户</button>
       <form @submit='search($event)'>
           <input type="search" v-model='keyword' placeholder="请输入关键字">
           <button type='submit' >搜索</button>
       </form>
       <form v-if='show_form' >
           <input type="text" v-model='current.name'>
           <button type='submit'@click='create($event)'>提交</button>
       </form>
       <table>
           <thead>
               <td>内容 </td>
               <td>操作</td>
           </thead>
           <tbody>
              <tr v-for='row in list'>
                  <td>{{row.name}}</td>
                  <td>
                      <button @click='set_current(row)'>更新</button>
                      <button @click='remove(row.id)'>删除</button>
                  </td>
              </tr>
           </tbody>
       </table>
   </div>
</template>
<script>
import api from '../lib/api.js';

export default {
    data(){
        return {
            list:{},
            current:{
                brand:''
            },
            searchable:['name'],
            keyword:"",
            show_form:false,

        }
    },
    mounted(){
        this.read()

    },

    methods:{
        create(e){
            e.preventDefault();
            let action = this.current.id ? "update" : "create";
           
            api(`brand/${action}`, this.current)
            .then(r=>{
                
                this.current={};
                this.read();
            })

        },
        read(){
            api('brand/read').then(r=>{
                this.list=r.data;
            })
        },
        remove(id){
            api('brand/delete',{id})
            .then(r=>{
                console.log(r)
                this.read();

            })
        },
        set_current(row){
            this.current=row;

        },
        search(e){
           
            e.preventDefault();
            let param={
                or:{},
            };
            this.searchable.forEach(prop=>{
                param.or[prop]=this.keyword;
            });
            console.log(this.keyword)
            api('brand/search',param).then(r=>{
                this.list=r.data;
                console.log(r.data);
            })
        }
        
    }
}
</script>

