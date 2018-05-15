//入口文件，整个应用从这里启动
var event = require('./event');

init();

function init() {
  event.bind_all();
}