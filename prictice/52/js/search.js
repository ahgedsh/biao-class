// var el=require('./element') 
//    ,share=require('./share')
//    ,pagination=require('./plugin/pagination/pagination')
//    ,send=require('./util/send');

   function set_keyword(kwd){
       el.input.value=kwd;
       share.set_keyword(kwd);
   }

  
  var share=require('./share');
  var pagination=require('./plugin/pagination/pagination');
  var el=require('./element');
  var limit=10;
  var current_page;
  
 

  function search(keyword) {
    
    var http = new XMLHttpRequest();
    http.open('get', 'https://api.github.com/search/users?q=' + keyword +'&page=' + share.get_current_page() + '&per_page=' + share.get_limit());
    http.send();
    http.addEventListener('load', function () {
       var data = JSON.parse(this.responseText);
       el.render(data);
      

      
    })
  }
 
        
  module.exports = {
   
    search: search,
    set_keyword: set_keyword,
  
    
  }