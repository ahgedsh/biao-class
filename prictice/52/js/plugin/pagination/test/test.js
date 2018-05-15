var pagination=require('../pagination.js');

pagination.init({
    el:'#page',
    amount:100,
    limit:10,
     range:5,//可以看到的数量 max_btn_length
     current:-1,
     on_page_change:function(page,e){
         console.log(page);
         
     }

})
// setInterval(function(){
//  if(pagination.is_disabled())
//  pagination.enable();
//  else{
//      pagination.disable();
//  }
// },500);
