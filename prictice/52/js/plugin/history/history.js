// var helper=require('../../util/helper');
// var store=require('../../util/store');


// var list=[]
//     ,el
//     ,on_click
//     ,on_delete
//    ;
//    var output={
//        add:add,
//        remove:remove,
//        clear:clear,
//        init:init,

//    }
//    function init(config){
//        el=document.querySelector(config.el);
//        on_click=config.on_click;
//        on_delete=config.on_delete;
//        if(!config.el || !el)
//        throw'Invalid root element';
//       sync_to_ladle();
//        render();
//    }
//    function render(){
//        el.innerHTML='';
//        list.forEach(function(keyword){
//            var el_keyword=document.createElement('div');
//            el_keyword.innerHTML=`
//            <div class="text">${keyword}</div>
//            <div class="tool">
//              <span class="delete">删除</span>
//            </div>`;
//            el_keyword.classList.add('history');
//            el.appendChild(el_keyword);
//            el_keyword.addEventListener('click',function(){
//                if(on_click)
//             on_click(keyword);
//            });
//            el_keyword.querySelector('.delete')
//            .addEventListener('click',function(e){
//             e.stopPropagation();  
//              if(on_delete)
//              on_delete(keyword);
//              remove(keyword);
//         })  
//        })
       
//    }
//    function sync_to_store(){
//        store.set('history-list',list);

//    }
//    function sync_to_ladle(){
//        list=store.get('history-list') || [];

//    }
//    function add(keyword){
//        helper.find_and_delete(list,keyword);
//        list.unshift(keyword);
//        sync_to_store();
//        render();
//    }
   
//    function remove(keyword){
//        helper.find_and_delete(list,keyword);
//        sync_to_store();
//        render();
       
//    }
//    function clear(){
//        list=[];
//        sync_to_store();
//        render();
//    }

   

  
// module.exports=output;
// var helper=require('../../util/helper');
// var store=require('../../util/store');
// var list=[]
//    ,el
//    ,on_click
//    ,on_delete
//    ;
// var output={
//     add:add,
//     remove:remove,
//     clear:clear,
//     render:render,
//     init:init,
// }


// function init(config){
//            el=document.querySelector(config.el);
//            on_click=config.on_click;
//            on_delete=config.on_delete;
//            if(!config.el || !el)
//            throw'Invalid root element';
//           sync_to_ladle();//获取东西
//            render();//再渲染
//        }
// function render(){
//     el.innerHTML='';
//     list.forEach(function(keyword){
//         var el_keyword=document.createElement('div');
//         el_keyword.innerHTML=`
//             <div class="text">${keyword}</div>
//             <div class="tool">
//                 <span class="delete">删除</span>
//             </div>`;
//             el_keyword.classList.add('history');//加css样式
//             el.appendChild(el_keyword);
//             el_keyword.addEventListener('click',function(){
//                 if(on_click)
//                 on_click(keyword);
//             })
//             el_keyword.querySelector('.delete')
//                       .addEventListener('click',function(e){
//                           e.stopPropagation();
//                           if(on_delete){
//                               on_delete(keyword);
//                               remove(keyword);
//                           }
//                       })
//     })
// }




// function sync_to_ladle(){//获取东西
//     list=store.get('history-list')||[];
// }
// function sync_to_store(){//把东西放进冰箱
//     store.set('history-list',list);
// }

// function add(keyword){
//     helper.find_and_delete(list,keyword);
//     list.unshift(keyword);
//     sync_to_store();
//     render();
// }
// function remove(keyword){
//     helper.find_and_delete(list,keyword);
//     sync_to_store();
//     render();
// }
// function clear(){
//     list=[];
//     sync_to_store();
//     render();
// }

// module.exports=output;
var helper=require('../../util/helper');
var store=require('../../util/store');

var el
   ,list=[]
   ,on_click
   ,on_delete
   output={
       init:init,
       add:add,
       clear:clear,
       remove:remove,
       hide:hide,
       show:show,
       is_visible:is_visible,
   }
   ;
function init(config){
    el=document.querySelector(config.el);
    if(!config.el || !el)
    throw'err';
   on_click=config.on_click;
   on_delete=config.on_delete;
    sync_to_ladle();
    render();



}
function hide(){
    el.hidden=true;
}

 function show(){
     el.hidden=false;
 }
function is_visible(){
    return !el.hidden;
}

function render(){
    el.innerHTML='';
    list.forEach(function(keyword){
        var el_keyword=document.createElement('div');
        
        el_keyword.innerHTML=`
            <div class="text">${keyword}</div>
            <div class="tool">
                <span class="delete">删除</span>
            </div>
            `;

            el_keyword.classList.add('history');
            el.appendChild(el_keyword);
            el_keyword.addEventListener('click',function(e){
                if(on_click){
                    on_click(keyword,e);
                }
 
            })
            el_keyword.querySelector('.delete')
                      .addEventListener('click',function(e){
                          e.stopPropagation();
                          if(on_delete){
                              on_delete(keyword,e);
                              remove(keyword);
                          }

                      })
      })
    



}

function sync_to_ladle(){
    list=store.get('history-list') || [];
}
function sync_to_store(){
    store.set('history-list',list);
}


function add(keyword){
    //判断是否重复
    helper.find_and_delete(list,keyword);
    //加进list里面
    list.unshift(keyword);
    //放进冰箱
    sync_to_store();
    //渲染出来
    render();
    
}
function remove(keyword){
    helper.find_and_delete(list,keyword);//找打并且删除
    sync_to_store();
    render();
}

function clear(){
    list=[];
    sync_to_store();
    render();
}


module.exports=output;

