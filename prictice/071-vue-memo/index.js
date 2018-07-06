
let root = new Vue({
    el: '#root',
    data: {
      memoList: [{
        title:'',
        content:'',   
      }],
      current: null
    },
    methods: {
      create() {
       this.current={};
      
      },
      
      remove(index) {
        let id = this.memoList[index].id
        let data = {
          app_key: 'bd01ddd9193c80258f13f4f5689b62b48d815ada2f70f798a157fff07e2c64a4',
          timestamp: (new Date).getTime()
        }
        data.signature = http.sign(data.app_key, data.timestamp)
        data.id = id
       http.send('http://mock.biaoyansu.com/api/memoList/delete', data, (res) => {
          
        
          if (res.succeed) {
            if(this.memoList[index].id==this.current.id)
           
           delete this.current.id
            this.memoList.splice(index, 1)
          
          }
        })
      },
      submit(obj) {
       
        let status = '';
        let data = {};
        if (obj.id) {
          status = 'update';
          data = {
            app_key: 'bd01ddd9193c80258f13f4f5689b62b48d815ada2f70f798a157fff07e2c64a4',
            timestamp: (new Date).getTime(),
            id: obj.id,
            title: obj.title,
            content: obj.content
          }
        } else {
          status = 'create';
          data = {
            app_key: 'bd01ddd9193c80258f13f4f5689b62b48d815ada2f70f798a157fff07e2c64a4',
            timestamp: (new Date).getTime(),
            title: obj.title,
            content: obj.content
          }
        }
  
        data.signature = http.sign(data.app_key, data.timestamp)
        let url = 'http://mock.biaoyansu.com/api/memoList/' + status
  
        http.send(url, data, (res) => {

          this.current = res.data;
          let hasSameMemo = false
          this.memoList.forEach(memo => {
            if(memo.id==this.current.id){
              hasSameMemo = true
            }
          });

          if(!hasSameMemo){
            this.memoList.push(this.current)
          }
     
        })
        
      },
      
    },
    
    created: function () {
      let data = {
        app_key: 'bd01ddd9193c80258f13f4f5689b62b48d815ada2f70f798a157fff07e2c64a4',
        timestamp: (new Date).getTime()
      }
      data.signature = http.sign(data.app_key, data.timestamp)
      http.send('http://mock.biaoyansu.com/api/memoList/read', data, (res) => {
        this.memoList = res.data;
        if(!res.data){
          this.memoList = [];
        }
       
      })
    }
});

