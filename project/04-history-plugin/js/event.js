
var el=require('./element');
var share=require('./share');
var search=require('./search');
var pagination=require('../plugin/pagination/pagination');
var history=require('../plugin/history/history');
function band_all(){
    detect_click_submit();
    init_plugin();
    detect_click_input();
 detect_click_document();
 detect_click_remove();


}
    



function detect_click_submit(){
   el.form.addEventListener('submit',function(e){
       e.preventDefault();
       var keyword=share.set_keyword(el.input.value);
       history.add(keyword);
       search.search(keyword);
       el.show_loading();
   })

}

function on_click_history(keyword){
    el.input.value=keyword;
    share.set_keyword(keyword);
    search.search(keyword);
    el.show_loading();
   
}

function on_click_delete(keyword){
    history.remove();
}

function detect_click_document(){
    document.documentElement.addEventListener('click',function(e){
        var target=e.target;
        var is_search_input=target.closest('#search-input');
        var is_delete=target.closest('.delete');
        if(is_delete || is_search_input)
        return;
        history.hide();
        el.hide_remove();

    })
}

function detect_click_input(){
    el.input.addEventListener('click',function(){
        history.show();
        el.show_remove();
    
      
    })
}

function detect_click_remove(){
    el.remove_all.addEventListener('click',function(){
        history.clear();
        
    })
}
function init_plugin(){
    history.init({
        el:'#history-list',
        remove:'#remove-all',
        on_click:on_click_history,
        on_delete:on_click_delete,
    });
    pagination.init({
        el:'#pagination',
        limit:share.get_limit(),
        amount:share.get_amount(),
        
        on_page_change:on_change_page,
    })
}
function on_change_page(page){
    if(page==share.get_current_page()){
        return;
    }
    share.set_current_page(page);
    search.search();

}

module.exports={
    band_all:band_all,
}