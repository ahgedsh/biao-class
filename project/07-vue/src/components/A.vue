<template>
<div>
    <form >
        <input type="text" v-model='current.name'>
        <button type='submit' @click='create($event)'>提交</button>
    </form>
    <table>
        <thead>
           <tr>
               <th>内容</th>
               <th>操作</th>
           </tr>
        </thead>
    <tbody>
       <tr  v-for='row in list'>
           <td >
         {{row.name}}
        
           </td>
           <td>
               <button @click='remove(row.id)'>删除</button>
               <button @click='update(row.id)'>更新</button>
           </td>
       </tr>
    </tbody>

    </table>
</div>
    
</template>
<script>
/* eslint-disable */

import api from '../lib/api.js'
export default {
    data(){
        return{
            list:{},
            current:{
                brand:''
            },

        }
    },
    mounted(){
        this.read();
    },
    methods:{
        update(id){
            api('brand/update',{id}).then(r=>{
                console.log(id);
               this.current=r.data;

            })
        },
       
        create(e){
            e.preventDefault();
             console.log(this.current);
            
            api('brand/create',this.current)
               .then(r=>{
                  this.read();
                  this.current={};
                 
               })
        },
        read(){
            api('brand/read')
            .then(r=>{
                
                this.list=r.data;
               
                console.log(this.list);

            })
        },
        remove(id){
            console.log(id);
            
            api('brand/delete',{id:id})
            .then(r=>{
                console.log(r);
                this.read();
            })
        }

    }
    
}
</script>

