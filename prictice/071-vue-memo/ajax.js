
function send(url, data,succeed_hook) {
    let http = new XMLHttpRequest();
    http.open('post', url)
    http.setRequestHeader("Content-type", "application/json")
    data = JSON.stringify(data)
    http.send(data)
    http.onload = function () {
      if(succeed_hook){
        succeed_hook(JSON.parse(http.responseText))
      }
      
    }
  }
  
  function sign(key, time) {
    return btoa(key + time)
  }
  
  let data = {
    app_key: 'bd01ddd9193c80258f13f4f5689b62b48d815ada2f70f798a157fff07e2c64a4',
    timestamp: (new Date).getTime(),
    name: 'memoList',
    structure: [{
        name: 'title',
        type: 'string',
        nullable: true
      },
      {
        name: 'content',
        type: 'string',
        nullable: true
      }
    ]
  }
  data.signature = sign(data.app_key, data.timestamp);
  
  send('http://mock.biaoyansu.com/api/MODEL/READ', data)

  window.http={
      send,
      sign,
  }
  
  






  