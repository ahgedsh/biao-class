window.CatUi=CatUi;



function CatUi(config){
    default_config={
        form_select:'#cat-form',
        list_select:'#cat-list',
        add_select:'#add-cat',
        on_item_click:null,
        on_item_delete:null,
    }
    var c=this.config=Object.assign({},default_config,config);
    this.form=document.querySelector(c.form_select);
    console.log(this.form);
    this.list=document.querySelector(c.list_select);
    console.log(this.list);
    this.add=document.querySelector(c.add_select);
    this._api=new CatApi();
    this.updating_cat_item=null;
   
}


CatUi.prototype.init=init;
CatUi.prototype.render=render;
CatUi.prototype.hide_cat_form=hide_cat_form;
CatUi.prototype.show_cat_form=show_cat_form;
CatUi.prototype.detect_click_add=detect_click_add;
CatUi.prototype.detect_click_form=detect_click_form;
CatUi.prototype.detect_submit_form=detect_submit_form;
CatUi.prototype.detect_click_list=detect_click_list;
CatUi.prototype.show_updating_cat_item=show_updating_cat_item;
CatUi.prototype.reset_cat_form_location=reset_cat_form_location;




function init(){
    this.render();
    this.detect_click_add();
    this.detect_click_form();
    this.detect_submit_form();
    this. detect_click_list();
}

function render(){
    var me=this;
    var cat_list=this._api.read();
    this.list.innerHTML='';
    me.show_updating_cat_item();
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

function detect_click_form(){
    var me=this;
    this.form.addEventListener('click',function(e){
        var target=e.target;
        var is_cancel_btn=target.dataset.action=='cancel';
        var is_
       // console.log(is_cancel_btn);
       if(is_cancel_btn){
           me.hide_cat_form();
           me.show_updating_cat_item();
           me.reset_cat_form_location();
       }
    })

}

function detect_submit_form(){
    var me=this;
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
         var row=get_form_data(me.form);
         if(!row.id){
             me._api.add(row);

         }else{
             me._api.update(row.id,row);
             me.hide_cat_form();
         }
        // clear_form(me.form);
        me.reset_cat_form_location();
         me.render();



    })
}

function detect_click_add(){
    var me=this;
    this.add.addEventListener('click',function(e){
        me.show_cat_form();
    })

}



function detect_click_list(){
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target;
        var is_delete_btn=target.classList.contains('delete');
        var is_update_btn=target.classList.contains('update');
        var cat_item=target.closest('.cat-item');
        if(cat_item){
            var id=cat_item.dataset.id;
            
        }
        if(is_delete_btn){
            me._api.remove(id);
            if(me.config.on_item_delete)
              me.config.on_item_delete(id);

            me.render();
            
        }else if(is_update_btn){
            me.show_cat_form();

            var row=me._api.find(id);
            set_form_data(me.form,row);
            cat_item.hidden=true;
            cat_item.insertAdjacentElement('afterend',me.form);
            // console.log(me.form);
            // console.log(cat_item);
            me.updating_cat_item=cat_item;
           
         }else{
             if(!id)
             return;
             if(me.config.on_item_click)
             me.config.on_item_click(id);
         }
        
    })
}


function reset_cat_form_location(){
    this.list.insertAdjacentElement('afterend',this.form);
    clear_form(this.form);
}
function show_updating_cat_item(){
    if(this.updating_cat_item)
    this.updating_cat_item.hidden=false;
}
function hide_cat_form(){
    this.form.hidden=true;
}

function show_cat_form(){
    this.form.hidden=false;
}