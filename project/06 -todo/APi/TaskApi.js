window.TaskApi=TaskApi;


function TaskApi(list,max_id){
    list=list||[];
    max_id=max_id || 1;
    BaseApi.call(this,list,max_id);

}


TaskApi.prototype=Object.create(BaseApi.prototype);
TaskApi.prototype.constructor=TaskApi;
TaskApi.prototype.add=add;
TaskApi.prototype.remove=remove;
TaskApi.prototype.update=update;
TaskApi.prototype.read=read;
TaskApi.prototype.find=find;
TaskApi.prototype.read_by_cat=read_by_cat;
TaskApi.prototype.remove_by_cat=remove_by_cat;
TaskApi.prototype.set_completed=set_completed;

function set_completed(id,completed){
    var row=this.$find(id);
    if(!row)
    return false;
    row.completed=completed;
}

function read_by_cat(cat_id){
    return this.read().filter(function(row){
        return row.cat_id==cat_id;

    })
}

function remove_by_cat(cat_id){
    this.list=this.list.filter(function(row){
        return row.cat_id !=cat_id;//留下cat_id不等于被删的cat_id，就是留下没被删的
    })
}



function add(row){
    if(!row.title)
    return;
    return this.$add(row);
}

function remove(id){
    return this.$remove(id);
}

function update(id,new_row){
    return this.$update(id,new_row);
}

function read(){
    return this.$read();
}

function find(id){
    return this.$find(id);
}