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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../util/helper.js":
/*!****************************************************!*\
  !*** c:/biao-class/prictice/55/src/util/helper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function find_and_delete(arr,element){\r\n    var shit_index=arr.indexOf(element);\r\n    if(shit_index==-1)\r\n    return false;\r\n    arr.splice(shit_index,1)\r\n    return true;\r\n\r\n}\r\nmodule.exports={\r\n    find_and_delete,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbC9oZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYzovYmlhby1jbGFzcy9wcmljdGljZS81NS9zcmMvdXRpbC9oZWxwZXIuanM/ZWZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmaW5kX2FuZF9kZWxldGUoYXJyLGVsZW1lbnQpe1xyXG4gICAgdmFyIHNoaXRfaW5kZXg9YXJyLmluZGV4T2YoZWxlbWVudCk7XHJcbiAgICBpZihzaGl0X2luZGV4PT0tMSlcclxuICAgIHJldHVybiBmYWxzZTtcclxuICAgIGFyci5zcGxpY2Uoc2hpdF9pbmRleCwxKVxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzPXtcclxuICAgIGZpbmRfYW5kX2RlbGV0ZSxcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../util/helper.js\n");

/***/ }),

/***/ "../../util/store.js":
/*!***************************************************!*\
  !*** c:/biao-class/prictice/55/src/util/store.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function set(key,val){\r\n//     var json=JSON.stringify(val);\r\n//     localStorage.setItem(key,json);\r\n    \r\n// }\r\n\r\n// function get(key){\r\n//     var json=localStorage.getItem(key);\r\n//     return JSON.parse(json);\r\n   \r\n\r\n// }\r\n// module.exports={\r\n//     get,\r\n//     set,\r\n// }\r\nfunction set(key, val) {\r\n    /*加保鲜膜（JSON化）*/\r\n    var json = JSON.stringify(val);\r\n    /*存冰箱（状态稳定不轻易改变）*/\r\n    localStorage.setItem(key, json);\r\n  }\r\n  \r\n  /*从冰箱取*/\r\n  function get(key) {\r\n    /*从冰箱取到带保鲜膜的数据*/\r\n    var json = localStorage.getItem(key);\r\n    /*撕膜（将数据转化为JS可以理解的数据类型）*/\r\n    return JSON.parse(json);\r\n  }\r\n  \r\n  module.exports = {\r\n    set: set,\r\n    get: get,\r\n  }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbC9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jOi9iaWFvLWNsYXNzL3ByaWN0aWNlLzU1L3NyYy91dGlsL3N0b3JlLmpzP2U2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gc2V0KGtleSx2YWwpe1xyXG4vLyAgICAgdmFyIGpzb249SlNPTi5zdHJpbmdpZnkodmFsKTtcclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSxqc29uKTtcclxuICAgIFxyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXQoa2V5KXtcclxuLy8gICAgIHZhciBqc29uPWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbi8vICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICAgXHJcblxyXG4vLyB9XHJcbi8vIG1vZHVsZS5leHBvcnRzPXtcclxuLy8gICAgIGdldCxcclxuLy8gICAgIHNldCxcclxuLy8gfVxyXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWwpIHtcclxuICAgIC8q5Yqg5L+d6bKc6Iac77yISlNPTuWMlu+8iSovXHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XHJcbiAgICAvKuWtmOWGsOeuse+8iOeKtuaAgeeos+WumuS4jei9u+aYk+aUueWPmO+8iSovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGpzb24pO1xyXG4gIH1cclxuICBcclxuICAvKuS7juWGsOeuseWPliovXHJcbiAgZnVuY3Rpb24gZ2V0KGtleSkge1xyXG4gICAgLyrku47lhrDnrrHlj5bliLDluKbkv53pspzohpznmoTmlbDmja4qL1xyXG4gICAgdmFyIGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgLyrmkpXohpzvvIjlsIbmlbDmja7ovazljJbkuLpKU+WPr+S7peeQhuino+eahOaVsOaNruexu+Wei++8iSovXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcclxuICB9XHJcbiAgXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZXQ6IHNldCxcclxuICAgIGdldDogZ2V0LFxyXG4gIH1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../util/store.js\n");

/***/ }),

/***/ "./history.js":
/*!********************!*\
  !*** ./history.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var helper=require('../../util/helper');\r\n// var store=require('../../util/store');\r\n\r\n\r\n// var list=[]\r\n//     ,el\r\n//     ,on_click\r\n//     ,on_delete\r\n//    ;\r\n//    var output={\r\n//        add:add,\r\n//        remove:remove,\r\n//        clear:clear,\r\n//        init:init,\r\n\r\n//    }\r\n//    function init(config){\r\n//        el=document.querySelector(config.el);\r\n//        on_click=config.on_click;\r\n//        on_delete=config.on_delete;\r\n//        if(!config.el || !el)\r\n//        throw'Invalid root element';\r\n//       sync_to_ladle();\r\n//        render();\r\n//    }\r\n//    function render(){\r\n//        el.innerHTML='';\r\n//        list.forEach(function(keyword){\r\n//            var el_keyword=document.createElement('div');\r\n//            el_keyword.innerHTML=`\r\n//            <div class=\"text\">${keyword}</div>\r\n//            <div class=\"tool\">\r\n//              <span class=\"delete\">删除</span>\r\n//            </div>`;\r\n//            el_keyword.classList.add('history');\r\n//            el.appendChild(el_keyword);\r\n//            el_keyword.addEventListener('click',function(){\r\n//                if(on_click)\r\n//             on_click(keyword);\r\n//            });\r\n//            el_keyword.querySelector('.delete')\r\n//            .addEventListener('click',function(e){\r\n//             e.stopPropagation();  \r\n//              if(on_delete)\r\n//              on_delete(keyword);\r\n//              remove(keyword);\r\n//         })  \r\n//        })\r\n       \r\n//    }\r\n//    function sync_to_store(){\r\n//        store.set('history-list',list);\r\n\r\n//    }\r\n//    function sync_to_ladle(){\r\n//        list=store.get('history-list') || [];\r\n\r\n//    }\r\n//    function add(keyword){\r\n//        helper.find_and_delete(list,keyword);\r\n//        list.unshift(keyword);\r\n//        sync_to_store();\r\n//        render();\r\n//    }\r\n   \r\n//    function remove(keyword){\r\n//        helper.find_and_delete(list,keyword);\r\n//        sync_to_store();\r\n//        render();\r\n       \r\n//    }\r\n//    function clear(){\r\n//        list=[];\r\n//        sync_to_store();\r\n//        render();\r\n//    }\r\n\r\n   \r\n\r\n  \r\n// module.exports=output;\r\n// var helper=require('../../util/helper');\r\n// var store=require('../../util/store');\r\n// var list=[]\r\n//    ,el\r\n//    ,on_click\r\n//    ,on_delete\r\n//    ;\r\n// var output={\r\n//     add:add,\r\n//     remove:remove,\r\n//     clear:clear,\r\n//     render:render,\r\n//     init:init,\r\n// }\r\n\r\n\r\n// function init(config){\r\n//            el=document.querySelector(config.el);\r\n//            on_click=config.on_click;\r\n//            on_delete=config.on_delete;\r\n//            if(!config.el || !el)\r\n//            throw'Invalid root element';\r\n//           sync_to_ladle();//获取东西\r\n//            render();//再渲染\r\n//        }\r\n// function render(){\r\n//     el.innerHTML='';\r\n//     list.forEach(function(keyword){\r\n//         var el_keyword=document.createElement('div');\r\n//         el_keyword.innerHTML=`\r\n//             <div class=\"text\">${keyword}</div>\r\n//             <div class=\"tool\">\r\n//                 <span class=\"delete\">删除</span>\r\n//             </div>`;\r\n//             el_keyword.classList.add('history');//加css样式\r\n//             el.appendChild(el_keyword);\r\n//             el_keyword.addEventListener('click',function(){\r\n//                 if(on_click)\r\n//                 on_click(keyword);\r\n//             })\r\n//             el_keyword.querySelector('.delete')\r\n//                       .addEventListener('click',function(e){\r\n//                           e.stopPropagation();\r\n//                           if(on_delete){\r\n//                               on_delete(keyword);\r\n//                               remove(keyword);\r\n//                           }\r\n//                       })\r\n//     })\r\n// }\r\n\r\n\r\n\r\n\r\n// function sync_to_ladle(){//获取东西\r\n//     list=store.get('history-list')||[];\r\n// }\r\n// function sync_to_store(){//把东西放进冰箱\r\n//     store.set('history-list',list);\r\n// }\r\n\r\n// function add(keyword){\r\n//     helper.find_and_delete(list,keyword);\r\n//     list.unshift(keyword);\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n// function remove(keyword){\r\n//     helper.find_and_delete(list,keyword);\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n// function clear(){\r\n//     list=[];\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n\r\n// module.exports=output;\r\nvar helper=__webpack_require__(/*! ../../util/helper */ \"../../util/helper.js\");\r\nvar store=__webpack_require__(/*! ../../util/store */ \"../../util/store.js\");\r\n\r\nvar el\r\n   ,list=[]\r\n   ,on_click\r\n   ,on_delete\r\n   output={\r\n       init:init,\r\n       add:add,\r\n       clear:clear,\r\n       remove:remove,\r\n   }\r\n   ;\r\nfunction init(config){\r\n    el=document.querySelector(config.el);\r\n    if(!config.el || !el)\r\n    throw'err';\r\n   on_click=config.on_click;\r\n   on_delete=config.on_delete;\r\n    sync_to_ladle();\r\n    render();\r\n\r\n\r\n\r\n}\r\n\r\n\r\nfunction render(){\r\n    el.innerHTML='';\r\n    list.forEach(function(keyword){\r\n        var el_keyword=document.createElement('div');\r\n        el_keyword.innerHTML=`\r\n            <div class=\"text\">${keyword}</div>\r\n            <div class=\"tool\">\r\n                <span class=\"delete\">删除</span>\r\n            </div>`;\r\n\r\n            el_keyword.classList.add('history');\r\n            el.appendChild(el_keyword);\r\n            el_keyword.addEventListener('click',function(e){\r\n                if(on_click){\r\n                    on_click(keyword,e);\r\n                }\r\n \r\n            })\r\n            el_keyword.querySelector('.delete')\r\n                      .addEventListener('click',function(e){\r\n                          e.stopPropagation();\r\n                          if(on_delete){\r\n                              on_delete(keyword,e);\r\n                              remove(keyword);\r\n                          }\r\n\r\n                      })\r\n      })\r\n    \r\n\r\n\r\n\r\n}\r\n\r\nfunction sync_to_ladle(){\r\n    list=store.get('history-list') || [];\r\n}\r\nfunction sync_to_store(){\r\n    store.set('history-list',list);\r\n}\r\n\r\n\r\nfunction add(keyword){\r\n    //判断是否重复\r\n    helper.find_and_delete(list,keyword);\r\n    //加进list里面\r\n    list.unshift(keyword);\r\n    //放进冰箱\r\n    sync_to_store();\r\n    //渲染出来\r\n    render();\r\n    \r\n}\r\nfunction remove(keyword){\r\n    helper.find_and_delete(list,keyword);//找打并且删除\r\n    sync_to_store();\r\n    render();\r\n}\r\n\r\nfunction clear(){\r\n    list=[];\r\n    sync_to_store();\r\n    render();\r\n}\r\n\r\n\r\nmodule.exports=output;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGlzdG9yeS5qcz80ODZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBoZWxwZXI9cmVxdWlyZSgnLi4vLi4vdXRpbC9oZWxwZXInKTtcclxuLy8gdmFyIHN0b3JlPXJlcXVpcmUoJy4uLy4uL3V0aWwvc3RvcmUnKTtcclxuXHJcblxyXG4vLyB2YXIgbGlzdD1bXVxyXG4vLyAgICAgLGVsXHJcbi8vICAgICAsb25fY2xpY2tcclxuLy8gICAgICxvbl9kZWxldGVcclxuLy8gICAgO1xyXG4vLyAgICB2YXIgb3V0cHV0PXtcclxuLy8gICAgICAgIGFkZDphZGQsXHJcbi8vICAgICAgICByZW1vdmU6cmVtb3ZlLFxyXG4vLyAgICAgICAgY2xlYXI6Y2xlYXIsXHJcbi8vICAgICAgICBpbml0OmluaXQsXHJcblxyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIGluaXQoY29uZmlnKXtcclxuLy8gICAgICAgIGVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuLy8gICAgICAgIG9uX2NsaWNrPWNvbmZpZy5vbl9jbGljaztcclxuLy8gICAgICAgIG9uX2RlbGV0ZT1jb25maWcub25fZGVsZXRlO1xyXG4vLyAgICAgICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbi8vICAgICAgICB0aHJvdydJbnZhbGlkIHJvb3QgZWxlbWVudCc7XHJcbi8vICAgICAgIHN5bmNfdG9fbGFkbGUoKTtcclxuLy8gICAgICAgIHJlbmRlcigpO1xyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4vLyAgICAgICAgZWwuaW5uZXJIVE1MPScnO1xyXG4vLyAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpe1xyXG4vLyAgICAgICAgICAgIHZhciBlbF9rZXl3b3JkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgICAgIGVsX2tleXdvcmQuaW5uZXJIVE1MPWBcclxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7a2V5d29yZH08L2Rpdj5cclxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbFwiPlxyXG4vLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj7liKDpmaQ8L3NwYW4+XHJcbi8vICAgICAgICAgICAgPC9kaXY+YDtcclxuLy8gICAgICAgICAgICBlbF9rZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcclxuLy8gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuLy8gICAgICAgICAgICBlbF9rZXl3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgICAgICAgICBpZihvbl9jbGljaylcclxuLy8gICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgZWxfa2V5d29yZC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJylcclxuLy8gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4vLyAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgXHJcbi8vICAgICAgICAgICAgICBpZihvbl9kZWxldGUpXHJcbi8vICAgICAgICAgICAgICBvbl9kZWxldGUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgfSkgIFxyXG4vLyAgICAgICAgfSlcclxuICAgICAgIFxyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIHN5bmNfdG9fc3RvcmUoKXtcclxuLy8gICAgICAgIHN0b3JlLnNldCgnaGlzdG9yeS1saXN0JyxsaXN0KTtcclxuXHJcbi8vICAgIH1cclxuLy8gICAgZnVuY3Rpb24gc3luY190b19sYWRsZSgpe1xyXG4vLyAgICAgICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpIHx8IFtdO1xyXG5cclxuLy8gICAgfVxyXG4vLyAgICBmdW5jdGlvbiBhZGQoa2V5d29yZCl7XHJcbi8vICAgICAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7XHJcbi8vICAgICAgICBsaXN0LnVuc2hpZnQoa2V5d29yZCk7XHJcbi8vICAgICAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbi8vICAgICAgICByZW5kZXIoKTtcclxuLy8gICAgfVxyXG4gICBcclxuLy8gICAgZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpe1xyXG4vLyAgICAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICBcclxuLy8gICAgfVxyXG4vLyAgICBmdW5jdGlvbiBjbGVhcigpe1xyXG4vLyAgICAgICAgbGlzdD1bXTtcclxuLy8gICAgICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuLy8gICAgICAgIHJlbmRlcigpO1xyXG4vLyAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgXHJcbi8vIG1vZHVsZS5leHBvcnRzPW91dHB1dDtcclxuLy8gdmFyIGhlbHBlcj1yZXF1aXJlKCcuLi8uLi91dGlsL2hlbHBlcicpO1xyXG4vLyB2YXIgc3RvcmU9cmVxdWlyZSgnLi4vLi4vdXRpbC9zdG9yZScpO1xyXG4vLyB2YXIgbGlzdD1bXVxyXG4vLyAgICAsZWxcclxuLy8gICAgLG9uX2NsaWNrXHJcbi8vICAgICxvbl9kZWxldGVcclxuLy8gICAgO1xyXG4vLyB2YXIgb3V0cHV0PXtcclxuLy8gICAgIGFkZDphZGQsXHJcbi8vICAgICByZW1vdmU6cmVtb3ZlLFxyXG4vLyAgICAgY2xlYXI6Y2xlYXIsXHJcbi8vICAgICByZW5kZXI6cmVuZGVyLFxyXG4vLyAgICAgaW5pdDppbml0LFxyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4vLyAgICAgICAgICAgIGVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuLy8gICAgICAgICAgICBvbl9jbGljaz1jb25maWcub25fY2xpY2s7XHJcbi8vICAgICAgICAgICAgb25fZGVsZXRlPWNvbmZpZy5vbl9kZWxldGU7XHJcbi8vICAgICAgICAgICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbi8vICAgICAgICAgICAgdGhyb3cnSW52YWxpZCByb290IGVsZW1lbnQnO1xyXG4vLyAgICAgICAgICAgc3luY190b19sYWRsZSgpOy8v6I635Y+W5Lic6KW/XHJcbi8vICAgICAgICAgICAgcmVuZGVyKCk7Ly/lho3muLLmn5NcclxuLy8gICAgICAgIH1cclxuLy8gZnVuY3Rpb24gcmVuZGVyKCl7XHJcbi8vICAgICBlbC5pbm5lckhUTUw9Jyc7XHJcbi8vICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCl7XHJcbi8vICAgICAgICAgdmFyIGVsX2tleXdvcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgZWxfa2V5d29yZC5pbm5lckhUTUw9YFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7a2V5d29yZH08L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCI+5Yig6ZmkPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4vLyAgICAgICAgICAgICBlbF9rZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTsvL+WKoGNzc+agt+W8j1xyXG4vLyAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuLy8gICAgICAgICAgICAgZWxfa2V5d29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAgICAgICAgIGlmKG9uX2NsaWNrKVxyXG4vLyAgICAgICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIGVsX2tleXdvcmQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob25fZGVsZXRlKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25fZGVsZXRlKGtleXdvcmQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHN5bmNfdG9fbGFkbGUoKXsvL+iOt+WPluS4nOilv1xyXG4vLyAgICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpfHxbXTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBzeW5jX3RvX3N0b3JlKCl7Ly/miorkuJzopb/mlL7ov5vlhrDnrrFcclxuLy8gICAgIHN0b3JlLnNldCgnaGlzdG9yeS1saXN0JyxsaXN0KTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkKGtleXdvcmQpe1xyXG4vLyAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgbGlzdC51bnNoaWZ0KGtleXdvcmQpO1xyXG4vLyAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgcmVuZGVyKCk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpe1xyXG4vLyAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgcmVuZGVyKCk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY2xlYXIoKXtcclxuLy8gICAgIGxpc3Q9W107XHJcbi8vICAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbi8vICAgICByZW5kZXIoKTtcclxuLy8gfVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHM9b3V0cHV0O1xyXG52YXIgaGVscGVyPXJlcXVpcmUoJy4uLy4uL3V0aWwvaGVscGVyJyk7XHJcbnZhciBzdG9yZT1yZXF1aXJlKCcuLi8uLi91dGlsL3N0b3JlJyk7XHJcblxyXG52YXIgZWxcclxuICAgLGxpc3Q9W11cclxuICAgLG9uX2NsaWNrXHJcbiAgICxvbl9kZWxldGVcclxuICAgb3V0cHV0PXtcclxuICAgICAgIGluaXQ6aW5pdCxcclxuICAgICAgIGFkZDphZGQsXHJcbiAgICAgICBjbGVhcjpjbGVhcixcclxuICAgICAgIHJlbW92ZTpyZW1vdmUsXHJcbiAgIH1cclxuICAgO1xyXG5mdW5jdGlvbiBpbml0KGNvbmZpZyl7XHJcbiAgICBlbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5lbCk7XHJcbiAgICBpZighY29uZmlnLmVsIHx8ICFlbClcclxuICAgIHRocm93J2Vycic7XHJcbiAgIG9uX2NsaWNrPWNvbmZpZy5vbl9jbGljaztcclxuICAgb25fZGVsZXRlPWNvbmZpZy5vbl9kZWxldGU7XHJcbiAgICBzeW5jX3RvX2xhZGxlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpe1xyXG4gICAgZWwuaW5uZXJIVE1MPScnO1xyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpe1xyXG4gICAgICAgIHZhciBlbF9rZXl3b3JkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsX2tleXdvcmQuaW5uZXJIVE1MPWBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj4ke2tleXdvcmR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiPuWIoOmZpDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgIGVsX2tleXdvcmQuY2xhc3NMaXN0LmFkZCgnaGlzdG9yeScpO1xyXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuICAgICAgICAgICAgZWxfa2V5d29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBpZihvbl9jbGljayl7XHJcbiAgICAgICAgICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlbF9rZXl3b3JkLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uX2RlbGV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uX2RlbGV0ZShrZXl3b3JkLGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICBcclxuXHJcblxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc3luY190b19sYWRsZSgpe1xyXG4gICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpIHx8IFtdO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmNfdG9fc3RvcmUoKXtcclxuICAgIHN0b3JlLnNldCgnaGlzdG9yeS1saXN0JyxsaXN0KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZChrZXl3b3JkKXtcclxuICAgIC8v5Yik5pat5piv5ZCm6YeN5aSNXHJcbiAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7XHJcbiAgICAvL+WKoOi/m2xpc3Tph4zpnaJcclxuICAgIGxpc3QudW5zaGlmdChrZXl3b3JkKTtcclxuICAgIC8v5pS+6L+b5Yaw566xXHJcbiAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbiAgICAvL+a4suafk+WHuuadpVxyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiByZW1vdmUoa2V5d29yZCl7XHJcbiAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7Ly/mib7miZPlubbkuJTliKDpmaRcclxuICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhcigpe1xyXG4gICAgbGlzdD1bXTtcclxuICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHM9b3V0cHV0O1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./history.js\n");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var history=__webpack_require__(/*! ./history */ \"./history.js\");\r\n\r\n\r\n// history.init({\r\n//     el:'#history-list',\r\n//     on_click:function(keyword,e){\r\n//         console.log(keyword);\r\n//     },\r\n//     on_delete:function(keyword,e){\r\n      \r\n//         console.log(keyword);\r\n\r\n//     },\r\n// });\r\n  \r\n// // //  history.remove('yo6');\r\n// // // history.clear();\r\n\r\nvar history=__webpack_require__(/*! ./history */ \"./history.js\");\r\nhistory.init({\r\n    el:'#history-list',\r\n    on_click:function(keyword){\r\n        console.log(keyword);\r\n    },\r\n    on_delete:function (keyword){\r\n        console.log(keyword);\r\n    }\r\n})\r\nhistory.add('eso');\r\nhistory.add('uo');\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdGVzdC5qcz9kNjA2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBoaXN0b3J5PXJlcXVpcmUoJy4vaGlzdG9yeScpO1xyXG5cclxuXHJcbi8vIGhpc3RvcnkuaW5pdCh7XHJcbi8vICAgICBlbDonI2hpc3RvcnktbGlzdCcsXHJcbi8vICAgICBvbl9jbGljazpmdW5jdGlvbihrZXl3b3JkLGUpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIG9uX2RlbGV0ZTpmdW5jdGlvbihrZXl3b3JkLGUpe1xyXG4gICAgICBcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuXHJcbi8vICAgICB9LFxyXG4vLyB9KTtcclxuICBcclxuLy8gLy8gLy8gIGhpc3RvcnkucmVtb3ZlKCd5bzYnKTtcclxuLy8gLy8gLy8gaGlzdG9yeS5jbGVhcigpO1xyXG5cclxudmFyIGhpc3Rvcnk9cmVxdWlyZSgnLi9oaXN0b3J5Jyk7XHJcbmhpc3RvcnkuaW5pdCh7XHJcbiAgICBlbDonI2hpc3RvcnktbGlzdCcsXHJcbiAgICBvbl9jbGljazpmdW5jdGlvbihrZXl3b3JkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuICAgIH0sXHJcbiAgICBvbl9kZWxldGU6ZnVuY3Rpb24gKGtleXdvcmQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xyXG4gICAgfVxyXG59KVxyXG5oaXN0b3J5LmFkZCgnZXNvJyk7XHJcbmhpc3RvcnkuYWRkKCd1bycpO1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./test.js\n");

/***/ })

/******/ });