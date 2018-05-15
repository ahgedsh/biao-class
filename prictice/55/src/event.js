//监听事件的
var el=require('./element');

var search=require('./search');

function bind_all(){
  detect_submit();
  detect_click_top();
  detect_click_doctment();
  detect_click_input();
  init_plugins();
}
function detect_submit(){
  //绑定事件，
  el.form.addEventListener('click',function(e){
    el.input.value=keyword;
    


  })
  //把用户输入的词存为为关键词
  //判断没有怎么办
  //把关键词存入历史记录
  //清空用户列表
  //隐藏placeholer
  //搜索（传入搜索成功的函数
}
function on_search_succeed(data){
  //拿到搜索总数
  //拿到用户列表
  //计算页数
  //页面按钮显示
  //清空上次搜索结果的HTML
  //渲染页面

}
function detect_click_top(){
  //绑定事件
  //window.scrollTo(0,0);
}
function detect_click_input(){
  //显示历史记录
}
function detect_click_doctment(){
 // 给document事件绑定事件
 //冒泡的是删除或者搜索框就返回
 //其他就隐藏历史记录
}