// var 
//    page_amount
//    ,config
//    ,el_root
//    ,el_pagination_list
//    ;
 

//   var  default_config={
//     amount:null,
//     limit:10,
//     range:5,
//     current:1

//    }
//    ,output={
//        init:init
//    }
//    ;

// function init(user_config){
//     el_root=document.querySelector(user_config.el);//根元素
//     config=Object.assign({},default_config,user_config);
    
//     calc_apge_amount();
//     change_page(config.current);
//     render_init();
//     render_list();
//     show_pagination();
//     hide_pagination();
// }

// function render_init(){
//     el_root.classList.add('pagination');
    
//     el_root.innerHTML=`
//     <fieldset class="pagination-fieldset">
//     <div class="pagination-pre">
//         <button class="pagination-first">First</button>
//         <button class="pagination-prev">Prev</button>
//     </div>
//     <div class="pagination-list"></div>
//     <div class="pagination-post">
//         <button class="pagination-next">Next</button>
//         <button class="pagination-last">Last</button>
//     </div>
//     </fieldset>
//     `;
//     el_pagination_list=el_root.querySelector('.pagination-list');
//     el_pagination_fieldset=el_root.querySelector('.pagination-fieldset');
//     el_root.addEventListener('click',function(e){
//         var target=e.target;
//         var is_num_btn=target.classList.contains('pagination-item');
//         var first=target.classList.contains('pagination-first');
//         var prev=target.classList.contains('pagination-prev');
//         var next=target.classList.contains('pagination-next');
//         var last=target.classList.contains('pagination-last');
//         if(is_num_btn){
//         var page=parseInt(target.dataset.page)
//         change_page(page);
        
//         }else if(first){
//             change_page(1);

//         }else if(last){
//             change_page(page_amount);
//         }else if(prev){
//             change_page(config.current-1);
//         }else if(next){
//             change_page(config.current+1);
//         }else{

//         }

//         render_list();
//     })
// }

// function render_list(){
    
//     el_pagination_list.innerHTML='';
//     //page_amount是否大于range是只能显示5个，不大于就只显示你自己有多少个 range就是显示5个
//    // 
//    var between=calc_start_and_end()
//       ,start=between.start
//       ,end=between.end
//       ;

//     for(var i=start;i<=end;i++){
//         var btn=document.createElement('button');
//         btn.innerHTML=i;
//         btn.classList.add('pagination-item');
//         btn.dataset.page=i;
//         el_pagination_list.appendChild(btn);

//         if(i==config.current){
//            btn.classList.add('active'); 
//         }
//     }


// }

// function calc_start_and_end() {//计算开始和结束
//     var start
//       , end
//       , middle = Math.ceil(config.range / 2)
//       , reaching_left = config.current <= middle
//       , reaching_right = config.current >= page_amount - middle
//     ;
  
//     if (reaching_left) {
//       start = 1;
//       end = config.range;
//     } else if (reaching_right) {
//       start = page_amount - (config.range - 1);
//       end = page_amount;
//     } else {
//       start = config.current - (middle - 1);//当前显示的位置减2
//       end = config.current + (middle - 1);//当前显示的位置加2
//     }
  
//     return {start: start, end: end};                                             
// }


// function calc_apge_amount(){//计算页数，就是总数除以每页显示的数
//     page_amount=Math.ceil(config.amount/config.limit);
// }


// function change_page(page){

//     var old=config.current;
//     config.current=page;//当前页等于传进来的page
//     if(page>page_amount)//页面大于页面总数就等于最后一页
//        config.current=page_amount;
//     if(page<1)//页面小于1当前页就等于1
//     config.current=1;

//     if(old==config.current)

//     return;

//     if(config.on_page_change){//通知使用者
//         config.on_page_change(config.current);
//     }

      

// }

// function show_pagination(){
//     el_pagination_fieldset.hidden=false;
// }

// function hide_pagination(){
//     el_pagination_fieldset.hidden=true;
// }

// function is_disabled(){
//     return el_pagination_fieldset.disabled;
// }

// module.exports=output;

var el_pagination
    ,config
    ,page_amount
    ,el_pagination_list
    ,el_pagination_fieldset
    
   ,default_config={
       limit:10,
       amount:null,
       range:5,
       current:1,
   }
   ,output={
       init:init,
       change_page:change_page,
       disable:disable,
       enable:enable,
       is_disabled:is_disabled,
       set_amount_and_limit:set_amount_and_limit,
       show_pagination:show_pagination,
       hide_pagination:hide_pagination,
   }
   function show_pagination(){
       el_pagination.hidden=false;
   }

   function hide_pagination(){
       el_pagination.hidden=true;
   }

   function init(user_config){
       el_pagination=document.querySelector(user_config.el);
       config=Object.assign({},default_config,user_config);
       calc_page_amount();
       change_page(config.current);
       render_init();
       render_list();

   }
   function calc_page_amount(){
       page_amount=Math.ceil(config.amount/config.limit);
   }

   function set_amount_and_limit(amount,limit){
       config.amount=amount;
       config.limit=limit;
       calc_page_amount();
       render_list();
   }
   function calc_start_and_end(){
       var start
          ,end
          ,middle=Math.ceil(config.range/2)
          ,reaching_left=config.current<middle
          ,reaching_right=config.current>page_amount-middle
          ;
        if(reaching_left){
            start=1;
            end=config.range;

        }else if(reaching_right){
            start=page_amount-(config.range-1);
            end=page_amount;

        }else{
            start=config.current-(middle-1);
            end=config.current+(middle-1);
        }
        return{start:start,end:end}
   }

   function render_init(){
       el_pagination.classList.add('pagination');
       el_pagination.innerHTML=`
    <fieldset class='pagination-fieldset'>

       <div class="pagination-pre">
        <button class="pagination-first">First</button>
        <button class="pagination-prev">Prev</button>
    </div>
    <div class="pagination-list"></div>
    <div class="pagination-post">
        <button class="pagination-next">Next</button>
        <button class="pagination-last">Last</button>
    </div>
     </fieldset>
       `;
       el_pagination_fieldset=el_pagination.querySelector('.pagination-fieldset');
       el_pagination_list=el_pagination.querySelector('.pagination-list');
       el_pagination.addEventListener('click',function(e){
        
           var target=e.target;
           var is_num_btn=target.classList.contains('pagination-item')
              ,first=target.classList.contains('pagination-first')
              ,prev=target.classList.contains('pagination-prev')
              ,next=target.classList.contains('pagination-next')
              ,last=target.classList.contains('pagination-last')
              ;
              if(is_num_btn){
                  var page=parseInt(target.dataset.page);
                  change_page(page);

              }else if(first){
                  change_page(1);
              }else if(prev){
                  change_page(config.current-1);
              }else if(last){
                  change_page(page_amount);
              }else if(next){
                  change_page(config.current+1);
              }else{

              }
              render_list();

             

       })
   }

   function render_list(){
    // var length=page_amount>config.range ? config.range : page_amount;
         el_pagination_list.innerHTML='';
         var between=calc_start_and_end();
         var start=between.start
             ,end=between.end
             ;
       for(var i=start;i<=end;i++){
           var btn=document.createElement('button');
           btn.classList.add('pagination-item');//数字按钮组加类
           btn.dataset.page=i;//给数字按钮设置data-page=i,冒泡的时候好选
            btn.innerHTML=i;
            el_pagination_list.appendChild(btn);
            if(i==config.current){
                btn.classList.add('active');
            }

           
       }
      
   }
   function change_page(page){
       var old=config.current;
       config.current=page;
       if(page<1){
           config.current=1;
       }
       if(page>page_amount){
           config.current=page_amount;
       }
       if(old==config.current){
           return;
       }
       if(config.on_page_change){
           config.on_page_change(config.current);
       }
   }
   

   function disable(){
       //el_pagination_fieldset.disabled=true;
       el_pagination_fieldset.disabled = true;
   }
   function enable(){
       el_pagination_fieldset.disabled=false;
   }
   function is_disabled(){
       return el_pagination_fieldset.disabled;
   }

   module.exports=output;