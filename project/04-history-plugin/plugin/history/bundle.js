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
/*!***************************************************!*\
  !*** c:/biao-class/prictice/52/js/util/helper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function find_and_delete(arr,element){\r\n    var shit_index=arr.indexOf(element);\r\n    if(shit_index==-1)\r\n    return false;\r\n    arr.splice(shit_index,1)\r\n    return true;\r\n\r\n}\r\nmodule.exports={\r\n    find_and_delete,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbC9oZWxwZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYzovYmlhby1jbGFzcy9wcmljdGljZS81Mi9qcy91dGlsL2hlbHBlci5qcz9hOGY5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZpbmRfYW5kX2RlbGV0ZShhcnIsZWxlbWVudCl7XHJcbiAgICB2YXIgc2hpdF9pbmRleD1hcnIuaW5kZXhPZihlbGVtZW50KTtcclxuICAgIGlmKHNoaXRfaW5kZXg9PS0xKVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgYXJyLnNwbGljZShzaGl0X2luZGV4LDEpXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgZmluZF9hbmRfZGVsZXRlLFxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../util/helper.js\n");

/***/ }),

/***/ "../../util/store.js":
/*!**************************************************!*\
  !*** c:/biao-class/prictice/52/js/util/store.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// function set(key,val){\r\n//     var json=JSON.stringify(val);\r\n//     localStorage.setItem(key,json);\r\n    \r\n// }\r\n\r\n// function get(key){\r\n//     var json=localStorage.getItem(key);\r\n//     return JSON.parse(json);\r\n   \r\n\r\n// }\r\n// module.exports={\r\n//     get,\r\n//     set,\r\n// }\r\nfunction set(key, val) {\r\n    /*加保鲜膜（JSON化）*/\r\n    var json = JSON.stringify(val);\r\n    /*存冰箱（状态稳定不轻易改变）*/\r\n    localStorage.setItem(key, json);\r\n  }\r\n  \r\n  /*从冰箱取*/\r\n  function get(key) {\r\n    /*从冰箱取到带保鲜膜的数据*/\r\n    var json = localStorage.getItem(key);\r\n    /*撕膜（将数据转化为JS可以理解的数据类型）*/\r\n    return JSON.parse(json);\r\n  }\r\n  \r\n  module.exports = {\r\n    set: set,\r\n    get: get,\r\n  }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vdXRpbC9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jOi9iaWFvLWNsYXNzL3ByaWN0aWNlLzUyL2pzL3V0aWwvc3RvcmUuanM/MmU4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBzZXQoa2V5LHZhbCl7XHJcbi8vICAgICB2YXIganNvbj1KU09OLnN0cmluZ2lmeSh2YWwpO1xyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LGpzb24pO1xyXG4gICAgXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldChrZXkpe1xyXG4vLyAgICAgdmFyIGpzb249bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuLy8gICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xyXG4gICBcclxuXHJcbi8vIH1cclxuLy8gbW9kdWxlLmV4cG9ydHM9e1xyXG4vLyAgICAgZ2V0LFxyXG4vLyAgICAgc2V0LFxyXG4vLyB9XHJcbmZ1bmN0aW9uIHNldChrZXksIHZhbCkge1xyXG4gICAgLyrliqDkv53pspzohpzvvIhKU09O5YyW77yJKi9cclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcclxuICAgIC8q5a2Y5Yaw566x77yI54q25oCB56iz5a6a5LiN6L275piT5pS55Y+Y77yJKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwganNvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC8q5LuO5Yaw566x5Y+WKi9cclxuICBmdW5jdGlvbiBnZXQoa2V5KSB7XHJcbiAgICAvKuS7juWGsOeuseWPluWIsOW4puS/nemynOiGnOeahOaVsOaNriovXHJcbiAgICB2YXIganNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAvKuaSleiGnO+8iOWwhuaVsOaNrui9rOWMluS4ukpT5Y+v5Lul55CG6Kej55qE5pWw5o2u57G75Z6L77yJKi9cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24pO1xyXG4gIH1cclxuICBcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNldDogc2V0LFxyXG4gICAgZ2V0OiBnZXQsXHJcbiAgfVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../util/store.js\n");

/***/ }),

/***/ "./history.js":
/*!********************!*\
  !*** ./history.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var helper=require('../../util/helper');\r\n// var store=require('../../util/store');\r\n\r\n\r\n// var list=[]\r\n//     ,el\r\n//     ,on_click\r\n//     ,on_delete\r\n//    ;\r\n//    var output={\r\n//        add:add,\r\n//        remove:remove,\r\n//        clear:clear,\r\n//        init:init,\r\n\r\n//    }\r\n//    function init(config){\r\n//        el=document.querySelector(config.el);\r\n//        on_click=config.on_click;\r\n//        on_delete=config.on_delete;\r\n//        if(!config.el || !el)\r\n//        throw'Invalid root element';\r\n//       sync_to_ladle();\r\n//        render();\r\n//    }\r\n//    function render(){\r\n//        el.innerHTML='';\r\n//        list.forEach(function(keyword){\r\n//            var el_keyword=document.createElement('div');\r\n//            el_keyword.innerHTML=`\r\n//            <div class=\"text\">${keyword}</div>\r\n//            <div class=\"tool\">\r\n//              <span class=\"delete\">删除</span>\r\n//            </div>`;\r\n//            el_keyword.classList.add('history');\r\n//            el.appendChild(el_keyword);\r\n//            el_keyword.addEventListener('click',function(){\r\n//                if(on_click)\r\n//             on_click(keyword);\r\n//            });\r\n//            el_keyword.querySelector('.delete')\r\n//            .addEventListener('click',function(e){\r\n//             e.stopPropagation();  \r\n//              if(on_delete)\r\n//              on_delete(keyword);\r\n//              remove(keyword);\r\n//         })  \r\n//        })\r\n       \r\n//    }\r\n//    function sync_to_store(){\r\n//        store.set('history-list',list);\r\n\r\n//    }\r\n//    function sync_to_ladle(){\r\n//        list=store.get('history-list') || [];\r\n\r\n//    }\r\n//    function add(keyword){\r\n//        helper.find_and_delete(list,keyword);\r\n//        list.unshift(keyword);\r\n//        sync_to_store();\r\n//        render();\r\n//    }\r\n   \r\n//    function remove(keyword){\r\n//        helper.find_and_delete(list,keyword);\r\n//        sync_to_store();\r\n//        render();\r\n       \r\n//    }\r\n//    function clear(){\r\n//        list=[];\r\n//        sync_to_store();\r\n//        render();\r\n//    }\r\n\r\n   \r\n\r\n  \r\n// module.exports=output;\r\n// var helper=require('../../util/helper');\r\n// var store=require('../../util/store');\r\n// var list=[]\r\n//    ,el\r\n//    ,on_click\r\n//    ,on_delete\r\n//    ;\r\n// var output={\r\n//     add:add,\r\n//     remove:remove,\r\n//     clear:clear,\r\n//     render:render,\r\n//     init:init,\r\n// }\r\n\r\n\r\n// function init(config){\r\n//            el=document.querySelector(config.el);\r\n//            on_click=config.on_click;\r\n//            on_delete=config.on_delete;\r\n//            if(!config.el || !el)\r\n//            throw'Invalid root element';\r\n//           sync_to_ladle();//获取东西\r\n//            render();//再渲染\r\n//        }\r\n// function render(){\r\n//     el.innerHTML='';\r\n//     list.forEach(function(keyword){\r\n//         var el_keyword=document.createElement('div');\r\n//         el_keyword.innerHTML=`\r\n//             <div class=\"text\">${keyword}</div>\r\n//             <div class=\"tool\">\r\n//                 <span class=\"delete\">删除</span>\r\n//             </div>`;\r\n//             el_keyword.classList.add('history');//加css样式\r\n//             el.appendChild(el_keyword);\r\n//             el_keyword.addEventListener('click',function(){\r\n//                 if(on_click)\r\n//                 on_click(keyword);\r\n//             })\r\n//             el_keyword.querySelector('.delete')\r\n//                       .addEventListener('click',function(e){\r\n//                           e.stopPropagation();\r\n//                           if(on_delete){\r\n//                               on_delete(keyword);\r\n//                               remove(keyword);\r\n//                           }\r\n//                       })\r\n//     })\r\n// }\r\n\r\n\r\n\r\n\r\n// function sync_to_ladle(){//获取东西\r\n//     list=store.get('history-list')||[];\r\n// }\r\n// function sync_to_store(){//把东西放进冰箱\r\n//     store.set('history-list',list);\r\n// }\r\n\r\n// function add(keyword){\r\n//     helper.find_and_delete(list,keyword);\r\n//     list.unshift(keyword);\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n// function remove(keyword){\r\n//     helper.find_and_delete(list,keyword);\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n// function clear(){\r\n//     list=[];\r\n//     sync_to_store();\r\n//     render();\r\n// }\r\n\r\n// module.exports=output;\r\nvar helper=__webpack_require__(/*! ../../util/helper */ \"../../util/helper.js\");\r\nvar store=__webpack_require__(/*! ../../util/store */ \"../../util/store.js\");\r\n\r\nvar el\r\n   ,list=[]\r\n   ,on_click\r\n   ,on_delete\r\n   output={\r\n       init:init,\r\n       add:add,\r\n       clear:clear,\r\n       remove:remove,\r\n      // hide:hide,\r\n       //show:show,\r\n       is_visible:is_visible,\r\n   }\r\n   ;\r\nfunction init(config){\r\n    el=document.querySelector(config.el);\r\n    if(!config.el || !el)\r\n    throw'err';\r\n   on_click=config.on_click;\r\n   on_delete=config.on_delete;\r\n    sync_to_ladle();\r\n    render();\r\n\r\n\r\n\r\n}\r\nfunction hide(){\r\n    el.hidden=true;\r\n}\r\n\r\n function show(){\r\n     el.hidden=false;\r\n }\r\nfunction is_visible(){\r\n    return !el.hidden;\r\n}\r\n\r\nfunction render(){\r\n    el.innerHTML='';\r\n    list.forEach(function(keyword){\r\n        var el_keyword=document.createElement('div');\r\n        el_keyword.innerHTML=`\r\n            <div class=\"text\">${keyword}</div>\r\n            <div class=\"tool\">\r\n                <span class=\"delete\">删除</span>\r\n            </div>`;\r\n\r\n            el_keyword.classList.add('history');\r\n            el.appendChild(el_keyword);\r\n            el_keyword.addEventListener('click',function(e){\r\n                if(on_click){\r\n                    on_click(keyword,e);\r\n                }\r\n \r\n            })\r\n            el_keyword.querySelector('.delete')\r\n                      .addEventListener('click',function(e){\r\n                          e.stopPropagation();\r\n                          if(on_delete){\r\n                              on_delete(keyword,e);\r\n                              remove(keyword);\r\n                          }\r\n\r\n                      })\r\n      })\r\n    \r\n\r\n\r\n\r\n}\r\n\r\nfunction sync_to_ladle(){\r\n    list=store.get('history-list') || [];\r\n}\r\nfunction sync_to_store(){\r\n    store.set('history-list',list);\r\n}\r\n\r\n\r\nfunction add(keyword){\r\n    //判断是否重复\r\n    helper.find_and_delete(list,keyword);\r\n    //加进list里面\r\n    list.unshift(keyword);\r\n    //放进冰箱\r\n    sync_to_store();\r\n    //渲染出来\r\n    render();\r\n    \r\n}\r\nfunction remove(keyword){\r\n    helper.find_and_delete(list,keyword);//找打并且删除\r\n    sync_to_store();\r\n    render();\r\n}\r\n\r\nfunction clear(){\r\n    list=[];\r\n    sync_to_store();\r\n    render();\r\n}\r\n\r\n\r\nmodule.exports=output;\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGlzdG9yeS5qcz80ODZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBoZWxwZXI9cmVxdWlyZSgnLi4vLi4vdXRpbC9oZWxwZXInKTtcclxuLy8gdmFyIHN0b3JlPXJlcXVpcmUoJy4uLy4uL3V0aWwvc3RvcmUnKTtcclxuXHJcblxyXG4vLyB2YXIgbGlzdD1bXVxyXG4vLyAgICAgLGVsXHJcbi8vICAgICAsb25fY2xpY2tcclxuLy8gICAgICxvbl9kZWxldGVcclxuLy8gICAgO1xyXG4vLyAgICB2YXIgb3V0cHV0PXtcclxuLy8gICAgICAgIGFkZDphZGQsXHJcbi8vICAgICAgICByZW1vdmU6cmVtb3ZlLFxyXG4vLyAgICAgICAgY2xlYXI6Y2xlYXIsXHJcbi8vICAgICAgICBpbml0OmluaXQsXHJcblxyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIGluaXQoY29uZmlnKXtcclxuLy8gICAgICAgIGVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuLy8gICAgICAgIG9uX2NsaWNrPWNvbmZpZy5vbl9jbGljaztcclxuLy8gICAgICAgIG9uX2RlbGV0ZT1jb25maWcub25fZGVsZXRlO1xyXG4vLyAgICAgICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbi8vICAgICAgICB0aHJvdydJbnZhbGlkIHJvb3QgZWxlbWVudCc7XHJcbi8vICAgICAgIHN5bmNfdG9fbGFkbGUoKTtcclxuLy8gICAgICAgIHJlbmRlcigpO1xyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIHJlbmRlcigpe1xyXG4vLyAgICAgICAgZWwuaW5uZXJIVE1MPScnO1xyXG4vLyAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpe1xyXG4vLyAgICAgICAgICAgIHZhciBlbF9rZXl3b3JkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgICAgIGVsX2tleXdvcmQuaW5uZXJIVE1MPWBcclxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7a2V5d29yZH08L2Rpdj5cclxuLy8gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbFwiPlxyXG4vLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIj7liKDpmaQ8L3NwYW4+XHJcbi8vICAgICAgICAgICAgPC9kaXY+YDtcclxuLy8gICAgICAgICAgICBlbF9rZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcclxuLy8gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuLy8gICAgICAgICAgICBlbF9rZXl3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgICAgICAgICBpZihvbl9jbGljaylcclxuLy8gICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgZWxfa2V5d29yZC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJylcclxuLy8gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4vLyAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgXHJcbi8vICAgICAgICAgICAgICBpZihvbl9kZWxldGUpXHJcbi8vICAgICAgICAgICAgICBvbl9kZWxldGUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgfSkgIFxyXG4vLyAgICAgICAgfSlcclxuICAgICAgIFxyXG4vLyAgICB9XHJcbi8vICAgIGZ1bmN0aW9uIHN5bmNfdG9fc3RvcmUoKXtcclxuLy8gICAgICAgIHN0b3JlLnNldCgnaGlzdG9yeS1saXN0JyxsaXN0KTtcclxuXHJcbi8vICAgIH1cclxuLy8gICAgZnVuY3Rpb24gc3luY190b19sYWRsZSgpe1xyXG4vLyAgICAgICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpIHx8IFtdO1xyXG5cclxuLy8gICAgfVxyXG4vLyAgICBmdW5jdGlvbiBhZGQoa2V5d29yZCl7XHJcbi8vICAgICAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZCk7XHJcbi8vICAgICAgICBsaXN0LnVuc2hpZnQoa2V5d29yZCk7XHJcbi8vICAgICAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbi8vICAgICAgICByZW5kZXIoKTtcclxuLy8gICAgfVxyXG4gICBcclxuLy8gICAgZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpe1xyXG4vLyAgICAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgICBcclxuLy8gICAgfVxyXG4vLyAgICBmdW5jdGlvbiBjbGVhcigpe1xyXG4vLyAgICAgICAgbGlzdD1bXTtcclxuLy8gICAgICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuLy8gICAgICAgIHJlbmRlcigpO1xyXG4vLyAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgXHJcbi8vIG1vZHVsZS5leHBvcnRzPW91dHB1dDtcclxuLy8gdmFyIGhlbHBlcj1yZXF1aXJlKCcuLi8uLi91dGlsL2hlbHBlcicpO1xyXG4vLyB2YXIgc3RvcmU9cmVxdWlyZSgnLi4vLi4vdXRpbC9zdG9yZScpO1xyXG4vLyB2YXIgbGlzdD1bXVxyXG4vLyAgICAsZWxcclxuLy8gICAgLG9uX2NsaWNrXHJcbi8vICAgICxvbl9kZWxldGVcclxuLy8gICAgO1xyXG4vLyB2YXIgb3V0cHV0PXtcclxuLy8gICAgIGFkZDphZGQsXHJcbi8vICAgICByZW1vdmU6cmVtb3ZlLFxyXG4vLyAgICAgY2xlYXI6Y2xlYXIsXHJcbi8vICAgICByZW5kZXI6cmVuZGVyLFxyXG4vLyAgICAgaW5pdDppbml0LFxyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4vLyAgICAgICAgICAgIGVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuLy8gICAgICAgICAgICBvbl9jbGljaz1jb25maWcub25fY2xpY2s7XHJcbi8vICAgICAgICAgICAgb25fZGVsZXRlPWNvbmZpZy5vbl9kZWxldGU7XHJcbi8vICAgICAgICAgICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbi8vICAgICAgICAgICAgdGhyb3cnSW52YWxpZCByb290IGVsZW1lbnQnO1xyXG4vLyAgICAgICAgICAgc3luY190b19sYWRsZSgpOy8v6I635Y+W5Lic6KW/XHJcbi8vICAgICAgICAgICAgcmVuZGVyKCk7Ly/lho3muLLmn5NcclxuLy8gICAgICAgIH1cclxuLy8gZnVuY3Rpb24gcmVuZGVyKCl7XHJcbi8vICAgICBlbC5pbm5lckhUTUw9Jyc7XHJcbi8vICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCl7XHJcbi8vICAgICAgICAgdmFyIGVsX2tleXdvcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgICAgZWxfa2V5d29yZC5pbm5lckhUTUw9YFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7a2V5d29yZH08L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCI+5Yig6ZmkPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4vLyAgICAgICAgICAgICBlbF9rZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTsvL+WKoGNzc+agt+W8j1xyXG4vLyAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChlbF9rZXl3b3JkKTtcclxuLy8gICAgICAgICAgICAgZWxfa2V5d29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAgICAgICAgIGlmKG9uX2NsaWNrKVxyXG4vLyAgICAgICAgICAgICAgICAgb25fY2xpY2soa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIGVsX2tleXdvcmQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob25fZGVsZXRlKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25fZGVsZXRlKGtleXdvcmQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoa2V5d29yZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuLy8gICAgIH0pXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIHN5bmNfdG9fbGFkbGUoKXsvL+iOt+WPluS4nOilv1xyXG4vLyAgICAgbGlzdD1zdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpfHxbXTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBzeW5jX3RvX3N0b3JlKCl7Ly/miorkuJzopb/mlL7ov5vlhrDnrrFcclxuLy8gICAgIHN0b3JlLnNldCgnaGlzdG9yeS1saXN0JyxsaXN0KTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkKGtleXdvcmQpe1xyXG4vLyAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgbGlzdC51bnNoaWZ0KGtleXdvcmQpO1xyXG4vLyAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgcmVuZGVyKCk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpe1xyXG4vLyAgICAgaGVscGVyLmZpbmRfYW5kX2RlbGV0ZShsaXN0LGtleXdvcmQpO1xyXG4vLyAgICAgc3luY190b19zdG9yZSgpO1xyXG4vLyAgICAgcmVuZGVyKCk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gY2xlYXIoKXtcclxuLy8gICAgIGxpc3Q9W107XHJcbi8vICAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbi8vICAgICByZW5kZXIoKTtcclxuLy8gfVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHM9b3V0cHV0O1xyXG52YXIgaGVscGVyPXJlcXVpcmUoJy4uLy4uL3V0aWwvaGVscGVyJyk7XHJcbnZhciBzdG9yZT1yZXF1aXJlKCcuLi8uLi91dGlsL3N0b3JlJyk7XHJcblxyXG52YXIgZWxcclxuICAgLGxpc3Q9W11cclxuICAgLG9uX2NsaWNrXHJcbiAgICxvbl9kZWxldGVcclxuICAgb3V0cHV0PXtcclxuICAgICAgIGluaXQ6aW5pdCxcclxuICAgICAgIGFkZDphZGQsXHJcbiAgICAgICBjbGVhcjpjbGVhcixcclxuICAgICAgIHJlbW92ZTpyZW1vdmUsXHJcbiAgICAgIC8vIGhpZGU6aGlkZSxcclxuICAgICAgIC8vc2hvdzpzaG93LFxyXG4gICAgICAgaXNfdmlzaWJsZTppc192aXNpYmxlLFxyXG4gICB9XHJcbiAgIDtcclxuZnVuY3Rpb24gaW5pdChjb25maWcpe1xyXG4gICAgZWw9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWwpO1xyXG4gICAgaWYoIWNvbmZpZy5lbCB8fCAhZWwpXHJcbiAgICB0aHJvdydlcnInO1xyXG4gICBvbl9jbGljaz1jb25maWcub25fY2xpY2s7XHJcbiAgIG9uX2RlbGV0ZT1jb25maWcub25fZGVsZXRlO1xyXG4gICAgc3luY190b19sYWRsZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcblxyXG5cclxuXHJcbn1cclxuZnVuY3Rpb24gaGlkZSgpe1xyXG4gICAgZWwuaGlkZGVuPXRydWU7XHJcbn1cclxuXHJcbiBmdW5jdGlvbiBzaG93KCl7XHJcbiAgICAgZWwuaGlkZGVuPWZhbHNlO1xyXG4gfVxyXG5mdW5jdGlvbiBpc192aXNpYmxlKCl7XHJcbiAgICByZXR1cm4gIWVsLmhpZGRlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICBlbC5pbm5lckhUTUw9Jyc7XHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCl7XHJcbiAgICAgICAgdmFyIGVsX2tleXdvcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxfa2V5d29yZC5pbm5lckhUTUw9YFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7a2V5d29yZH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCI+5Yig6ZmkPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICAgICAgZWxfa2V5d29yZC5jbGFzc0xpc3QuYWRkKCdoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGVsX2tleXdvcmQpO1xyXG4gICAgICAgICAgICBlbF9rZXl3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGlmKG9uX2NsaWNrKXtcclxuICAgICAgICAgICAgICAgICAgICBvbl9jbGljayhrZXl3b3JkLGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVsX2tleXdvcmQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob25fZGVsZXRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25fZGVsZXRlKGtleXdvcmQsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShrZXl3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIFxyXG5cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jX3RvX2xhZGxlKCl7XHJcbiAgICBsaXN0PXN0b3JlLmdldCgnaGlzdG9yeS1saXN0JykgfHwgW107XHJcbn1cclxuZnVuY3Rpb24gc3luY190b19zdG9yZSgpe1xyXG4gICAgc3RvcmUuc2V0KCdoaXN0b3J5LWxpc3QnLGxpc3QpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkKGtleXdvcmQpe1xyXG4gICAgLy/liKTmlq3mmK/lkKbph43lpI1cclxuICAgIGhlbHBlci5maW5kX2FuZF9kZWxldGUobGlzdCxrZXl3b3JkKTtcclxuICAgIC8v5Yqg6L+bbGlzdOmHjOmdolxyXG4gICAgbGlzdC51bnNoaWZ0KGtleXdvcmQpO1xyXG4gICAgLy/mlL7ov5vlhrDnrrFcclxuICAgIHN5bmNfdG9fc3RvcmUoKTtcclxuICAgIC8v5riy5p+T5Ye65p2lXHJcbiAgICByZW5kZXIoKTtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZShrZXl3b3JkKXtcclxuICAgIGhlbHBlci5maW5kX2FuZF9kZWxldGUobGlzdCxrZXl3b3JkKTsvL+aJvuaJk+W5tuS4lOWIoOmZpFxyXG4gICAgc3luY190b19zdG9yZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICBsaXN0PVtdO1xyXG4gICAgc3luY190b19zdG9yZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cz1vdXRwdXQ7XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./history.js\n");

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