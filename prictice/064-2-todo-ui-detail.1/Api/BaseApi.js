window.BaseApi=BaseApi;

function BaseApi(list,max_id){
    this.max_id=max_id || 1;
     this.list=list;
    }
    

BaseApi.prototype.$add=add;
BaseApi.prototype.$remove=remove;
BaseApi.prototype.$updata=updata;
BaseApi.prototype.$read=read;
BaseApi.prototype.$find=find;


function add(row){
  this.max_id=this.max_id+1;
  row.id=this.max_id;
  this.list.unshift(row);
}

function remove(id){
  var index=find_id_by_index(this.list,id);
  if(index<0){
    return;
  }
  this.list.splice(index,1);
}

function updata(id,new_row){
  var index=find_id_by_index(this.list,id);
  if(index<0){
    return;
  }
  var old_row=this.list[index];
  this.list[index]=Object.assign({},old_row,new_row);
}

//通过id找一行数据
function read(){
  return this.list;

}

function find(id){
  return find_by_id(this.list,id);
}

function find_id_by_index(arr,id){
  return arr.findIndex(function(row){
    return row.id==id;

  });
}

function find_by_id(arr,id){
  return arr.find(function(row){
    return row.id==id;
  })
}