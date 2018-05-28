var max_id = 101;
var todo_list = [
  { // 0
    id: 100,
    name: '买菜',
    completed: false,
  },
  { // 1
    id: 101,
    name: '洗菜',
    remind_at: '2020-10-01 20:20:02',
    completed: false,
  },
];



// function add(row){
//     max_id=max_id+1;
//     row.id=max_id;
//     todo_list.push(row);
// }
// add({
//     name:'wea',
//     completed:false,
// })

// console.log(todo_list);

function find_index_by_id(arr,id){
  return  arr.findIndex(function(row){
        return row.id==id;
    })
}
function remove(id){
    var index=find_index_by_id(todo_list,id);
    if(index<0)
    return;
    todo_list.splice(index,1);
}
//remove(100);
//console.log(todo_list);

// function updata(id,new_row){
//     var index=find_index_by_id(todo_list,id);
//     if(index<0){
//         return;
//     }else{
//         var old_row=todo_list[index];
//         todo_list[index]=Object.assign({},old_row,new_row)
//     }
// }
// updata(100,{
//     name:'asd',
//     completed:true,
// })
// console.log(todo_list)