 var helper=require('../unil/helper');
 var store=require("../unil/story");
 

var list=[]
    ,el
    ,on_click
    ,on_delete

   ;
   var output={
       add:add,
       remove:remove,
       clear:clear,
      
       init:init,

   }
   function init(config){
       el=document.querySelector(config.el);
       if(!config.el || !el)
       throw"err";
       on_click=config.on_click,
       on_delete=config.on_delete,
       
      sync_to_ladle();
      render();
      
   }
   function render(){
       el.innerHTML='';
       list.forEach(function(keyword){
           var el_keyword=document.createElement('div');
           el_keyword.classList.add('history');
           el_keyword.innerHTML=`
           <div class="text">${keyword}</div>
           <div class="tool">
               <span class="delete">删除</span>
           </div>`;
           el.appendChild(el_keyword);
           el_keyword.addEventListener('click',function(){
               if(on_click)
               on_click(keyword);

           })
           el_keyword.querySelector('.delete').addEventListener('click',function(e){
               e.stopPropagation();
               if(on_delete)
               on_delete();
               remove(keyword);
           })

       })


   }

function sync_to_store(){
        store.set('history-list',list);
    
       }
 function sync_to_ladle(){
        list=store.get('history-list') ||[];
 }
 
 function add(keyword){
     helper.find_and_delete(list,keyword);
     list.unshift(keyword);
     sync_to_store();
    render();

 }
 function remove(keyword){
     helper.find_and_delete(list,keyword);
     sync_to_store(keyword);
     render();

 }
 function clear(){
     list=[];
     sync_to_store();
     render();
 }

//测试
 init({
     el:'#history-list',
     on_click:function(keyword){
         console.log(keyword);
     },
     on_delete:function(e){
         console.log(1);
     }
     



 });
 
// add('asd');
// add('as67ud');
// add('ghasd');
// add('anhsd');
// add('afsd');
    
  
       
       
       

  
module.exports=output;