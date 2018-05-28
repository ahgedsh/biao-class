class Base{
    constructor(max_id,list){
        this.max_id=max_id || 1;
        this.list=list;
    }
   yo(){
       console.log('base yo');
   }

    $add(){
        console.log('base add');

    }

    $remove(){
        console.log('base remove')
    }
    $updata(){
        console.log('base updata')
    }

    $read(){
        console.log('base read');
    }
}
 