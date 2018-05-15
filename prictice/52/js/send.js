function get(url) {
    var http = new XMLHttpRequest();
    http.open("get", url);
    // http.setRequestHeader("Authorization", "Basic " + btoa("BANG666:afa53f6e5cf5378bc5181cc5fd2fbabaf981a617"));
    http.send();
    http.addEventListener("load", function () {
        var data = JSON.parse(http.responseText);
      
    })
}

function post(url, fn) {
    var http = new XMLHttpRequest();
    http.open("post", url);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"/* ,"Authorization", "Basic " + btoa("BANG666:afa53f6e5cf5378bc5181cc5fd2fbabaf981a617") */);
    http.send();
    http.addEventListener("load", function () {
        var data = JSON.parse(http.responseText);
        
    })
}

module.exports = {
    get: get,
    post: post
}