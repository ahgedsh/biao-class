var limit=10;
var keyword;
var user_list=[];
var amount;
var current_page=1;
function set_limit(val){
     limit=val;
    return limit;
}
function get_limit(){
    return limit;
}

function get_keyword(){
    return keyword;
}
function set_keyword(val){
    keyword=val;
    return keyword;
}

function get_user_list(){
    return user_list;
}
function set_user_list(val){
    user_list=val;
    return user_list;
}

function get_amount(){
    return amount;
}
function set_amount(val){
    amount=val;
    return amount;
}
function set_current_page(val){
    current_page=val;
    return current_page;
}
function get_current_page(){
    return current_page;
}

module.exports={
    get_amount,
    set_amount,
    get_current_page,
    set_current_page,
    get_limit,
    set_limit,
    get_keyword,
    set_keyword,
    get_user_list,
    set_user_list,
}