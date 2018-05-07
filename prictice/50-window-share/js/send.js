;(function(){
    'use strict';
    window.send={
        get:get,
        post:post,
        send:post,
    };


    function get(url,on_succeed){
        send(url,'get',on_succeed);
    }
    function post(url,on_succeed){
        send(url,'post',on_succeed);
    }
    function send(url,methond,on_succeed){
        var http=new XMLHttpRequest;
        http.open(methond,url);
        http.send();
        http.addEventListener('load',function(){
            on_succeed(this.responseText);
        });
    }
})();