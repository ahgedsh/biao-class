window.CatApi=CatApi;


function CatApi(list,max_id){
    list=list || [
        {
            id:1,
            title:'默认',
        },
        {
            id:2,
            title:'生活',
        },
        {
            id:3,
            title:'学习',
        },
    ];
    max_id=max_id || 3;
    BaseApi.call(this,list,max_id);
}

CatApi.prototype=Object.create(BaseApi.prototype);


CatApi.prototype.constructor=CatApi;
CatApi.prototype.add=add;
CatApi.prototype.remove=remove;
CatApi.prototype.update=update;
CatApi.prototype.read=read;
CatApi.prototype.find=find;


function add(row){
    if(!row.title)
        return;

    return this.$add(row);
}

function remove(id){
    return this.$remove(id);
}

function update(id,new_row){
    return  this.$update(id,new_row);
}

function find(id){
    return this.$find(id);
}

function read(){
    return this.$read();
}