window.Ui=Ui;

function Ui(form_selector,list_selector,input_seletor){
    this.form=document.querySelector(form_selector);
    this.input=document.querySelector(input_seletor);
    this.list=document.querySelector(list_selector);
    this._api=new Api();
   
}

Ui.prototype.get_form_data=get_form_data;
Ui.prototype.set_form_data=set_form_data;
Ui.prototype.render=render;
Ui.prototype.init=init;
Ui.prototype.detect_add=detect_add;
Ui.prototype.remove=remove;
Ui.prototype.detect_click_list=detect_click_list;


function init(){
    this.render();
    this.detect_add();
   this.detect_click_list();
}

function detect_add(){
    var me=this;
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
        // me._api.add({
        //  title:me.input.value,
        //     e.preventDefault();

        // });
        var row=me.get_form_data(me.form);
        if(row.id){
            me._api.update(row.id,row);
        }else{
            me._api.add(row);
        }
        me.input.value='';
        me.render();
       
    })
}
function detect_click_list(){
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target;
        var is_remove_btn=target.classList.contains('remove');
        var is_updata_btn=target.classList.contains('updata');
        
        var todo_item=target.closest('.todo-item');
        var id=todo_item.dataset.id;
       
        if(is_remove_btn){
            me.remove(id);
        }else if(is_updata_btn){
            var row=me._api.read(id);
            console.log(row);
            set_form_data(me.form,row);
            

            
        }
    })

}
function update(id, new_row){

}

function remove(id){
    this._api.remove(id);
    this.render();
}
function render(){
    var todo_list=this._api.read();
    var me=this;
    this.list.innerHTML='';
    todo_list.forEach(function(item){
        var el=document.createElement('div');
        el.classList.add('row','todo-item');
        el.dataset.id=item.id;
        el.innerHTML=`
        
        <div class='col checkbox'>
        <input type='checkbox'>
        </div>
        <div class='col detail'>
        <div class='title'> ${item.title}</div>
        </div>
        <div class='col tool-set'>
        <button class='updata'>更新 </button>
        <button class='remove'> 删除</button>
        </div>
        
        `;
     //  console.log(item.name);
        me.list.appendChild(el);
    });
}

function get_form_data(form){
    var data={};
   //var form=document.querySelector(form_selector);
    var list=form.querySelectorAll('[name]');

    list.forEach(function(input){
        switch(input.nodeName){
            case'INPUT':
            switch(input.type){
                case'text':
                case 'search':
                case 'number':
                case 'password':
                case 'hidden':
                data[input.name]=input.value;
                break;
                case'radio': 
                case'checkbox':
                data[input.name]=input.checked;
                break;
            }
            break;
            case'TEXTARAE':
            data[input.name]=input.value;
            break;

        }
    });return data;
}

function set_form_data(form, data) {
    /*选中要插入数据的表单*/
   // var form = document.querySelector(form_selector);
  
    /*遍历数据对象*/
    for (var key in data) {
      /*缓存当前属性的值*/
      var value = data[key];
      /*找到当前属性在表单中对应的input*/
      var input = form.querySelector(`[name=${key}]`);
  
      if (!input)
        continue;
  
      /*获取当前属性的数据类型*/
      var data_type = typeof value;
  
      switch (data_type) {
        /*如果是字符串或者数字，就默认其为input[type=number|text|url|...]*/
        case 'string':
        case 'number':
          input.value = value;
          break;
        /*如果是布尔值，就默认其为input[type=radio|checkbox]*/
        case 'boolean':
          input.checked = value;
          break;
      }
    }
  }

