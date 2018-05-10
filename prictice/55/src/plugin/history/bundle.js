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

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var history=require('./history');\r\n\r\n\r\n// history.init({\r\n//     el:'#history-list',\r\n//     on_click:function(keyword,e){\r\n//         console.log(keyword);\r\n//     },\r\n//     on_delete:function(keyword,e){\r\n//         e.stopPropagation();\r\n//         console.log(keyword);\r\n\r\n//     },\r\n// });\r\n// //  history.add('yo6');\r\n// //  history.add('yo1');\r\n// //  history.add('yo2');\r\n// // //  history.remove('yo6');\r\n// // // history.clear();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdGVzdC5qcz9kNjA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBoaXN0b3J5PXJlcXVpcmUoJy4vaGlzdG9yeScpO1xyXG5cclxuXHJcbi8vIGhpc3RvcnkuaW5pdCh7XHJcbi8vICAgICBlbDonI2hpc3RvcnktbGlzdCcsXHJcbi8vICAgICBvbl9jbGljazpmdW5jdGlvbihrZXl3b3JkLGUpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGtleXdvcmQpO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIG9uX2RlbGV0ZTpmdW5jdGlvbihrZXl3b3JkLGUpe1xyXG4vLyAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coa2V5d29yZCk7XHJcblxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcbi8vIC8vICBoaXN0b3J5LmFkZCgneW82Jyk7XHJcbi8vIC8vICBoaXN0b3J5LmFkZCgneW8xJyk7XHJcbi8vIC8vICBoaXN0b3J5LmFkZCgneW8yJyk7XHJcbi8vIC8vIC8vICBoaXN0b3J5LnJlbW92ZSgneW82Jyk7XHJcbi8vIC8vIC8vIGhpc3RvcnkuY2xlYXIoKTtcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./test.js\n");

/***/ })

/******/ });