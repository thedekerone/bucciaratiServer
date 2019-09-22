module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/Carousel.js":
/*!*******************************!*\
  !*** ./component/Carousel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-gesture */ "react-use-gesture");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\Carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function Carousel(props) {
  var margin = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.margin, 10);

  var slides = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.slides, 10);

  var width = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.width, 10);

  var height = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(props.height, 10);

  const [{
    xy
  }, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(() => ({
    xy: [0, 0]
  }));
  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_5__["useDrag"])(({
    down,
    local,
    velocity,
    direction
  }) => {
    set({
      xy: down ? [local[0], 0] : [Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width), 0]
    });

    if (!down) {
      local[0] = Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width);

      if (local[0] > 0 || !window.matchMedia('(max-width:950px)').matches && slides < 7 || !window.matchMedia('(max-width:650px)').matches && slides < 6 || !window.matchMedia('(max-width:500px)').matches && slides < 5) {
        console.log(1);
        local[0] = 0;
        set({
          xy: [0, 0]
        });
      } else if (window.matchMedia('(max-width:950px)').matches) {
        console.log(2);

        if (local[0] < window.innerWidth - (width * slides + margin * (slides - 1))) {
          local[0] = window.innerWidth - 10 - (width * slides + margin * (slides - 1));
          console.log(12);
          set({
            xy: [local[0], 0]
          });
        }
      } else {
        console.log(3);

        if (local[0] < 1150 - (width * slides + margin * (slides - 1))) {
          console.log(4);
          local[0] = 1150 - 25 - (width * slides + margin * (slides - 1));
          set({
            xy: [local[0], 0]
          });
        }
      } //  window.innerWidth - (width * 5 + margin * 4);

    }
  });
  var styleNeeded = {
    transform: xy.interpolate((x, y) => `translate3D(${x}px,0, 0)`),
    whiteSpace: 'nowrap',
    margin: '0 auto' // display        : slides < 6 ? 'flex' : 'block',
    // justifyContent : slides < 6 ? 'center' : null

  };
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bind(), {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1833423105", [width, height, margin]]]) + " " + 'carousel-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    id: `${slides < 6 ? 'flex' : null}`,
    className: "carousel",
    style: styleNeeded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1833423105",
    dynamic: [width, height, margin],
    __self: this
  }, `.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}.carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}.carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:${width}px;height:${height}px;background:white;margin-right:${margin}px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}@media (min-width:950px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXENhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGZSxBQUdzQixBQUdELEFBR0YsQUFJUSxBQWFQLEFBSUcsYUFwQmxCLEVBSEEsQ0FIQSxBQTJCQyxLQWpCcUMscUNBQ0MsZ0JBWWQsc0JBWFAsaUJBQzJCLDRDQUNuQixnQkFVekIsU0FUd0Isd0JBQ0Ysc0JBQ0Ysb0JBQ0gscUZBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXENhcm91c2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCB7IHVzZURyYWcsIHVzZVNjcm9sbCB9IGZyb20gJ3JlYWN0LXVzZS1nZXN0dXJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHByb3BzKSB7XHJcblx0dmFyIG1hcmdpbiA9IHBhcnNlSW50KHByb3BzLm1hcmdpbiwgMTApO1xyXG5cdHZhciBzbGlkZXMgPSBwYXJzZUludChwcm9wcy5zbGlkZXMsIDEwKTtcclxuXHR2YXIgd2lkdGggPSBwYXJzZUludChwcm9wcy53aWR0aCwgMTApO1xyXG5cdHZhciBoZWlnaHQgPSBwYXJzZUludChwcm9wcy5oZWlnaHQsIDEwKTtcclxuXHRjb25zdCBbXHJcblx0XHR7IHh5IH0sXHJcblx0XHRzZXRcclxuXHRdID0gdXNlU3ByaW5nKCgpID0+ICh7XHJcblx0XHR4eSA6IFtcclxuXHRcdFx0MCxcclxuXHRcdFx0MFxyXG5cdFx0XVxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgYmluZCA9IHVzZURyYWcoKHsgZG93biwgbG9jYWwsIHZlbG9jaXR5LCBkaXJlY3Rpb24gfSkgPT4ge1xyXG5cdFx0c2V0KHtcclxuXHRcdFx0eHkgOiBkb3duXHJcblx0XHRcdFx0PyBbXHJcblx0XHRcdFx0XHRcdGxvY2FsWzBdLFxyXG5cdFx0XHRcdFx0XHQwXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0OiBbXHJcblx0XHRcdFx0XHRcdE1hdGgucm91bmQobG9jYWxbMF0gLyAobWFyZ2luICsgd2lkdGgpICsgMC4zICogZGlyZWN0aW9uWzBdKSAqIChtYXJnaW4gKyB3aWR0aCksXHJcblx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICghZG93bikge1xyXG5cdFx0XHRsb2NhbFswXSA9IE1hdGgucm91bmQobG9jYWxbMF0gLyAobWFyZ2luICsgd2lkdGgpICsgMC4zICogZGlyZWN0aW9uWzBdKSAqIChtYXJnaW4gKyB3aWR0aCk7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRsb2NhbFswXSA+IDAgfHxcclxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjk1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNykgfHxcclxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjY1MHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNikgfHxcclxuXHRcdFx0XHQoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjUwMHB4KScpLm1hdGNoZXMgJiYgc2xpZGVzIDwgNSlcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coMSk7XHJcblx0XHRcdFx0bG9jYWxbMF0gPSAwO1xyXG5cdFx0XHRcdHNldCh7XHJcblx0XHRcdFx0XHR4eSA6IFtcclxuXHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjk1MHB4KScpLm1hdGNoZXMpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygyKTtcclxuXHJcblx0XHRcdFx0aWYgKGxvY2FsWzBdIDwgd2luZG93LmlubmVyV2lkdGggLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpKSB7XHJcblx0XHRcdFx0XHRsb2NhbFswXSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTAgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coMTIpO1xyXG5cclxuXHRcdFx0XHRcdHNldCh7XHJcblx0XHRcdFx0XHRcdHh5IDogW1xyXG5cdFx0XHRcdFx0XHRcdGxvY2FsWzBdLFxyXG5cdFx0XHRcdFx0XHRcdDBcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKDMpO1xyXG5cclxuXHRcdFx0XHRpZiAobG9jYWxbMF0gPCAxMTUwIC0gKHdpZHRoICogc2xpZGVzICsgbWFyZ2luICogKHNsaWRlcyAtIDEpKSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coNCk7XHJcblxyXG5cdFx0XHRcdFx0bG9jYWxbMF0gPSAxMTUwIC0gMjUgLSAod2lkdGggKiBzbGlkZXMgKyBtYXJnaW4gKiAoc2xpZGVzIC0gMSkpO1xyXG5cdFx0XHRcdFx0c2V0KHtcclxuXHRcdFx0XHRcdFx0eHkgOiBbXHJcblx0XHRcdFx0XHRcdFx0bG9jYWxbMF0sXHJcblx0XHRcdFx0XHRcdFx0MFxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gIHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpZHRoICogNSArIG1hcmdpbiAqIDQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHZhciBzdHlsZU5lZWRlZCA9IHtcclxuXHRcdHRyYW5zZm9ybSAgOiB4eS5pbnRlcnBvbGF0ZSgoeCwgeSkgPT4gYHRyYW5zbGF0ZTNEKCR7eH1weCwwLCAwKWApLFxyXG5cdFx0d2hpdGVTcGFjZSA6ICdub3dyYXAnLFxyXG5cdFx0bWFyZ2luICAgICA6ICcwIGF1dG8nXHJcblxyXG5cdFx0Ly8gZGlzcGxheSAgICAgICAgOiBzbGlkZXMgPCA2ID8gJ2ZsZXgnIDogJ2Jsb2NrJyxcclxuXHRcdC8vIGp1c3RpZnlDb250ZW50IDogc2xpZGVzIDwgNiA/ICdjZW50ZXInIDogbnVsbFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udGFpbmVyJyB7Li4uYmluZCgpfT5cclxuXHRcdFx0PGFuaW1hdGVkLmRpdiBpZD17YCR7c2xpZGVzIDwgNiA/ICdmbGV4JyA6IG51bGx9YH0gY2xhc3NOYW1lPSdjYXJvdXNlbCcgc3R5bGU9e3N0eWxlTmVlZGVkfT5cclxuXHRcdFx0XHR7cHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIge1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lcjpob3ZlciB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJvdXNlbC1jb250YWluZXIgOmdsb2JhbCguY2Fyb3VzZWxfX2l0ZW0pIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdHdpZHRoOiAke3dpZHRofXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAke2hlaWdodH1weDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAke21hcmdpbn1weDtcclxuXHRcdFx0XHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdFx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSB7XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKCNmbGV4KSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LmNhcm91c2VsLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbCkge1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\testing\client\component\Carousel.js */`));
}

/***/ }),

/***/ "./component/MainDisplayer.js":
/*!************************************!*\
  !*** ./component/MainDisplayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainDisplayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\MainDisplayer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function MainDisplayer() {
  return __jsx("div", {
    className: "jsx-2795784378" + " " + 'main-displayer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    id: "item1",
    className: "jsx-2795784378" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: "static/main/fashion.jpg",
    height: "100%",
    width: "100%",
    alt: "",
    className: "jsx-2795784378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    id: "item2",
    className: "jsx-2795784378" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2795784378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "MEJORES OFERTAS")), __jsx("div", {
    id: "item3",
    className: "jsx-2795784378" + " " + 'main-displayer__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2795784378",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "COLLECI\xD3N INVIERNO")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2795784378",
    __self: this
  }, ".main-displayer.jsx-2795784378{display:grid;grid-template:1fr 1fr 1fr / 1fr 1fr;height:25rem;}#item1.jsx-2795784378{grid-column:1/3;grid-row:1/3;}#item2.jsx-2795784378{background:rgb(109,104,255);background:linear-gradient(90deg,rgba(109,104,255,1) 0%,rgba(255,86,244,1) 100%);}#item3.jsx-2795784378{background:rgb(228,113,62);background:linear-gradient(90deg,rgba(228,113,62,1) 0%,rgba(209,0,181,1) 100%);}#item2.jsx-2795784378,#item3.jsx-2795784378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#item2.jsx-2795784378 h1.jsx-2795784378,#item3.jsx-2795784378 h1.jsx-2795784378{font-size:1.4em;margin:0;text-align:center;color:white;}.main-displayer__item.jsx-2795784378{overflow:hidden;}@media (min-width:560px){.main-displayer.jsx-2795784378{grid-template:200px 200px/ 1fr 1fr 1.5fr;}#item1.jsx-2795784378{grid-column:1/3;grid-row:1/3;}}img.jsx-2795784378{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXE1haW5EaXNwbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUssQUFHb0IsQUFLRyxBQUljLEFBSUQsQUFLaEIsQUFNRyxBQU9BLEFBSzBCLEFBR3pCLEFBS0EsYUEzQ21CLEdBS3ZCLEFBbUJKLEFBT1YsQUFRZSxDQUtmLFFBbkJtQixFQVpxRSxDQUpFLENBSDFGLEFBa0NDLFlBSkEsRUFWWSxNQXpCQyxNQTBCZCxPQXpCQSxZQWdCd0IsZ0NBSnhCLEdBSkEsZ0VBU29CLDZGQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXHRlc3RpbmdcXGNsaWVudFxcY29tcG9uZW50XFxNYWluRGlzcGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5EaXNwbGF5ZXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWRpc3BsYXllcic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtYWluLWRpc3BsYXllcl9faXRlbScgaWQ9J2l0ZW0xJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz0nc3RhdGljL21haW4vZmFzaGlvbi5qcGcnIGhlaWdodD0nMTAwJScgd2lkdGg9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tZGlzcGxheWVyX19pdGVtJyBpZD0naXRlbTInPlxyXG5cdFx0XHRcdDxoMT5NRUpPUkVTIE9GRVJUQVM8L2gxPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tZGlzcGxheWVyX19pdGVtJyBpZD0naXRlbTMnPlxyXG5cdFx0XHRcdDxoMT5DT0xMRUNJw5NOIElOVklFUk5PPC9oMT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxzdHlsZSBqc3g+XHJcblx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdC5tYWluLWRpc3BsYXllciB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyNXJlbTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNpdGVtMSB7XHJcblx0XHRcdFx0XHRcdGdyaWQtY29sdW1uOiAxLzM7XHJcblx0XHRcdFx0XHRcdGdyaWQtcm93OiAxLzM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQjaXRlbTIge1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMTA5LCAxMDQsIDI1NSk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMDksIDEwNCwgMjU1LCAxKSAwJSwgcmdiYSgyNTUsIDg2LCAyNDQsIDEpIDEwMCUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I2l0ZW0zIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDIyOCwgMTEzLCA2Mik7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjgsIDExMywgNjIsIDEpIDAlLCByZ2JhKDIwOSwgMCwgMTgxLCAxKSAxMDAlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCNpdGVtMixcclxuXHRcdFx0XHRcdCNpdGVtMyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I2l0ZW0yIGgxLFxyXG5cdFx0XHRcdFx0I2l0ZW0zIGgxIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjRlbTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQubWFpbi1kaXNwbGF5ZXJfX2l0ZW0ge1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA1NjBweCkge1xyXG5cdFx0XHRcdFx0XHQubWFpbi1kaXNwbGF5ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGU6IDIwMHB4IDIwMHB4LyAxZnIgMWZyIDEuNWZyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCNpdGVtMSB7XHJcblx0XHRcdFx0XHRcdFx0Z3JpZC1jb2x1bW46IDEvMztcclxuXHRcdFx0XHRcdFx0XHRncmlkLXJvdzogMS8zO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\MainDisplayer.js */"));
}

/***/ }),

/***/ "./component/MarcasDisplay.js":
/*!************************************!*\
  !*** ./component/MarcasDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarcasDisplay; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\MarcasDisplay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function MarcasDisplay() {
  return __jsx(_component_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slides: "4",
    width: "210px",
    margin: "25px",
    height: "98px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "producto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: "static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "producto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "producto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: "static/marcas/nike.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    route: "producto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: "static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2509371334",
    __self: this
  }, "img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXE1hcmNhc0Rpc3BsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNLLEFBRzhCLHVCQUNELHNCQUNGLG9CQUNGLGtCQUNILDZFQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXHRlc3RpbmdcXGNsaWVudFxcY29tcG9uZW50XFxNYXJjYXNEaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudC9DYXJvdXNlbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFyY2FzRGlzcGxheSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcm91c2VsIHNsaWRlcz0nNCcgd2lkdGg9JzIxMHB4JyBtYXJnaW49JzI1cHgnIGhlaWdodD0nOThweCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJvdXNlbF9faXRlbSc+XHJcblx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJz5cclxuXHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nc3RhdGljL21hcmNhcy9BZGlkYXMtMTI4MHg3MjAuanBnJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdDxMaW5rIHJvdXRlPSdwcm9kdWN0byc+XHJcblx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9J3N0YXRpYy9tYXJjYXMvZ3VjY2kucG5nJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdDxMaW5rIHJvdXRlPSdwcm9kdWN0byc+XHJcblx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9J3N0YXRpYy9tYXJjYXMvbmlrZS5wbmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJvdXNlbF9faXRlbSc+XHJcblx0XHRcdFx0PExpbmsgcm91dGU9J3Byb2R1Y3RvJz5cclxuXHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nc3RhdGljL21hcmNhcy9BZGlkYXMtMTI4MHg3MjAuanBnJyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0Omdsb2JhbChpbWcpIHtcclxuXHRcdFx0XHRcdFx0LXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1raHRtbC11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdC1tb3otdXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHQtby11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdHVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0PC9DYXJvdXNlbD5cclxuXHQpO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\MarcasDisplay.js */"));
}

/***/ }),

/***/ "./component/Navbar.js":
/*!*****************************!*\
  !*** ./component/Navbar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar() {
  return __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'main-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1051662459" + " " + 'main-navbar__title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Logo"))), __jsx("span", {
    className: "jsx-1051662459" + " " + 'main-navbar__icon',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'categorias',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Categorias"), ' '), __jsx("img", {
    width: "30px",
    src: "static/icons/menu.svg",
    alt: "",
    className: "jsx-1051662459" + " " + 'icon-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1051662459" + " " + 'secondary-navbar',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1051662459" + " " + 'secondary-navbar__items',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Hombres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Mujeres"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Ni\xF1os"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Accesorios"), __jsx("li", {
    className: "jsx-1051662459",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Regalos"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051662459",
    __self: this
  }, ".navbar-container.jsx-1051662459{position:relative;}.navbar.jsx-1051662459{width:100%;background:white;z-index:100;position:fixed;}.navbar.jsx-1051662459 h1.jsx-1051662459{margin:.5rem 0;}.main-navbar.jsx-1051662459{margin:0 auto;max-width:1150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.main-navbar__icon.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.categorias.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding-right:1rem;}.icon-menu.jsx-1051662459{color;}.secondary-navbar.jsx-1051662459{display:none;background:#F2F2F2;}.secondary-navbar__items.jsx-1051662459{max-width:1150px;margin:0 auto;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1150px;width:100%;padding:0;margin:0;max-width:400px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;}.secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459 li.jsx-1051662459{list-style:none;font-size:.8rem;}@media (min-width:560px){.secondary-navbar.jsx-1051662459{display:block;}body{background:white;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ0ssQUFHd0IsQUFJWSxBQU1kLEFBR0QsQUFTZ0IsQUFLakIsQUFNQSxBQUVpQixBQUlkLEFBSUosQUFXRyxBQU1FLEFBR0EsTUE5QkgsS0E1QkcsRUFnQ25CLENBdkJrQixBQThDRSxDQWpEbkIsQ0E2Q2MsQ0FoQkMsQUF1QkksQ0E3REosVUFJZ0IsR0FVakIsQUF5QmQsQ0FKQSxBQW1CZSxRQWpEQyxlQUNoQixtQkFla0IsQUFLRSxBQWdCRixpQkFDVyxXQUNELEdBN0JHLE9BOEJILFNBQ00sZ0JBQ2Usc0NBeEJsRCxBQUtDLG1CQUFDLDBCQVptQixnQ0FnQ2lCLHNCQXpCckMsdUNBTmdCLGVBQ0QsaUJBZ0NELFlBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFx0ZXN0aW5nXFxjbGllbnRcXGNvbXBvbmVudFxcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSduYXZiYXItY29udGFpbmVyJz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdmJhcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21haW4tbmF2YmFyJz5cclxuXHRcdFx0XHRcdDxMaW5rIHJvdXRlPScvJz5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0nbWFpbi1uYXZiYXJfX3RpdGxlJz5Mb2dvPC9oMT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdtYWluLW5hdmJhcl9faWNvbic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXRlZ29yaWFzJz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5DYXRlZ29yaWFzPC9wPnsnICd9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2ljb24tbWVudScgd2lkdGg9JzMwcHgnIHNyYz0nc3RhdGljL2ljb25zL21lbnUuc3ZnJyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kYXJ5LW5hdmJhcic+XHJcblx0XHRcdFx0XHQ8bmF2IGNsYXNzTmFtZT0nc2Vjb25kYXJ5LW5hdmJhcl9faXRlbXMnPlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0PGxpPkhvbWJyZXM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaT5NdWplcmVzPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+TmnDsW9zPC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGk+QWNjZXNvcmlvczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpPlJlZ2Fsb3M8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0PC9uYXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItY29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0Lm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubmF2YmFyIGgxe1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IC41cmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQubWFpbi1uYXZiYXIge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOjExNTBweDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWFpbi1uYXZiYXJfX2ljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbTpjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAuY2F0ZWdvcmlhc3tcclxuXHRcdFx0XHRcdFx0IGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0IGFsaWduLWl0ZW06IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0IHBhZGRpbmctcmlnaHQ6IDFyZW1cclxuXHRcdFx0XHRcdCB9XHJcblx0XHRcdFx0XHQuaWNvbi1tZW51e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdC5zZWNvbmRhcnktbmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNGMkYyRjJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5zZWNvbmRhcnktbmF2YmFyX19pdGVtc3tcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOjExNTBweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeS1uYXZiYXJfX2l0ZW1zIHVsIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDExNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5LW5hdmJhcl9faXRlbXMgdWwgbGkge1xyXG5cdFx0XHRcdFx0XHRsaXN0LXN0eWxlOm5vbmU7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjhyZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU2MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWNvbmRhcnktbmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoYm9keSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\Navbar.js */"));
}

/***/ }),

/***/ "./component/ProductView.js":
/*!**********************************!*\
  !*** ./component/ProductView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\ProductView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Product(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    width: "100%",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-banner',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "OFERTA EXCLUSIVA")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.data.title)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.data.price * 2 + '.00'), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.data.price)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.wrap ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Descripci\xF3n:"), " ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero")) : null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__delivery',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-truck-50.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), ' ', __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Env\xEDo internacional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews--number',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "128 reviews")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1644641029",
    dynamic: [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5'],
    __self: this
  }, `.product.__jsx-style-dynamic-selector{display:grid;background:white;max-width:${props.wrap ? '1000px' : '400px'};width:100%;margin:0 auto;font-size:11px;box-sizing:border-box;padding:1em;grid-template:auto /1fr 1fr 1fr;}.product__img.__jsx-style-dynamic-selector{grid-row:1/2;padding:${props.wrap ? '0' : '.9em'};box-sizing:border-box;}.product-title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;padding:.5em 0 .7em 0;}.product__description.__jsx-style-dynamic-selector,.product__img.__jsx-style-dynamic-selector{background:white;width:100%;}.product__description.__jsx-style-dynamic-selector{padding-left:${props.wrap ? '7em' : '1.2em'};grid-column:2/4;grid-row:1/3;box-sizing:border-box;}.product-banner.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:white;font-size:.7em;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4em;}.product-discount.__jsx-style-dynamic-selector{margin-bottom:.6em;}.product-discount__price.__jsx-style-dynamic-selector{font-size:.8em;}.product-discount__percentage.__jsx-style-dynamic-selector{margin-left:.8em;color:red;font-size:1em;}.product-price.__jsx-style-dynamic-selector{font-size:1.rem;color:black;}.product-information__delivery.__jsx-style-dynamic-selector{padding:1.5em 0 .8em 0;}.product-information__reviews.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.product-information__reviews--number.__jsx-style-dynamic-selector{color:#ffca28;margin-left:1rem;height:20px;}@media (min-width:660px){.product.__jsx-style-dynamic-selector{border:${props.wrap ? ' 0px' : '1px solid #d5d5d5'};font-size:15px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXFByb2R1Y3RWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ESyxBQUdvQixBQVdBLEFBS0osQUFLUSxBQUl5QixBQU85QixBQU9PLEFBR0osQUFHRSxBQU1ELEFBS08sQUFHVixBQUlDLEFBT3VCLFNBckRmLEdBZ0JQLENBaENFLEFBV29CLENBb0RwQixDQXJCbEIsQ0FTYSxDQTlCRCxBQXdCRCxFQU5YLElBaUJBLElBdkI2QixBQWNkLENBekJmLEFBOEJBLEVBbkR3QyxDQWdCeEMsQUErQ2EsS0FNSSxLQXRCakIsQ0F2QmlCLENBd0NqQixPQXJEdUIsQ0EyRHRCLEVBckNvRixLQVJ2RSxXQXhCRixFQXlCVyxDQWR2QixFQThDb0IsTUF4REwsYUF5QmYsQ0F4QmdCLGVBQ08sb0JBOEJQLEVBN0JILFlBQ29CLENBNkJqQyx1QkF3QkEsUUFwREEiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFx0ZXN0aW5nXFxjbGllbnRcXGNvbXBvbmVudFxcUHJvZHVjdFZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdChwcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19pbWcnPlxyXG5cdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSB3aWR0aD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWJhbm5lcic+XHJcblx0XHRcdFx0XHQ8c3Bhbj5PRkVSVEEgRVhDTFVTSVZBPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cclxuXHRcdFx0XHRcdDxoMz57cHJvcHMuZGF0YS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudCc+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3ByaWNlJz57cHJvcHMuZGF0YS5wcmljZSAqIDIgKyAnLjAwJ308L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2UnPi01MCU8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtcHJpY2UnPlxyXG5cdFx0XHRcdFx0PHNwYW4+e3Byb3BzLmRhdGEucHJpY2V9PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiBpbmZvICovfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uJz5cclxuXHRcdFx0XHRcdHtwcm9wcy53cmFwID8gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fdGV4dCc+XHJcblx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Yj5EZXNjcmlwY2nDs246PC9iPiBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXlcclxuXHRcdFx0XHRcdFx0XHRcdGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXRcclxuXHRcdFx0XHRcdFx0XHRcdHZlcm9cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mb3JtYXRpb25fX2RlbGl2ZXJ5Jz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXRydWNrLTUwLnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPnsnICd9XHJcblx0XHRcdFx0XHRcdDxzcGFuPkVudsOtbyBpbnRlcm5hY2lvbmFsPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvcm1hdGlvbl9fcmV2aWV3cyc+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL3N0YXRpYy9pY29ucy9pY29uczgtc3Rhci1maWxsZWQtNDgucG5nJyB3aWR0aD0nMjBweCcgYWx0PScnIC8+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPScvc3RhdGljL2ljb25zL2ljb25zOC1zdGFyLWZpbGxlZC00OC5wbmcnIHdpZHRoPScyMHB4JyBhbHQ9JycgLz5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9zdGF0aWMvaWNvbnMvaWNvbnM4LXN0YXItZmlsbGVkLTQ4LnBuZycgd2lkdGg9JzIwcHgnIGFsdD0nJyAvPlxyXG5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWluZm9ybWF0aW9uX19yZXZpZXdzLS1udW1iZXInPjEyOCByZXZpZXdzPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAke3Byb3BzLndyYXAgPyAnMTAwMHB4JyA6ICc0MDBweCd9O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMWVtO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlOiBhdXRvIC8xZnIgMWZyIDFmcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0X19pbWcge1xyXG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMS8yO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAke3Byb3BzLndyYXAgPyAnMCcgOiAnLjllbSd9O1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtdGl0bGUgaDMge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC41ZW0gMCAuN2VtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHQucHJvZHVjdF9faW1nIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAke3Byb3BzLndyYXAgPyAnN2VtJyA6ICcxLjJlbSd9O1xyXG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMi80O1xyXG5cdFx0XHRcdFx0XHRncmlkLXJvdzogMS8zO1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWJhbm5lciBzcGFuIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC43ZW07XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigxODEsIDAsIDE5MSk7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxODEsIDAsIDE5MSwgMSkgMCUsIHJnYmEoMCwgOCwgMTgwLCAxKSAxMDAlKTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCAuNGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAuNmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3ByaWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOGVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3BlcmNlbnRhZ2Uge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLjhlbTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtcHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEucmVtO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtaW5mb3JtYXRpb25fX2RlbGl2ZXJ5IHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMS41ZW0gMCAuOGVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fcmV2aWV3cyB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1pbmZvcm1hdGlvbl9fcmV2aWV3cy0tbnVtYmVyIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmNhMjg7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdC5wcm9kdWN0IHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6ICR7cHJvcHMud3JhcCA/ICcgMHB4JyA6ICcxcHggc29saWQgI2Q1ZDVkNSd9O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gLnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0Ly8gXHRtYXgtd2lkdGg6IDkwMHB4O1xyXG5cdFx0XHRcdFx0Ly8gXHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdC8vIC5wcm9kdWN0X19pbWcge1xyXG5cdFx0XHRcdFx0Ly8gXHRwYWRkaW5nOiAxcmVtO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gLnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdC8vIFx0cGFkZGluZy1sZWZ0OiA3cmVtO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0Ly8gLnByb2R1Y3QtaW5mb3JtYXRpb25fX3RleHQge1xyXG5cdFx0XHRcdFx0Ly8gXHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRgfVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0XHR7YFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGB9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdfQ== */
/*@ sourceURL=C:\Users\Estacion\Desktop\Proyectos\testing\client\component\ProductView.js */`), `
						
					`);
}

/***/ }),

/***/ "./component/ProductViewMini.js":
/*!**************************************!*\
  !*** ./component/ProductViewMini.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductViewMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\ProductViewMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProductViewMini(props) {
  return __jsx("div", {
    className: "jsx-2420853504" + " " + 'product',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2420853504" + " " + 'product__img',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    width: "100%",
    alt: "",
    className: "jsx-2420853504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product__description',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-title',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2420853504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.data.title)), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-discount',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2420853504" + " " + 'product-discount__price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "300$"), __jsx("span", {
    className: "jsx-2420853504" + " " + 'product-discount__percentage',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "-50%")), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-price',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2420853504",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "150$"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2420853504",
    __self: this
  }, ".product.jsx-2420853504{display:grid;grid-template:auto auto auto/1fr;overflow:hidden;}.product__img.jsx-2420853504{grid-row:1/3;height:115px;}.product-title.jsx-2420853504{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:32px;border-bottom:1px solid #c5c5c5;}.product-title.jsx-2420853504 h3.jsx-2420853504{margin:0;font-size:.5em;white-space:normal;padding:.2rem 0;}.product__img.jsx-2420853504{background:white;width:100%;overflow:hidden;}.product__description.jsx-2420853504{width:100%;height:100%;}.product__description.jsx-2420853504{padding-left:.4rem;box-sizing:border-box;}.product-banner.jsx-2420853504 span.jsx-2420853504{color:white;font-size:.7rem;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4rem;}.product-discount.jsx-2420853504{margin-bottom:.5rem;}.product-discount__price.jsx-2420853504{font-size:.8rem;-webkit-text-decoration:line-through;text-decoration:line-through;}.product-discount__percentage.jsx-2420853504{margin-left:.4rem;color:red;font-size:.9rem;}@media (min-width:760px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXFByb2R1Y3RWaWV3TWluaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkssQUFHb0IsQUFLQSxBQUlBLEFBTUosQUFNUSxBQUtOLEFBS1EsQUFLUCxBQU9RLEFBR0osQUFJRSxTQWxDSCxFQVdILENBVUksQ0FwQ2lCLEFBS3BCLEdBeUNnQixDQXpCbEIsQ0E2QkQsQ0FuQlksQ0FZdkIsR0FoQkEsQ0FYb0IsRUFWcEIsRUFnQmlCLEFBZVksQUFlWixhQXBCakIsRUFmaUIsQ0FNakIsQUE4QkEsRUFwRGlCLFFBcUNvRSxLQXBCckYsR0FoQkEsWUFPb0IsUUFzQ3BCLGdEQVJpQixnQkFDakIscUJBOUJhLFlBQ29CLGdDQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXHRlc3RpbmdcXGNsaWVudFxcY29tcG9uZW50XFxQcm9kdWN0Vmlld01pbmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RWaWV3TWluaShwcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0X19pbWcnPlxyXG5cdFx0XHRcdDxpbWcgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSB3aWR0aD0nMTAwJScgYWx0PScnIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdF9fZGVzY3JpcHRpb24nPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LXRpdGxlJz5cclxuXHRcdFx0XHRcdDxoMz57cHJvcHMuZGF0YS50aXRsZX08L2gzPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1iYW5uZXInPlxyXG5cdFx0XHRcdFx0PHNwYW4+T0ZFUlRBIEVYQ0xVU0lWQTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj4gKi99XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGlzY291bnQnPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwcm9kdWN0LWRpc2NvdW50X19wcmljZSc+MzAwJDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSc+LTUwJTwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1wcmljZSc+XHJcblx0XHRcdFx0XHQ8c3Bhbj4xNTAkPC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHN0eWxlIGpzeD5cclxuXHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0XHRcdFx0XHRncmlkLXRlbXBsYXRlOiBhdXRvIGF1dG8gYXV0by8xZnI7XHJcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9faW1nIHtcclxuXHRcdFx0XHRcdFx0Z3JpZC1yb3c6IDEvMztcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMTVweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M1YzVjNTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC5wcm9kdWN0LXRpdGxlIGgzIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC41ZW07XHJcblx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IC4ycmVtIDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdF9faW1nIHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3RfX2Rlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQucHJvZHVjdF9fZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IC40cmVtO1xyXG5cdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5wcm9kdWN0LWJhbm5lciBzcGFuIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMTgxLCAwLCAxOTEpO1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTgxLCAwLCAxOTEsIDEpIDAlLCByZ2JhKDAsIDgsIDE4MCwgMSkgMTAwJSk7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgLjRyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LnByb2R1Y3QtZGlzY291bnRfX3ByaWNlIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQucHJvZHVjdC1kaXNjb3VudF9fcGVyY2VudGFnZSB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAuNHJlbTtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcclxuXHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzYwcHgpIHtcclxuXHRcdFx0XHRcdFx0LnByb2R1Y3Qge1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\ProductViewMini.js */"));
}

/***/ }),

/***/ "./component/ProductosMini.js":
/*!************************************!*\
  !*** ./component/ProductosMini.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductosMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel */ "./component/Carousel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductViewMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductViewMini */ "./component/ProductViewMini.js");
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductView */ "./component/ProductView.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\ProductosMini.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function ProductosMini(props) {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "120",
    height: "auto",
    margin: "10",
    slides: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "'", __jsx("div", {
    className: "jsx-425185577" + " " + 'productos',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.data.map(e => {
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      route: "single",
      params: {
        slug: e._id
      },
      key: e._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-425185577" + " " + 'carousel__item',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: e,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "425185577",
    __self: this
  }, ".productos.jsx-425185577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.productos.jsx-425185577>a.jsx-425185577{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxjb21wb25lbnRcXFByb2R1Y3Rvc01pbmkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJlLEFBR21CLEFBR0Msd0RBQ2Ysa0JBSEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxFc3RhY2lvblxcRGVza3RvcFxcUHJveWVjdG9zXFx0ZXN0aW5nXFxjbGllbnRcXGNvbXBvbmVudFxcUHJvZHVjdG9zTWluaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICcuL0Nhcm91c2VsJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2R1Y3RWaWV3TWluaSBmcm9tICcuL1Byb2R1Y3RWaWV3TWluaSc7XHJcbmltcG9ydCBQcm9kdWN0VmlldyBmcm9tICcuL1Byb2R1Y3RWaWV3JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3Rvc01pbmkocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENhcm91c2VsIHdpZHRoPScxMjAnIGhlaWdodD0nYXV0bycgbWFyZ2luPScxMCcgc2xpZGVzPSc0Jz5cclxuXHRcdFx0JzxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0b3MnPlxyXG5cdFx0XHRcdHtwcm9wcy5kYXRhLm1hcCgoZSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PExpbmsgcm91dGU9J3NpbmdsZScgcGFyYW1zPXt7IHNsdWc6IGUuX2lkIH19IGtleT17ZS5faWR9PlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT0nY2Fyb3VzZWxfX2l0ZW0nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3RWaWV3TWluaSBkYXRhPXtlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQucHJvZHVjdG9zIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcm9kdWN0b3MgPiBhIHtcclxuXHRcdFx0XHRcdGZsZXgtc2hyaW5rOiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPidcclxuXHRcdDwvQ2Fyb3VzZWw+XHJcblx0KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\component\\ProductosMini.js */"), "'");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_MarcasDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/MarcasDisplay */ "./component/MarcasDisplay.js");
/* harmony import */ var _component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/ProductosMini */ "./component/ProductosMini.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_MainDisplayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/MainDisplayer */ "./component/MainDisplayer.js");
/* harmony import */ var _component_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Navbar */ "./component/Navbar.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
      query: graphql_tag__WEBPACK_IMPORTED_MODULE_9___default.a`
					{
						getProducts {
							_id
							title
							image
							price
						}
					}
				`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Loading...");
      if (error) return __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "error...");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), __jsx(_component_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-349020035" + " " + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_component_MainDisplayer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-349020035" + " " + 'tiendas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "TIENDAS DISPONIBLES"), __jsx(_component_MarcasDisplay__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "HASTA 50% DE DESCUENTO"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data.getProducts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "NI\xD1OS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data.getProducts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "BLUSAS"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data.getProducts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-349020035",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "ZAPATILLAS Y M\xC1S"), __jsx(_component_ProductosMini__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: data.getProducts,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "349020035",
        __self: this
      }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');.container.jsx-349020035{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}.tiendas.jsx-349020035{padding-left:10px;}h2.jsx-349020035{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}.tiendas.jsx-349020035 h2.jsx-349020035{font-size:.9em;}.ofertas.jsx-349020035{padding-left:10px;}.tiendas.jsx-349020035,.ofertas.jsx-349020035{margin-top:2.5rem;}body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}*{color:#646464;}a{-webkit-text-decoration:none;text-decoration:none;}*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-349020035{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRXN0YWNpb25cXERlc2t0b3BcXFByb3llY3Rvc1xcdGVzdGluZ1xcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VtQixBQUVtRyxBQUd4RSxBQVNDLEFBSUgsQUFNQSxBQUlHLEFBSUEsQUFJQyxBQU1MLEFBR08sQUFHRSxBQVFULEFBSUksQUFHQyxBQUdPLGNBdkIzQixDQXhCaUIsQUFNakIsRUFuQlksQUF1RFgsQ0E5Q0QsQUFjQSxBQUlBLEFBK0JDLENBM0JTLElBWWEsRUFrQnRCLEdBNURVLEFBK0JRLEdBbEJFLE9BWkgsT0EwQ0csQ0FYaUIsSUFPdEMsQ0F6QjBCLElBWlQsVUEwQ0UsTUF6Q0MsR0ErQ0ssRUFuQ3pCLE1Ba0JBLENBWWdCLE9BekNoQixzRUEwQ0EsYUFLQyIsImZpbGUiOiJDOlxcVXNlcnNcXEVzdGFjaW9uXFxEZXNrdG9wXFxQcm95ZWN0b3NcXHRlc3RpbmdcXGNsaWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1hcmNhc0Rpc3BsYXkgZnJvbSAnLi4vY29tcG9uZW50L01hcmNhc0Rpc3BsYXknO1xyXG5pbXBvcnQgUHJvZHVjdG9zTWluaSBmcm9tICcuLi9jb21wb25lbnQvUHJvZHVjdG9zTWluaSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNYWluRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudC9NYWluRGlzcGxheWVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnQvTmF2YmFyJztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgUXVlcnksIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxRdWVyeVxyXG5cdFx0XHRcdHF1ZXJ5PXtncWxgXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGdldFByb2R1Y3RzIHtcclxuXHRcdFx0XHRcdFx0XHRfaWRcclxuXHRcdFx0XHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdFx0XHRcdGltYWdlXHJcblx0XHRcdFx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PlxyXG5cdFx0XHRcdHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8aDE+ZXJyb3IuLi48L2gxPjtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8TmF2YmFyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1haW5EaXNwbGF5ZXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0aWVuZGFzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlRJRU5EQVMgRElTUE9OSUJMRVM8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWFyY2FzRGlzcGxheSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nb2ZlcnRhcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5IQVNUQSA1MCUgREUgREVTQ1VFTlRPPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+TknDkU9TPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+QkxVU0FTPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFByb2R1Y3Rvc01pbmkgZGF0YT17ZGF0YS5nZXRQcm9kdWN0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J29mZXJ0YXMnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+WkFQQVRJTExBUyBZIE3DgVM8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UHJvZHVjdG9zTWluaSBkYXRhPXtkYXRhLmdldFByb2R1Y3RzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdFx0XHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAxMTUwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogODBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwIGF1dG8gNHJlbTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQudGllbmRhcyB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRoMiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMS41ZW07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQudGllbmRhcyBoMiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjllbTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQub2ZlcnRhcyB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdC50aWVuZGFzLFxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9mZXJ0YXMge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAyLjVyZW07XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Omdsb2JhbCgqKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjQ2NDY0O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Omdsb2JhbChhKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDpnbG9iYWwoKikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LWtodG1sLXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0LW1vei11c2VyLWRyYWc6IG5vbmU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC1vLXVzZXItZHJhZzogbm9uZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlci1kcmFnOiBub25lO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDY2MHB4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDpnbG9iYWwoI2ZsZXgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5jYXJvdXNlbF9faXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdDwvUXVlcnk+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Estacion\\Desktop\\Proyectos\\testing\\client\\pages\\index.js */"));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('producto').add('/', 'index').add('single');

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Estacion\Desktop\Proyectos\testing\client\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-use-gesture":
/*!************************************!*\
  !*** external "react-use-gesture" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map