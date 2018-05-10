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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pagination.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pagination.js":
/*!***********************!*\
  !*** ./pagination.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function init(config){\r\n    el_pagination=document.querySelector(config.el_pagination);\r\n}\r\n\r\n\r\n\r\n\r\nvar current_page=1\r\n   ,max_btn_length=5\r\n   ,page_amount=15\r\n   ;\r\n\r\nfunction render(){\r\n    el_pagination.innerHTML='';\r\n    var middle=Math.ceil(max_btn_length/2)\r\n      ,renaching_left=current_page<=middle\r\n      ,renaching_right=current_page>=page_amount-middle\r\n      ,start\r\n      ,end\r\n      ;\r\n\r\n      if(renaching_left){\r\n          start=1;\r\n           end=max_btn_length;\r\n          \r\n      }else if(renaching_right){\r\n          start=page_amount-(max_btn_length-1);\r\n          end=page_amount;\r\n      }else{\r\n          start=current_page-(middle-1);\r\n          end=current_page+(middle-1);\r\n      }\r\n\r\n      \r\n      for(var i=start;i<=end;i++){\r\n         var btn=document.createElement('button');\r\n          btn.innerText=i;\r\n          btn.dataset.page=i;\r\n          if(i==current_page){\r\n\r\n             btn.style.background='pink';\r\n               }\r\n               el_pagination.appendChild(btn);\r\n               btn.addEventListener('click',function(e){\r\n                   current_page=parseInt(e.currentTarget.dataset.page);\r\n                   render();\r\n   \r\n               })\r\n            }\r\n        }\r\n\r\n// //测试\r\n  init({\r\n     el_pagination:'#el-pagination',\r\n })\r\n\r\n\r\nrender();\r\nmodule.exports={\r\n    render:render,\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdpbmF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnaW5hdGlvbi5qcz9kMmFlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXQoY29uZmlnKXtcclxuICAgIGVsX3BhZ2luYXRpb249ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcuZWxfcGFnaW5hdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbnZhciBjdXJyZW50X3BhZ2U9MVxyXG4gICAsbWF4X2J0bl9sZW5ndGg9NVxyXG4gICAscGFnZV9hbW91bnQ9MTVcclxuICAgO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICBlbF9wYWdpbmF0aW9uLmlubmVySFRNTD0nJztcclxuICAgIHZhciBtaWRkbGU9TWF0aC5jZWlsKG1heF9idG5fbGVuZ3RoLzIpXHJcbiAgICAgICxyZW5hY2hpbmdfbGVmdD1jdXJyZW50X3BhZ2U8PW1pZGRsZVxyXG4gICAgICAscmVuYWNoaW5nX3JpZ2h0PWN1cnJlbnRfcGFnZT49cGFnZV9hbW91bnQtbWlkZGxlXHJcbiAgICAgICxzdGFydFxyXG4gICAgICAsZW5kXHJcbiAgICAgIDtcclxuXHJcbiAgICAgIGlmKHJlbmFjaGluZ19sZWZ0KXtcclxuICAgICAgICAgIHN0YXJ0PTE7XHJcbiAgICAgICAgICAgZW5kPW1heF9idG5fbGVuZ3RoO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1lbHNlIGlmKHJlbmFjaGluZ19yaWdodCl7XHJcbiAgICAgICAgICBzdGFydD1wYWdlX2Ftb3VudC0obWF4X2J0bl9sZW5ndGgtMSk7XHJcbiAgICAgICAgICBlbmQ9cGFnZV9hbW91bnQ7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgc3RhcnQ9Y3VycmVudF9wYWdlLShtaWRkbGUtMSk7XHJcbiAgICAgICAgICBlbmQ9Y3VycmVudF9wYWdlKyhtaWRkbGUtMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBmb3IodmFyIGk9c3RhcnQ7aTw9ZW5kO2krKyl7XHJcbiAgICAgICAgIHZhciBidG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICBidG4uaW5uZXJUZXh0PWk7XHJcbiAgICAgICAgICBidG4uZGF0YXNldC5wYWdlPWk7XHJcbiAgICAgICAgICBpZihpPT1jdXJyZW50X3BhZ2Upe1xyXG5cclxuICAgICAgICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kPSdwaW5rJztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBlbF9wYWdpbmF0aW9uLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICBjdXJyZW50X3BhZ2U9cGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICByZW5kZXIoKTtcclxuICAgXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4vLyAvL+a1i+ivlVxyXG4gIGluaXQoe1xyXG4gICAgIGVsX3BhZ2luYXRpb246JyNlbC1wYWdpbmF0aW9uJyxcclxuIH0pXHJcblxyXG5cclxucmVuZGVyKCk7XHJcbm1vZHVsZS5leHBvcnRzPXtcclxuICAgIHJlbmRlcjpyZW5kZXIsXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pagination.js\n");

/***/ })

/******/ });