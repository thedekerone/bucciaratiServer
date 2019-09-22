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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__("90Kz"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('producto').add('/', 'index').add('single');

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "EieP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProductViewMini(props) {
  return __jsx("div", {
    className: "jsx-2420853504" + " " + 'product'
  }, __jsx("div", {
    className: "jsx-2420853504" + " " + 'product__img'
  }, __jsx("img", {
    src: props.data.image,
    width: "100%",
    alt: "",
    className: "jsx-2420853504"
  })), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product__description'
  }, __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-title'
  }, __jsx("h3", {
    className: "jsx-2420853504"
  }, props.data.title)), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-discount'
  }, __jsx("span", {
    className: "jsx-2420853504" + " " + 'product-discount__price'
  }, "300$"), __jsx("span", {
    className: "jsx-2420853504" + " " + 'product-discount__percentage'
  }, "-50%")), __jsx("div", {
    className: "jsx-2420853504" + " " + 'product-price'
  }, __jsx("span", {
    className: "jsx-2420853504"
  }, "150$"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2420853504"
  }, [".product.jsx-2420853504{display:grid;grid-template:auto auto auto/1fr;overflow:hidden;}", ".product__img.jsx-2420853504{grid-row:1/3;height:115px;}", ".product-title.jsx-2420853504{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:32px;border-bottom:1px solid #c5c5c5;}", ".product-title.jsx-2420853504 h3.jsx-2420853504{margin:0;font-size:.5em;white-space:normal;padding:.2rem 0;}", ".product__img.jsx-2420853504{background:white;width:100%;overflow:hidden;}", ".product__description.jsx-2420853504{width:100%;height:100%;}", ".product__description.jsx-2420853504{padding-left:.4rem;box-sizing:border-box;}", ".product-banner.jsx-2420853504 span.jsx-2420853504{color:white;font-size:.7rem;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4rem;}", ".product-discount.jsx-2420853504{margin-bottom:.5rem;}", ".product-discount__price.jsx-2420853504{font-size:.8rem;-webkit-text-decoration:line-through;text-decoration:line-through;}", ".product-discount__percentage.jsx-2420853504{margin-left:.4rem;color:red;font-size:.9rem;}", "@media (min-width:760px){}"]));
}

/***/ }),

/***/ "FSQs":
/***/ (function(module, exports) {

module.exports = require("react-use-gesture");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "LoNQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosMini; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z33Y");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductViewMini__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EieP");
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mIAE");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function ProductosMini(props) {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    width: "120",
    height: "auto",
    margin: "10",
    slides: "4"
  }, "'", __jsx("div", {
    className: "jsx-425185577" + " " + 'productos'
  }, props.data.map(e => {
    return __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      route: "single",
      params: {
        slug: e._id
      },
      key: e._id
    }, __jsx("a", {
      className: "jsx-425185577" + " " + 'carousel__item'
    }, __jsx(_ProductViewMini__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      data: e
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "425185577"
  }, [".productos.jsx-425185577{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".productos.jsx-425185577>a.jsx-425185577{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}"]), "'");
}

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "OTMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar() {
  return __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar-container'
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'navbar'
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'main-navbar'
  }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "/"
  }, __jsx("a", {
    className: "jsx-1051662459"
  }, __jsx("h1", {
    className: "jsx-1051662459" + " " + 'main-navbar__title'
  }, "Logo"))), __jsx("span", {
    className: "jsx-1051662459" + " " + 'main-navbar__icon'
  }, __jsx("div", {
    className: "jsx-1051662459" + " " + 'categorias'
  }, __jsx("p", {
    className: "jsx-1051662459"
  }, "Categorias"), ' '), __jsx("img", {
    width: "30px",
    src: "static/icons/menu.svg",
    alt: "",
    className: "jsx-1051662459" + " " + 'icon-menu'
  }))), __jsx("div", {
    className: "jsx-1051662459" + " " + 'secondary-navbar'
  }, __jsx("nav", {
    className: "jsx-1051662459" + " " + 'secondary-navbar__items'
  }, __jsx("ul", {
    className: "jsx-1051662459"
  }, __jsx("li", {
    className: "jsx-1051662459"
  }, "Hombres"), __jsx("li", {
    className: "jsx-1051662459"
  }, "Mujeres"), __jsx("li", {
    className: "jsx-1051662459"
  }, "Ni\xF1os"), __jsx("li", {
    className: "jsx-1051662459"
  }, "Accesorios"), __jsx("li", {
    className: "jsx-1051662459"
  }, "Regalos"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1051662459"
  }, [".navbar-container.jsx-1051662459{position:relative;}", ".navbar.jsx-1051662459{width:100%;background:white;z-index:100;position:fixed;}", ".navbar.jsx-1051662459 h1.jsx-1051662459{margin:.5rem 0;}", ".main-navbar.jsx-1051662459{margin:0 auto;max-width:1150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}", ".main-navbar__icon.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".categorias.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-item:center;-webkit-box-align-item:center;-ms-flex-align-item:center;align-item:center;padding-right:1rem;}", ".icon-menu.jsx-1051662459{color;}", ".secondary-navbar.jsx-1051662459{display:none;background:#F2F2F2;}", ".secondary-navbar__items.jsx-1051662459{max-width:1150px;margin:0 auto;}", ".secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1150px;width:100%;padding:0;margin:0;max-width:400px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;}", ".secondary-navbar__items.jsx-1051662459 ul.jsx-1051662459 li.jsx-1051662459{list-style:none;font-size:.8rem;}", "@media (min-width:560px){.secondary-navbar.jsx-1051662459{display:block;}body{background:white;}}"]));
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./component/Carousel.js + 1 modules
var Carousel = __webpack_require__("z33Y");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// CONCATENATED MODULE: ./component/MarcasDisplay.js

var __jsx = external_react_default.a.createElement;



function MarcasDisplay() {
  return __jsx(Carousel["a" /* default */], {
    slides: "4",
    width: "210px",
    margin: "25px",
    height: "98px"
  }, __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item'
  }, __jsx(routes["Link"], {
    route: "producto"
  }, __jsx("a", {
    className: "jsx-2509371334"
  }, __jsx("img", {
    src: "static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334"
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item'
  }, __jsx(routes["Link"], {
    route: "producto"
  }, __jsx("a", {
    className: "jsx-2509371334"
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334"
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item'
  }, __jsx(routes["Link"], {
    route: "producto"
  }, __jsx("a", {
    className: "jsx-2509371334"
  }, __jsx("img", {
    src: "static/marcas/nike.png",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334"
  })))), __jsx("div", {
    className: "jsx-2509371334" + " " + 'carousel__item'
  }, __jsx(routes["Link"], {
    route: "producto"
  }, __jsx("a", {
    className: "jsx-2509371334"
  }, __jsx("img", {
    src: "static/marcas/Adidas-1280x720.jpg",
    width: "100%",
    height: "100%",
    alt: "",
    className: "jsx-2509371334"
  })))), __jsx(style_default.a, {
    id: "2509371334"
  }, ["img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}"]));
}
// EXTERNAL MODULE: ./component/ProductosMini.js
var ProductosMini = __webpack_require__("LoNQ");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./component/MainDisplayer.js

var MainDisplayer_jsx = external_react_default.a.createElement;

function MainDisplayer() {
  return MainDisplayer_jsx("div", {
    className: "jsx-2795784378" + " " + 'main-displayer'
  }, MainDisplayer_jsx("div", {
    id: "item1",
    className: "jsx-2795784378" + " " + 'main-displayer__item'
  }, MainDisplayer_jsx("img", {
    src: "static/main/fashion.jpg",
    height: "100%",
    width: "100%",
    alt: "",
    className: "jsx-2795784378"
  })), MainDisplayer_jsx("div", {
    id: "item2",
    className: "jsx-2795784378" + " " + 'main-displayer__item'
  }, MainDisplayer_jsx("h1", {
    className: "jsx-2795784378"
  }, "MEJORES OFERTAS")), MainDisplayer_jsx("div", {
    id: "item3",
    className: "jsx-2795784378" + " " + 'main-displayer__item'
  }, MainDisplayer_jsx("h1", {
    className: "jsx-2795784378"
  }, "COLLECI\xD3N INVIERNO")), MainDisplayer_jsx(style_default.a, {
    id: "2795784378"
  }, [".main-displayer.jsx-2795784378{display:grid;grid-template:1fr 1fr 1fr / 1fr 1fr;height:25rem;}", "#item1.jsx-2795784378{grid-column:1/3;grid-row:1/3;}", "#item2.jsx-2795784378{background:rgb(109,104,255);background:linear-gradient(90deg,rgba(109,104,255,1) 0%,rgba(255,86,244,1) 100%);}", "#item3.jsx-2795784378{background:rgb(228,113,62);background:linear-gradient(90deg,rgba(228,113,62,1) 0%,rgba(209,0,181,1) 100%);}", "#item2.jsx-2795784378,#item3.jsx-2795784378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "#item2.jsx-2795784378 h1.jsx-2795784378,#item3.jsx-2795784378 h1.jsx-2795784378{font-size:1.4em;margin:0;text-align:center;color:white;}", ".main-displayer__item.jsx-2795784378{overflow:hidden;}", "@media (min-width:560px){.main-displayer.jsx-2795784378{grid-template:200px 200px/ 1fr 1fr 1.5fr;}#item1.jsx-2795784378{grid-column:1/3;grid-row:1/3;}}", "img.jsx-2795784378{object-fit:cover;}"]));
}
// EXTERNAL MODULE: ./component/Navbar.js
var Navbar = __webpack_require__("OTMb");

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;










class pages_index extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return pages_jsx(external_react_apollo_["Query"], {
      query: external_graphql_tag_default.a`
					{
						getProducts {
							_id
							title
							image
							price
						}
					}
				`
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) return pages_jsx("h1", null, "Loading...");
      if (error) return pages_jsx("h1", null, "error...");
      return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        className: "jsx-349020035"
      })), pages_jsx(Navbar["a" /* default */], null), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'container'
      }, pages_jsx(MainDisplayer, null), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'tiendas'
      }, pages_jsx("h2", {
        className: "jsx-349020035"
      }, "TIENDAS DISPONIBLES"), pages_jsx(MarcasDisplay, null)), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas'
      }, pages_jsx("h2", {
        className: "jsx-349020035"
      }, "HASTA 50% DE DESCUENTO"), pages_jsx(ProductosMini["a" /* default */], {
        data: data.getProducts
      })), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas'
      }, pages_jsx("h2", {
        className: "jsx-349020035"
      }, "NI\xD1OS"), pages_jsx(ProductosMini["a" /* default */], {
        data: data.getProducts
      })), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas'
      }, pages_jsx("h2", {
        className: "jsx-349020035"
      }, "BLUSAS"), pages_jsx(ProductosMini["a" /* default */], {
        data: data.getProducts
      })), pages_jsx("div", {
        className: "jsx-349020035" + " " + 'ofertas'
      }, pages_jsx("h2", {
        className: "jsx-349020035"
      }, "ZAPATILLAS Y M\xC1S"), pages_jsx(ProductosMini["a" /* default */], {
        data: data.getProducts
      }))), pages_jsx(style_default.a, {
        id: "349020035"
      }, ["@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');", ".container.jsx-349020035{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}", ".tiendas.jsx-349020035{padding-left:10px;}", "h2.jsx-349020035{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}", ".tiendas.jsx-349020035 h2.jsx-349020035{font-size:.9em;}", ".ofertas.jsx-349020035{padding-left:10px;}", ".tiendas.jsx-349020035,.ofertas.jsx-349020035{margin-top:2.5rem;}", "body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}", "*{color:#646464;}", "a{-webkit-text-decoration:none;text-decoration:none;}", "*{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}", "@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-349020035{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}"]));
    });
  }

}

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "mIAE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Product(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product'
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__img'
  }, __jsx("img", {
    src: props.data.image,
    width: "100%",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product__description'
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-banner'
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, "OFERTA EXCLUSIVA")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-title'
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, props.data.title)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount'
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__price'
  }, props.data.price * 2 + '.00'), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-discount__percentage'
  }, "-50%")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-price'
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, props.data.price)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information'
  }, props.wrap ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__text'
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, "Descripci\xF3n:"), " ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero")) : null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__delivery'
  }, __jsx("img", {
    src: "/static/icons/icons8-truck-50.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), ' ', __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }, "Env\xEDo internacional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews'
  }, __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), __jsx("img", {
    src: "/static/icons/icons8-star-filled-48.png",
    width: "20px",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]])
  }), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1644641029", [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']]]) + " " + 'product-information__reviews--number'
  }, "128 reviews")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1644641029",
    dynamic: [props.wrap ? '1000px' : '400px', props.wrap ? '0' : '.9em', props.wrap ? '7em' : '1.2em', props.wrap ? ' 0px' : '1px solid #d5d5d5']
  }, [`.product.__jsx-style-dynamic-selector{display:grid;background:white;max-width:${props.wrap ? '1000px' : '400px'};width:100%;margin:0 auto;font-size:11px;box-sizing:border-box;padding:1em;grid-template:auto /1fr 1fr 1fr;}`, `.product__img.__jsx-style-dynamic-selector{grid-row:1/2;padding:${props.wrap ? '0' : '.9em'};box-sizing:border-box;}`, ".product-title.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0;padding:.5em 0 .7em 0;}", ".product__description.__jsx-style-dynamic-selector,.product__img.__jsx-style-dynamic-selector{background:white;width:100%;}", `.product__description.__jsx-style-dynamic-selector{padding-left:${props.wrap ? '7em' : '1.2em'};grid-column:2/4;grid-row:1/3;box-sizing:border-box;}`, ".product-banner.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{color:white;font-size:.7em;background:rgb(181,0,191);background:linear-gradient(90deg,rgba(181,0,191,1) 0%,rgba(0,8,180,1) 100%);padding:0 .4em;}", ".product-discount.__jsx-style-dynamic-selector{margin-bottom:.6em;}", ".product-discount__price.__jsx-style-dynamic-selector{font-size:.8em;}", ".product-discount__percentage.__jsx-style-dynamic-selector{margin-left:.8em;color:red;font-size:1em;}", ".product-price.__jsx-style-dynamic-selector{font-size:1.rem;color:black;}", ".product-information__delivery.__jsx-style-dynamic-selector{padding:1.5em 0 .8em 0;}", ".product-information__reviews.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".product-information__reviews--number.__jsx-style-dynamic-selector{color:#ffca28;margin-left:1rem;height:20px;}", `@media (min-width:660px){.product.__jsx-style-dynamic-selector{border:${props.wrap ? ' 0px' : '1px solid #d5d5d5'};font-size:15px;}}`]), `
						
					`);
}

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z33Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-spring"
var external_react_spring_ = __webpack_require__("KwCx");

// EXTERNAL MODULE: external "react-use-gesture"
var external_react_use_gesture_ = __webpack_require__("FSQs");

// CONCATENATED MODULE: ./component/Carousel.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });



var __jsx = external_react_default.a.createElement;



function Carousel(props) {
  var margin = parse_int_default()(props.margin, 10);

  var slides = parse_int_default()(props.slides, 10);

  var width = parse_int_default()(props.width, 10);

  var height = parse_int_default()(props.height, 10);

  const [{
    xy
  }, set] = Object(external_react_spring_["useSpring"])(() => ({
    xy: [0, 0]
  }));
  const bind = Object(external_react_use_gesture_["useDrag"])(({
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
  return __jsx("div", _extends({}, bind(), {
    className: style_default.a.dynamic([["1833423105", [width, height, margin]]]) + " " + 'carousel-container'
  }), __jsx(external_react_spring_["animated"].div, {
    id: `${slides < 6 ? 'flex' : null}`,
    className: "carousel",
    style: styleNeeded
  }, props.children), __jsx(style_default.a, {
    id: "1833423105",
    dynamic: [width, height, margin]
  }, [".carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}", ".carousel-container.__jsx-style-dynamic-selector:hover{cursor:pointer;}", ".carousel.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none;}", `.carousel-container.__jsx-style-dynamic-selector .carousel__item{display:inline-block;width:${width}px;height:${height}px;background:white;margin-right:${margin}px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}`, "@media (min-width:950px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.carousel-container.__jsx-style-dynamic-selector{overflow:hidden;}}"]));
}

/***/ })

/******/ });