







  
  



function send(url, data) {
    let http = new XMLHttpRequest();
    http.open('post', url)
    http.setRequestHeader("Content-type", "application/json")
    data = JSON.stringify(data)
    http.send(data)
    http.onload = function () {
      console.log(JSON.parse(http.responseText));
    }
  }
  
  function sign(key, time) {
    return btoa(key + time)
  }
  
  let data = {
    app_key: '71a74b871bf004860e82f006f17e83278176bd0396144297b0b3f80825ba732d',
    timestamp: (new Date).getTime(),
    name: 'test',
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
  
  send('http://mock.biaoyansu.com/api/MODEL/CREATE', data)

  window.http={
      send,
      sign,
  }
  
  






  