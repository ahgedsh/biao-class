var history=require('./history');


// history.init({
//     el:'#history-list',
//     on_click:function(keyword,e){
//         console.log(keyword);
//     },
//     on_delete:function(keyword,e){
      
//         console.log(keyword);

//     },
// });
  
// // //  history.remove('yo6');
// // // history.clear();

var history=require('./history');
history.init({
    el:'#history-list',
    on_click:function(keyword){
        console.log(keyword);
    },
    on_delete:function (keyword){
        console.log(keyword);
    }
})
history.add('eso');
history.add('uo');

