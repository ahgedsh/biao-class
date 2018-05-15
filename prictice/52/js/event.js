var el=require('./element');
var search=require('./search');
var share=require('./share');
var history=require('./plugin/history/history');
var pagination=require('./plugin/pagination/pagination');
var keyword;

function bind_all(){
  detect_click_submit();
  init_plugin();
  detect_click_input();
  detect_click_document();
  detect_click_top();
  detect_click_remove_all();


}

function  detect_click_submit(){//点击提交事件
  el.form.addEventListener('submit',function(e){
    e.preventDefault();
   keyword=share.set_keyword(el.input.value);
   history.add(keyword);
   //el.show_loading();
    
    search.search(keyword);
   
    
    
    el.render();
    //el.hide_loading();
    pagination.show_pagination();
   
    
    
  })
}

function detect_click_top(){
  el.top.addEventListener('click',function(){
    window.scrollTo(0,0);
  })
}

function detect_click_input(){//点击input历史记录隐藏
  el.input.addEventListener('click',function(){
   history.show();
   
   
   el.show_remove_all();
   
   
    
  })
}
function init_plugin(){//组件接口
  history.init({
   el:'#history-list',
   on_click:on_history_click,
   on_delete:on_history_delete,
  });
  pagination.init({
    
    el:'#pagination',
    limit:share.get_limit(),
    amount:share.get_amount(),
    on_page_change: function (page) {
      share.set_current_page(page);
      search.search();
     
       
    }
  })

}

function on_history_click(keyword){//点击历史记录
  el.input.value = keyword;//上屏
  share.set_keyword(keyword);
  search.search(keyword);
 
  history.hide();
  pagination.show_pagination();
  el.hide_remove_all();

}
function on_history_delete(){//点击删除
  history.remove();
}

function detect_click_document(){//除了input和delete点击其他地方历史记录要隐藏
  document.documentElement.addEventListener('click',function(e){
   var target=e.target;
   var is_delete=target.closest('.delete');
   var is_search_input=target.closest('#search-input');
   if(is_delete || is_search_input)
   return;
   history.hide();
   el.hide_remove_all();
     
   
  })
}
function detect_click_remove_all(){
  el.remove.addEventListener('click',function(){
    history.clear();
    el.hide_remove_all();
  })
}
module.exports={
  bind_all:bind_all,
  
}