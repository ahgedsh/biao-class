/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/element.js":
/*!***********************!*\
  !*** ./js/element.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n      //   var form = document.getElementById('search-form')\r\n      //   , input = document.getElementById('search-input')\r\n      //   , next = document.getElementById('next')\r\n      //   , user_list = document.getElementById('user-list')\r\n      // ;\r\n      \r\n      // /*渲染用户列表\r\n      // * @param Array data 用于渲染的数据\r\n      // * */\r\n      // function render_user_list(data) {\r\n      //   var html = user_list.innerHTML;\r\n      \r\n      //   data.forEach(function (user) {\r\n      //     html = html + `\r\n      //   <div class=\"user\">\r\n      //     <a class=\"avatar\" target=\"_blank\" href=\"${user.html_url}\">\r\n      //       <img src=\"${user.avatar_url}\">\r\n      //     </a>\r\n      //     <div class=\"info\">\r\n      //       <div class=\"username\">${user.login}</div>\r\n      //       <div><a target=\"_blank\" href=\"${user.html_url}\">${user.html_url}</a></div>\r\n      //     </div>\r\n      //   </div>\r\n      //     `;\r\n      \r\n      //     user_list.innerHTML = html;\r\n      //   });\r\n      // }\r\n      \r\n      // function hide_next() {\r\n      //   next.hidden = true;\r\n      // }\r\n      \r\n      // function show_next() {\r\n      //   next.hidden = true;\r\n      // }\r\n      \r\n      // module.exports = {\r\n      //   form: form,\r\n      //   input: input,\r\n      //   next: next,\r\n      //   show_next: show_next,\r\n      //   hide_next: hide_next,\r\n      //   render_user_list: render_user_list,\r\n      // }\r\n      var form=document.getElementById('search-form');\r\n      var input=document.getElementById('search-input');\r\n      var user_list=document.getElementById('user-list');\r\n      var next=document.getElementById('next');\r\n\r\n\r\n      function render_user_list(data){\r\n        var html=user_list.innerHTML;\r\n        data.items.forEach(function (user){\r\n          html= html + `\r\n            <div class=\"user\">\r\n              <a class=\"avatar\" target=\"_blank\" href=\"${user.html_url}\">\r\n                <img src=\"${user.avatar_url}\">\r\n              </a>\r\n              <div class=\"info\">\r\n                <div class=\"username\">${user.login}</div>\r\n                <div><a target=\"_blank\" href=\"${user.html_url}\">${user.html_url}</a></div>\r\n              </div>\r\n            </div>\r\n              `;\r\n              user_list.innerHTML=html;          \r\n          \r\n        });\r\n      \r\n        \r\n      }\r\n\r\n      module.exports={\r\n        form,\r\n        input,\r\n        user_list,\r\n        next,\r\n        render_user_list,\r\n      }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9lbGVtZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvZWxlbWVudC5qcz8yODZkIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAgICAgLy8gICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpXHJcbiAgICAgIC8vICAgLCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKVxyXG4gICAgICAvLyAgICwgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JylcclxuICAgICAgLy8gICAsIHVzZXJfbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWxpc3QnKVxyXG4gICAgICAvLyA7XHJcbiAgICAgIFxyXG4gICAgICAvLyAvKua4suafk+eUqOaIt+WIl+ihqFxyXG4gICAgICAvLyAqIEBwYXJhbSBBcnJheSBkYXRhIOeUqOS6jua4suafk+eahOaVsOaNrlxyXG4gICAgICAvLyAqICovXHJcbiAgICAgIC8vIGZ1bmN0aW9uIHJlbmRlcl91c2VyX2xpc3QoZGF0YSkge1xyXG4gICAgICAvLyAgIHZhciBodG1sID0gdXNlcl9saXN0LmlubmVySFRNTDtcclxuICAgICAgXHJcbiAgICAgIC8vICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgIC8vICAgICBodG1sID0gaHRtbCArIGBcclxuICAgICAgLy8gICA8ZGl2IGNsYXNzPVwidXNlclwiPlxyXG4gICAgICAvLyAgICAgPGEgY2xhc3M9XCJhdmF0YXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt1c2VyLmh0bWxfdXJsfVwiPlxyXG4gICAgICAvLyAgICAgICA8aW1nIHNyYz1cIiR7dXNlci5hdmF0YXJfdXJsfVwiPlxyXG4gICAgICAvLyAgICAgPC9hPlxyXG4gICAgICAvLyAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgLy8gICAgICAgPGRpdiBjbGFzcz1cInVzZXJuYW1lXCI+JHt1c2VyLmxvZ2lufTwvZGl2PlxyXG4gICAgICAvLyAgICAgICA8ZGl2PjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3VzZXIuaHRtbF91cmx9XCI+JHt1c2VyLmh0bWxfdXJsfTwvYT48L2Rpdj5cclxuICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAvLyAgIDwvZGl2PlxyXG4gICAgICAvLyAgICAgYDtcclxuICAgICAgXHJcbiAgICAgIC8vICAgICB1c2VyX2xpc3QuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgLy8gZnVuY3Rpb24gaGlkZV9uZXh0KCkge1xyXG4gICAgICAvLyAgIG5leHQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgLy8gZnVuY3Rpb24gc2hvd19uZXh0KCkge1xyXG4gICAgICAvLyAgIG5leHQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgLy8gbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgIC8vICAgZm9ybTogZm9ybSxcclxuICAgICAgLy8gICBpbnB1dDogaW5wdXQsXHJcbiAgICAgIC8vICAgbmV4dDogbmV4dCxcclxuICAgICAgLy8gICBzaG93X25leHQ6IHNob3dfbmV4dCxcclxuICAgICAgLy8gICBoaWRlX25leHQ6IGhpZGVfbmV4dCxcclxuICAgICAgLy8gICByZW5kZXJfdXNlcl9saXN0OiByZW5kZXJfdXNlcl9saXN0LFxyXG4gICAgICAvLyB9XHJcbiAgICAgIHZhciBmb3JtPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG4gICAgICB2YXIgaW5wdXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xyXG4gICAgICB2YXIgdXNlcl9saXN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWxpc3QnKTtcclxuICAgICAgdmFyIG5leHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5kZXJfdXNlcl9saXN0KGRhdGEpe1xyXG4gICAgICAgIHZhciBodG1sPXVzZXJfbGlzdC5pbm5lckhUTUw7XHJcbiAgICAgICAgZGF0YS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyKXtcclxuICAgICAgICAgIGh0bWw9IGh0bWwgKyBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhdmF0YXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHt1c2VyLmh0bWxfdXJsfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3VzZXIuYXZhdGFyX3VybH1cIj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPiR7dXNlci5sb2dpbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dXNlci5odG1sX3VybH1cIj4ke3VzZXIuaHRtbF91cmx9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgIHVzZXJfbGlzdC5pbm5lckhUTUw9aHRtbDsgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1vZHVsZS5leHBvcnRzPXtcclxuICAgICAgICBmb3JtLFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHVzZXJfbGlzdCxcclxuICAgICAgICBuZXh0LFxyXG4gICAgICAgIHJlbmRlcl91c2VyX2xpc3QsXHJcbiAgICAgIH0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/element.js\n");

/***/ }),

/***/ "./js/event.js":
/*!*********************!*\
  !*** ./js/event.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var el = require('./element')\r\n//   , search = require('./search')\r\n//   , page = 1\r\n//   , limit = 5\r\n//   , keyword\r\n// ;\r\n\r\n// /*监听搜索表单提交事件*/\r\n// function detect_submit() {\r\n//   el.form.addEventListener('submit', function (e) {\r\n//     e.preventDefault();\r\n//     /*获取搜索关键词（获取input元素的值）*/\r\n//     keyword = el.input.value;\r\n\r\n//     /*开始搜*/\r\n//     search.user(keyword, function (data) {\r\n//       var items = data.items;\r\n//       el.render_user_list(items);\r\n\r\n//     });\r\n//   });\r\n// }\r\n\r\n// function detect_next_page() {\r\n\r\n//   el.next.addEventListener('click', function () {\r\n//     /*准备配置*/\r\n//     var config = {\r\n//       page: page++,\r\n//       limit: limit,\r\n//     };\r\n\r\n//     /*开始搜索*/\r\n//     search.user(keyword, function (data) {\r\n//       el.render_user_list(data.items);\r\n//     }, config);\r\n\r\n//   });\r\n// }\r\n\r\n// /*批量添加所有初始事件*/\r\n// function add_events() {\r\n//   detect_submit();\r\n//   detect_next_page();\r\n// }\r\n\r\n// module.exports = {\r\n//   detect_submit: detect_submit,\r\n//   add_events: add_events,\r\n//   detect_next_page: detect_next_page,\r\n// };\r\nvar el=__webpack_require__(/*! ./element */ \"./js/element.js\");\r\nvar search=__webpack_require__(/*! ./search */ \"./js/search.js\");\r\nvar limit=1;\r\nvar page=1;\r\nvar keyword;\r\n\r\nfunction add_events(){\r\n  detect_submit();\r\n  detect_next_page();\r\n  detect_next_page();\r\n}\r\n\r\nfunction detect_submit(){\r\n  el.form.addEventListener('submit',function(e){\r\n    e.preventDefault();\r\n    var keyword=el.input.value;\r\n    search.user(keyword,function(data){\r\n      el.render_user_list(data);\r\n    });\r\n  });\r\n}\r\nfunction detect_next_page(){\r\n \r\n  el.next.addEventListener('click',function(){\r\n    var config={\r\n      page:page++,\r\n      limit:10,\r\n    }\r\n    search.user(keyword,function(data){\r\n      el.render_user_list(data);\r\n    },config);\r\n  \r\n  });\r\n  \r\n}\r\n\r\nmodule.exports={\r\n  add_events,\r\n  detect_submit,\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9ldmVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2V2ZW50LmpzPzY4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyIGVsID0gcmVxdWlyZSgnLi9lbGVtZW50JylcclxuLy8gICAsIHNlYXJjaCA9IHJlcXVpcmUoJy4vc2VhcmNoJylcclxuLy8gICAsIHBhZ2UgPSAxXHJcbi8vICAgLCBsaW1pdCA9IDVcclxuLy8gICAsIGtleXdvcmRcclxuLy8gO1xyXG5cclxuLy8gLyrnm5HlkKzmkJzntKLooajljZXmj5DkuqTkuovku7YqL1xyXG4vLyBmdW5jdGlvbiBkZXRlY3Rfc3VibWl0KCkge1xyXG4vLyAgIGVsLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIC8q6I635Y+W5pCc57Si5YWz6ZSu6K+N77yI6I635Y+WaW5wdXTlhYPntKDnmoTlgLzvvIkqL1xyXG4vLyAgICAga2V5d29yZCA9IGVsLmlucHV0LnZhbHVlO1xyXG5cclxuLy8gICAgIC8q5byA5aeL5pCcKi9cclxuLy8gICAgIHNlYXJjaC51c2VyKGtleXdvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICAgIHZhciBpdGVtcyA9IGRhdGEuaXRlbXM7XHJcbi8vICAgICAgIGVsLnJlbmRlcl91c2VyX2xpc3QoaXRlbXMpO1xyXG5cclxuLy8gICAgIH0pO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBkZXRlY3RfbmV4dF9wYWdlKCkge1xyXG5cclxuLy8gICBlbC5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgLyrlh4blpIfphY3nva4qL1xyXG4vLyAgICAgdmFyIGNvbmZpZyA9IHtcclxuLy8gICAgICAgcGFnZTogcGFnZSsrLFxyXG4vLyAgICAgICBsaW1pdDogbGltaXQsXHJcbi8vICAgICB9O1xyXG5cclxuLy8gICAgIC8q5byA5aeL5pCc57SiKi9cclxuLy8gICAgIHNlYXJjaC51c2VyKGtleXdvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICAgIGVsLnJlbmRlcl91c2VyX2xpc3QoZGF0YS5pdGVtcyk7XHJcbi8vICAgICB9LCBjb25maWcpO1xyXG5cclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuLy8gLyrmibnph4/mt7vliqDmiYDmnInliJ3lp4vkuovku7YqL1xyXG4vLyBmdW5jdGlvbiBhZGRfZXZlbnRzKCkge1xyXG4vLyAgIGRldGVjdF9zdWJtaXQoKTtcclxuLy8gICBkZXRlY3RfbmV4dF9wYWdlKCk7XHJcbi8vIH1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0ge1xyXG4vLyAgIGRldGVjdF9zdWJtaXQ6IGRldGVjdF9zdWJtaXQsXHJcbi8vICAgYWRkX2V2ZW50czogYWRkX2V2ZW50cyxcclxuLy8gICBkZXRlY3RfbmV4dF9wYWdlOiBkZXRlY3RfbmV4dF9wYWdlLFxyXG4vLyB9O1xyXG52YXIgZWw9cmVxdWlyZSgnLi9lbGVtZW50Jyk7XHJcbnZhciBzZWFyY2g9cmVxdWlyZSgnLi9zZWFyY2gnKTtcclxudmFyIGxpbWl0PTE7XHJcbnZhciBwYWdlPTE7XHJcbnZhciBrZXl3b3JkO1xyXG5cclxuZnVuY3Rpb24gYWRkX2V2ZW50cygpe1xyXG4gIGRldGVjdF9zdWJtaXQoKTtcclxuICBkZXRlY3RfbmV4dF9wYWdlKCk7XHJcbiAgZGV0ZWN0X25leHRfcGFnZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlY3Rfc3VibWl0KCl7XHJcbiAgZWwuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGtleXdvcmQ9ZWwuaW5wdXQudmFsdWU7XHJcbiAgICBzZWFyY2gudXNlcihrZXl3b3JkLGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICBlbC5yZW5kZXJfdXNlcl9saXN0KGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGV0ZWN0X25leHRfcGFnZSgpe1xyXG4gXHJcbiAgZWwubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIHZhciBjb25maWc9e1xyXG4gICAgICBwYWdlOnBhZ2UrKyxcclxuICAgICAgbGltaXQ6MTAsXHJcbiAgICB9XHJcbiAgICBzZWFyY2gudXNlcihrZXl3b3JkLGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICBlbC5yZW5kZXJfdXNlcl9saXN0KGRhdGEpO1xyXG4gICAgfSxjb25maWcpO1xyXG4gIFxyXG4gIH0pO1xyXG4gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cz17XHJcbiAgYWRkX2V2ZW50cyxcclxuICBkZXRlY3Rfc3VibWl0LFxyXG5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/event.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar event=__webpack_require__(/*! ./event */ \"./js/event.js\");\r\ninit();\r\nfunction init(){\r\n  event.add_events();\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBldmVudD1yZXF1aXJlKCcuL2V2ZW50Jyk7XHJcbmluaXQoKTtcclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gIGV2ZW50LmFkZF9ldmVudHMoKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/search.js":
/*!**********************!*\
  !*** ./js/search.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// function user(keyword, on_success, config) {\r\n//   /*默认配置*/\r\n//   var def = {\r\n//     page: 1,\r\n//     limit: 10,\r\n//     keyword: 'yo',\r\n//   };\r\n\r\n//   /*合并用户配置*/\r\n//   config = Object.assign({}, def, config);\r\n\r\n//   var http = new XMLHttpRequest();\r\n//   http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' + config.page + '&per_page=' + config.limit);\r\n//   http.send();\r\n\r\n//   http.addEventListener('load', function () {\r\n//     var data = JSON.parse(this.responseText);\r\n//     on_success(data)\r\n//   });\r\n// }\r\n\r\n// module.exports = {\r\n//   user: user\r\n// }\r\n\r\nfunction user(keyword,on_success,config){\r\n  var def={\r\n    limit:10,\r\n    page:1,\r\n\r\n  }\r\n  config=Object.assign({},def,config);\r\n  var http=new XMLHttpRequest();\r\n  http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' +config.page + '&per_page=' + config.limit);\r\n  http.send();\r\n\r\n  http.addEventListener('load',function(){\r\n    var data=JSON.parse(this.responseText);\r\n        on_success(data);\r\n  });\r\n\r\n}\r\nmodule.exports={\r\n  user,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zZWFyY2guanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9zZWFyY2guanM/ODAxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gZnVuY3Rpb24gdXNlcihrZXl3b3JkLCBvbl9zdWNjZXNzLCBjb25maWcpIHtcclxuLy8gICAvKum7mOiupOmFjee9riovXHJcbi8vICAgdmFyIGRlZiA9IHtcclxuLy8gICAgIHBhZ2U6IDEsXHJcbi8vICAgICBsaW1pdDogMTAsXHJcbi8vICAgICBrZXl3b3JkOiAneW8nLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8q5ZCI5bm255So5oi36YWN572uKi9cclxuLy8gICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWYsIGNvbmZpZyk7XHJcblxyXG4vLyAgIHZhciBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgaHR0cC5vcGVuKCdnZXQnLCAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0nICsga2V5d29yZCArICcmcGFnZT0nICsgY29uZmlnLnBhZ2UgKyAnJnBlcl9wYWdlPScgKyBjb25maWcubGltaXQpO1xyXG4vLyAgIGh0dHAuc2VuZCgpO1xyXG5cclxuLy8gICBodHRwLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgb25fc3VjY2VzcyhkYXRhKVxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcclxuLy8gICB1c2VyOiB1c2VyXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIHVzZXIoa2V5d29yZCxvbl9zdWNjZXNzLGNvbmZpZyl7XHJcbiAgdmFyIGRlZj17XHJcbiAgICBsaW1pdDoxMCxcclxuICAgIHBhZ2U6MSxcclxuXHJcbiAgfVxyXG4gIGNvbmZpZz1PYmplY3QuYXNzaWduKHt9LGRlZixjb25maWcpO1xyXG4gIHZhciBodHRwPW5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIGh0dHAub3BlbignZ2V0JywgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JyArIGtleXdvcmQgKyAnJnBhZ2U9JyArY29uZmlnLnBhZ2UgKyAnJnBlcl9wYWdlPScgKyBjb25maWcubGltaXQpO1xyXG4gIGh0dHAuc2VuZCgpO1xyXG5cclxuICBodHRwLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZGF0YT1KU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBvbl9zdWNjZXNzKGRhdGEpO1xyXG4gIH0pO1xyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cz17XHJcbiAgdXNlcixcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/search.js\n");

/***/ })

/******/ });