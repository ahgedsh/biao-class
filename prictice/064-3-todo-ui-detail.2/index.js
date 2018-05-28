var cat_selector=document.querySelector('#cat-select');


var task_ui=new TaskUi({
    on_init: function (){
        var list=cat_ui._api.read();
        list.forEach(function(row){
            var el=document.createElement('option');
            el.value=row.id;
            el.innerText=row.title;
            cat_selector.appendChild(el);
        });
    },
    on_input_focus: function(){
        cat_selector.hidden=false;

    },
    on_add_succeed: function(){
        cat_selector.hidden=true;
    }
});
var cat_ui=new CatUi({
    on_item_click:function(cat_id){
        task_ui.render(cat_id);

    },
    on_item_delete: function(cat_id){
        task_ui._api.remove_by_cat(cat_id);
        task_ui.render(1);
    }
});
cat_ui.init();
task_ui.init();
