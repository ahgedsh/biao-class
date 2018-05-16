var pagination=require('../pagination.js');

pagination.init({
    el:'#page',
    amount:30,
    limit:10,
     range:5,//可以看到的数量 max_btn_length
     current:-2,
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
