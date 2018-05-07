
// function user(keyword, on_success, config) {
//   /*默认配置*/
//   var def = {
//     page: 1,
//     limit: 10,
//     keyword: 'yo',
//   };

//   /*合并用户配置*/
//   config = Object.assign({}, def, config);

//   var http = new XMLHttpRequest();
//   http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' + config.page + '&per_page=' + config.limit);
//   http.send();

//   http.addEventListener('load', function () {
//     var data = JSON.parse(this.responseText);
//     on_success(data)
//   });
// }

// module.exports = {
//   user: user
// }

function user(keyword,on_success,config){
  var def={
    limit:5,
    page:1,

  }
  config=Object.assign({},def,config);
  var http=new XMLHttpRequest();
  http.open('get','https://api.github.com/search/users?q=' + keyword + '&page=' + config.page + '&per_page=' +config.limit );
  http.send();

  http.addEventListener('load',function(){
    var data=JSON.parse(this.responseText);
        on_success(data);
  });

}
module.exports={
  user,
}