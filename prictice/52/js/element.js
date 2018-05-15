
 var share=require('./share');
var form=document.getElementById('search-form')
   ,input=document.getElementById('search-input')
   ,amount=document.getElementById('amount')
   ,user_list=document.getElementById('user-list')
   ,loading=document.getElementById('loading')
   ,top=document.getElementById('top')
   ,remove=document.getElementById('remove-all')
   
   


  ;

   function render(data){
     var html='';
     var down='';
     var list = share.get_user_list();
    data.items.forEach(function(user){
      console.log(data);
      console.log(data.items);
      
      html = html + `<div class='user'>
      <img class='avatar' src='${user.avatar_url}'>
      
      <div class='info'>
      <div class='username'>${user.login}</div>
      <div><a href="${user.url}">${user.url}</a></div>
      </div>
      </div>`;
      down = `<div>共有${data.total_count}条结果</div>`;
 
      user_list.innerHTML=html;
      amount.innerHTML=down;


});
    
   }
function reset_user_list(){
  user_list.innerHTML='';
}
function show_remove_all(){
  remove.hidden=false;

}
function hide_remove_all(){
  remove.hidden=true;
}


function show_loading(){
loading.hidden=false;
 
}
function hide_loading(){
  loading.hidden=true;
}

module.exports={
  form:form,
  input:input,
  top:top,
  loading:loading,
  render:render,
  remove:remove,
  show_loading:show_loading,
  hide_loading:hide_loading,
  reset_user_list:reset_user_list,
  show_remove_all:show_remove_all,
  hide_remove_all: hide_remove_all,
}