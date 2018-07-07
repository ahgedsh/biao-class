var cat_selector=document.getElementById('cat-select');

var taskui=new TaskUi({
    on_init:render_cat_option,

});
var catui=new CatUi({
    on_item_click:render_task,
    on_item_delete:remove_task_by_cat,



}

);


function render_cat_option(){
    console.log(1);
    var list=catui._api.read();
    console.log(list);
    cat_selector.innerHTML='';
    list.forEach(function(row) {
        var el=document.createElement('option');
         el.value=row.id;
         el.innerText=row.title;
         cat_selector.appendChild(el);
        
    });

}
function render_task(cat_id){
    taskui._api.render(cat_id);

}

function remove_task_by_cat(cat_id){

}

catui.init();
taskui.init();