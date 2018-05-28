window.CatApi=CatApi;


function CatApi(max_id,list){
    max_id=max_id || 3;
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
    BaseApi.call(this,max_id,list)
}
CatApi.prototype=Object.create(BaseApi.prototype);
CatApi.prototype.constructor=CatApi;


CatApi.prototype.add=add;
CatApi.prototype.remove=remove;
CatApi.prototype.find=find;
CatApi.prototype.update=update;
CatApi.prototype.read=read;


function add(row){
    if(!row.title)
    return;

    return this.$add(row);
}

function remove(id){
    if(id==1)
    return;
    return this.$remove(id);
}


function find(id){
    return this.$find(id);
}

function update(id,new_row){
    return this.$update(id,new_row);
}

function read(){
    return this.$read();
}
