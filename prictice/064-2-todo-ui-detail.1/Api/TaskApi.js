window.TaskApi=TaskApi;

function TaskApi(list,max_id){
  list==list || [];
  max_id=max_id || 1;
   BaseApi.call(this,list,max_id);
}

TaskApi.prototype=Object.create(BaseApi.prototype);
TaskApi.prototype.constructor=TaskApi;
TaskApi.prototype.add=add;
TaskApi.prototype.remove=remove;
TaskApi.prototype.update=update;
TaskApi.prototype.read=read;
TaskApi.prototype.read_by_cat=read_by_cat;
TaskApi.prototype.remove_by_cat=remove_by_cat;

function add(row){
  if(!row.title)
  return;

  if(!row.cat_id){
    row.cat_id=1;
  }

  row.cat_id=parseInt(row.cat_id);
  //console.log(row.cat_id);

 return  this.$add(row);
}


function remove(id){
  return this.$remove(id);
}

function update(id,new_row){
  return this.$updata(id,new_row);
}

function read(){
  return this.$read();
}

function read_by_cat(cat_id){
  return this.read().filter(function(row){
    return row.cat_id==cat_id;
  })
}

function remove_by_cat(cat_id){
  var me=this;
  var list=me.list=me.list.filter(function(row){
    return row.cat_id!=cat_id;//保留的是没被选中的
    
  });
  console.log(list);
}


