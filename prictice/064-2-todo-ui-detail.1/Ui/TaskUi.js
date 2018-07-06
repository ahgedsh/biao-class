window.TaskUi=TaskUi;
test_list=[
    { // 0
        id        : 100,
        title     : '买菜',
        completed : false,
       cat_id  : 2,
      },
      { // 1
        id        : 101,
        title     : '洗菜',
        completed : false,
       cat_id  : 2,
      },
      {
        id        : 102,
        title     : '背单词',
        completed : false,
       cat_id  : 3,
      },
      {
          id :103,
          title:'跑步',
          completed:false,
          cat_id:1,

      }
]


function TaskUi(config){

    default_config={
        form_seletor:'#todo-form',
        input_seletor:'#todo-input',
        list_seletor:'#todo-list',
        on_init:null,
        on_input_focus:null,
        on_input_blur:null,
        on_add_succeed:null,
        
    }

    var c=this.config=Object.assign({},default_config,config);
    this.form=document.querySelector(c.form_seletor);
    this.input=document.querySelector(c.input_seletor);
    this.list=document.querySelector(c.list_seletor);
    
    this._api=new TaskApi(test_list);
    //console.log(this._api);
}

TaskUi.prototype.get_form_data=helper.get_form_data;
TaskUi.prototype.set_form_data=helper.set_form_data;
TaskUi.prototype.clear_form=helper.clear_form;
TaskUi.prototype.render=render;
TaskUi.prototype.init=init;
TaskUi.prototype.detect_add=detect_add;
TaskUi.prototype.detect_click_list=detect_click_list;
TaskUi.prototype.remove=remove;
TaskUi.prototype.clear_form=helper.clear_form;
TaskUi.prototype.detect_input_blur=detect_input_blur;
TaskUi.prototype.detect_input_focus=detect_input_focus;


function init(){
    var cb=this.config.on_init;
    this.render();
    this.detect_add();
    this.detect_click_list();
    this.detect_input_blur();
    this.detect_input_focus();
    if(cb)
        cb();
}

function detect_input_focus(){
    var me=this;
    this.input.addEventListener('focus',function(){

        var cb=me.config.on_input_focus;
        if(cb)
        cb();
    });
}

function detect_input_blur(){
    var me=this;
    this.input.addEventListener('blur',function(){
        var cb=me.config.on_input_blur;
        if(cb)
          cb();
    });
}

function detect_add(){
    var me=this;
    var cb=me.config.on_add_succeed;
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
       
        // me._api.add({
        //     title:me.input.value,
        //     completed:false,
        // });
        var row=get_form_data(me.form);
        //console.log(row);

        if(row.id){
            me._api.update(row.id,row);
        }else{
            me._api.add(row);
        }
        me.render();
        me.clear_form(me.form);
        if(cb)
        cb();
    })
}

function detect_click_list(){
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target;
        var is_remove_btn=target.classList.contains('remove');
        var is_updata_btn=target.classList.contains('updata');
        var todo_list=target.closest('.todo-item');
        console.log(todo_list);
        var id=todo_list.dataset.id;

        if(is_remove_btn){
            me.remove(id);

        }else if(is_updata_btn){
            var row=me._api.$find(id);
            set_form_data(me.form,row);
        }
        


    })

}

function remove(id){
    this._api.remove(id);
    this.render();
}
function render(cat_id){//TaskUi 只需要过滤，传进来的cat_id是几就渲染我们cat_id是几的数据
    var todo_list=cat_id ?
                 this._api.read_by_cat(cat_id) :
                 this._api.read();
    
    var me=this;

    if(todo_list.length){

        this.list.innerHTML='';
    }
    else{
        this.list.innerHTML=`<div class="empty-holder">暂无内容</div>`;
    }
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

        me.list.appendChild(el);

        
    })
    
}

