window.CatUi=CatUi;

function CatUi(config){

    default_config={
        form_selector:"#cat-form",
        list_selector:'#cat-list',
        add_selector:'#add-cat',
        on_item_click:null,
        on_item_dielte:null,



    }
    var c=this.config=Object.assign({},default_config,config);
    this.form=document.querySelector(c.form_selector);
    
    this.add=document.querySelector(c.add_selector);
    this.list=document.querySelector(c.list_selector);
    this.update_cat_item=null;
    this._api=new CatApi();
}

CatUi.prototype.init=init;
CatUi.prototype.render=render;
CatUi.prototype.detect_click_add=detect_click_add;
CatUi.prototype.show_cat_form=show_cat_form;
CatUi.prototype.hide_cat_form=hide_cat_form;
CatUi.prototype.detect_click_list=detect_click_list;
CatUi.prototype.detect_click_form=detect_click_form;
CatUi.prototype.detect_submit_form=detect_submit_form;
CatUi.prototype.show_cat_add=show_cat_add;
CatUi.prototype.hide_cat_add=hide_cat_add;
CatUi.prototype.show_updating_cat_item=show_updating_cat_item;
CatUi.prototype.reset_cat_form_location=reset_cat_form_location;
CatUi.prototype.clear_form=helper.clear_form;
CatUi.prototype.get_form_data=helper.get_form_data;
CatUi.prototype.set_form_data=helper.set_form_data;



function init(){
    this.render();
    this.detect_click_add();
    this.detect_click_list();
    this.detect_click_form();
    this.detect_submit_form();
}

function render(){
    var me=this;
    var cat_list=this._api.read();

    this.list.innerHTML='';
    me.reset_cat_form_location();
    cat_list.forEach(function(row){
        var el=document.createElement('div');
        el.classList.add('row','cat-item');
        el.dataset.id=row.id;
        el.innerHTML=`
        <div class="title">
            <div>${row.title}</div>
        </div>
        <div class="tool-set">
        ${
          row.id==1 ? '' :
          '<span class="update">更新</span><span class="delete">删除</span>'
        }
        </div>
        `;
        me.list.appendChild(el);
    })

}

function detect_click_add(){
    var me=this;
    this.add.addEventListener('click',function(){
        me.show_cat_form();
        me.hide_cat_add();

    })

}

function detect_click_list(){
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target;
        var cat_item=target.closest('.cat-item');
        if(cat_item){
            var id=cat_item.dataset.id;
        }
        var is_update_btn=target.classList.contains('update');
        var is_delete_btn=target.classList.contains('delete');

        if(is_update_btn){
            
            me.show_updating_cat_item();
            me.show_cat_form();
            me.hide_cat_add();
            cat_item.hidden=true;
            cat_item.insertAdjacentElement('afterend',me.form);
            var row=me._api.find(id);
            me.set_form_data(me.form,row);
            me.update_cat_item=cat_item;
        }else if(is_delete_btn){
            me._api.remove(id);
            me.render();
        }
    })
}

function detect_click_form(){//点击cat-form 的取消按钮
    var me=this;
    this.form.addEventListener('click',function(e){
        var is_cancel_btn=e.target.dataset.action=='cancel';
        if(is_cancel_btn){
            me.hide_cat_form();
            me.show_cat_add();
            me.show_updating_cat_item();
            me.reset_cat_form_location();
        }
    })
   
}

function reset_cat_form_location(){
    this.list.insertAdjacentElement('afterend',this.form);
    this.clear_form(this.form);

}

function show_updating_cat_item(){
    if(this.update_cat_item){
        this.update_cat_item.hidden=false;
    }
}

function detect_submit_form(){//点击提交事件
    var me=this;
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
        var row=get_form_data(me.form);
        if(row.id){
            me._api.update(row.id,row);
            me.hide_cat_form();
            me.show_cat_add();
        }else{
            me._api.add(row);
        }
        me.render();
        clear_form(me.form);
        
    })
}

function show_cat_form(){
    this.form.hidden=false;
}

function hide_cat_form(){
    this.form.hidden=true;
}

function show_cat_add(){
    this.add.hidden=false;
}

function hide_cat_add(){
    this.add.hidden=true;
}