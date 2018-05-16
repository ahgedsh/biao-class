
var share=require('./share');
var el=require('./element');
var pagination=require('../plugin/pagination/pagination');

var limit=10;
var current_page=1; 
function search(keyword){
    var http=new XMLHttpRequest();
    http.open('get','https://api.github.com/search/users?q='+ share.get_keyword()+'&page=' + share.get_current_page() + '&per_page=' + share.get_limit());
    http.send();

    http.addEventListener('load',function(){
        var data=JSON.parse(this.responseText);
       amount=share.set_amount(data.total_count);
        // console.log(amount);
        // console.log(data);
      
        el.render(data);
        el.hide_loading();
      
        pagination.show_pagination();
      
    })
}
module.exports={
    search:search,
   
}