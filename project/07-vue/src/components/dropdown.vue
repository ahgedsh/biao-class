<template>
<div @mouseleave='show_menu=false' class='dropdpwn'>
    <input type="search"
           @focus="show_menu=true"
           @keyup='show_menu=true'
           v-model='keyword'
           :placeholder='placeholder'
         
           
                    
           >
    <div class='menu' v-if='show_menu && result.lenght'>
        <div class='menu-item' @click='select(row)' v-for='row in result'>{{row[displayKey]}}</div>
    </div>

</div>
  
</template>

<script>
/* eslint-disable */
  import api from '../lib/api';

  export default {
      data(){
          return{
              keyword:'',
              show_menu:false,
              result:[],
              api_conf:{},
              selected:{},
              timer:{},
              
              }

          },
          props:{
              placeholder : {
        default : '请选择',
      },
              default:{},
              onSelect:{},
              list:{
                  default(){
                      return[]
                  }
                  },
            displayKey:{
                default: 'name'
                
            },
            primaryKey:{
                default:'id'
            },
            api:{},
          },
          mounted(){
              this.set_default();
              this.api_conf=this.parse_api();
              let list=list;
               list && (this.result = Object.assign([], this.list));
          },
          mothods:{
              //解析prop.api为更好处理对象的类型
              parse_api(){
                  let api_prop=this.api;

                  if(typeof api_prop !='string')
                  return Object.assign({},api)

                  api_prop=api_prop.split('.');
                  let model=api.prop[0];
                  let property=api.prop[1];
                  property=property.split(',');

                  return{
                      model,
                      property,
                  }

              },
              reset(){
                  this.keyword='';
                  this.selected={};
              },
              set_default(){
                  let key=this.default;
                  if(!key){

                      this.reset();
                      return ;
                  }
                  let def=this.list.find(row=>{
                      return row[this.primaryKey]==key;
                  });
                  this.select(def);
              },

              select(row){
                  this.show_menu=false;
                  this.selected=row;
                  this.keyword=row[this.displayKey];

                  if(this.onSelect)
                  this.onSelect(row);
                  
              },
              filter(){
                 
                  this.result=Object.assign({},this.list);
                  this.result=this.result.filter(row=>{
                      return row[displayKey].indexOf(this.keyword)!==-1

                  })
              },
              searh(){
                  let condition={};
                  let property=this.api_conf.property;

                  if(!propeaty)
                  return;

                  property.forEach(prop=>{
                     condition[prop]=this.keyword;

                  });
                  clearTimeout(this.timer);

                  this.timer=setTimeout(() => {
                      api(`${this.api_conf.model}/search`,{or:condition})
                      .then(this.result=r.data)
                      
                  }, 300);

              },
            




          },
          watch:{
              keyword(){
                  if(this.api)
                  this.search();
                  else{
                      this.filter();
                  }
              },
              detault(){
                  this.set_default()
              }
          }
      };
    
    
    

  

</script>

<style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
    background: #fff;
  }

  .selected,
  .menu > * {
    display: block;
    padding: 2px 5px;
  }

  .selected,
  .menu {
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .menu {
    background: #fff;
    z-index: 1;
    width: 100px;
    position: absolute;
    left: 0;
    /*top: 0;*/
  }
  

  .selected,
  .menu-item {
    cursor: pointer;
  }

  .menu-item:hover {
    background: #ddd;
  }
</style>