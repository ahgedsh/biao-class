

      //   var form = document.getElementById('search-form')
      //   , input = document.getElementById('search-input')
      //   , next = document.getElementById('next')
      //   , user_list = document.getElementById('user-list')
      // ;
      
      // /*渲染用户列表
      // * @param Array data 用于渲染的数据
      // * */
      // function render_user_list(data) {
      //   var html = user_list.innerHTML;
      
      //   data.forEach(function (user) {
      //     html = html + `
      //   <div class="user">
      //     <a class="avatar" target="_blank" href="${user.html_url}">
      //       <img src="${user.avatar_url}">
      //     </a>
      //     <div class="info">
      //       <div class="username">${user.login}</div>
      //       <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
      //     </div>
      //   </div>
      //     `;
      
      //     user_list.innerHTML = html;
      //   });
      // }
      
      // function hide_next() {
      //   next.hidden = true;
      // }
      
      // function show_next() {
      //   next.hidden = true;
      // }
      
      // module.exports = {
      //   form: form,
      //   input: input,
      //   next: next,
      //   show_next: show_next,
      //   hide_next: hide_next,
      //   render_user_list: render_user_list,
      // }

      var share=require('./share');
      
      var form=document.getElementById('search-form');
      var input=document.getElementById('search-input');
      var user_list=document.getElementById('user-list');
      var next=document.getElementById('next');
      var top=document.getElementById('top');
      var placeholer=document.getElementById('placeholer');
      var number=document.getElementById('number');
      
      var amount;
      


      function render_user_list(data){
        var html=user_list.innerHTML;
        var num='';
        data.items.forEach(function (user){
          html= html + `
            <div class="user">
              <a class="avatar" target="_blank" href="${user.html_url}">
                <img src="${user.avatar_url}">
              </a>
              <div class="info">
                <div class="username">${user.login}</div>
                <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
              </div>
            </div>
              `
              num=`总共有${data.total_count}条结果`;
              user_list.innerHTML=html; 
              number.innerHTML=num;         
          
        });
        
        //加载更多这个按钮就隐藏
        if(share.get_current_page()*share.get_limit()>=share.get_amount()){
            next.hidden=true;
            placeholer.hidden=false;

        }else{
          next.hidden=false;
          placeholer.hidden=true;
        }

   }
      

      module.exports={
        form,
        input,
        user_list,
        next,
        render_user_list,
        top,
        placeholer,
        amount,
  
      }