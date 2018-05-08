var store=require('./store');
var search=require('./search');
var el_list=document.getElementById('history-list');
var util=require('./util');
var list;

function reload_list(){
    list=store.get('list')||[];
    
}

function overwrite_list(data){
    store.set('list',data);
}
function render_history_list(){
    el_list.innerHTML='';
    list.forEach(function(history){
        var el_delete
           ,el_history=document.createElement('div');
           el_history.classList.add('history');
           el_history.dataset.history=history;
           el_history.innerHTML=`
           <div class="text">${history}</div>
           <div class="tool">
             <span class="delete">删除</span>
           </div>`;
           el_delete=document.querySelector('.delete');
           el_list.appendChild(el_history);
           el_history.addEventListener('click',function(e){
               if(e.target.classList.contains('delete'))
                 return;
                 search.set_keyword(this.dataset.history);
                 search.user();


           });
           el_delete.addEventListener('click',on_delete_click)
           
    });

}
function on_delete_click(){
    var el_history=this.closete('.history')
       ,kwd=el_history.dataset.history;

       if(!util.find_and_delete(list,kwd))
       return;
       overwrite_list(list);
       setTimeout(function(){
           render_history_list();
       },100);
       if(!list.length){
        el_list.hidden=true;
    }
}
function show_list(){
    if(!list.length)
    return;
    el_list.hidden=false;
}

function hide_list(){
    el_list.hidden=true;
}

function append(kwd){
    console.log(kwd);
    util.find_and_delete(list,kwd);
    list.unshift(kwd);
    overwrite_list(list);
}

module.exports={
    reload_list,
    overwrite_list,
    render_history_list,
    append,
    hide_list,
    show_list,
    on_delete_click,


}
