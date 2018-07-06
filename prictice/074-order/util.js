window.util={
    find_index_by_id(arr,id){
        return arr.findIndex(row=>{
            return row.id==id;
            console.log(row.id);
        })
    },
    
    delete_element_by_id(arr,id){
        let i=this.find_index_by_id(arr,id)
            
        arr.splice(i,1)
    
    }
};