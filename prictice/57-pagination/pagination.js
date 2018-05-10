function init(config){
    el_pagination=document.querySelector(config.el_pagination);
}




var current_page=1
   ,max_btn_length=5
   ,page_amount=15
   ;

function render(){
    el_pagination.innerHTML='';
    var middle=Math.ceil(max_btn_length/2)
      ,renaching_left=current_page<=middle
      ,renaching_right=current_page>=page_amount-middle
      ,start
      ,end
      ;

      if(renaching_left){
          start=1;
           end=max_btn_length;
          
      }else if(renaching_right){
          start=page_amount-(max_btn_length-1);
          end=page_amount;
      }else{
          start=current_page-(middle-1);
          end=current_page+(middle-1);
      }

      
      for(var i=start;i<=end;i++){
         var btn=document.createElement('button');
          btn.innerText=i;
          btn.dataset.page=i;
          if(i==current_page){

             btn.style.background='pink';
               }
               el_pagination.appendChild(btn);
               btn.addEventListener('click',function(e){
                   current_page=parseInt(e.currentTarget.dataset.page);
                   render();
   
               })
            }
        }

// //测试
  init({
     el_pagination:'#el-pagination',
 })


render();
module.exports={
    render:render,
}