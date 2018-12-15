(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ever-post-client-library", [], factory);
	else if(typeof exports === 'object')
		exports["ever-post-client-library"] = factory();
	else
		root["ever-post-client-library"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EverPostClient = void 0;

var _navigation_thumbnails = _interopRequireDefault(__webpack_require__(/*! ./navigation_thumbnails.js */ "./src/navigation_thumbnails.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EverPostClient = function EverPostClient() {
  _classCallCheck(this, EverPostClient);

  (0, _navigation_thumbnails.default)();
};

exports.EverPostClient = EverPostClient;

/***/ }),

/***/ "./src/navigation_thumbnails.js":
/*!**************************************!*\
  !*** ./src/navigation_thumbnails.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NavigationThumbnails =
/*#__PURE__*/
function () {
  function NavigationThumbnails(thumbnails) {
    _classCallCheck(this, NavigationThumbnails);

    this.slugs = thumbnails.map(function (thumbnail) {
      return thumbnail.slug;
    });
    this.applyVisibility();
    this.applyHrefValue();
    this.applySrcValue();
  }

  _createClass(NavigationThumbnails, [{
    key: "applyVisibility",
    value: function applyVisibility() {
      var _this = this;

      document.querySelectorAll('.ever-thumbnail').forEach(function (wrapper) {
        var slug = wrapper.dataset['ever-post'];

        if (slug === undefined) {
          console.log('A DOM element with' + 'ever-thumbnail class is missing data-ever-post attribute');
        }

        wrapper.querySelectorAll('.ever-thumbnail-on').forEach(function (dom) {
          if (_this.slugs.include(slug)) {
            dom.style.display = 'display-block';
          }
        });
        wrapper.querySelectorAll('.ever-thumbnail-off').forEach(function (dom) {
          if (!_this.slugs.include(slug)) {
            dom.style.display = 'none';
          }
        });
      });
    }
  }, {
    key: "applyHrefValue",
    value: function applyHrefValue() {
      var _this2 = this;

      document.querySelectorAll('.ever-thumbnail').forEach(function (wrapper) {
        var slug = wrapper.dataset['ever-post'];
        wrapper.querySelectorAll('a').forEach(function (dom) {
          if (dom.dataset['ever-href-on'] !== undefined) {
            if (_this2.slugs.include(slug)) {
              dom.href = dom.dataset['ever-href-on'];
            }
          }

          if (dom.dataset['ever-href-off'] !== undefined) {
            if (!_this2.slugs.include(slug)) {
              dom.href = dom.dataset['ever-href-off'];
            }
          }
        });
      });
    }
  }, {
    key: "applySrcValue",
    value: function applySrcValue() {
      var _this3 = this;

      document.querySelectorAll('.ever-thumbnail').forEach(function (wrapper) {
        var slug = wrapper.dataset['ever-post'];
        wrapper.querySelectorAll('img').forEach(function (dom) {
          if (dom.dataset['ever-src-on'] !== undefined) {
            if (_this3.slugs.include(slug)) {
              dom.src = dom.dataset['ever-src-on'];
            }
          }

          if (dom.dataset['ever-src-off'] !== undefined) {
            if (!_this3.slugs.include(slug)) {
              dom.src = dom.dataset['ever-src-off'];
            }
          }
        });
      });
    }
  }]);

  return NavigationThumbnails;
}();

exports.default = NavigationThumbnails;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5Ly4vc3JjL25hdmlnYXRpb25fdGh1bWJuYWlscy5qcyJdLCJuYW1lcyI6WyJFdmVyUG9zdENsaWVudCIsIk5hdmlnYXRpb25UaHVtYm5haWxzIiwidGh1bWJuYWlscyIsInNsdWdzIiwibWFwIiwidGh1bWJuYWlsIiwic2x1ZyIsImFwcGx5VmlzaWJpbGl0eSIsImFwcGx5SHJlZlZhbHVlIiwiYXBwbHlTcmNWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ3cmFwcGVyIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJkb20iLCJpbmNsdWRlIiwic3R5bGUiLCJkaXNwbGF5IiwiaHJlZiIsInNyYyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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MEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFDQyxPQUFELEVBQWE7QUFDaEUsWUFBTVAsSUFBSSxHQUFHTyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsV0FBaEIsQ0FBYjtBQUVBRCxlQUFPLENBQUNGLGdCQUFSLENBQXlCLEtBQXpCLEVBQWdDQyxPQUFoQyxDQUF3QyxVQUFDTSxHQUFELEVBQVM7QUFDL0MsY0FBSUEsR0FBRyxDQUFDSixPQUFKLENBQVksYUFBWixNQUErQkMsU0FBbkMsRUFBOEM7QUFDNUMsZ0JBQUksTUFBSSxDQUFDWixLQUFMLENBQVdnQixPQUFYLENBQW1CYixJQUFuQixDQUFKLEVBQThCO0FBQzVCWSxpQkFBRyxDQUFDSyxHQUFKLEdBQVVMLEdBQUcsQ0FBQ0osT0FBSixDQUFZLGFBQVosQ0FBVjtBQUNEO0FBQ0Y7O0FBQ0QsY0FBSUksR0FBRyxDQUFDSixPQUFKLENBQVksY0FBWixNQUFnQ0MsU0FBcEMsRUFBK0M7QUFDN0MsZ0JBQUksQ0FBQyxNQUFJLENBQUNaLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUJiLElBQW5CLENBQUwsRUFBK0I7QUFDN0JZLGlCQUFHLENBQUNLLEdBQUosR0FBVUwsR0FBRyxDQUFDSixPQUFKLENBQVksY0FBWixDQUFWO0FBQ0Q7QUFDRjtBQUNGLFNBWEQ7QUFZRCxPQWZEO0FBZ0JEIiwiZmlsZSI6ImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgQ2F0IGZyb20gJy4vY2F0LmpzJztcbi8vIGltcG9ydCBEb2cgZnJvbSAnLi9kb2cuanMnO1xuaW1wb3J0IE5hdmlnYXRpb25UaHVtYm5haWxzIGZyb20gJy4vbmF2aWdhdGlvbl90aHVtYm5haWxzLmpzJztcblxuY2xhc3MgRXZlclBvc3RDbGllbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBOYXZpZ2F0aW9uVGh1bWJuYWlscygpO1xuICB9XG59XG5cbmV4cG9ydCB7IEV2ZXJQb3N0Q2xpZW50IH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uVGh1bWJuYWlscyB7XG4gIGNvbnN0cnVjdG9yKHRodW1ibmFpbHMpIHtcbiAgICB0aGlzLnNsdWdzID0gdGh1bWJuYWlscy5tYXAoKHRodW1ibmFpbCkgPT4ge1xuICAgICAgcmV0dXJuICh0aHVtYm5haWwuc2x1Zyk7XG4gICAgfSk7XG4gICAgdGhpcy5hcHBseVZpc2liaWxpdHkoKTtcbiAgICB0aGlzLmFwcGx5SHJlZlZhbHVlKCk7XG4gICAgdGhpcy5hcHBseVNyY1ZhbHVlKCk7XG4gIH1cblxuICBhcHBseVZpc2liaWxpdHkoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldFsnZXZlci1wb3N0J107XG5cbiAgICAgIGlmIChzbHVnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0EgRE9NIGVsZW1lbnQgd2l0aCcgK1xuICAgICAgICAgICdldmVyLXRodW1ibmFpbCBjbGFzcyBpcyBtaXNzaW5nIGRhdGEtZXZlci1wb3N0IGF0dHJpYnV0ZScpO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbC1vbicpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlKHNsdWcpKSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnZGlzcGxheS1ibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwtb2ZmJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlKHNsdWcpKSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlIcmVmVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldFsnZXZlci1wb3N0J107XG5cbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAoZG9tLmRhdGFzZXRbJ2V2ZXItaHJlZi1vbiddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uaHJlZiA9IGRvbS5kYXRhc2V0WydldmVyLWhyZWYtb24nXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0WydldmVyLWhyZWYtb2ZmJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uaHJlZiA9IGRvbS5kYXRhc2V0WydldmVyLWhyZWYtb2ZmJ107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5U3JjVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldFsnZXZlci1wb3N0J107XG5cbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmIChkb20uZGF0YXNldFsnZXZlci1zcmMtb24nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZShzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0WydldmVyLXNyYy1vbiddO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLmRhdGFzZXRbJ2V2ZXItc3JjLW9mZiddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2x1Z3MuaW5jbHVkZShzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0WydldmVyLXNyYy1vZmYnXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9