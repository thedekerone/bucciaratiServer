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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("79W4");


/***/ }),

/***/ "79W4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./component/BrandDisplayer.js

var __jsx = external_react_default.a.createElement;

function BrandDisplayer() {
  return __jsx("div", {
    className: "jsx-3161825027" + " " + 'brands'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand'
  }, __jsx("div", {
    className: "jsx-3161825027" + " " + 'brand__img'
  }, __jsx("img", {
    src: "static/marcas/gucci.png",
    width: "100%;",
    alt: "",
    className: "jsx-3161825027"
  })), __jsx("h3", {
    className: "jsx-3161825027" + " " + 'brand__title'
  }, "GUCCI")), __jsx(style_default.a, {
    id: "3161825027"
  }, [".brands.jsx-3161825027{display:grid;gap:.7em;margin:0 auto;padding:.4em;max-width:550px;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));}", ".brand.jsx-3161825027{margin:0 auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".brand__img.jsx-3161825027{position:relative;padding:0 .9rem;box-sizing:border-box;text-align:center;}", ".brand__img.jsx-3161825027 img.jsx-3161825027{width:70%;max-width:120px;}", ".brand__img.jsx-3161825027::after{content:\"\";width:100%;height:1px;display:block;margin:0 auto;bottom:0;background:#ababab;}", ".brand__title.jsx-3161825027{margin:.7rem 0;font-size:.9em;font-weight:400;}", "@media (min-width:660px){.brand.jsx-3161825027{border:1px solid #d5d5d5;}}"]));
}
// CONCATENATED MODULE: ./component/Selector.js

var Selector_jsx = external_react_default.a.createElement;

function Selector() {
  return Selector_jsx("div", {
    className: "jsx-2204274563" + " " + 'selector'
  }, Selector_jsx("div", {
    className: "jsx-2204274563" + " " + 'drop-bar'
  }, Selector_jsx("select", {
    name: "product",
    id: "product",
    className: "jsx-2204274563"
  }, Selector_jsx("option", {
    value: "zapatillas",
    className: "jsx-2204274563"
  }, "zapatillas"), Selector_jsx("option", {
    value: "polos",
    className: "jsx-2204274563"
  }, "polos"), Selector_jsx("option", {
    value: "carteras",
    className: "jsx-2204274563"
  }, "carteras"), Selector_jsx("option", {
    value: "pantalones",
    className: "jsx-2204274563"
  }, "pantalones"))), Selector_jsx("div", {
    className: "jsx-2204274563" + " " + 'filter'
  }), Selector_jsx(style_default.a, {
    id: "2204274563"
  }, [".drop-bar.jsx-2204274563{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "select.jsx-2204274563{width:100%;font-size:1.3em;padding:.5em;font-weight:300;margin:0 auto;max-width:900px;}"]));
}
// CONCATENATED MODULE: ./component/Filtros.js

var Filtros_jsx = external_react_default.a.createElement;

function Filtros() {
  return Filtros_jsx("div", {
    className: "jsx-2022846838" + " " + 'filtros'
  }, Filtros_jsx("div", {
    className: "jsx-2022846838" + " " + 'filtro'
  }, Filtros_jsx("img", {
    src: "static/icons/icons8-filter-50.png",
    width: "20px",
    alt: "",
    className: "jsx-2022846838"
  }), " ", Filtros_jsx("span", {
    className: "jsx-2022846838"
  }, "Filtros")), Filtros_jsx("div", {
    className: "jsx-2022846838" + " " + 'vista'
  }, Filtros_jsx("img", {
    src: "static/icons/icons8-view-stream-50.png",
    width: "20px",
    alt: "",
    className: "jsx-2022846838"
  }), " ", Filtros_jsx("span", {
    className: "jsx-2022846838"
  }, "Filtros")), Filtros_jsx(style_default.a, {
    id: "2022846838"
  }, [".filtros.jsx-2022846838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;max-width:900px;border:1px solid black;padding:.4em;box-sizing:border-box;margin:0 auto;}", ".vista.jsx-2022846838{padding:0 .5em;}", ".vista.jsx-2022846838,.filtro.jsx-2022846838{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]));
}
// EXTERNAL MODULE: ./component/ProductView.js
var ProductView = __webpack_require__("mIAE");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./component/Productos.js

var Productos_jsx = external_react_default.a.createElement;




function Productos(props) {
  return Productos_jsx("div", {
    className: "jsx-557563258" + " " + 'productos'
  }, props.data.map(e => {
    return Productos_jsx(ProductView["a" /* default */], {
      key: e._id,
      product: e
    });
  }), Productos_jsx(style_default.a, {
    id: "557563258"
  }, [".productos.jsx-557563258{display:grid;gap:1em;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}"]));
}
// EXTERNAL MODULE: ./component/Navbar.js
var Navbar = __webpack_require__("OTMb");

// CONCATENATED MODULE: ./pages/producto.js

var producto_jsx = external_react_default.a.createElement;









const producto = props => {
  return producto_jsx(external_react_apollo_["Query"], {
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
    if (loading) return producto_jsx("p", null, "Loading...");
    if (error) return producto_jsx("p", null, "Error :(");
    return producto_jsx("div", {
      className: "jsx-414134240" + " " + 'producto-tipo'
    }, "aea", producto_jsx(style_default.a, {
      id: "414134240"
    }, ["@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');", ".container.jsx-414134240{max-width:1150px;width:100%;padding:0;padding-top:80px;overflow:hidden;margin:0 auto 4rem;}", ".tiendas.jsx-414134240{padding-left:10px;}", "h2.jsx-414134240{font-size:1rem;font-weight:400;margin-bottom:1.5em;text-transform:uppercase;}", ".tiendas.jsx-414134240 h2.jsx-414134240{font-size:.9em;}", ".ofertas.jsx-414134240{padding-left:10px;}", ".tiendas.jsx-414134240,.ofertas.jsx-414134240{margin-top:2.5rem;}", ".search.jsx-414134240{margin:2em 0;}", "body{background:#f3f3f3;margin:0;position:relative;font-family:'Montserrat',sans-serif;}", "*{color:#646464;}", "a{-webkit-text-decoration:none;text-decoration:none;}", "img{-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;-webkit-user-drag:none;-moz-user-drag:none;-ms-user-drag:none;user-drag:none;}", "@media (min-width:660px){#flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}body{background:white;}.container.jsx-414134240{padding-top:150px;}.carousel__item{border:1px solid #e8e8e8;}}"]));
  });
};

/* harmony default export */ var pages_producto = __webpack_exports__["default"] = (producto);

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ })

/******/ });