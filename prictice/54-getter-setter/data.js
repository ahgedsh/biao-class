var name='whh';
var age=15;


function set_age(val){
    age=val;
    return age;

}
function get_age(){
    return age

}
function set_name(val){
    name=val;
    return name;

}
function get_name(){
    return name;

}
module.exports={
    get_age,
    get_name,
    set_age,
    set_name,
}