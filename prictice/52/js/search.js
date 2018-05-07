function user(keyword,on_success,config){
    var def={
        page:1,
        limit:10,
        keyword:'yo',
    }
    config=Object.assign({},def,config);
    
    
    var http=new XMLHttpRequest();
    http.open('get','https://api.github.com/search/users?q=' + keyword + '&page=' + config.page + '&per_page=' + config.limit);
    http.send();

    http.addEventListener('click',function(){
        var data=JSON.parse(this.responseText);
        on_success(data)
    });
}
module.exports={
    user:user,
}