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
    var rewardNavigation = new _reward_navigation.default(payload.meta.navigation.show_reward, payload.body.effective_reward_url);
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
  function RewardNavigation(show_reward, effective_reward_url) {
    _classCallCheck(this, RewardNavigation);

    this.showReward = show_reward;
    this.effectiveRewardUrl = effective_reward_url;
    this.applyVisibility();
    this.applyHrefValue();
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
  }, {
    key: "applyHrefValue",
    value: function applyHrefValue() {
      var _this2 = this;

      document.querySelectorAll('a.ever-reward').forEach(function (dom) {
        dom.href = _this2.effectiveRewardUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5Ly4vc3JjL3Jld2FyZF9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS8uL3NyYy90aHVtYm5haWxfbmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJFdmVyUG9zdENsaWVudCIsInBheWxvYWQiLCJ0aHVtYm5haWxOYWJpZ2F0aW9uIiwibWV0YSIsIm5hdmlnYXRpb24iLCJ0aHVtYm5haWxzIiwiYXBwbHlWaXNpYmlsaXR5IiwicmV3YXJkTmF2aWdhdGlvbiIsInNob3dfcmV3YXJkIiwiYm9keSIsImVmZmVjdGl2ZV9yZXdhcmRfdXJsIiwiUmV3YXJkTmF2aWdhdGlvbiIsInNob3dSZXdhcmQiLCJlZmZlY3RpdmVSZXdhcmRVcmwiLCJhcHBseUhyZWZWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkb20iLCJzdHlsZSIsImRpc3BsYXkiLCJocmVmIiwiVGh1bWJuYWlsTmF2aWdhdGlvbiIsInNsdWdzIiwibWFwIiwidGh1bWJuYWlsIiwic2x1ZyIsImFwcGx5U3JjVmFsdWUiLCJ3cmFwcGVyIiwiZGF0YXNldCIsImV2ZXJQb3N0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwiZXZlckhyZWZPbiIsImV2ZXJIcmVmT2ZmIiwiZXZlclNyY09uIiwic3JjIiwiZXZlclNyY09mZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7Ozs7O0FBRUFBLE1BQU0sQ0FBQ0MsY0FBUDtBQUFBO0FBQUE7QUFDRSxrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixRQUFNQyxtQkFBbUIsR0FBRyxrQ0FBd0JELE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxVQUFiLENBQXdCQyxVQUFoRCxDQUE1QjtBQUNBSCx1QkFBbUIsQ0FBQ0ksZUFBcEI7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRywrQkFDdkJOLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxVQUFiLENBQXdCSSxXQURELEVBQ2NQLE9BQU8sQ0FBQ1EsSUFBUixDQUFhQyxvQkFEM0IsQ0FBekI7QUFFQUgsb0JBQWdCLENBQUNELGVBQWpCO0FBQ0Q7O0FBUEg7QUFBQSxJLENBVUE7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2RxQkssZ0I7OztBQUNuQiw0QkFBWUgsV0FBWixFQUF5QkUsb0JBQXpCLEVBQStDO0FBQUE7O0FBQzdDLFNBQUtFLFVBQUwsR0FBa0JKLFdBQWxCO0FBQ0EsU0FBS0ssa0JBQUwsR0FBMEJILG9CQUExQjtBQUNBLFNBQUtKLGVBQUw7QUFDQSxTQUFLUSxjQUFMO0FBQ0Q7Ozs7c0NBRWlCO0FBQUE7O0FBQ2hCQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBQ0MsR0FBRCxFQUFTO0FBQzVELFlBQUksS0FBSSxDQUFDTixVQUFULEVBQXFCO0FBQ25CTSxhQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixjQUFwQjtBQUNELFNBRkQsTUFFTztBQUNMRixhQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNEO0FBQ0YsT0FORDtBQU9BTCxjQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0QsVUFBQ0MsR0FBRCxFQUFTO0FBQzdELFlBQUksS0FBSSxDQUFDTixVQUFULEVBQXFCO0FBQ25CTSxhQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNELFNBRkQsTUFFTztBQUNMRixhQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixjQUFwQjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7cUNBRWdCO0FBQUE7O0FBQ2ZMLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQUNDLEdBQUQsRUFBUztBQUMxREEsV0FBRyxDQUFDRyxJQUFKLEdBQVcsTUFBSSxDQUFDUixrQkFBaEI7QUFDRCxPQUZEO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0JrQlMsbUI7OztBQUNuQiwrQkFBWWpCLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS2tCLEtBQUwsR0FBYWxCLFVBQVUsQ0FBQ21CLEdBQVgsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDekMsYUFBUUEsU0FBUyxDQUFDQyxJQUFsQjtBQUNELEtBRlksQ0FBYjtBQUdBLFNBQUtwQixlQUFMO0FBQ0EsU0FBS1EsY0FBTDtBQUNBLFNBQUthLGFBQUw7QUFDRDs7OztzQ0FFaUI7QUFBQTs7QUFDaEJaLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFDVyxPQUFELEVBQWE7QUFDaEUsWUFBTUYsSUFBSSxHQUFHRSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFFBQTdCOztBQUVBLFlBQUlKLElBQUksS0FBS0ssU0FBYixFQUF3QjtBQUN0QkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUNWLDBEQURGO0FBRUQ7O0FBRURMLGVBQU8sQ0FBQ1osZ0JBQVIsQ0FBeUIsb0JBQXpCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFDQyxHQUFELEVBQVM7QUFDOUQsY0FBSSxLQUFJLENBQUNLLEtBQUwsQ0FBV1csUUFBWCxDQUFvQlIsSUFBcEIsQ0FBSixFQUErQjtBQUM3QlIsZUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsY0FBcEI7QUFDRCxXQUZELE1BRU87QUFDTEYsZUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRDtBQUNGLFNBTkQ7QUFPQVEsZUFBTyxDQUFDWixnQkFBUixDQUF5QixxQkFBekIsRUFBZ0RDLE9BQWhELENBQXdELFVBQUNDLEdBQUQsRUFBUztBQUMvRCxjQUFJLEtBQUksQ0FBQ0ssS0FBTCxDQUFXVyxRQUFYLENBQW9CUixJQUFwQixDQUFKLEVBQStCO0FBQzdCUixlQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNELFdBRkQsTUFFTztBQUNMRixlQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixjQUFwQjtBQUNEO0FBQ0YsU0FORDtBQU9ELE9BdEJEO0FBdUJEOzs7cUNBRWdCO0FBQUE7O0FBQ2ZMLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFDVyxPQUFELEVBQWE7QUFDaEUsWUFBTUYsSUFBSSxHQUFHRSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFFBQTdCO0FBRUFGLGVBQU8sQ0FBQ1osZ0JBQVIsQ0FBeUIsR0FBekIsRUFBOEJDLE9BQTlCLENBQXNDLFVBQUNDLEdBQUQsRUFBUztBQUM3QyxjQUFJQSxHQUFHLENBQUNXLE9BQUosQ0FBWU0sVUFBWixLQUEyQkosU0FBL0IsRUFBMEM7QUFDeEMsZ0JBQUksTUFBSSxDQUFDUixLQUFMLENBQVdXLFFBQVgsQ0FBb0JSLElBQXBCLENBQUosRUFBK0I7QUFDN0JSLGlCQUFHLENBQUNHLElBQUosR0FBV0gsR0FBRyxDQUFDVyxPQUFKLENBQVlNLFVBQXZCO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJakIsR0FBRyxDQUFDVyxPQUFKLENBQVlPLFdBQVosS0FBNEJMLFNBQWhDLEVBQTJDO0FBQ3pDLGdCQUFJLENBQUMsTUFBSSxDQUFDUixLQUFMLENBQVdXLFFBQVgsQ0FBb0JSLElBQXBCLENBQUwsRUFBZ0M7QUFDOUJSLGlCQUFHLENBQUNHLElBQUosR0FBV0gsR0FBRyxDQUFDVyxPQUFKLENBQVlPLFdBQXZCO0FBQ0Q7QUFDRjtBQUNGLFNBWEQ7QUFZRCxPQWZEO0FBZ0JEOzs7b0NBRWU7QUFBQTs7QUFDZHJCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFDVyxPQUFELEVBQWE7QUFDaEUsWUFBTUYsSUFBSSxHQUFHRSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFFBQTdCO0FBRUFGLGVBQU8sQ0FBQ1osZ0JBQVIsQ0FBeUIsS0FBekIsRUFBZ0NDLE9BQWhDLENBQXdDLFVBQUNDLEdBQUQsRUFBUztBQUMvQyxjQUFJQSxHQUFHLENBQUNXLE9BQUosQ0FBWVEsU0FBWixLQUEwQk4sU0FBOUIsRUFBeUM7QUFDdkMsZ0JBQUksTUFBSSxDQUFDUixLQUFMLENBQVdXLFFBQVgsQ0FBb0JSLElBQXBCLENBQUosRUFBK0I7QUFDN0JSLGlCQUFHLENBQUNvQixHQUFKLEdBQVVwQixHQUFHLENBQUNXLE9BQUosQ0FBWVEsU0FBdEI7QUFDRDtBQUNGOztBQUNELGNBQUluQixHQUFHLENBQUNXLE9BQUosQ0FBWVUsVUFBWixLQUEyQlIsU0FBL0IsRUFBMEM7QUFDeEMsZ0JBQUksQ0FBQyxNQUFJLENBQUNSLEtBQUwsQ0FBV1csUUFBWCxDQUFvQlIsSUFBcEIsQ0FBTCxFQUFnQztBQUM5QlIsaUJBQUcsQ0FBQ29CLEdBQUosR0FBVXBCLEdBQUcsQ0FBQ1csT0FBSixDQUFZVSxVQUF0QjtBQUNEO0FBQ0Y7QUFDRixTQVhEO0FBWUQsT0FmRDtBQWdCRCIsImZpbGUiOiJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFRodW1ibmFpbE5hdmlnYXRpb24gZnJvbSAnLi90aHVtYm5haWxfbmF2aWdhdGlvbi5qcyc7XG5pbXBvcnQgUmV3YXJkTmF2aWdhdGlvbiBmcm9tICcuL3Jld2FyZF9uYXZpZ2F0aW9uLmpzJztcblxud2luZG93LkV2ZXJQb3N0Q2xpZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3RvcihwYXlsb2FkKSB7XG4gICAgY29uc3QgdGh1bWJuYWlsTmFiaWdhdGlvbiA9IG5ldyBUaHVtYm5haWxOYXZpZ2F0aW9uKHBheWxvYWQubWV0YS5uYXZpZ2F0aW9uLnRodW1ibmFpbHMpO1xuICAgIHRodW1ibmFpbE5hYmlnYXRpb24uYXBwbHlWaXNpYmlsaXR5KCk7XG4gICAgY29uc3QgcmV3YXJkTmF2aWdhdGlvbiA9IG5ldyBSZXdhcmROYXZpZ2F0aW9uKFxuICAgICAgcGF5bG9hZC5tZXRhLm5hdmlnYXRpb24uc2hvd19yZXdhcmQsIHBheWxvYWQuYm9keS5lZmZlY3RpdmVfcmV3YXJkX3VybCk7XG4gICAgcmV3YXJkTmF2aWdhdGlvbi5hcHBseVZpc2liaWxpdHkoKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgeyBFdmVyUG9zdENsaWVudCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBFdmVyUG9zdENsaWVudDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdhcmROYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2hvd19yZXdhcmQsIGVmZmVjdGl2ZV9yZXdhcmRfdXJsKSB7XG4gICAgdGhpcy5zaG93UmV3YXJkID0gc2hvd19yZXdhcmQ7XG4gICAgdGhpcy5lZmZlY3RpdmVSZXdhcmRVcmwgPSBlZmZlY3RpdmVfcmV3YXJkX3VybDtcbiAgICB0aGlzLmFwcGx5VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuYXBwbHlIcmVmVmFsdWUoKTtcbiAgfVxuXG4gIGFwcGx5VmlzaWJpbGl0eSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci1yZXdhcmQtb24nKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXJld2FyZC1vZmYnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlIcmVmVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5ldmVyLXJld2FyZCcpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgZG9tLmhyZWYgPSB0aGlzLmVmZmVjdGl2ZVJld2FyZFVybDtcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRodW1ibmFpbE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0aHVtYm5haWxzKSB7XG4gICAgdGhpcy5zbHVncyA9IHRodW1ibmFpbHMubWFwKCh0aHVtYm5haWwpID0+IHtcbiAgICAgIHJldHVybiAodGh1bWJuYWlsLnNsdWcpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwbHlWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5hcHBseUhyZWZWYWx1ZSgpO1xuICAgIHRoaXMuYXBwbHlTcmNWYWx1ZSgpO1xuICB9XG5cbiAgYXBwbHlWaXNpYmlsaXR5KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbCcpLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSB3cmFwcGVyLmRhdGFzZXQuZXZlclBvc3Q7XG5cbiAgICAgIGlmIChzbHVnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tFVkVSIGVycm9yXSBBIERPTSBlbGVtZW50IHdpdGgnICtcbiAgICAgICAgICAnZXZlci10aHVtYm5haWwgY2xhc3MgaXMgbWlzc2luZyBkYXRhLWV2ZXItcG9zdCBhdHRyaWJ1dGUnKTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwtb24nKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsLW9mZicpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlIcmVmVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldC5ldmVyUG9zdDtcblxuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmIChkb20uZGF0YXNldC5ldmVySHJlZk9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLmhyZWYgPSBkb20uZGF0YXNldC5ldmVySHJlZk9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlckhyZWZPZmYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLmhyZWYgPSBkb20uZGF0YXNldC5ldmVySHJlZk9mZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlTcmNWYWx1ZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwnKS5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICBjb25zdCBzbHVnID0gd3JhcHBlci5kYXRhc2V0LmV2ZXJQb3N0O1xuXG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlclNyY09uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0LmV2ZXJTcmNPbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0LmV2ZXJTcmNPZmYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0LmV2ZXJTcmNPZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==