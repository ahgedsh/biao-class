// var history=require('./history');


// history.init({
//     el:'#history-list',
//     on_click:function(keyword,e){
//         console.log(keyword);
//     },
//     on_delete:function(keyword,e){
//         e.stopPropagation();
//         console.log(keyword);

//     },
// });
// //  history.add('yo6');
// //  history.add('yo1');
// //  history.add('yo2');
// // //  history.remove('yo6');
// // // history.clear();

var history=require('./history');
history.init({
    el:'#history-list',
    on_click:function(){
        console.log(keyword);
    },
    on_delete:function (){
        console.log(keyword);
    }


})
