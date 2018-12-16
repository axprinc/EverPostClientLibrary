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


var _navigation_thumbnails = _interopRequireDefault(__webpack_require__(/*! ./navigation_thumbnails.js */ "./src/navigation_thumbnails.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.EverPostClient =
/*#__PURE__*/
function () {
  function _class(payload) {
    _classCallCheck(this, _class);

    var thumbnails = new _navigation_thumbnails.default(payload.meta.navigation.thumbnails);
    thumbnails.applyVisibility();
  }

  return _class;
}(); // export { EverPostClient };
// module.exports = EverPostClient;

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
        var slug = wrapper.dataset.everPost;

        if (slug === undefined) {
          console.log('[EVER error] A DOM element with' + 'ever-thumbnail class is missing data-ever-post attribute');
        }

        wrapper.querySelectorAll('.ever-thumbnail-on').forEach(function (dom) {
          if (_this.slugs.includes(slug)) {
            dom.style.display = 'inline-block';
          } else {
            dom.style.display = 'none';
          }
        });
        wrapper.querySelectorAll('.ever-thumbnail-off').forEach(function (dom) {
          if (_this.slugs.includes(slug)) {
            dom.style.display = 'none';
          } else {
            dom.style.display = 'inline-block';
          }
        });
      });
    }
  }, {
    key: "applyHrefValue",
    value: function applyHrefValue() {
      var _this2 = this;

      document.querySelectorAll('.ever-thumbnail').forEach(function (wrapper) {
        var slug = wrapper.dataset.everPost;
        wrapper.querySelectorAll('a').forEach(function (dom) {
          if (dom.dataset.everHrefOn !== undefined) {
            if (_this2.slugs.includes(slug)) {
              dom.href = dom.dataset.everHrefOn;
            }
          }

          if (dom.dataset.everHrefOff !== undefined) {
            if (!_this2.slugs.includes(slug)) {
              dom.href = dom.dataset.everHrefOff;
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
        var slug = wrapper.dataset.everPost;
        wrapper.querySelectorAll('img').forEach(function (dom) {
          if (dom.dataset.everSrcOn !== undefined) {
            if (_this3.slugs.includes(slug)) {
              dom.src = dom.dataset.everSrcOn;
            }
          }

          if (dom.dataset.everSrcOff !== undefined) {
            if (!_this3.slugs.includes(slug)) {
              dom.src = dom.dataset.everSrcOff;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5Ly4vc3JjL25hdmlnYXRpb25fdGh1bWJuYWlscy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJFdmVyUG9zdENsaWVudCIsInBheWxvYWQiLCJ0aHVtYm5haWxzIiwibWV0YSIsIm5hdmlnYXRpb24iLCJhcHBseVZpc2liaWxpdHkiLCJOYXZpZ2F0aW9uVGh1bWJuYWlscyIsInNsdWdzIiwibWFwIiwidGh1bWJuYWlsIiwic2x1ZyIsImFwcGx5SHJlZlZhbHVlIiwiYXBwbHlTcmNWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ3cmFwcGVyIiwiZGF0YXNldCIsImV2ZXJQb3N0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImRvbSIsImluY2x1ZGVzIiwic3R5bGUiLCJkaXNwbGF5IiwiZXZlckhyZWZPbiIsImhyZWYiLCJldmVySHJlZk9mZiIsImV2ZXJTcmNPbiIsInNyYyIsImV2ZXJTcmNPZmYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FB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QUNGO0FBQ0YsU0FYRDtBQVlELE9BZkQ7QUFnQkQiLCJmaWxlIjoiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnlcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGltcG9ydCBDYXQgZnJvbSAnLi9jYXQuanMnO1xuLy8gaW1wb3J0IERvZyBmcm9tICcuL2RvZy5qcyc7XG5pbXBvcnQgTmF2aWdhdGlvblRodW1ibmFpbHMgZnJvbSAnLi9uYXZpZ2F0aW9uX3RodW1ibmFpbHMuanMnO1xuXG53aW5kb3cuRXZlclBvc3RDbGllbnQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQpIHtcbiAgICBjb25zdCB0aHVtYm5haWxzID0gbmV3IE5hdmlnYXRpb25UaHVtYm5haWxzKHBheWxvYWQubWV0YS5uYXZpZ2F0aW9uLnRodW1ibmFpbHMpO1xuICAgIHRodW1ibmFpbHMuYXBwbHlWaXNpYmlsaXR5KCk7ICAgIFxuICB9XG59XG5cbi8vIGV4cG9ydCB7IEV2ZXJQb3N0Q2xpZW50IH07XG4vLyBtb2R1bGUuZXhwb3J0cyA9IEV2ZXJQb3N0Q2xpZW50OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25UaHVtYm5haWxzIHtcbiAgY29uc3RydWN0b3IodGh1bWJuYWlscykge1xuICAgIHRoaXMuc2x1Z3MgPSB0aHVtYm5haWxzLm1hcCgodGh1bWJuYWlsKSA9PiB7XG4gICAgICByZXR1cm4gKHRodW1ibmFpbC5zbHVnKTtcbiAgICB9KTtcbiAgICB0aGlzLmFwcGx5VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuYXBwbHlIcmVmVmFsdWUoKTtcbiAgICB0aGlzLmFwcGx5U3JjVmFsdWUoKTtcbiAgfVxuXG4gIGFwcGx5VmlzaWJpbGl0eSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwnKS5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICBjb25zdCBzbHVnID0gd3JhcHBlci5kYXRhc2V0LmV2ZXJQb3N0O1xuXG4gICAgICBpZiAoc2x1ZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbRVZFUiBlcnJvcl0gQSBET00gZWxlbWVudCB3aXRoJyArXG4gICAgICAgICAgJ2V2ZXItdGh1bWJuYWlsIGNsYXNzIGlzIG1pc3NpbmcgZGF0YS1ldmVyLXBvc3QgYXR0cmlidXRlJyk7XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsLW9uJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbC1vZmYnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5SHJlZlZhbHVlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbCcpLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSB3cmFwcGVyLmRhdGFzZXQuZXZlclBvc3Q7XG5cbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlckhyZWZPbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgIGRvbS5ocmVmID0gZG9tLmRhdGFzZXQuZXZlckhyZWZPbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0LmV2ZXJIcmVmT2ZmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgIGRvbS5ocmVmID0gZG9tLmRhdGFzZXQuZXZlckhyZWZPZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5U3JjVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldC5ldmVyUG9zdDtcblxuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0LmV2ZXJTcmNPbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgIGRvbS5zcmMgPSBkb20uZGF0YXNldC5ldmVyU3JjT247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb20uZGF0YXNldC5ldmVyU3JjT2ZmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICAgIGRvbS5zcmMgPSBkb20uZGF0YXNldC5ldmVyU3JjT2ZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=