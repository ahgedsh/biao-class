window.CatUi=CatUi;



// function CatUi(config){
//     default_config={
//         form_select:'#cat-form',
//         list_select:'#cat-list',
//         add_select:'#add-cat',
//         on_item_click:null,
//         on_item_delete:null,
//     }
//     var c=this.config=Object.assign({},default_config,config);
//     this.form=document.querySelector(c.form_select);
//    // console.log(this.form);
//     this.list=document.querySelector(c.list_select);
//     //console.log(this.list);
//     this.add=document.querySelector(c.add_select);
//     this._api=new CatApi();
//     this.updating_cat_item=null;
//     this._api.on_sync=c.on_sync;

   
// }


// CatUi.prototype.init=init;
// CatUi.prototype.render=render;
// CatUi.prototype.hide_cat_form=hide_cat_form;
// CatUi.prototype.show_cat_form=show_cat_form;
// CatUi.prototype.detect_click_add=detect_click_add;
// CatUi.prototype.detect_click_form=detect_click_form;
// CatUi.prototype.detect_submit_form=detect_submit_form;
// CatUi.prototype.detect_click_list=detect_click_list;
// CatUi.prototype.show_updating_cat_item=show_updating_cat_item;
// CatUi.prototype.reset_cat_form_location=reset_cat_form_location;
// CatUi.prototype.detect_item_add_active=detect_item_add_active;
// CatUi.prototype.hide_add=hide_add;
// CatUi.prototype.show_add=show_add;




// function init(){
//     this.render();
//     this.detect_click_add();
//     this.detect_click_form();
//     this.detect_submit_form();
//     this. detect_click_list();
// }

// function render(){
//     var me=this;
//     var  holder = `<div class='empty-holder'>暂无分类 </div>`  

//     var cat_list=this._api.read();
//     console.log(cat_list);
//     if(cat_list.length){

//         this.list.innerHTML='';
//     }else{
//         this.list.innerHTML=holder;
//     }
//     me.show_updating_cat_item();

//     cat_list=cat_list || [];


//     cat_list.forEach(function(row){
//        var el=document.createElement('div');
//        el.classList.add('row','cat-item');
//        el.dataset.id=row.id;
//        el.innerHTML=`
//        <div class="title">
//            <div>${row.title}</div>
//        </div>
//        <div class="tool-set">
//        ${
//          row.id==1 ? '' :
//          '<span class="update">更新</span><span class="delete">删除</span>'
//        }
//        </div>
//        `;
//         me.list.appendChild(el);
//    })
// }

// function detect_click_form(){
//     var me=this;
//     this.form.addEventListener('click',function(e){
//         var target=e.target;
//         var is_cancel_btn=target.dataset.action=='cancel';
        
//        // console.log(is_cancel_btn);
//        if(is_cancel_btn){
//            me.hide_cat_form();
//            me.show_add();
//            me.show_updating_cat_item();
//            me.reset_cat_form_location();
//        }
//     })

// }

// function detect_submit_form(){
//     var me=this;
//     this.form.addEventListener('submit',function(e){
//         e.preventDefault();
//          var row=get_form_data(me.form);
//          if(!row.id){
//              me._api.add(row);

//          }else{
//              me._api.update(row.id,row);
//              me.hide_cat_form();
//              me.show_add();
//          }
//         // clear_form(me.form);
       
//         me.reset_cat_form_location();
//          me.render();



//     })
// }

// function detect_click_add(){
//     var me=this;
//     this.add.addEventListener('click',function(e){
//         me.show_cat_form();
//         me.hide_add();
//     })

// }



// function detect_click_list(){
//     var me=this;
//     this.list.addEventListener('click',function(e){
//         var target=e.target;
//         var is_delete_btn=target.classList.contains('delete');
//         var is_update_btn=target.classList.contains('update');
//         var cat_item=target.closest('.cat-item');
//         if(cat_item){
//             var id=cat_item.dataset.id;
            
            

//         }
//         if(is_delete_btn){
//             me._api.remove(id);
            
//             if(me.config.on_item_delete)
//               me.config.on_item_delete(id);

//             me.render();
            
//         }else if(is_update_btn){
//             me.show_cat_form();
//             me.hide_add();

//             var row=me._api.find(id);
//             set_form_data(me.form,row);
//             cat_item.hidden=true;
//             cat_item.insertAdjacentElement('afterend',me.form);
//             // console.log(me.form);
//             // console.log(cat_item);
//             me.updating_cat_item=cat_item;
           
//          }else{
//              if(!id)
//              return;
//              me.detect_item_add_active(id);
             
//              if(me.config.on_item_click)
//              me.config.on_item_click(id);
//          }
        
//     })
// }

// function detect_item_add_active(id){//当点击这一条就加样式
    
//     var cat_list=document.querySelectorAll('.cat-item');
//   //  console.log(cat_list);
//     cat_list.forEach(function(item){
//         if(item.dataset.id==id){
//             item.classList.add('active');
//         }else{
//             item.classList.remove('active');
//         }
//     })


// }

// function reset_cat_form_location(){
//     this.list.insertAdjacentElement('afterend',this.form);
//     clear_form(this.form);
// }
// function show_updating_cat_item(){ 
//     if(this.updating_cat_item)
//     this.updating_cat_item.hidden=false;
// }
// function hide_cat_form(){
//     this.form.hidden=true;
// }

// function show_cat_form(){
//     this.form.hidden=false;
// }

// function show_add(){
//     this.add.hidden=false;
// }

// function hide_add(){
//     this.add.hidden=true;
// }
function CatUi (config) {

    var default_config = {
      list_selector  : '#cat-list',
      add_selector   : '#add-cat',
      form_selector  : '#cat-form',
      on_item_click  : null,
      on_item_delete : null,
    }
  
    var c = this.config = Object.assign({}, default_config, config);
  
    this.list     = document.querySelector(c.list_selector);
    this.add_cat  = document.querySelector(c.add_selector)
    this.cat_form = document.querySelector(c.form_selector);
  
    this._api              = new CatApi();
  
    this.updating_cat_item = null; // 正在更新的那一条分组元素
    this._api.on_sync      = c.on_sync;
  }
  
  CatUi.prototype.render                  = render;
  CatUi.prototype.init                    = init;
  CatUi.prototype.detect_show_form        = detect_show_form;
  CatUi.prototype.detect_click_form       = detect_click_form;
  CatUi.prototype.detect_submit_form      = detect_submit_form;
  CatUi.prototype.detect_click_list       = detect_click_list;
  CatUi.prototype.show_cat_form           = show_cat_form;
  CatUi.prototype.hide_cat_form           = hide_cat_form;
  CatUi.prototype.hide_add_item           = hide_add_item;
  CatUi.prototype.show_add_item           = show_add_item;
  CatUi.prototype.show_updating_cat_item  = show_updating_cat_item;
  CatUi.prototype.reset_cat_form_location = reset_cat_form_location;
  CatUi.prototype.set_active_cat_item     = set_active_cat_item;
  CatUi.prototype.get_form_data           = helper.get_form_data;
  CatUi.prototype.set_form_data           = helper.set_form_data;
  CatUi.prototype.clear_form              = helper.clear_form;
  
  
  function init () {
    this.render();
    this.detect_show_form();
    this.detect_click_form();
    this.detect_submit_form();
    this.detect_click_list();
  }
  
  /**
   * 渲染分组列表
   * */
  function render () {
    /*先拿到分类列表数据*/
    var cat_list = this._api.read()
      , me       = this
      , holder   = `<div class="empty-holder">暂无分类</div>`;
    ;
    this.reset_cat_form_location();
    /*清空上次渲染*/
    if (cat_list.length)
      this.list.innerHTML = '';
    else
      this.list.innerHTML = holder;
    
    /*通过循环分类数据生成每一条分类元素*/
    cat_list = cat_list || [];
  
    cat_list.forEach(function (row) {
      var el = document.createElement('div'); // 创建元素
      el.classList.add('cat-item', 'row'); // 加类
      el.dataset.id = row.id; // 将id存到元素上，方便后面调用
      el.innerHTML  = `
      <div class="title">
          <div>${row.title}<div>
      </div>
      <div class="tool-set">
        ${
        row.id == 1 ?
        '' :
        '<span class="update">更新</span><span class="delete">删除</span>'
        }
      </div>
      `;
  
      me.list.appendChild(el); // 追加子元素
    });
  }
  
  /*当添加分类按钮被点击时做什么*/
  function detect_show_form () {
    var me = this;
    this.add_cat.addEventListener('click', function () {
      /*显示分类表单，不然用户没地方写分类信息*/
      me.show_cat_form();
    });
  }
  
  /*当分类表单被点击时做什么*/
  function detect_click_form () {
    var me = this;
    this.cat_form.addEventListener('click', function (e) {
      var is_cancel_btn = e.target.dataset.action == 'cancel' // 是否为取消按钮
      ;
      if (is_cancel_btn) {
        /*如果是取消按钮就隐藏表单*/
        me.hide_cat_form();
        me.show_updating_cat_item();
        me.reset_cat_form_location();
      }
    });
  }
  
  /*当表单被提交时做什么*/
  function detect_submit_form () {
    var me = this;
    this.cat_form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      var row = me.get_form_data(me.cat_form); // 拿到表单中的数据
  
      /*如果有id，说明这一行已经存在，是更新*/
      if (row.id) {
        me._api.update(row.id, row); // 调用api更新一行数据
        me.hide_cat_form(); // 更新完毕后隐藏表单
      } else {
        me._api.add(row); // 调用api添加一行数据
      }
  
      me.clear_form(me.cat_form); // 添加完毕，清除表单
      me.render();
    });
  }
  
  function reset_cat_form_location () {
    this.list.insertAdjacentElement('afterend', this.cat_form);
    this.clear_form(this.cat_form); // 清空表单
  }
  
  /*当列表被点击时应该做什么*/
  function detect_click_list () {
    var me = this;
    this.list.addEventListener('click', function (e) {
      var target        = e.target // 拿到事件源
        , cat_item      = target.closest('.cat-item')
        , is_delete_btn = target.classList.contains('delete') // 是不是删除按钮
        , is_update_btn = target.classList.contains('update') // 是不是删除按钮
      ;
  
      if (cat_item)
        var id = parseInt(cat_item.dataset.id); // 拿到所在行的id
  
      if (is_delete_btn) { // 如果点击的是删除按钮
        if (!confirm('确定要删除此分组和其相对应的任务吗？'))
          return;
  
        me._api.remove(id); // 删除对应的那一行数据
        if (me.config.on_item_delete)
          me.config.on_item_delete(id);
        me.render(); // 重新渲染
      } else if (is_update_btn) { // 如果点击的是更新按钮
        /*如果以前更新过，就先显示以前更新过的元素，否则，更新一条就隐藏一条，最后一条都不剩了（虽然数据是对的）*/
        if (me.updating_cat_item)
          me.updating_cat_item.hidden = false;
  
        me.show_cat_form(); // 显示表单
        var row = me._api.$find(id); // 拿到点击的分组对应的数据
        me.set_form_data(me.cat_form, row); // 给表单填充数据
  
        cat_item.hidden = true; // 隐藏当前分组，因为就一个坑，要留给表单
        cat_item.insertAdjacentElement('afterend', me.cat_form); // 表单占坑
        me.updating_cat_item = cat_item; // 覆盖
      } else {
        if (!id)
          return;
  
        me.set_active_cat_item(id);
  
        if (me.config.on_item_click)
          me.config.on_item_click(id);
      }
    });
  }
  
  function set_active_cat_item (id) {
    var cat_list = this.list.querySelectorAll('.cat-item');
    cat_list.forEach(function (item) {
      if (item.dataset.id == id)
        item.classList.add('active');
      else
        item.classList.remove('active');
    })
  }
  
  /*显示表单*/
  function show_cat_form () {
    this.cat_form.hidden = false;
    this.hide_add_item(); // 因为表单已经显示了就不应该显示添加按钮了
  }
  
  /*隐藏表单*/
  function hide_cat_form () {
    this.cat_form.hidden = true;
    this.show_add_item(); // 表单隐藏了就应该显示添加按钮
  }
  
  function show_add_item () {
    this.add_cat.hidden = false;
  }
  
  function hide_add_item () {
    this.add_cat.hidden = true;
  }
  
  
  /**
   * 显示正在更新的那一条分组
   * 比如说用户提交了更新表单或取消更新的时候就应该隐藏表单，
   * 同时显示正在更新的那一条分组，这个方法就是用来恢复显示分组的
   * */
  function show_updating_cat_item () {
    if (this.updating_cat_item)
      this.updating_cat_item.hidden = false;
  }
  