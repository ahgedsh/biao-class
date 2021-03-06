// var cat_selector=document.querySelector('#cat-select');

// var cat_ui=new CatUi({
//     on_item_click:function(cat_id){
//         task_ui.render(cat_id);

//     },
//     on_item_delete: function(cat_id){
//         task_ui._api.remove_by_cat(cat_id);
//         task_ui.render(1);
//     },
//     on_sync: function(change_list){
//         render_cat_option();
            

//     },
    

// });

// var task_ui = new TaskUi({
//     on_init: render_cat_option,
//     on_input_focus: show_cat_selector,
//     on_add_succeed: hide_cat_selector,

// });
// function show_cat_selector(){
//     cat_selector.hidden=false;

// }
// function hide_cat_selector(){
//     cat_selector.hidden=true;
// }

// function render_cat_option(){
//     var list=cat_ui._api.read();
        
//         if(!list)
//         return;
//         cat_selector.innerHTML='';
//         list.forEach(function(row){
//             var el=document.createElement('option');
//             el.value=row.id;
//             //console.log(el.value);
//             el.innerText=row.title;
//             cat_selector.appendChild(el);
//         });

// }

// cat_ui.init();
// task_ui.init();
;(function () {
  'use strict';
  /*yo*/

  var cat_select = document.getElementById('cat-select');

  var cat_ui = new CatUi({
    on_item_click  : render_task,
    on_item_delete : remove_task_by_cat,
    on_sync        : function (changed_list) {
      render_cat_option();
    },
  });

  var task_ui = new TaskUi({
    /*当任务初始化的时候同时执行这个函数*/
    on_init        : render_cat_option,
    on_input_focus : show_cat_select,
    on_input_blur  : function () {},
    on_add_succeed : hide_cat_select,
  });

  /**
   * 通过分类渲染任务
   * @param Number cat_id 分类id
   * */
  function render_task (cat_id) {
    task_ui.render(cat_id);
  }

  /**
   * 通过分类删除任务
   * @param Number cat_id 分类id
   * */
  function remove_task_by_cat (cat_id) {
    task_ui._api.remove_by_cat(cat_id);
    task_ui.render(1);
  }

  /**
   * 显示分类选项
   * */
  function show_cat_select () {
    cat_select.hidden = false;
  }

  /**
   * 隐藏分类选项
   * */
  function hide_cat_select () {
    cat_select.hidden = true;
  }

  /**
   * 渲染分类选项，不然添加任务的时候没法选分类
   * */
  function render_cat_option () {
    var list = cat_ui._api.read(); // 拿到分类数据

    cat_select.innerHTML = '';

    if (!list)
      return;

    // 循环数据并生成html
    list.forEach(function (row) {
      var el       = document.createElement('option');
      el.value     = row.id;
      el.innerText = row.title;
      cat_select.appendChild(el);
    });
  }

  cat_ui.init();
  task_ui.init();
})();
