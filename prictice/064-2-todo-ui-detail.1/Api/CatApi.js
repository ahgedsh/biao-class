window.CatApi=CatApi;

function CatApi(list,max_id){
    this.config={
        title:{
            max_length:10,
        }
    },

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
    //继承显性属性
    BaseApi.call(this,list,max_id);
}
//继承隐性属性
CatApi.prototype=Object.create(BaseApi.prototype);
CatApi.prototype.constructor=CatApi;



CatApi.prototype.add=add;
CatApi.prototype.remove=remove;
CatApi.prototype.updata=updata;
CatApi.prototype.read=read;


function add(row) {
    if (!row.title)
      return;
  
    var max_length = this.config.title.max_length;
  
    if (row.title.length > max_length)
      throw `title should not greater than ${max_length}`;
  
    return this.$add(row);
  }
function remove(id){
    if(id ==1){
        return;
    }
    return this.$remove(id);
}

function updata(id,new_row){
    return this.$updata(id,new_row);
}


function read() {
    return this.$read();
  }

