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



function TaskUi(config) {
     default_config = {
        form_selector: '#todo-form',
        input_selector: '#todo-input',
        list_selector: '#todo-list',
        incomplete_list_selector:'.incomplete',
        completed_list_selector :'.completed',
        on_init:null,
    }

var c=this.config=Object.assign({},default_config,config);

this.form=document.querySelector(c.form_selector);

this.input=document.querySelector(c.input_selector);

this.list=document.querySelector(c.list_selector);
this.incomplete_list=this.list.querySelector(c.incomplete_list_selector)
this.completed_list=this.list.querySelector(c.completed_list_selector)

this._api=new TaskApi(test_list);
//console.log(this._api);

}

TaskUi.prototype.init=init;
TaskUi.prototype.render=render;
TaskUi.prototype.remove=remove;
TaskUi.prototype.detect_form_submit=detect_form_submit;
TaskUi.prototype.detect_click_list=detect_click_list;
function init(){
    var cb=this.config.on_init;
    this.render();
    this.detect_form_submit();
    this.detect_click_list();
    if(cb)
    cb();
}
function render(cat_id){
    var me=this;
    var holder=`<div class="empty-holder">暂无内容</div>`;

    var todo_list=cat_id ?
                 this._api.read_by_cat(cat_id) :
                 this._api.read();

    this.incomplete_list.innerHTML=
    this.completed_list.innerHTML='';


    todo_list.forEach(function(item){
        var el=document.createElement('div');
        el.classList.add('row','todo-item');
        el.dataset.id=item.id;
        el.innerHTML=`
        
        <div class='col checkbox'>
        <input type='checkbox' class='checker' ${item.completed ? 'checked' : ''}>
        </div>
        <div class='col detail'>
        <div class='title'> ${item.title}</div>
        </div>
        <div class='col tool-set'>
        <button class='update'>更新 </button>
        <button class='remove'> 删除</button>
        </div>
        
        `;
       if(item.completed){
           me.completed_list.appendChild(el);
       }else{
           me.incomplete_list.appendChild(el);
       }
    });
    if(!this.incomplete_list.innerHTML){
        this.incomplete_list.innerHTML=holder;
    }
    if(!this.completed_list.innerHTML){
        this.completed_list.innerHTML=holder;
    }

}

function detect_form_submit(){//监听表单提交事件
    var me=this;
    
    this.form.addEventListener('submit',function(e){
        e.preventDefault();
        var row=get_form_data(me.form);
        console.log(row);
        if(row.id){
            me._api.update(row.id,row);
        }else{
            me._api.add(row);
        }
        me.input.value='';
        me.render();
       
    
    })

}

function detect_click_list(){//监听点击list事件
    var me=this;
    this.list.addEventListener('click',function(e){
        var target=e.target;
        var todo_item=target.closest('.todo-item');
        var id=todo_item.dataset.id;
        var is_update_btn=target.classList.contains('update');
        var is_checkbox=target.classList.contains('checker');
        var is_remove_btn=target.classList.contains('remove');
        

        if(is_remove_btn){
            
            me.remove(id);

        }else if(is_update_btn){
            
            //找到那一条
            var row=me._api.find(id);
            
            
            set_form_data(me.form,row);

            
        }else if(is_checkbox){
            me._api.set_completed(id,target.checked);
            me.render();
           
        }
    })

}

function remove(id){
    this._api.remove(id);
    this.render();
}