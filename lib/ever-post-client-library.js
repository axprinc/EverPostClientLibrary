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

var _youtube_player = _interopRequireDefault(__webpack_require__(/*! ./youtube_player.js */ "./src/youtube_player.js"));

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
    var youtubePlayer = new _youtube_player.default(payload.body.youtube_id, payload.body.setting);
    youtubePlayer.start();
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

/***/ }),

/***/ "./src/youtube_player.js":
/*!*******************************!*\
  !*** ./src/youtube_player.js ***!
  \*******************************/
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

var YOUTUBE_DOM_ID = 'ever-youtube-player';

var YoutubePlayer =
/*#__PURE__*/
function () {
  function YoutubePlayer(youtubeId, setting) {
    _classCallCheck(this, YoutubePlayer);

    this.ytPlayerDom = document.getElementById(YOUTUBE_DOM_ID);
    this.youtubeId = youtubeId;
    this.setting = setting;
    this.autoplay = this.autoplay.bind(this);
  }

  _createClass(YoutubePlayer, [{
    key: "autoplay",
    value: function autoplay() {
      return this.setting.use_autoplay;
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (typeof this.ytPlayerDom === 'undefined') {
        return;
      }

      if (typeof this.youtubeId === 'undefined' || this.youtubeId === '') {
        console.log(Error('[EVER] Failed to find a valid Youtube ID. Ensure that it is set on EVER console.'));
      }

      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = function () {
        var ytPlayer = new YT.Player(YOUTUBE_DOM_ID, {
          videoId: _this.youtubeId,
          playerVars: {
            modestbranding: 1,
            autohide: 1,
            rel: 0,
            autoplay: _this.autoplay() ? 1 : 0,
            controls: 1,
            showinfo: 1,
            fs: 0,
            frameborder: 0
          },
          events: {
            onReady: function onReady(event) {
              if (_this.autoplay()) {
                event.target.playVideo();
              }
            },
            onStateChange: function onStateChange(event) {
              switch (event.data) {
                case YT.PlayerState.ENDED:
                  event.target.seekTo(0, true);
                  event.target.stopVideo();
                  break;
              }
            }
          }
        });
      };
    }
  }]);

  return YoutubePlayer;
}();

exports.default = YoutubePlayer;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5Ly4vc3JjL3Jld2FyZF9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2V2ZXItcG9zdC1jbGllbnQtbGlicmFyeS8uL3NyYy90aHVtYm5haWxfbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9ldmVyLXBvc3QtY2xpZW50LWxpYnJhcnkvLi9zcmMveW91dHViZV9wbGF5ZXIuanMiXSwibmFtZXMiOlsid2luZG93IiwiRXZlclBvc3RDbGllbnQiLCJwYXlsb2FkIiwidGh1bWJuYWlsTmFiaWdhdGlvbiIsIm1ldGEiLCJuYXZpZ2F0aW9uIiwidGh1bWJuYWlscyIsImFwcGx5VmlzaWJpbGl0eSIsInJld2FyZE5hdmlnYXRpb24iLCJzaG93X3Jld2FyZCIsImJvZHkiLCJlZmZlY3RpdmVfcmV3YXJkX3VybCIsInlvdXR1YmVQbGF5ZXIiLCJ5b3V0dWJlX2lkIiwic2V0dGluZyIsInN0YXJ0IiwiUmV3YXJkTmF2aWdhdGlvbiIsInNob3dSZXdhcmQiLCJlZmZlY3RpdmVSZXdhcmRVcmwiLCJhcHBseUhyZWZWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkb20iLCJzdHlsZSIsImRpc3BsYXkiLCJocmVmIiwiVGh1bWJuYWlsTmF2aWdhdGlvbiIsInNsdWdzIiwibWFwIiwidGh1bWJuYWlsIiwic2x1ZyIsImFwcGx5U3JjVmFsdWUiLCJ3cmFwcGVyIiwiZGF0YXNldCIsImV2ZXJQb3N0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwiZXZlckhyZWZPbiIsImV2ZXJIcmVmT2ZmIiwiZXZlclNyY09uIiwic3JjIiwiZXZlclNyY09mZiIsIllPVVRVQkVfRE9NX0lEIiwiWW91dHViZVBsYXllciIsInlvdXR1YmVJZCIsInl0UGxheWVyRG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJhdXRvcGxheSIsImJpbmQiLCJ1c2VfYXV0b3BsYXkiLCJFcnJvciIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwieXRQbGF5ZXIiLCJZVCIsIlBsYXllciIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwibW9kZXN0YnJhbmRpbmciLCJhdXRvaGlkZSIsInJlbCIsImNvbnRyb2xzIiwic2hvd2luZm8iLCJmcyIsImZyYW1lYm9yZGVyIiwiZXZlbnRzIiwib25SZWFkeSIsImV2ZW50IiwidGFyZ2V0IiwicGxheVZpZGVvIiwib25TdGF0ZUNoYW5nZSIsImRhdGEiLCJQbGF5ZXJTdGF0ZSIsIkVOREVEIiwic2Vla1RvIiwic3RvcFZpZGVvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsTUFBTSxDQUFDQyxjQUFQO0FBQUE7QUFBQTtBQUNFLGtCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFFBQU1DLG1CQUFtQixHQUFHLGtDQUF3QkQsT0FBTyxDQUFDRSxJQUFSLENBQWFDLFVBQWIsQ0FBd0JDLFVBQWhELENBQTVCO0FBQ0FILHVCQUFtQixDQUFDSSxlQUFwQjtBQUVBLFFBQU1DLGdCQUFnQixHQUFHLCtCQUN2Qk4sT0FBTyxDQUFDRSxJQUFSLENBQWFDLFVBQWIsQ0FBd0JJLFdBREQsRUFDY1AsT0FBTyxDQUFDUSxJQUFSLENBQWFDLG9CQUQzQixDQUF6QjtBQUVBSCxvQkFBZ0IsQ0FBQ0QsZUFBakI7QUFFQSxRQUFNSyxhQUFhLEdBQUcsNEJBQWtCVixPQUFPLENBQUNRLElBQVIsQ0FBYUcsVUFBL0IsRUFBMkNYLE9BQU8sQ0FBQ1EsSUFBUixDQUFhSSxPQUF4RCxDQUF0QjtBQUNBRixpQkFBYSxDQUFDRyxLQUFkO0FBQ0Q7O0FBWEg7QUFBQSxJLENBY0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CcUJDLGdCOzs7QUFDbkIsNEJBQVlQLFdBQVosRUFBeUJFLG9CQUF6QixFQUErQztBQUFBOztBQUM3QyxTQUFLTSxVQUFMLEdBQWtCUixXQUFsQjtBQUNBLFNBQUtTLGtCQUFMLEdBQTBCUCxvQkFBMUI7QUFDQSxTQUFLSixlQUFMO0FBQ0EsU0FBS1ksY0FBTDtBQUNEOzs7O3NDQUVpQjtBQUFBOztBQUNoQkMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQUNDLEdBQUQsRUFBUztBQUM1RCxZQUFJLEtBQUksQ0FBQ04sVUFBVCxFQUFxQjtBQUNuQk0sYUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsY0FBcEI7QUFDRCxTQUZELE1BRU87QUFDTEYsYUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRDtBQUNGLE9BTkQ7QUFPQUwsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE9BQTlDLENBQXNELFVBQUNDLEdBQUQsRUFBUztBQUM3RCxZQUFJLEtBQUksQ0FBQ04sVUFBVCxFQUFxQjtBQUNuQk0sYUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRCxTQUZELE1BRU87QUFDTEYsYUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsY0FBcEI7QUFDRDtBQUNGLE9BTkQ7QUFPRDs7O3FDQUVnQjtBQUFBOztBQUNmTCxjQUFRLENBQUNDLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDQyxPQUEzQyxDQUFtRCxVQUFDQyxHQUFELEVBQVM7QUFDMURBLFdBQUcsQ0FBQ0csSUFBSixHQUFXLE1BQUksQ0FBQ1Isa0JBQWhCO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdCa0JTLG1COzs7QUFDbkIsK0JBQVlyQixVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLFNBQUtzQixLQUFMLEdBQWF0QixVQUFVLENBQUN1QixHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQ3pDLGFBQVFBLFNBQVMsQ0FBQ0MsSUFBbEI7QUFDRCxLQUZZLENBQWI7QUFHQSxTQUFLeEIsZUFBTDtBQUNBLFNBQUtZLGNBQUw7QUFDQSxTQUFLYSxhQUFMO0FBQ0Q7Ozs7c0NBRWlCO0FBQUE7O0FBQ2hCWixjQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBQ1csT0FBRCxFQUFhO0FBQ2hFLFlBQU1GLElBQUksR0FBR0UsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxRQUE3Qjs7QUFFQSxZQUFJSixJQUFJLEtBQUtLLFNBQWIsRUFBd0I7QUFDdEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FDViwwREFERjtBQUVEOztBQUVETCxlQUFPLENBQUNaLGdCQUFSLENBQXlCLG9CQUF6QixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBQ0MsR0FBRCxFQUFTO0FBQzlELGNBQUksS0FBSSxDQUFDSyxLQUFMLENBQVdXLFFBQVgsQ0FBb0JSLElBQXBCLENBQUosRUFBK0I7QUFDN0JSLGVBQUcsQ0FBQ0MsS0FBSixDQUFVQyxPQUFWLEdBQW9CLGNBQXBCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xGLGVBQUcsQ0FBQ0MsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0Q7QUFDRixTQU5EO0FBT0FRLGVBQU8sQ0FBQ1osZ0JBQVIsQ0FBeUIscUJBQXpCLEVBQWdEQyxPQUFoRCxDQUF3RCxVQUFDQyxHQUFELEVBQVM7QUFDL0QsY0FBSSxLQUFJLENBQUNLLEtBQUwsQ0FBV1csUUFBWCxDQUFvQlIsSUFBcEIsQ0FBSixFQUErQjtBQUM3QlIsZUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRCxXQUZELE1BRU87QUFDTEYsZUFBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsY0FBcEI7QUFDRDtBQUNGLFNBTkQ7QUFPRCxPQXRCRDtBQXVCRDs7O3FDQUVnQjtBQUFBOztBQUNmTCxjQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBQ1csT0FBRCxFQUFhO0FBQ2hFLFlBQU1GLElBQUksR0FBR0UsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxRQUE3QjtBQUVBRixlQUFPLENBQUNaLGdCQUFSLENBQXlCLEdBQXpCLEVBQThCQyxPQUE5QixDQUFzQyxVQUFDQyxHQUFELEVBQVM7QUFDN0MsY0FBSUEsR0FBRyxDQUFDVyxPQUFKLENBQVlNLFVBQVosS0FBMkJKLFNBQS9CLEVBQTBDO0FBQ3hDLGdCQUFJLE1BQUksQ0FBQ1IsS0FBTCxDQUFXVyxRQUFYLENBQW9CUixJQUFwQixDQUFKLEVBQStCO0FBQzdCUixpQkFBRyxDQUFDRyxJQUFKLEdBQVdILEdBQUcsQ0FBQ1csT0FBSixDQUFZTSxVQUF2QjtBQUNEO0FBQ0Y7O0FBQ0QsY0FBSWpCLEdBQUcsQ0FBQ1csT0FBSixDQUFZTyxXQUFaLEtBQTRCTCxTQUFoQyxFQUEyQztBQUN6QyxnQkFBSSxDQUFDLE1BQUksQ0FBQ1IsS0FBTCxDQUFXVyxRQUFYLENBQW9CUixJQUFwQixDQUFMLEVBQWdDO0FBQzlCUixpQkFBRyxDQUFDRyxJQUFKLEdBQVdILEdBQUcsQ0FBQ1csT0FBSixDQUFZTyxXQUF2QjtBQUNEO0FBQ0Y7QUFDRixTQVhEO0FBWUQsT0FmRDtBQWdCRDs7O29DQUVlO0FBQUE7O0FBQ2RyQixjQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBQ1csT0FBRCxFQUFhO0FBQ2hFLFlBQU1GLElBQUksR0FBR0UsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxRQUE3QjtBQUVBRixlQUFPLENBQUNaLGdCQUFSLENBQXlCLEtBQXpCLEVBQWdDQyxPQUFoQyxDQUF3QyxVQUFDQyxHQUFELEVBQVM7QUFDL0MsY0FBSUEsR0FBRyxDQUFDVyxPQUFKLENBQVlRLFNBQVosS0FBMEJOLFNBQTlCLEVBQXlDO0FBQ3ZDLGdCQUFJLE1BQUksQ0FBQ1IsS0FBTCxDQUFXVyxRQUFYLENBQW9CUixJQUFwQixDQUFKLEVBQStCO0FBQzdCUixpQkFBRyxDQUFDb0IsR0FBSixHQUFVcEIsR0FBRyxDQUFDVyxPQUFKLENBQVlRLFNBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxjQUFJbkIsR0FBRyxDQUFDVyxPQUFKLENBQVlVLFVBQVosS0FBMkJSLFNBQS9CLEVBQTBDO0FBQ3hDLGdCQUFJLENBQUMsTUFBSSxDQUFDUixLQUFMLENBQVdXLFFBQVgsQ0FBb0JSLElBQXBCLENBQUwsRUFBZ0M7QUFDOUJSLGlCQUFHLENBQUNvQixHQUFKLEdBQVVwQixHQUFHLENBQUNXLE9BQUosQ0FBWVUsVUFBdEI7QUFDRDtBQUNGO0FBQ0YsU0FYRDtBQVlELE9BZkQ7QUFnQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVILElBQU1DLGNBQWMsR0FBRyxxQkFBdkI7O0lBRXFCQyxhOzs7QUFDbkIseUJBQVlDLFNBQVosRUFBdUJqQyxPQUF2QixFQUFnQztBQUFBOztBQUM5QixTQUFLa0MsV0FBTCxHQUFtQjVCLFFBQVEsQ0FBQzZCLGNBQVQsQ0FBd0JKLGNBQXhCLENBQW5CO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLakMsT0FBTCxHQUFlQSxPQUFmO0FBRUEsU0FBS29DLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtyQyxPQUFMLENBQWFzQyxZQUFwQjtBQUNEOzs7NEJBRU07QUFBQTs7QUFDTCxVQUFHLE9BQU8sS0FBS0osV0FBWixLQUE2QixXQUFoQyxFQUE2QztBQUFFO0FBQVM7O0FBRXhELFVBQUcsT0FBTyxLQUFLRCxTQUFaLEtBQTJCLFdBQTNCLElBQTBDLEtBQUtBLFNBQUwsS0FBbUIsRUFBaEUsRUFBbUU7QUFDakVWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFLLENBQUMsa0ZBQUQsQ0FBakI7QUFDRDs7QUFFRCxVQUFJQyxHQUFHLEdBQUdsQyxRQUFRLENBQUNtQyxhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQUQsU0FBRyxDQUFDWCxHQUFKLEdBQVUsb0NBQVY7QUFDQSxVQUFJYSxjQUFjLEdBQUdwQyxRQUFRLENBQUNxQyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFyQjtBQUNBRCxvQkFBYyxDQUFDRSxVQUFmLENBQTBCQyxZQUExQixDQUF1Q0wsR0FBdkMsRUFBNENFLGNBQTVDOztBQUVBeEQsWUFBTSxDQUFDNEQsdUJBQVAsR0FBaUMsWUFBTTtBQUNyQyxZQUFNQyxRQUFRLEdBQUcsSUFBSUMsRUFBRSxDQUFDQyxNQUFQLENBQWNsQixjQUFkLEVBQThCO0FBQzdDbUIsaUJBQU8sRUFBRSxLQUFJLENBQUNqQixTQUQrQjtBQUU3Q2tCLG9CQUFVLEVBQUU7QUFDVkMsMEJBQWMsRUFBRSxDQUROO0FBRVZDLG9CQUFRLEVBQUUsQ0FGQTtBQUdWQyxlQUFHLEVBQUUsQ0FISztBQUlWbEIsb0JBQVEsRUFBRSxLQUFJLENBQUNBLFFBQUwsS0FBa0IsQ0FBbEIsR0FBc0IsQ0FKdEI7QUFLVm1CLG9CQUFRLEVBQUUsQ0FMQTtBQU1WQyxvQkFBUSxFQUFFLENBTkE7QUFPVkMsY0FBRSxFQUFFLENBUE07QUFRVkMsdUJBQVcsRUFBRTtBQVJILFdBRmlDO0FBWTdDQyxnQkFBTSxFQUFFO0FBQ05DLG1CQUFPLEVBQUcsaUJBQUFDLEtBQUssRUFBSTtBQUNqQixrQkFBRyxLQUFJLENBQUN6QixRQUFMLEVBQUgsRUFBbUI7QUFDakJ5QixxQkFBSyxDQUFDQyxNQUFOLENBQWFDLFNBQWI7QUFDRDtBQUNGLGFBTEs7QUFNTkMseUJBQWEsRUFBRyx1QkFBQUgsS0FBSyxFQUFJO0FBQ3ZCLHNCQUFPQSxLQUFLLENBQUNJLElBQWI7QUFDRSxxQkFBS2pCLEVBQUUsQ0FBQ2tCLFdBQUgsQ0FBZUMsS0FBcEI7QUFDRU4sdUJBQUssQ0FBQ0MsTUFBTixDQUFhTSxNQUFiLENBQW9CLENBQXBCLEVBQXVCLElBQXZCO0FBQ0FQLHVCQUFLLENBQUNDLE1BQU4sQ0FBYU8sU0FBYjtBQUNBO0FBSko7QUFNRDtBQWJLO0FBWnFDLFNBQTlCLENBQWpCO0FBNEJELE9BN0JEO0FBOEJEIiwiZmlsZSI6ImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZXZlci1wb3N0LWNsaWVudC1saWJyYXJ5XCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV2ZXItcG9zdC1jbGllbnQtbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJldmVyLXBvc3QtY2xpZW50LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgVGh1bWJuYWlsTmF2aWdhdGlvbiBmcm9tICcuL3RodW1ibmFpbF9uYXZpZ2F0aW9uLmpzJztcbmltcG9ydCBSZXdhcmROYXZpZ2F0aW9uIGZyb20gJy4vcmV3YXJkX25hdmlnYXRpb24uanMnO1xuaW1wb3J0IFlvdXR1YmVQbGF5ZXIgZnJvbSAnLi95b3V0dWJlX3BsYXllci5qcyc7XG5cbndpbmRvdy5FdmVyUG9zdENsaWVudCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IocGF5bG9hZCkge1xuICAgIGNvbnN0IHRodW1ibmFpbE5hYmlnYXRpb24gPSBuZXcgVGh1bWJuYWlsTmF2aWdhdGlvbihwYXlsb2FkLm1ldGEubmF2aWdhdGlvbi50aHVtYm5haWxzKTtcbiAgICB0aHVtYm5haWxOYWJpZ2F0aW9uLmFwcGx5VmlzaWJpbGl0eSgpO1xuXG4gICAgY29uc3QgcmV3YXJkTmF2aWdhdGlvbiA9IG5ldyBSZXdhcmROYXZpZ2F0aW9uKFxuICAgICAgcGF5bG9hZC5tZXRhLm5hdmlnYXRpb24uc2hvd19yZXdhcmQsIHBheWxvYWQuYm9keS5lZmZlY3RpdmVfcmV3YXJkX3VybCk7XG4gICAgcmV3YXJkTmF2aWdhdGlvbi5hcHBseVZpc2liaWxpdHkoKTtcblxuICAgIGNvbnN0IHlvdXR1YmVQbGF5ZXIgPSBuZXcgWW91dHViZVBsYXllcihwYXlsb2FkLmJvZHkueW91dHViZV9pZCwgcGF5bG9hZC5ib2R5LnNldHRpbmcpO1xuICAgIHlvdXR1YmVQbGF5ZXIuc3RhcnQoKTtcbiAgfVxufVxuXG4vLyBleHBvcnQgeyBFdmVyUG9zdENsaWVudCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBFdmVyUG9zdENsaWVudDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXdhcmROYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3Ioc2hvd19yZXdhcmQsIGVmZmVjdGl2ZV9yZXdhcmRfdXJsKSB7XG4gICAgdGhpcy5zaG93UmV3YXJkID0gc2hvd19yZXdhcmQ7XG4gICAgdGhpcy5lZmZlY3RpdmVSZXdhcmRVcmwgPSBlZmZlY3RpdmVfcmV3YXJkX3VybDtcbiAgICB0aGlzLmFwcGx5VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuYXBwbHlIcmVmVmFsdWUoKTtcbiAgfVxuXG4gIGFwcGx5VmlzaWJpbGl0eSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci1yZXdhcmQtb24nKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXJld2FyZC1vZmYnKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlIcmVmVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYS5ldmVyLXJld2FyZCcpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgZG9tLmhyZWYgPSB0aGlzLmVmZmVjdGl2ZVJld2FyZFVybDtcbiAgICB9KTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRodW1ibmFpbE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0aHVtYm5haWxzKSB7XG4gICAgdGhpcy5zbHVncyA9IHRodW1ibmFpbHMubWFwKCh0aHVtYm5haWwpID0+IHtcbiAgICAgIHJldHVybiAodGh1bWJuYWlsLnNsdWcpO1xuICAgIH0pO1xuICAgIHRoaXMuYXBwbHlWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5hcHBseUhyZWZWYWx1ZSgpO1xuICAgIHRoaXMuYXBwbHlTcmNWYWx1ZSgpO1xuICB9XG5cbiAgYXBwbHlWaXNpYmlsaXR5KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldmVyLXRodW1ibmFpbCcpLmZvckVhY2goKHdyYXBwZXIpID0+IHtcbiAgICAgIGNvbnN0IHNsdWcgPSB3cmFwcGVyLmRhdGFzZXQuZXZlclBvc3Q7XG5cbiAgICAgIGlmIChzbHVnID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1tFVkVSIGVycm9yXSBBIERPTSBlbGVtZW50IHdpdGgnICtcbiAgICAgICAgICAnZXZlci10aHVtYm5haWwgY2xhc3MgaXMgbWlzc2luZyBkYXRhLWV2ZXItcG9zdCBhdHRyaWJ1dGUnKTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwtb24nKS5mb3JFYWNoKChkb20pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2x1Z3MuaW5jbHVkZXMoc2x1ZykpIHtcbiAgICAgICAgICBkb20uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsLW9mZicpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlIcmVmVmFsdWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZXItdGh1bWJuYWlsJykuZm9yRWFjaCgod3JhcHBlcikgPT4ge1xuICAgICAgY29uc3Qgc2x1ZyA9IHdyYXBwZXIuZGF0YXNldC5ldmVyUG9zdDtcblxuICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaCgoZG9tKSA9PiB7XG4gICAgICAgIGlmIChkb20uZGF0YXNldC5ldmVySHJlZk9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLmhyZWYgPSBkb20uZGF0YXNldC5ldmVySHJlZk9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlckhyZWZPZmYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLmhyZWYgPSBkb20uZGF0YXNldC5ldmVySHJlZk9mZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlTcmNWYWx1ZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlci10aHVtYm5haWwnKS5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICBjb25zdCBzbHVnID0gd3JhcHBlci5kYXRhc2V0LmV2ZXJQb3N0O1xuXG4gICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goKGRvbSkgPT4ge1xuICAgICAgICBpZiAoZG9tLmRhdGFzZXQuZXZlclNyY09uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0LmV2ZXJTcmNPbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbS5kYXRhc2V0LmV2ZXJTcmNPZmYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICghdGhpcy5zbHVncy5pbmNsdWRlcyhzbHVnKSkge1xuICAgICAgICAgICAgZG9tLnNyYyA9IGRvbS5kYXRhc2V0LmV2ZXJTcmNPZmY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgWU9VVFVCRV9ET01fSUQgPSAnZXZlci15b3V0dWJlLXBsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFlvdXR1YmVQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih5b3V0dWJlSWQsIHNldHRpbmcpIHtcbiAgICB0aGlzLnl0UGxheWVyRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoWU9VVFVCRV9ET01fSUQpO1xuICAgIHRoaXMueW91dHViZUlkID0geW91dHViZUlkO1xuICAgIHRoaXMuc2V0dGluZyA9IHNldHRpbmc7XG5cbiAgICB0aGlzLmF1dG9wbGF5ID0gdGhpcy5hdXRvcGxheS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXV0b3BsYXkoKSB7XG4gICAgcmV0dXJuKHRoaXMuc2V0dGluZy51c2VfYXV0b3BsYXkpXG4gIH1cblxuICBzdGFydCgpe1xuICAgIGlmKHR5cGVvZih0aGlzLnl0UGxheWVyRG9tKSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuOyB9XG5cbiAgICBpZih0eXBlb2YodGhpcy55b3V0dWJlSWQpID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnlvdXR1YmVJZCA9PT0gJycpe1xuICAgICAgY29uc29sZS5sb2coRXJyb3IoJ1tFVkVSXSBGYWlsZWQgdG8gZmluZCBhIHZhbGlkIFlvdXR1YmUgSUQuIEVuc3VyZSB0aGF0IGl0IGlzIHNldCBvbiBFVkVSIGNvbnNvbGUuJykpO1xuICAgIH1cblxuICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG4gICAgbGV0IGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG4gICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeXRQbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFlPVVRVQkVfRE9NX0lELCB7XG4gICAgICAgIHZpZGVvSWQ6IHRoaXMueW91dHViZUlkLFxuICAgICAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgICAgcmVsOiAwLFxuICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5KCkgPyAxIDogMCxcbiAgICAgICAgICBjb250cm9sczogMSxcbiAgICAgICAgICBzaG93aW5mbzogMSxcbiAgICAgICAgICBmczogMCxcbiAgICAgICAgICBmcmFtZWJvcmRlcjogMFxuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBvblJlYWR5OiAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5hdXRvcGxheSgpKXtcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IChldmVudCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQuZGF0YSl7XG4gICAgICAgICAgICAgIGNhc2UgWVQuUGxheWVyU3RhdGUuRU5ERUQ6XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNlZWtUbygwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=