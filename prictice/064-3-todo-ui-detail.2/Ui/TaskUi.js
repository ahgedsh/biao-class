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
   default_config= {
        form_seletor:'#todo-form',
        input_seletor:'#todo-input',
        list_selector:'#todo-list',
        on_init:null,
        on_input_focus:null,
        on_add_succeed:null,



    }


    var c=this.config=Object.assign({},default_config,config);
    this.form=document.querySelector(c.form_seletor);
    this.input=document.querySelector(c.input_seletor);
    this.list=document.querySelector(c.list_selector);
    this._api=new TaskApi(test_list);
    
   

}

TaskUi.prototype.init=init;
TaskUi.prototype.render=render;
TaskUi.prototype.detect_click_list=detect_click_list;
TaskUi.prototype.remove=remove;
TaskUi.prototype.detect_click_submit=detect_click_submit;
TaskUi.prototype.detect_input_focus=detect_input_focus;







function init(){
    if(this.config.on_init){
        this.config.on_init();
    }
    this.render();
    this.detect_click_list();
    this.detect_click_submit();
    this.detect_input_focus();
}

function detect_input_focus(){
    var me=this;
    this.input.addEventListener('focus',function(e){
        if(me.config.on_input_focus)
        me.config.on_input_focus();
    })
}


function detect_click_list(){
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target
           ,todo_item=target.closest('.todo-item')
           ,id=todo_item.dataset.id
           //console.log(id)
           , is_delete_btn=target.classList.contains('remove')
           ,is_update_btn=target.classList.contains('update');
        //    console.log(is_update_btn);
        //    console.log(is_delete_btn);


        if(is_delete_btn){
            me.remove(id);
            
        }else if(is_update_btn){
            var row=me._api.find(id);
            console.log(row);
          //  me.set_form_data(me.form,row);
           set_form_data(me.form,row);
           
        }

    })
}

function detect_click_submit(){
    var me=this;
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
        var row=get_form_data(me.form);
        console.log(row);
        
        console.log(row.id);
        if(row.id){
            me._api.update(row.id,row);
        }else{
            me._api.add(row);
        }
        me.input.value='';
        me.render(row.cat_id);
        if(me.config.on_add_succeed)
        me.config.on_add_succeed();

    })
}

function remove(id){
    this._api.remove(id);
    this.render();
}


function render(cat_id){
    var todo_list=cat_id ?
                  this._api.read_by_cat(cat_id) :
                  this._api.read();
    var me=this;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
   if(todo_list.length){
       this.list.innerHTML='';
   }else{
       this.list.innerHTML=`<div class='empty-holder'>暂无内容 </div>`
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
        <button class='update'>更新 </button>
        <button class='remove'> 删除</button>
        </div>
        
        `;
        me.list.appendChild(el);
    })

}
