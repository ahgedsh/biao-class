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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pagination.js":
/*!***********************!*\
  !*** ./pagination.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var \r\n//    page_amount\r\n//    ,config\r\n//    ,el_root\r\n//    ,el_pagination_list\r\n//    ;\r\n \r\n\r\n//   var  default_config={\r\n//     amount:null,\r\n//     limit:10,\r\n//     range:5,\r\n//     current:1\r\n\r\n//    }\r\n//    ,output={\r\n//        init:init\r\n//    }\r\n//    ;\r\n\r\n// function init(user_config){\r\n//     el_root=document.querySelector(user_config.el);//根元素\r\n//     config=Object.assign({},default_config,user_config);\r\n    \r\n//     calc_apge_amount();\r\n//     change_page(config.current);\r\n//     render_init();\r\n//     render_list();\r\n//     show_pagination();\r\n//     hide_pagination();\r\n// }\r\n\r\n// function render_init(){\r\n//     el_root.classList.add('pagination');\r\n    \r\n//     el_root.innerHTML=`\r\n//     <fieldset class=\"pagination-fieldset\">\r\n//     <div class=\"pagination-pre\">\r\n//         <button class=\"pagination-first\">First</button>\r\n//         <button class=\"pagination-prev\">Prev</button>\r\n//     </div>\r\n//     <div class=\"pagination-list\"></div>\r\n//     <div class=\"pagination-post\">\r\n//         <button class=\"pagination-next\">Next</button>\r\n//         <button class=\"pagination-last\">Last</button>\r\n//     </div>\r\n//     </fieldset>\r\n//     `;\r\n//     el_pagination_list=el_root.querySelector('.pagination-list');\r\n//     el_pagination_fieldset=el_root.querySelector('.pagination-fieldset');\r\n//     el_root.addEventListener('click',function(e){\r\n//         var target=e.target;\r\n//         var is_num_btn=target.classList.contains('pagination-item');\r\n//         var first=target.classList.contains('pagination-first');\r\n//         var prev=target.classList.contains('pagination-prev');\r\n//         var next=target.classList.contains('pagination-next');\r\n//         var last=target.classList.contains('pagination-last');\r\n//         if(is_num_btn){\r\n//         var page=parseInt(target.dataset.page)\r\n//         change_page(page);\r\n        \r\n//         }else if(first){\r\n//             change_page(1);\r\n\r\n//         }else if(last){\r\n//             change_page(page_amount);\r\n//         }else if(prev){\r\n//             change_page(config.current-1);\r\n//         }else if(next){\r\n//             change_page(config.current+1);\r\n//         }else{\r\n\r\n//         }\r\n\r\n//         render_list();\r\n//     })\r\n// }\r\n\r\n// function render_list(){\r\n    \r\n//     el_pagination_list.innerHTML='';\r\n//     //page_amount是否大于range是只能显示5个，不大于就只显示你自己有多少个 range就是显示5个\r\n//    // \r\n//    var between=calc_start_and_end()\r\n//       ,start=between.start\r\n//       ,end=between.end\r\n//       ;\r\n\r\n//     for(var i=start;i<=end;i++){\r\n//         var btn=document.createElement('button');\r\n//         btn.innerHTML=i;\r\n//         btn.classList.add('pagination-item');\r\n//         btn.dataset.page=i;\r\n//         el_pagination_list.appendChild(btn);\r\n\r\n//         if(i==config.current){\r\n//            btn.classList.add('active'); \r\n//         }\r\n//     }\r\n\r\n\r\n// }\r\n\r\n// function calc_start_and_end() {//计算开始和结束\r\n//     var start\r\n//       , end\r\n//       , middle = Math.ceil(config.range / 2)\r\n//       , reaching_left = config.current <= middle\r\n//       , reaching_right = config.current >= page_amount - middle\r\n//     ;\r\n  \r\n//     if (reaching_left) {\r\n//       start = 1;\r\n//       end = config.range;\r\n//     } else if (reaching_right) {\r\n//       start = page_amount - (config.range - 1);\r\n//       end = page_amount;\r\n//     } else {\r\n//       start = config.current - (middle - 1);//当前显示的位置减2\r\n//       end = config.current + (middle - 1);//当前显示的位置加2\r\n//     }\r\n  \r\n//     return {start: start, end: end};                                             \r\n// }\r\n\r\n\r\n// function calc_apge_amount(){//计算页数，就是总数除以每页显示的数\r\n//     page_amount=Math.ceil(config.amount/config.limit);\r\n// }\r\n\r\n\r\n// function change_page(page){\r\n\r\n//     var old=config.current;\r\n//     config.current=page;//当前页等于传进来的page\r\n//     if(page>page_amount)//页面大于页面总数就等于最后一页\r\n//        config.current=page_amount;\r\n//     if(page<1)//页面小于1当前页就等于1\r\n//     config.current=1;\r\n\r\n//     if(old==config.current)\r\n\r\n//     return;\r\n\r\n//     if(config.on_page_change){//通知使用者\r\n//         config.on_page_change(config.current);\r\n//     }\r\n\r\n      \r\n\r\n// }\r\n\r\n// function show_pagination(){\r\n//     el_pagination_fieldset.hidden=false;\r\n// }\r\n\r\n// function hide_pagination(){\r\n//     el_pagination_fieldset.hidden=true;\r\n// }\r\n\r\n// function is_disabled(){\r\n//     return el_pagination_fieldset.disabled;\r\n// }\r\n\r\n// module.exports=output;\r\n\r\nvar el_pagination\r\n    ,config\r\n    ,page_amount\r\n    ,el_pagination_list\r\n    ,el_pagination_fieldset\r\n    \r\n   ,default_config={\r\n       limit:10,\r\n       amount:null,\r\n       range:5,\r\n       current:1,\r\n   }\r\n   ,output={\r\n       init:init,\r\n       change_page:change_page,\r\n       disable:disable,\r\n       enable:enable,\r\n       is_disabled:is_disabled,\r\n   }\r\n\r\n   function init(user_config){\r\n       el_pagination=document.querySelector(user_config.el);\r\n       config=Object.assign({},default_config,user_config);\r\n       calc_page_amount();\r\n       change_page(config.current);\r\n       render_init();\r\n       render_list();\r\n\r\n   }\r\n   function calc_page_amount(){\r\n       page_amount=Math.ceil(config.amount/config.limit);\r\n   }\r\n   function calc_start_and_end(){\r\n       var start\r\n          ,end\r\n          ,middle=Math.ceil(config.range/2)\r\n          ,reaching_left=config.current<middle\r\n          ,reaching_right=config.current>page_amount-middle\r\n          ;\r\n        if(reaching_left){\r\n            start=1;\r\n            end=config.range;\r\n\r\n        }else if(reaching_right){\r\n            start=page_amount-(config.range-1);\r\n            end=page_amount;\r\n\r\n        }else{\r\n            start=config.current-(middle-1);\r\n            end=config.current+(middle-1);\r\n        }\r\n        return{start:start,end:end}\r\n   }\r\n\r\n   function render_init(){\r\n       el_pagination.classList.add('pagination');\r\n       el_pagination.innerHTML=`\r\n    <fieldset class='pagination-fieldset'>\r\n\r\n       <div class=\"pagination-pre\">\r\n        <button class=\"pagination-first\">First</button>\r\n        <button class=\"pagination-prev\">Prev</button>\r\n    </div>\r\n    <div class=\"pagination-list\"></div>\r\n    <div class=\"pagination-post\">\r\n        <button class=\"pagination-next\">Next</button>\r\n        <button class=\"pagination-last\">Last</button>\r\n    </div>\r\n   </fieldset>\r\n       `;\r\n       el_pagination_fieldset=el_pagination.querySelector('.pagination-fieldset');\r\n       el_pagination_list=el_pagination.querySelector('.pagination-list');\r\n       el_pagination.addEventListener('click',function(e){\r\n        \r\n           var target=e.target;\r\n           var is_num_btn=target.classList.contains('pagination-item')\r\n              ,first=target.classList.contains('pagination-first')\r\n              ,prev=target.classList.contains('pagination-prev')\r\n              ,next=target.classList.contains('pagination-next')\r\n              ,last=target.classList.contains('pagination-last')\r\n              ;\r\n              if(is_num_btn){\r\n                  var page=parseInt(target.dataset.page);\r\n                  change_page(page);\r\n\r\n              }else if(first){\r\n                  change_page(1);\r\n              }else if(prev){\r\n                  change_page(config.current-1);\r\n              }else if(last){\r\n                  change_page(page_amount);\r\n              }else if(next){\r\n                  change_page(config.current+1);\r\n              }else{\r\n\r\n              }\r\n              render_list();\r\n\r\n             \r\n\r\n       })\r\n   }\r\n\r\n   function render_list(){\r\n    // var length=page_amount>config.range ? config.range : page_amount;\r\n         el_pagination_list.innerHTML='';\r\n         var between=calc_start_and_end();\r\n         var start=between.start\r\n             ,end=between.end\r\n             ;\r\n       for(var i=start;i<=end;i++){\r\n           var btn=document.createElement('button');\r\n           btn.classList.add('pagination-item');//数字按钮组加类\r\n           btn.dataset.page=i;//给数字按钮设置data-page=i,冒泡的时候好选\r\n            btn.innerHTML=i;\r\n            el_pagination_list.appendChild(btn);\r\n            if(i==config.current){\r\n                btn.classList.add('active');\r\n            }\r\n\r\n           \r\n       }\r\n      \r\n   }\r\n   function change_page(page){\r\n       var old=config.current;\r\n       config.current=page;\r\n       if(page<1){\r\n           config.current=1;\r\n       }\r\n       if(page>page_amount){\r\n           config.current=page_amount;\r\n       }\r\n       if(old==config.current){\r\n           return;\r\n       }\r\n       if(config.on_page_change){\r\n           config.on_page_change(config.current);\r\n       }\r\n   }\r\n\r\n   function disable(){\r\n       el_pagination_fieldset.disabled=true;\r\n   }\r\n   function enable(){\r\n       el_pagination_fieldset.disabled=false;\r\n   }\r\n   function is_disabled(){\r\n       return el_pagination_fieldset.disabled;\r\n   }\r\n\r\n   module.exports=output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdpbmF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnaW5hdGlvbi5qcz9kMmFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBcclxuLy8gICAgcGFnZV9hbW91bnRcclxuLy8gICAgLGNvbmZpZ1xyXG4vLyAgICAsZWxfcm9vdFxyXG4vLyAgICAsZWxfcGFnaW5hdGlvbl9saXN0XHJcbi8vICAgIDtcclxuIFxyXG5cclxuLy8gICB2YXIgIGRlZmF1bHRfY29uZmlnPXtcclxuLy8gICAgIGFtb3VudDpudWxsLFxyXG4vLyAgICAgbGltaXQ6MTAsXHJcbi8vICAgICByYW5nZTo1LFxyXG4vLyAgICAgY3VycmVudDoxXHJcblxyXG4vLyAgICB9XHJcbi8vICAgICxvdXRwdXQ9e1xyXG4vLyAgICAgICAgaW5pdDppbml0XHJcbi8vICAgIH1cclxuLy8gICAgO1xyXG5cclxuLy8gZnVuY3Rpb24gaW5pdCh1c2VyX2NvbmZpZyl7XHJcbi8vICAgICBlbF9yb290PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlcl9jb25maWcuZWwpOy8v5qC55YWD57SgXHJcbi8vICAgICBjb25maWc9T2JqZWN0LmFzc2lnbih7fSxkZWZhdWx0X2NvbmZpZyx1c2VyX2NvbmZpZyk7XHJcbiAgICBcclxuLy8gICAgIGNhbGNfYXBnZV9hbW91bnQoKTtcclxuLy8gICAgIGNoYW5nZV9wYWdlKGNvbmZpZy5jdXJyZW50KTtcclxuLy8gICAgIHJlbmRlcl9pbml0KCk7XHJcbi8vICAgICByZW5kZXJfbGlzdCgpO1xyXG4vLyAgICAgc2hvd19wYWdpbmF0aW9uKCk7XHJcbi8vICAgICBoaWRlX3BhZ2luYXRpb24oKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcmVuZGVyX2luaXQoKXtcclxuLy8gICAgIGVsX3Jvb3QuY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbicpO1xyXG4gICAgXHJcbi8vICAgICBlbF9yb290LmlubmVySFRNTD1gXHJcbi8vICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwYWdpbmF0aW9uLWZpZWxkc2V0XCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wcmVcIj5cclxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1maXJzdFwiPkZpcnN0PC9idXR0b24+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tcHJldlwiPlByZXY8L2J1dHRvbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiPjwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcG9zdFwiPlxyXG4vLyAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLW5leHRcIj5OZXh0PC9idXR0b24+XHJcbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tbGFzdFwiPkxhc3Q8L2J1dHRvbj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPC9maWVsZHNldD5cclxuLy8gICAgIGA7XHJcbi8vICAgICBlbF9wYWdpbmF0aW9uX2xpc3Q9ZWxfcm9vdC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbi1saXN0Jyk7XHJcbi8vICAgICBlbF9wYWdpbmF0aW9uX2ZpZWxkc2V0PWVsX3Jvb3QucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24tZmllbGRzZXQnKTtcclxuLy8gICAgIGVsX3Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4vLyAgICAgICAgIHZhciB0YXJnZXQ9ZS50YXJnZXQ7XHJcbi8vICAgICAgICAgdmFyIGlzX251bV9idG49dGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1pdGVtJyk7XHJcbi8vICAgICAgICAgdmFyIGZpcnN0PXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tZmlyc3QnKTtcclxuLy8gICAgICAgICB2YXIgcHJldj10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLXByZXYnKTtcclxuLy8gICAgICAgICB2YXIgbmV4dD10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLW5leHQnKTtcclxuLy8gICAgICAgICB2YXIgbGFzdD10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLWxhc3QnKTtcclxuLy8gICAgICAgICBpZihpc19udW1fYnRuKXtcclxuLy8gICAgICAgICB2YXIgcGFnZT1wYXJzZUludCh0YXJnZXQuZGF0YXNldC5wYWdlKVxyXG4vLyAgICAgICAgIGNoYW5nZV9wYWdlKHBhZ2UpO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIH1lbHNlIGlmKGZpcnN0KXtcclxuLy8gICAgICAgICAgICAgY2hhbmdlX3BhZ2UoMSk7XHJcblxyXG4vLyAgICAgICAgIH1lbHNlIGlmKGxhc3Qpe1xyXG4vLyAgICAgICAgICAgICBjaGFuZ2VfcGFnZShwYWdlX2Ftb3VudCk7XHJcbi8vICAgICAgICAgfWVsc2UgaWYocHJldil7XHJcbi8vICAgICAgICAgICAgIGNoYW5nZV9wYWdlKGNvbmZpZy5jdXJyZW50LTEpO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmKG5leHQpe1xyXG4vLyAgICAgICAgICAgICBjaGFuZ2VfcGFnZShjb25maWcuY3VycmVudCsxKTtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICByZW5kZXJfbGlzdCgpO1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcmVuZGVyX2xpc3QoKXtcclxuICAgIFxyXG4vLyAgICAgZWxfcGFnaW5hdGlvbl9saXN0LmlubmVySFRNTD0nJztcclxuLy8gICAgIC8vcGFnZV9hbW91bnTmmK/lkKblpKfkuo5yYW5nZeaYr+WPquiDveaYvuekujXkuKrvvIzkuI3lpKfkuo7lsLHlj6rmmL7npLrkvaDoh6rlt7HmnInlpJrlsJHkuKogcmFuZ2XlsLHmmK/mmL7npLo15LiqXHJcbi8vICAgIC8vIFxyXG4vLyAgICB2YXIgYmV0d2Vlbj1jYWxjX3N0YXJ0X2FuZF9lbmQoKVxyXG4vLyAgICAgICAsc3RhcnQ9YmV0d2Vlbi5zdGFydFxyXG4vLyAgICAgICAsZW5kPWJldHdlZW4uZW5kXHJcbi8vICAgICAgIDtcclxuXHJcbi8vICAgICBmb3IodmFyIGk9c3RhcnQ7aTw9ZW5kO2krKyl7XHJcbi8vICAgICAgICAgdmFyIGJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gICAgICAgICBidG4uaW5uZXJIVE1MPWk7XHJcbi8vICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3BhZ2luYXRpb24taXRlbScpO1xyXG4vLyAgICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2U9aTtcclxuLy8gICAgICAgICBlbF9wYWdpbmF0aW9uX2xpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbi8vICAgICAgICAgaWYoaT09Y29uZmlnLmN1cnJlbnQpe1xyXG4vLyAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGNfc3RhcnRfYW5kX2VuZCgpIHsvL+iuoeeul+W8gOWni+WSjOe7k+adn1xyXG4vLyAgICAgdmFyIHN0YXJ0XHJcbi8vICAgICAgICwgZW5kXHJcbi8vICAgICAgICwgbWlkZGxlID0gTWF0aC5jZWlsKGNvbmZpZy5yYW5nZSAvIDIpXHJcbi8vICAgICAgICwgcmVhY2hpbmdfbGVmdCA9IGNvbmZpZy5jdXJyZW50IDw9IG1pZGRsZVxyXG4vLyAgICAgICAsIHJlYWNoaW5nX3JpZ2h0ID0gY29uZmlnLmN1cnJlbnQgPj0gcGFnZV9hbW91bnQgLSBtaWRkbGVcclxuLy8gICAgIDtcclxuICBcclxuLy8gICAgIGlmIChyZWFjaGluZ19sZWZ0KSB7XHJcbi8vICAgICAgIHN0YXJ0ID0gMTtcclxuLy8gICAgICAgZW5kID0gY29uZmlnLnJhbmdlO1xyXG4vLyAgICAgfSBlbHNlIGlmIChyZWFjaGluZ19yaWdodCkge1xyXG4vLyAgICAgICBzdGFydCA9IHBhZ2VfYW1vdW50IC0gKGNvbmZpZy5yYW5nZSAtIDEpO1xyXG4vLyAgICAgICBlbmQgPSBwYWdlX2Ftb3VudDtcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHN0YXJ0ID0gY29uZmlnLmN1cnJlbnQgLSAobWlkZGxlIC0gMSk7Ly/lvZPliY3mmL7npLrnmoTkvY3nva7lh48yXHJcbi8vICAgICAgIGVuZCA9IGNvbmZpZy5jdXJyZW50ICsgKG1pZGRsZSAtIDEpOy8v5b2T5YmN5pi+56S655qE5L2N572u5YqgMlxyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgcmV0dXJuIHtzdGFydDogc3RhcnQsIGVuZDogZW5kfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGNfYXBnZV9hbW91bnQoKXsvL+iuoeeul+mhteaVsO+8jOWwseaYr+aAu+aVsOmZpOS7peavj+mhteaYvuekuueahOaVsFxyXG4vLyAgICAgcGFnZV9hbW91bnQ9TWF0aC5jZWlsKGNvbmZpZy5hbW91bnQvY29uZmlnLmxpbWl0KTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNoYW5nZV9wYWdlKHBhZ2Upe1xyXG5cclxuLy8gICAgIHZhciBvbGQ9Y29uZmlnLmN1cnJlbnQ7XHJcbi8vICAgICBjb25maWcuY3VycmVudD1wYWdlOy8v5b2T5YmN6aG1562J5LqO5Lyg6L+b5p2l55qEcGFnZVxyXG4vLyAgICAgaWYocGFnZT5wYWdlX2Ftb3VudCkvL+mhtemdouWkp+S6jumhtemdouaAu+aVsOWwseetieS6juacgOWQjuS4gOmhtVxyXG4vLyAgICAgICAgY29uZmlnLmN1cnJlbnQ9cGFnZV9hbW91bnQ7XHJcbi8vICAgICBpZihwYWdlPDEpLy/pobXpnaLlsI/kuo4x5b2T5YmN6aG15bCx562J5LqOMVxyXG4vLyAgICAgY29uZmlnLmN1cnJlbnQ9MTtcclxuXHJcbi8vICAgICBpZihvbGQ9PWNvbmZpZy5jdXJyZW50KVxyXG5cclxuLy8gICAgIHJldHVybjtcclxuXHJcbi8vICAgICBpZihjb25maWcub25fcGFnZV9jaGFuZ2Upey8v6YCa55+l5L2/55So6ICFXHJcbi8vICAgICAgICAgY29uZmlnLm9uX3BhZ2VfY2hhbmdlKGNvbmZpZy5jdXJyZW50KTtcclxuLy8gICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gc2hvd19wYWdpbmF0aW9uKCl7XHJcbi8vICAgICBlbF9wYWdpbmF0aW9uX2ZpZWxkc2V0LmhpZGRlbj1mYWxzZTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gaGlkZV9wYWdpbmF0aW9uKCl7XHJcbi8vICAgICBlbF9wYWdpbmF0aW9uX2ZpZWxkc2V0LmhpZGRlbj10cnVlO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBpc19kaXNhYmxlZCgpe1xyXG4vLyAgICAgcmV0dXJuIGVsX3BhZ2luYXRpb25fZmllbGRzZXQuZGlzYWJsZWQ7XHJcbi8vIH1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzPW91dHB1dDtcclxuXHJcbnZhciBlbF9wYWdpbmF0aW9uXHJcbiAgICAsY29uZmlnXHJcbiAgICAscGFnZV9hbW91bnRcclxuICAgICxlbF9wYWdpbmF0aW9uX2xpc3RcclxuICAgICxlbF9wYWdpbmF0aW9uX2ZpZWxkc2V0XHJcbiAgICBcclxuICAgLGRlZmF1bHRfY29uZmlnPXtcclxuICAgICAgIGxpbWl0OjEwLFxyXG4gICAgICAgYW1vdW50Om51bGwsXHJcbiAgICAgICByYW5nZTo1LFxyXG4gICAgICAgY3VycmVudDoxLFxyXG4gICB9XHJcbiAgICxvdXRwdXQ9e1xyXG4gICAgICAgaW5pdDppbml0LFxyXG4gICAgICAgY2hhbmdlX3BhZ2U6Y2hhbmdlX3BhZ2UsXHJcbiAgICAgICBkaXNhYmxlOmRpc2FibGUsXHJcbiAgICAgICBlbmFibGU6ZW5hYmxlLFxyXG4gICAgICAgaXNfZGlzYWJsZWQ6aXNfZGlzYWJsZWQsXHJcbiAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIGluaXQodXNlcl9jb25maWcpe1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJfY29uZmlnLmVsKTtcclxuICAgICAgIGNvbmZpZz1PYmplY3QuYXNzaWduKHt9LGRlZmF1bHRfY29uZmlnLHVzZXJfY29uZmlnKTtcclxuICAgICAgIGNhbGNfcGFnZV9hbW91bnQoKTtcclxuICAgICAgIGNoYW5nZV9wYWdlKGNvbmZpZy5jdXJyZW50KTtcclxuICAgICAgIHJlbmRlcl9pbml0KCk7XHJcbiAgICAgICByZW5kZXJfbGlzdCgpO1xyXG5cclxuICAgfVxyXG4gICBmdW5jdGlvbiBjYWxjX3BhZ2VfYW1vdW50KCl7XHJcbiAgICAgICBwYWdlX2Ftb3VudD1NYXRoLmNlaWwoY29uZmlnLmFtb3VudC9jb25maWcubGltaXQpO1xyXG4gICB9XHJcbiAgIGZ1bmN0aW9uIGNhbGNfc3RhcnRfYW5kX2VuZCgpe1xyXG4gICAgICAgdmFyIHN0YXJ0XHJcbiAgICAgICAgICAsZW5kXHJcbiAgICAgICAgICAsbWlkZGxlPU1hdGguY2VpbChjb25maWcucmFuZ2UvMilcclxuICAgICAgICAgICxyZWFjaGluZ19sZWZ0PWNvbmZpZy5jdXJyZW50PG1pZGRsZVxyXG4gICAgICAgICAgLHJlYWNoaW5nX3JpZ2h0PWNvbmZpZy5jdXJyZW50PnBhZ2VfYW1vdW50LW1pZGRsZVxyXG4gICAgICAgICAgO1xyXG4gICAgICAgIGlmKHJlYWNoaW5nX2xlZnQpe1xyXG4gICAgICAgICAgICBzdGFydD0xO1xyXG4gICAgICAgICAgICBlbmQ9Y29uZmlnLnJhbmdlO1xyXG5cclxuICAgICAgICB9ZWxzZSBpZihyZWFjaGluZ19yaWdodCl7XHJcbiAgICAgICAgICAgIHN0YXJ0PXBhZ2VfYW1vdW50LShjb25maWcucmFuZ2UtMSk7XHJcbiAgICAgICAgICAgIGVuZD1wYWdlX2Ftb3VudDtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN0YXJ0PWNvbmZpZy5jdXJyZW50LShtaWRkbGUtMSk7XHJcbiAgICAgICAgICAgIGVuZD1jb25maWcuY3VycmVudCsobWlkZGxlLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm57c3RhcnQ6c3RhcnQsZW5kOmVuZH1cclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gcmVuZGVyX2luaXQoKXtcclxuICAgICAgIGVsX3BhZ2luYXRpb24uY2xhc3NMaXN0LmFkZCgncGFnaW5hdGlvbicpO1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbi5pbm5lckhUTUw9YFxyXG4gICAgPGZpZWxkc2V0IGNsYXNzPSdwYWdpbmF0aW9uLWZpZWxkc2V0Jz5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1wcmVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGFnaW5hdGlvbi1maXJzdFwiPkZpcnN0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tcHJldlwiPlByZXY8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb24tcG9zdFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uLW5leHRcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb24tbGFzdFwiPkxhc3Q8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgYDtcclxuICAgICAgIGVsX3BhZ2luYXRpb25fZmllbGRzZXQ9ZWxfcGFnaW5hdGlvbi5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbi1maWVsZHNldCcpO1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbl9saXN0PWVsX3BhZ2luYXRpb24ucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24tbGlzdCcpO1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgdmFyIHRhcmdldD1lLnRhcmdldDtcclxuICAgICAgICAgICB2YXIgaXNfbnVtX2J0bj10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLWl0ZW0nKVxyXG4gICAgICAgICAgICAgICxmaXJzdD10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLWZpcnN0JylcclxuICAgICAgICAgICAgICAscHJldj10YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uLXByZXYnKVxyXG4gICAgICAgICAgICAgICxuZXh0PXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb24tbmV4dCcpXHJcbiAgICAgICAgICAgICAgLGxhc3Q9dGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbi1sYXN0JylcclxuICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgaWYoaXNfbnVtX2J0bil7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBwYWdlPXBhcnNlSW50KHRhcmdldC5kYXRhc2V0LnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VfcGFnZShwYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgfWVsc2UgaWYoZmlyc3Qpe1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VfcGFnZSgxKTtcclxuICAgICAgICAgICAgICB9ZWxzZSBpZihwcmV2KXtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlX3BhZ2UoY29uZmlnLmN1cnJlbnQtMSk7XHJcbiAgICAgICAgICAgICAgfWVsc2UgaWYobGFzdCl7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZV9wYWdlKHBhZ2VfYW1vdW50KTtcclxuICAgICAgICAgICAgICB9ZWxzZSBpZihuZXh0KXtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlX3BhZ2UoY29uZmlnLmN1cnJlbnQrMSk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZW5kZXJfbGlzdCgpO1xyXG5cclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgIH0pXHJcbiAgIH1cclxuXHJcbiAgIGZ1bmN0aW9uIHJlbmRlcl9saXN0KCl7XHJcbiAgICAvLyB2YXIgbGVuZ3RoPXBhZ2VfYW1vdW50PmNvbmZpZy5yYW5nZSA/IGNvbmZpZy5yYW5nZSA6IHBhZ2VfYW1vdW50O1xyXG4gICAgICAgICBlbF9wYWdpbmF0aW9uX2xpc3QuaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICB2YXIgYmV0d2Vlbj1jYWxjX3N0YXJ0X2FuZF9lbmQoKTtcclxuICAgICAgICAgdmFyIHN0YXJ0PWJldHdlZW4uc3RhcnRcclxuICAgICAgICAgICAgICxlbmQ9YmV0d2Vlbi5lbmRcclxuICAgICAgICAgICAgIDtcclxuICAgICAgIGZvcih2YXIgaT1zdGFydDtpPD1lbmQ7aSsrKXtcclxuICAgICAgICAgICB2YXIgYnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWdpbmF0aW9uLWl0ZW0nKTsvL+aVsOWtl+aMiemSrue7hOWKoOexu1xyXG4gICAgICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2U9aTsvL+e7meaVsOWtl+aMiemSruiuvue9rmRhdGEtcGFnZT1pLOWGkuazoeeahOaXtuWAmeWlvemAiVxyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MPWk7XHJcbiAgICAgICAgICAgIGVsX3BhZ2luYXRpb25fbGlzdC5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICAgICAgICBpZihpPT1jb25maWcuY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIGZ1bmN0aW9uIGNoYW5nZV9wYWdlKHBhZ2Upe1xyXG4gICAgICAgdmFyIG9sZD1jb25maWcuY3VycmVudDtcclxuICAgICAgIGNvbmZpZy5jdXJyZW50PXBhZ2U7XHJcbiAgICAgICBpZihwYWdlPDEpe1xyXG4gICAgICAgICAgIGNvbmZpZy5jdXJyZW50PTE7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZihwYWdlPnBhZ2VfYW1vdW50KXtcclxuICAgICAgICAgICBjb25maWcuY3VycmVudD1wYWdlX2Ftb3VudDtcclxuICAgICAgIH1cclxuICAgICAgIGlmKG9sZD09Y29uZmlnLmN1cnJlbnQpe1xyXG4gICAgICAgICAgIHJldHVybjtcclxuICAgICAgIH1cclxuICAgICAgIGlmKGNvbmZpZy5vbl9wYWdlX2NoYW5nZSl7XHJcbiAgICAgICAgICAgY29uZmlnLm9uX3BhZ2VfY2hhbmdlKGNvbmZpZy5jdXJyZW50KTtcclxuICAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZnVuY3Rpb24gZGlzYWJsZSgpe1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbl9maWVsZHNldC5kaXNhYmxlZD10cnVlO1xyXG4gICB9XHJcbiAgIGZ1bmN0aW9uIGVuYWJsZSgpe1xyXG4gICAgICAgZWxfcGFnaW5hdGlvbl9maWVsZHNldC5kaXNhYmxlZD1mYWxzZTtcclxuICAgfVxyXG4gICBmdW5jdGlvbiBpc19kaXNhYmxlZCgpe1xyXG4gICAgICAgcmV0dXJuIGVsX3BhZ2luYXRpb25fZmllbGRzZXQuZGlzYWJsZWQ7XHJcbiAgIH1cclxuXHJcbiAgIG1vZHVsZS5leHBvcnRzPW91dHB1dDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pagination.js\n");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pagination=__webpack_require__(/*! ../pagination.js */ \"./pagination.js\");\r\n\r\npagination.init({\r\n    el:'#page',\r\n    amount:100,\r\n    limit:10,\r\n     range:5,//可以看到的数量 max_btn_length\r\n     current:-1,\r\n     on_page_change:function(page,e){\r\n         console.log(page);\r\n         \r\n     }\r\n\r\n})\r\n// setInterval(function(){\r\n//  if(pagination.is_disabled())\r\n//  pagination.enable();\r\n//  else{\r\n//      pagination.disable();\r\n//  }\r\n// },500);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0L3Rlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L3Rlc3QuanM/MzdhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnaW5hdGlvbj1yZXF1aXJlKCcuLi9wYWdpbmF0aW9uLmpzJyk7XHJcblxyXG5wYWdpbmF0aW9uLmluaXQoe1xyXG4gICAgZWw6JyNwYWdlJyxcclxuICAgIGFtb3VudDoxMDAsXHJcbiAgICBsaW1pdDoxMCxcclxuICAgICByYW5nZTo1LC8v5Y+v5Lul55yL5Yiw55qE5pWw6YePIG1heF9idG5fbGVuZ3RoXHJcbiAgICAgY3VycmVudDotMSxcclxuICAgICBvbl9wYWdlX2NoYW5nZTpmdW5jdGlvbihwYWdlLGUpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcclxuICAgICAgICAgXHJcbiAgICAgfVxyXG5cclxufSlcclxuLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuLy8gIGlmKHBhZ2luYXRpb24uaXNfZGlzYWJsZWQoKSlcclxuLy8gIHBhZ2luYXRpb24uZW5hYmxlKCk7XHJcbi8vICBlbHNle1xyXG4vLyAgICAgIHBhZ2luYXRpb24uZGlzYWJsZSgpO1xyXG4vLyAgfVxyXG4vLyB9LDUwMCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./test/test.js\n");

/***/ })

/******/ });