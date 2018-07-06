


function get_obj(data,key){
    let layers=key.split('.');
    let result=Object.assign({},data);
    layers.forEach(key =>{
        result=result[key];
        
    });
    return result;
}
function parse(tpl,data){
    const re=/{{\s*([^}\s]+)\s*}}/g;
    let match;

    let result = tpl;

    while(match=re.exec(tpl)){

        let variable=match[0];
        let key =match[1].trim();
        
        let replacement=get_obj(data,key);

        result=result.replace(variable,replacement);
    }
    return result;

}

// let tpl='我叫{{user.name}},我今年{{user.age}} 岁了'
// let data={
//     user:
//     {
//         name:'王花花',
//         age:16,
//         child:{
//             name:'赵可爽',
//         }
        
//     }
// };
window.parse=parse;

