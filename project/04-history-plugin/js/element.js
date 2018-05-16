
var share=require('./share');
 var   form=document.getElementById('search-form')
    ,input=document.getElementById('search-input')
    ,user_list=document.getElementById('user-list')
    ,amount=document.getElementById('amount')
    ,remove_all=document.getElementById('remove-all')
    ,loading=document.getElementById('loading')
   
    ,output={
        form:form,
        input:input,
        user_list:user_list,
        remove_all:remove_all,
        render,
        show_remove,
        hide_remove,
        show_loading,
        hide_loading,
    }
    ;
    function show_remove(){
        remove_all.hidden=false;
    }

    function hide_remove(){
        remove_all.hidden=true;
    }

    function show_loading(){
        loading.hidden=false;
    }
    function hide_loading(){
        loading.hidden=true;
    }
    function render(data){
        var html='';
      
        data.items.forEach(function(user){
            html = html + `
                <div class="user">
                    <a class="avatar" target="_blank" href="${user.html_url}">
                    <img src="${user.avatar_url}">
                    </a>
                    <div class="info">
                    <div class="username">${user.login}</div>
                    <div class='user-url'><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
                    </div>
                </div>
                    `;
                    user_list.innerHTML=html;
                    amount.innerHTML=`共有${share.get_amount()}条结果。`


        });


    }


module.exports=output;