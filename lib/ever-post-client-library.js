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


var _thumbnail_navigation = _interopRequireDefault(__webpack_require__(/*! ./thumbnail_navigation.js */ "./src/thumbnail_navigation.js"));

var _reward_navigation = _interopRequireDefault(__webpack_require__(/*! ./reward_navigation.js */ "./src/reward_navigation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.EverPostClient =
/*#__PURE__*/
function () {
  function _class(payload) {
    _classCallCheck(this, _class);

    var thumbnailNabigation = new _thumbnail_navigation.default(payload.meta.navigation.thumbnails);
    thumbnailNabigation.applyVisibility();
    var rewardNavigation = new _reward_navigation.default(payload.meta.navigation.show_reward);
    rewardNavigation.applyVisibility();
  }

  return _class;
}(); // export { EverPostClient };
// module.exports = EverPostClient;

/***/ }),

/***/ "./src/reward_navigation.js":
/*!**********************************!*\
  !*** ./src/reward_navigation.js ***!
  \**********************************/
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

var RewardNavigation =
/*#__PURE__*/
function () {
  function RewardNavigation(show_reward) {
    _classCallCheck(this, RewardNavigation);

    this.showReward = show_reward;
    this.applyVisibility();
  }

  _createClass(RewardNavigation, [{
    key: "applyVisibility",
    value: function applyVisibility() {
      var _this = this;

      document.querySelectorAll('.ever-reward-on').forEach(function (dom) {
        if (_this.showReward) {
          dom.style.display = 'inline-block';
        } else {
          dom.style.display = 'none';
        }
      });
      document.querySelectorAll('.ever-reward-off').forEach(function (dom) {
        if (_this.showReward) {
          dom.style.display = 'none';
        } else {
          dom.style.display = 'inline-block';
        }
      });
    }
  }]);

  return RewardNavigation;
}();

exports.default = RewardNavigation;
module.exports = exports["default"];

/***/ }),

/***/ "./src/thumbnail_navigation.js":
/*!*************************************!*\
  !*** ./src/thumbnail_navigation.js ***!
  \*************************************/
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

var ThumbnailNavigation =
/*#__PURE__*/
function () {
  function ThumbnailNavigation(thumbnails) {
    _classCallCheck(this, ThumbnailNavigation);

    this.slugs = thumbnails.map(function (thumbnail) {
      return thumbnail.slug;
    });
    this.applyVisibility();
    this.applyHrefValue();
    this.applySrcValue();
  }

  _createClass(ThumbnailNavigation, [{
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

  return ThumbnailNavigation;
}();

exports.default = ThumbnailNavigation;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5Ly4vc3JjL3Jld2FyZF9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS8uL3NyYy90aHVtYm5haWxfbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJFdmVyUG9zdENsaWVudCIsInBheWxvYWQiLCJ0aHVtYm5haWxOYWJpZ2F0aW9uIiwibWV0YSIsIm5hdmlnYXRpb24iLCJ0aHVtYm5haWxzIiwiYXBwbHlWaXNpYmlsaXR5IiwicmV3YXJkTmF2aWdhdGlvbiIsInNob3dfcmV3YXJkIiwiUmV3YXJkTmF2aWdhdGlvbiIsInNob3dSZXdhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZG9tIiwic3R5bGUiLCJkaXNwbGF5IiwiVGh1bWJuYWlsTmF2aWdhdGlvbiIsInNsdWdzIiwibWFwIiwidGh1bWJuYWlsIiwic2x1ZyIsImFwcGx5SHJlZlZhbHVlIiwiYXBwbHlTcmNWYWx1ZSIsIndyYXBwZXIiLCJkYXRhc2V0IiwiZXZlclBvc3QiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJldmVySHJlZk9uIiwiaHJlZiIsImV2ZXJIcmVmT2ZmIiwiZXZlclNyY09uIiwic3JjIiwiZXZlclNyY09mZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7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ZSI6ImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgVGh1bWJuYWlsTmF2aWdhdGlvbiBmcm9tICcuL3RodW1ibmFpbF9uYXZpZ2F0aW9uLmpzJztcbmltcG9ydCBSZXdhcmROYXZpZ2F0aW9uIGZyb20gJy4vcmV3YXJkX25hdmlnYXRpb24uanMnO1xuXG53aW5kb3cuRXZlclBvc3RDbGllbnQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHBheWxvYWQpIHtcbiAgICBjb25zdCB0aHVtYm5haWxOYWJpZ2F0aW9uID0gbmV3IFRodW1ibmFpbE5hdmlnYXRpb24ocGF5bG9hZC5tZXRhLm5hdmlnYXRpb24udGh1bWJuYWlscyk7XG4gICAgdGh1bWJuYWlsTmFiaWdhdGlvbi5hcHBseVZpc2liaWxpdHkoKTtcbiAgICBjb25zdCByZXdhcmROYXZpZ2F0aW9uID0gbmV3IFJld2FyZE5hdmlnYXRpb24ocGF5bG9hZC5tZXRhLm5hdmlnYXRpb24uc2hvd19yZXdhcmQpO1xuICAgIHJld2FyZE5hdmlnYXRpb24uYXBwbHlWaXNpYmlsaXR5KCk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IHsgRXZlclBvc3RDbGllbnQgfTtcbi8vIG1vZHVsZS5leHBvcnRzID0gRXZlclBvc3RDbGllbnQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3YXJkTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHNob3dfcmV3YXJkKSB7XG4gICAgdGhpcy5zaG93UmV3YXJkID0gc2hvd19yZXdhcmQ7XG4gICAgdGhpcy5hcHBseVZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIGFwcGx5VmlzaWJpbGl0eSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci1yZXdhcmQtb24nKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXJld2FyZC1vZmYnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGh1bWJuYWlsTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRodW1ibmFpbHMpIHtcbiAgICB0aGlzLnNsdWdzID0gdGh1bWJuYWlscy5tYXAoKHRodW1ibmFpbCkgPT4ge1xuICAgICAgcmV0dXJuICh0aHVtYm5haWwuc2x1Zyk7XG4gICAgfSk7XG4gICAgdGhpcy5hcHBseVZpc2liaWxpdHkoKTtcbiAgICB0aGlzLmFwcGx5SHJlZlZhbHVlKCk7XG4gICAgdGhpcy5hcHBseVNyY1ZhbHVlKCk7XG4gIH1cblxuICBhcHBseVZpc2liaWxpdHkoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldC5ldmVyUG9zdDtcblxuICAgICAgaWYgKHNsdWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnW0VWRVIgZXJyb3JdIEEgRE9NIGVsZW1lbnQgd2l0aCcgK1xuICAgICAgICAgICdldmVyLXRodW1ibmFpbCBjbGFzcyBpcyBtaXNzaW5nIGRhdGEtZXZlci1wb3N0IGF0dHJpYnV0ZScpO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbC1vbicpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwtb2ZmJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUhyZWZWYWx1ZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwnKS5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICBjb25zdCBzbHVnID0gd3JhcHBlci5kYXRhc2V0LmV2ZXJQb3N0O1xuXG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0LmV2ZXJIcmVmT24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uaHJlZiA9IGRvbS5kYXRhc2V0LmV2ZXJIcmVmT247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb20uZGF0YXNldC5ldmVySHJlZk9mZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uaHJlZiA9IGRvbS5kYXRhc2V0LmV2ZXJIcmVmT2ZmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseVNyY1ZhbHVlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbCcpLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSB3cmFwcGVyLmRhdGFzZXQuZXZlclBvc3Q7XG5cbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmIChkb20uZGF0YXNldC5ldmVyU3JjT24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uc3JjID0gZG9tLmRhdGFzZXQuZXZlclNyY09uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlclNyY09mZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnNsdWdzLmluY2x1ZGVzKHNsdWcpKSB7XG4gICAgICAgICAgICBkb20uc3JjID0gZG9tLmRhdGFzZXQuZXZlclNyY09mZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9