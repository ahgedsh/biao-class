var keyword
   ,current_page
   ,amount
   ,limit=5
   ;

 function get_current_page(){
     return current_page;
 }
 function  set_current_page(val){
     current_page=val;
     return current_page;

 }
 function get_limit(){
     return limit;
 }

 function set_limit(val){
     limit=val;
     return limit;
 }
 function get_amount(){
     return amount;
 }
 function set_amount(val){
     amount=val;
     return amount;
 }

 function get_keyword(){
     return keyword;

 }
 function set_keyword(val){
     keyword=val;
     return keyword;
 }

 module.exports={
     get_current_page,
     set_current_page,
     set_amount,
     get_amount,
     set_keyword,
     get_keyword,
     set_limit,
     get_limit,
 }