var cat_select=document.getElementById('cat-select');
var task_ui=new TaskUi({
    on_init:function(){
       
        var list=cat_ui._api.read();
        list.forEach(function(row){
            var el=document.createElement('option');
            el.value=row.id;
            el.innerText=row.title;
            cat_select.appendChild(el);

        });
    },
    on_input_focus: function(){
        cat_select.hidden=false;
    },
    on_input_blur:function(){
    },
    on_add_succeed:function(){
        cat_select.hidden=true;

    }
});
var cat_ui=new CatUi({
    // on_item_click:function(cat_id){
    //     taskui.render(cat_id);
    // }

   on_item_click:function (cat_id){
       task_ui.render(cat_id);//一个接口，让taskUi里的render可以作用
   },
   on_item_delete: function (cat_id){
     task_ui._api.remove_by_cat(cat_id);
     task_ui.render(1);

   }
});
task_ui.init();
cat_ui.init();