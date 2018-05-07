var data=require('./data');

var name=data.get_name();
console.log(name);
data.set_age(2);
console.log(data.get_age());