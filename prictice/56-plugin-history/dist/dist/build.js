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
/******/ 	return __webpack_require__(__webpack_require__.s = "./history/history.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./history/history.js":
/*!****************************!*\
  !*** ./history/history.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(" var helper=__webpack_require__(/*! ../unil/helper */ \"./unil/helper.js\");\r\n var store=__webpack_require__(/*! ../unil/story */ \"./unil/story.js\");\r\n \r\n\r\nvar list=[]\r\n    ,el\r\n    ,on_click\r\n    ,on_delete\r\n\r\n   ;\r\n   var output={\r\n       add:add,\r\n       remove:remove,\r\n       clear:clear,\r\n      \r\n       init:init,\r\n\r\n   }\r\n   function init(config){\r\n       el=document.querySelector(config.el);\r\n       if(!config.el || !el)\r\n       throw\"err\";\r\n       on_click=config.on_click,\r\n       on_delete=config.on_delete,\r\n       \r\n      sync_to_ladle();\r\n      render();\r\n      \r\n   }\r\n   function render(){\r\n       el.innerHTML='';\r\n       list.forEach(function(keyword){\r\n           var el_keyword=document.createElement('div');\r\n           \r\n           el_keyword.innerHTML=`\r\n           <div class=\"text\">${keyword}</div>\r\n           <div class=\"tool\">\r\n               <span class=\"delete\">删除</span>\r\n           </div>`;\r\n           el_keyword.classList.add('history');\r\n           el.appendChild(el_keyword);\r\n           el_keyword.addEventListener('click',function(){\r\n               if(on_click)\r\n               on_click(keyword);\r\n\r\n           })\r\n           el_keyword.querySelector('.delete')\r\n           .addEventListener('click',function(e){\r\n               e.stopPropagation();\r\n               if(on_delete)\r\n               on_delete(keyword);\r\n               remove(keyword);\r\n           })\r\n\r\n       })\r\n\r\n\r\n   }\r\n\r\nfunction sync_to_store(){\r\n        store.set('history-list',list);\r\n    \r\n       }\r\n function sync_to_ladle(){\r\n        list=store.get('history-list') ||[];\r\n }\r\n \r\n function add(keyword){\r\n     helper.find_and_delete(list,keyword);\r\n     list.unshift(keyword);\r\n     sync_to_store();\r\n    render();\r\n\r\n }\r\n function remove(keyword){\r\n     helper.find_and_delete(list,keyword);\r\n     sync_to_store(keyword);\r\n     render();\r\n\r\n }\r\n function clear(){\r\n     list=[];\r\n     sync_to_store();\r\n     render();\r\n }\r\n\r\n//测试\r\n init({\r\n     el:'#history-list',\r\n     on_click:function(keyword){\r\n         console.log(keyword);\r\n     },\r\n     on_delete:function(keyword){\r\n         console.log(keyword);\r\n     }\r\n     \r\n\r\n\r\n\r\n });\r\n \r\nadd('asd');\r\nadd('as67ud');\r\nadd('ghasd');\r\nadd('anhsd');\r\nadd('afsd');\r\n    \r\n  \r\n       \r\n       \r\n       \r\n\r\n  \r\nmodule.exports=output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oaXN0b3J5L2hpc3RvcnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oaXN0b3J5L2hpc3RvcnkuanM/YTA5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIgdmFyIGhlbHBlcj1yZXF1aXJlKCcuLi91bmlsL2hlbHBlcicpO1xyXG4gdmFyIHN0b3JlPXJlcXVpcmUoXCIuLi91bmlsL3N0b3J5XCIpO1xyXG4gXHJcblxyXG52YXIgbGlzdD1bXVxyXG4gICAgLGVsXHJcbiAgICAsb25fY2xpY2tcclxuICAgICxvbl9kZWxldGVcclxuXHJcbiAgIDtcclxuICAgdmFyIG91dHB1dD17XHJcbiAgICAgICBhZGQ6YWRkLFxyXG4gICAgICAgcmVtb3ZlOnJlbW92ZSxcclxuICAgICAgIGNsZWFyOmNsZWFyLFxyXG4gICAgICBcclxuICAgICAgIGluaXQ6aW5pdCxcclxuXHJcbiAgIH1cclxuICAgZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4gICAgICAgZWw9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWwpO1xyXG4gICAgICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbiAgICAgICB0aHJvd1wiZXJyXCI7XHJcbiAgICAgICBvbl9jbGljaz1jb25maWcub25fY2xpY2ssXHJcbiAgICAgICBvbl9kZWxldGU9Y29uZmlnLm9uX2RlbGV0ZSxcclxuICAgICAgIFxyXG4gICAgICBzeW5jX3RvX2xhZGxlKCk7XHJcbiAgICAgIHJlbmRlcigpO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBmdW5jdGlvbiByZW5kZXIoKXtcclxuICAgICAgIGVsLmlubmVySFRNTD0nJztcclxuICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKXtcclxuICAgICAgICAgICB2YXIgZWxfa2V5d29yZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBlbF9rZXl3b3JkLmlubmVySFRNTD1gXHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj4ke2tleXdvcmR9PC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj7liKDpmaQ8L3NwYW4+XHJcbiAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICBlbF9rZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcclxuICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuICAgICAgICAgICBlbF9rZXl3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICBpZihvbl9jbGljaylcclxuICAgICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCk7XHJcblxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgZWxfa2V5d29yZC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJylcclxuICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICBpZihvbl9kZWxldGUpXHJcbiAgICAgICAgICAgICAgIG9uX2RlbGV0ZShrZXl3b3JkKTtcclxuICAgICAgICAgICAgICAgcmVtb3ZlKGtleXdvcmQpO1xyXG4gICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgfSlcclxuXHJcblxyXG4gICB9XHJcblxyXG5mdW5jdGlvbiBzeW5jX3RvX3N0b3JlKCl7XHJcbiAgICAgICAgc3RvcmUuc2V0KCdoaXN0b3J5LWxpc3QnLGxpc3QpO1xyXG4gICAgXHJcbiAgICAgICB9XHJcbiBmdW5jdGlvbiBzeW5jX3RvX2xhZGxlKCl7XHJcbiAgICAgICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpIHx8W107XHJcbiB9XHJcbiBcclxuIGZ1bmN0aW9uIGFkZChrZXl3b3JkKXtcclxuICAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7XHJcbiAgICAgbGlzdC51bnNoaWZ0KGtleXdvcmQpO1xyXG4gICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG5cclxuIH1cclxuIGZ1bmN0aW9uIHJlbW92ZShrZXl3b3JkKXtcclxuICAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7XHJcbiAgICAgc3luY190b19zdG9yZShrZXl3b3JkKTtcclxuICAgICByZW5kZXIoKTtcclxuXHJcbiB9XHJcbiBmdW5jdGlvbiBjbGVhcigpe1xyXG4gICAgIGxpc3Q9W107XHJcbiAgICAgc3luY190b19zdG9yZSgpO1xyXG4gICAgIHJlbmRlcigpO1xyXG4gfVxyXG5cclxuLy/mtYvor5VcclxuIGluaXQoe1xyXG4gICAgIGVsOicjaGlzdG9yeS1saXN0JyxcclxuICAgICBvbl9jbGljazpmdW5jdGlvbihrZXl3b3JkKXtcclxuICAgICAgICAgY29uc29sZS5sb2coa2V5d29yZCk7XHJcbiAgICAgfSxcclxuICAgICBvbl9kZWxldGU6ZnVuY3Rpb24oa2V5d29yZCl7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xyXG4gICAgIH1cclxuICAgICBcclxuXHJcblxyXG5cclxuIH0pO1xyXG4gXHJcbmFkZCgnYXNkJyk7XHJcbmFkZCgnYXM2N3VkJyk7XHJcbmFkZCgnZ2hhc2QnKTtcclxuYWRkKCdhbmhzZCcpO1xyXG5hZGQoJ2Fmc2QnKTtcclxuICAgIFxyXG4gIFxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgIFxyXG5cclxuICBcclxubW9kdWxlLmV4cG9ydHM9b3V0cHV0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./history/history.js\n");

/***/ }),

/***/ "./unil/helper.js":
/*!************************!*\
  !*** ./unil/helper.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction find_and_delete(arr,element){\r\n    var shit_index=arr.indexOf(element);\r\n    if(shit_index==-1)\r\n    return false;\r\n    arr.splice(shit_index,1)\r\n    return true;\r\n\r\n}\r\nmodule.exports={\r\n    find_and_delete,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91bmlsL2hlbHBlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3VuaWwvaGVscGVyLmpzPzk3NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIGZpbmRfYW5kX2RlbGV0ZShhcnIsZWxlbWVudCl7XHJcbiAgICB2YXIgc2hpdF9pbmRleD1hcnIuaW5kZXhPZihlbGVtZW50KTtcclxuICAgIGlmKHNoaXRfaW5kZXg9PS0xKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgYXJyLnNwbGljZShzaGl0X2luZGV4LDEpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgZmluZF9hbmRfZGVsZXRlLFxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./unil/helper.js\n");

/***/ }),

/***/ "./unil/story.js":
/*!***********************!*\
  !*** ./unil/story.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function set(key,val){\r\n//     var json=JSON.stringify(val);\r\n//     localStorage.setItem(key,json);\r\n\r\n// }\r\n// function get(key){\r\n//     var json=localStorage.getItem(key);\r\n//     return JSON.parse(json);\r\n// }\r\n\r\n// module.exports={\r\n//     get:get,\r\n//     set:set,\r\n// }\r\nfunction set(key, val) {\r\n    /*加保鲜膜（JSON化）*/\r\n    var json = JSON.stringify(val);\r\n    /*存冰箱（状态稳定不轻易改变）*/\r\n    localStorage.setItem(key, json);\r\n  }\r\n  \r\n  /*从冰箱取*/\r\n  function get(key) {\r\n    /*从冰箱取到带保鲜膜的数据*/\r\n    var json = localStorage.getItem(key);\r\n    /*撕膜（将数据转化为JS可以理解的数据类型）*/\r\n    return JSON.parse(json);\r\n  }\r\n  \r\n  module.exports = {\r\n    set: set,\r\n    get: get,\r\n  }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91bmlsL3N0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdW5pbC9zdG9yeS5qcz9lMjI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIHNldChrZXksdmFsKXtcclxuLy8gICAgIHZhciBqc29uPUpTT04uc3RyaW5naWZ5KHZhbCk7XHJcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksanNvbik7XHJcblxyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGdldChrZXkpe1xyXG4vLyAgICAgdmFyIGpzb249bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuLy8gICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xyXG4vLyB9XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cz17XHJcbi8vICAgICBnZXQ6Z2V0LFxyXG4vLyAgICAgc2V0OnNldCxcclxuLy8gfVxyXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcclxuICAgIC8q5Yqg5L+d6bKc6Iac77yISlNPTuWMlu+8iSovXHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XHJcbiAgICAvKuWtmOWGsOeuse+8iOeKtuaAgeeos+WumuS4jei9u+aYk+aUueWPmO+8iSovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGpzb24pO1xyXG4gIH1cclxuICBcclxuICAvKuS7juWGsOeuseWPliovXHJcbiAgZnVuY3Rpb24gZ2V0KGtleSkge1xyXG4gICAgLyrku47lhrDnrrHlj5bliLDluKbkv53pspzohpznmoTmlbDmja4qL1xyXG4gICAgdmFyIGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgLyrmkpXohpzvvIjlsIbmlbDmja7ovazljJbkuLpKU+WPr+S7peeQhuino+eahOaVsOaNruexu+Wei++8iSovXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICB9XHJcbiAgXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZXQ6IHNldCxcclxuICAgIGdldDogZ2V0LFxyXG4gIH1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./unil/story.js\n");

/***/ })

/******/ });