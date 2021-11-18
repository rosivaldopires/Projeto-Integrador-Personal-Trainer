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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/gutenberg/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/backend/gutenberg/box/edit.js":
/*!*******************************************!*\
  !*** ./src/backend/gutenberg/box/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inspector */ "./src/backend/gutenberg/box/inspector.js");
/* harmony import */ var _frontend_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../frontend/index */ "./src/frontend/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */










var EditBoxComponent = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditBoxComponent, _Component);

  var _super = _createSuper(EditBoxComponent);

  function EditBoxComponent(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditBoxComponent);

    _this = _super.call(this, props);
    _this.method = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(_this.method.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), 1000);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditBoxComponent, [{
    key: "method",
    value: function method() {
      this.initLayout();
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var blockLoaded = false,
          blockLoadedInterval = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_8___default()('.tiktok-feed-feed')) {
          Object(_frontend_index__WEBPACK_IMPORTED_MODULE_13__["qligg_init"])();
          blockLoaded = true;
        }

        if (blockLoaded) {
          clearInterval(blockLoadedInterval);
        }
      }, 3000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initLayout();
    }
  }, {
    key: "debounceOnChange",
    value: function debounceOnChange(attributes) {
      var _this2 = this;

      var debounceOnChange = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(function (attributes) {
        _this2.initLayout();
      }, 350);
      debounceOnChange(attributes);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.method();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var accounts = qligg_gutenberg.accounts;

      if (!accounts || accounts.length == 0) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Placeholder"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Please create access token', 'insta-gallery'),
          instructions: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Before start creating feeds, you have to create an access token. Please go to', 'insta-gallery'), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
            href: qligg_gutenberg.create_account,
            target: "_blank"
          }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('the account tab', 'insta-gallery')), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])(' to connect your Instagram account and then reload this page.', 'insta-gallery'))
        }));
      }

      if (!accounts[attributes.username]) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Placeholder"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__["__"])('Please select account', 'insta-gallery'),
          instructions: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RadioControl"], {
            value: attributes.username,
            onChange: function onChange(newValue) {
              return setAttributes({
                username: newValue
              });
            },
            options: Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(accounts, function (key, index) {
              return {
                value: key.id,
                label: key.name || key.username
              };
            })
          })
        }));
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_12__["Inspector"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "tiktok-site-render"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default.a, {
        block: "qligg/box",
        attributes: attributes
      }));
    }
  }]);

  return EditBoxComponent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditBoxComponent);

/***/ }),

/***/ "./src/backend/gutenberg/box/index.js":
/*!********************************************!*\
  !*** ./src/backend/gutenberg/box/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/editor.scss */ "./src/backend/gutenberg/box/scss/editor.scss");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/gutenberg/box/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * BLOCK: box
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('qligg/box', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Social Feed Gallery', 'insta-gallery'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Display beautiful and responsive galleries on your website from your Instagram feed account.', 'insta-gallery'),
  icon: 'awards',
  category: 'qligg',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('qligg', 'insta-gallery'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('instagram', 'insta-gallery'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('quadlayers', 'insta-gallery')],
  attributes: qligg_gutenberg.attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/backend/gutenberg/box/inspector.js":
/*!************************************************!*\
  !*** ./src/backend/gutenberg/box/inspector.js ***!
  \************************************************/
/*! exports provided: Inspector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspector", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */






/**
 * Inspector controls
 */

var Inspector = function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: true,
    biography: true,
    picture: true
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      profile = _useState2[0],
      setProfile = _useState2[1];

  var url = qligg_gutenberg.image_url;
  var accounts = qligg_gutenberg.accounts;
  var ALLOWED_MEDIA_TYPES = ['image'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], {
    key: "inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: true,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Account', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Please select Instagram account', 'insta-gallery'),
    value: attributes.username,
    onChange: function onChange(newValue) {
      return setAttributes({
        username: newValue
      });
    },
    options: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(accounts, function (key, index) {
      return {
        value: key.id,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(key.name, 'insta-gallery')
      };
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Feed', 'insta-gallery'),
    value: attributes.type,
    onChange: function onChange(newValue) {
      return setAttributes({
        type: newValue
      });
    },
    options: [{
      value: 'tag',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tag', 'insta-gallery')
    }, {
      value: 'username',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Username', 'insta-gallery')
    }]
  }), attributes.type == 'tag' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tag', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Please enter Instagram tag', 'insta-gallery'),
    value: attributes.tag,
    onChange: function onChange(newValue) {
      return setAttributes({
        tag: newValue
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Order by', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Please enter Instagram tag order', 'insta-gallery'),
    value: attributes.order_by,
    onChange: function onChange(newValue) {
      return setAttributes({
        order_by: newValue
      });
    },
    options: [{
      value: 'recend_media',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Recent (Within 24 hours)', 'insta-gallery')
    }, {
      value: 'top_media',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top (Most popular first)', 'insta-gallery')
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("ul", {
    className: "qligg-list-videos"
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(['carousel', 'gallery', 'masonry', 'highlight'], function (key, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('qligg-modal-image', attributes.layout == key && 'active', key !== 'carousel' && key !== 'gallery' && 'qligg-premium-field')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, key.replace('-', ' ')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
      src: "".concat(url, "/").concat(key, ".png")
    }));
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Limit', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Number of videos to display', 'insta-gallery'),
    value: attributes.limit,
    onChange: function onChange(newValue) {
      setAttributes({
        limit: newValue
      });
    },
    min: 1,
    max: 33
  }), attributes.layout != 'carousel' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Columns', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Number of videos in a row', 'insta-gallery'),
    value: attributes.columns,
    onChange: function onChange(newValue) {
      return setAttributes({
        columns: newValue
      });
    },
    min: 1,
    max: 20
  }), attributes.layout == 'highlight' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(' highlight by tag', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('highlightfeeds items with this tags', 'insta-gallery'),
    value: attributes.highlight.tag,
    onChange: function onChange(newValue) {
      return setAttributes({
        highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'tag', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(' highlight by id', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(' highlight by id', 'insta-gallery'),
    value: attributes.highlight.id,
    onChange: function onChange(newValue) {
      return setAttributes({
        highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'id', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])(' highlight by position', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('highlightfeeds items in this positions', 'insta-gallery'),
    value: attributes.highlight.position,
    onChange: function onChange(newValue) {
      return setAttributes({
        highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'position', newValue))
      });
    }
  }))), attributes.layout == 'carousel' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Carousel', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Slides per view', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Number of images per slide', 'insta-gallery'),
    value: attributes.carousel.slidespv,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'slidespv', newValue))
      });
    },
    min: 1,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Autoplay', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Autoplay carousel items', 'insta-gallery'),
    checked: !!attributes.carousel.autoplay,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'autoplay', newValue))
      });
    }
  }), attributes.carousel.autoplay && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Autoplay Interval', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Moves to next picture after specified time interval', 'insta-gallery'),
    value: attributes.carousel.autoplay_interval,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'autoplay_interval', newValue))
      });
    },
    min: 1,
    max: 10000
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Navigation', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display navigation arrows', 'insta-gallery'),
    checked: !!attributes.carousel.navarrows,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'navarrows', newValue))
      });
    }
  }), attributes.carousel.navarrows && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Navigation color', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Change navigation arrows color', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.carousel.navarrows_color,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'navarrows_color', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pagination', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display pagination dots', 'insta-gallery'),
    checked: !!attributes.carousel.pagination,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'pagination', newValue))
      });
    }
  }), attributes.carousel.pagination && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pagination color', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Change pagination dots color', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.carousel.pagination_color,
    onChange: function onChange(newValue) {
      return setAttributes({
        carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'pagination_color', newValue))
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Profile', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Full name', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Feed profile full name', 'insta-gallery'),
    value: !attributes.profile.name && profile.name && accounts[attributes.username]['name'] || attributes.profile.name,
    onChange: function onChange(newValue) {
      setProfile(_objectSpread(_objectSpread({}, profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'name', false)));
      setAttributes({
        profile: _objectSpread(_objectSpread({}, attributes.profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'name', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextareaControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Biography', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Feed profile biography', 'insta-gallery'),
    value: !attributes.profile.biography && profile.biography && accounts[attributes.username]['biography'] || attributes.profile.biography,
    onChange: function onChange(newValue) {
      setProfile(_objectSpread(_objectSpread({}, profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'biography', false)));
      setAttributes({
        profile: _objectSpread(_objectSpread({}, attributes.profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'biography', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
    style: {
      objectFit: 'cover',
      width: '230px',
      height: '230px'
    },
    src: !attributes.profile.profile_picture_url && profile.picture && accounts[attributes.username]['profile_picture_url'] || attributes.profile.profile_picture_url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
    onSelect: function onSelect(newValue) {
      setProfile(_objectSpread(_objectSpread({}, profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'picture', false)));
      setAttributes({
        profile: _objectSpread(_objectSpread({}, attributes.profile), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'profile_picture_url', newValue.url))
      });
    },
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: attributes.profile.profile_picture_url,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        onClick: open
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Upload', 'insta-gallery'));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Box', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Box', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display the Instagram Feed inside a customizable box', 'insta-gallery'),
    checked: !!attributes.box.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.box.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Box padding', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add padding to the Instagram Feed', 'insta-gallery'),
    value: attributes.box.padding,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'padding', newValue))
      });
    },
    min: 1,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Radius', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add radius to the Instagram Feed', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.box.radius,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'radius', newValue))
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Box background', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed on box background', 'insta-gallery'),
    className: "qligg-premium-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.box.background,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Box text color', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed on box text', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.box.color_text,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'color_text', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Profile', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display user profile or tag info', 'insta-gallery'),
    checked: !!attributes.box.profile,
    onChange: function onChange(newValue) {
      return setAttributes({
        box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'profile', newValue))
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Account', 'insta-gallery'),
    value: attributes.resolution,
    onChange: function onChange(newValue) {
      return setAttributes({
        resolution: newValue
      });
    },
    options: [{
      value: 'madium',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Medium (320 x auto)', 'insta-gallery')
    }, {
      value: 'small',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Small (150 x 150)', 'insta-gallery')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images spacing', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add blank space between images', 'insta-gallery'),
    value: attributes.spacing,
    onChange: function onChange(newValue) {
      return setAttributes({
        spacing: newValue
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images lazy load', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Defers feed images loading', 'insta-gallery'),
    checked: !!attributes.lazy,
    onChange: function onChange(newValue) {
      return setAttributes({
        lazy: newValue
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image card', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images card', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display card gallery by clicking on image', 'insta-gallery'),
    checked: !!attributes.card.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.card.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card radius', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add radius to the Instagram Feed', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.card.radius,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'radius', newValue))
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card font size', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add font-size to the Instagram Feed', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.card.font_size,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'font_size', newValue))
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card background', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed when over images', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.card.background,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card text color', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Text', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.card.text_color,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text_color', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card padding', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add blank space between images', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.card.padding,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'padding', newValue))
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card info', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display likes count of images', 'insta-gallery'),
    checked: !!attributes.card.info,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'info', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card caption', 'insta-gallery'),
    className: "qligg-premium-field",
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display caption count of images', 'insta-gallery'),
    checked: !!attributes.card.caption,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'caption', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Card length', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add blank space between images', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.card.length,
    onChange: function onChange(newValue) {
      return setAttributes({
        card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'length', newValue))
      });
    },
    min: 0,
    max: 100
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image mask', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images mask', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image mouseover effect', 'insta-gallery'),
    checked: !!attributes.mask.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.mask.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images mask color', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image mask background color', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.mask.background,
    onChange: function onChange(newValue) {
      return setAttributes({
        mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images mask likes', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display likes count of images', 'insta-gallery'),
    checked: !!attributes.mask.likes,
    onChange: function onChange(newValue) {
      return setAttributes({
        mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'likes', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images mask comments', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display comments count of images', 'insta-gallery'),
    checked: !!attributes.mask.comments,
    onChange: function onChange(newValue) {
      return setAttributes({
        mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'comments', newValue))
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image popup', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display popup gallery by clicking on image', 'insta-gallery'),
    checked: !!attributes.popup.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.popup.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup profile', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display user profile or tag info', 'insta-gallery'),
    className: "qligg-premium-field",
    checked: !!attributes.popup.profile,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'profile', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup caption', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display caption in the popup', 'insta-gallery'),
    className: "qligg-premium-field",
    checked: !!attributes.popup.caption,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'caption', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup likes', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display likes count of images', 'insta-gallery'),
    className: "qligg-premium-field",
    checked: !!attributes.popup.likes,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'likes', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup comments', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display comments count of images', 'insta-gallery'),
    className: "qligg-premium-field",
    checked: !!attributes.popup.comments,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'comments', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Images popup align', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Align item description in popup', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.popup.align,
    onChange: function onChange(newValue) {
      return setAttributes({
        popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'align', newValue))
      });
    },
    options: [{
      value: 'left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Left', 'insta-gallery')
    }, {
      value: 'right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Right', 'insta-gallery')
    }, {
      value: 'bottom',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom', 'insta-gallery')
    }, {
      value: 'top',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'insta-gallery')
    }]
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Botton', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display the button to open Instagram site link', 'insta-gallery'),
    checked: !!attributes.button.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.button.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button text', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button text here', 'insta-gallery'),
    value: attributes.button.text,
    onChange: function onChange(newValue) {
      return setAttributes({
        button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button background', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed on button background', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.button.background,
    onChange: function onChange(newValue) {
      return setAttributes({
        button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button hover background', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed when hovered over button', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.button.background_hover,
    onChange: function onChange(newValue) {
      return setAttributes({
        button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background_hover', newValue))
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    initialOpen: false,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Botton load more', 'insta-gallery')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display the button to open Instagram site link', 'insta-gallery'),
    className: "qligg-premium-field",
    checked: !!attributes.button_load.display,
    onChange: function onChange(newValue) {
      return setAttributes({
        button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
      });
    }
  }), attributes.button_load.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button text', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button text here', 'insta-gallery'),
    className: "qligg-premium-field",
    value: attributes.button_load.text,
    onChange: function onChange(newValue) {
      return setAttributes({
        button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button background', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed on button background', 'insta-gallery'),
    className: "qligg-premium-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.button_load.background,
    onChange: function onChange(newValue) {
      return setAttributes({
        button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Instagram button hover background', 'insta-gallery'),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color which is displayed when hovered over button', 'insta-gallery'),
    className: "qligg-premium-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: attributes.button_load.background_hover,
    onChange: function onChange(newValue) {
      return setAttributes({
        button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background_hover', newValue))
      });
    }
  })))));
};

/***/ }),

/***/ "./src/backend/gutenberg/box/scss/editor.scss":
/*!****************************************************!*\
  !*** ./src/backend/gutenberg/box/scss/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/backend/gutenberg/index.js":
/*!****************************************!*\
  !*** ./src/backend/gutenberg/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box/index */ "./src/backend/gutenberg/box/index.js");


/***/ }),

/***/ "./src/frontend/index.js":
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
/*! exports provided: qligg_init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qligg_init", function() { return qligg_init; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./src/frontend/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);


/* (function ($) { */

"use strict";

var swiper_index = 0,
    $swipers = {}; // Ajax load
// ---------------------------------------------------------------------------

function qligg_load_item_images($item, next_max_id) {
  var $wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-list', $item),
      $spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-spinner', $item),
      feed = $item.data('feed');
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    url: qligg.ajax_url,
    type: 'post',
    timeout: 30000,
    data: {
      action: 'qligg_load_item_images',
      next_max_id: next_max_id,
      feed: JSON.stringify(feed)
    },
    beforeSend: function beforeSend() {
      $spinner.show();
    },
    success: function success(response) {
      if (response.success !== true) {
        $wrap.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.data));
        $spinner.hide();
        return;
      }

      var $images = jquery__WEBPACK_IMPORTED_MODULE_0___default()(response.data);
      $wrap.append($images).trigger('qligg.loaded', [$images]);
    },
    complete: function complete() {},
    error: function error(jqXHR, textStatus) {
      $spinner.hide();
    }
  });
}

qligg_init();
function qligg_init() {
  // Images
  // ---------------------------------------------------------------------------
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed').on('qligg.loaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-list', $item),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-spinner', $item),
        $button = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-button.load', $item),
        options = $item.data('feed'),
        total = jquery__WEBPACK_IMPORTED_MODULE_0___default()(images).length,
        loaded = 0; ////// this breaks masonry layout  
    ///$wrap.trigger('qligg.imagesLoaded', [images]);

    if (total) {
      $wrap.find('.insta-gallery-image').on('load loadstart', function (e) {
        if (e.type == 'loadstart' && jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).prop('tagName') == 'VIDEO') {
          loaded++;
        } else if (e.type == 'load' && jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).prop('tagName') == 'IMG') {
          loaded++;
        } // loaded++;


        if (loaded >= total) {
          $wrap.trigger('qligg.imagesLoaded', [images]);
        }
      });
    }

    if (total < options.limit) {
      $spinner.hide();
      setTimeout(function () {
        $button.fadeOut();
      }, 300);
    }
  }); // Spinner
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed').on('qligg.imagesLoaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-spinner', $item);
    $spinner.hide();
  }); // Gallery
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed[data-feed_layout=gallery]').on('qligg.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(images).each(function (i, item) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).addClass('ig-image-loaded');
      }, 150 + i * 30);
    });
  }); // Carousel
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed[data-feed_layout=carousel]').on('qligg.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(images).each(function (i, item) {
      //setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).addClass('ig-image-loaded'); //}, 500 + (i * 50));
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed[data-feed_layout=carousel]').on('qligg.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget),
        $swiper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swiper-container', $item),
        options = $item.data('feed');
    options.carousel.slides = options.carousel.slidespv; ///  options.carousel.interval = options.carousel.autoplay_interval;

    swiper_index++;
    $swipers[swiper_index] = new Swiper($swiper, {
      //direction: 'vertical',
      //wrapperClass: 'insta-gallery-list',
      //slideClass: 'insta-gallery-item',
      loop: true,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 2,
      autoplay: options.carousel.autoplay ? {
        delay: parseInt(options.carousel.autoplay_interval)
      } : false,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        480: {
          spaceBetween: parseInt(options.spacing),
          slidesPerView: Math.min(2, parseInt(options.carousel.slides))
        },
        768: {
          spaceBetween: parseInt(options.spacing),
          slidesPerView: Math.min(3, parseInt(options.carousel.slides))
        },
        1024: {
          spaceBetween: parseInt(options.spacing),
          slidesPerView: parseInt(options.carousel.slides)
        }
      }
    });
  }); // Masonry
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed[data-feed_layout=masonry]').on('qligg.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-list', $item);

    if (!$wrap.data('masonry')) {
      $wrap.masonry({
        itemSelector: '.insta-gallery-item',
        isResizable: true,
        isAnimated: false,
        transitionDuration: 0,
        percentPosition: true,
        columnWidth: '.insta-gallery-item:last-child'
      });
    } else {
      $wrap.masonry('appended', images, false);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed[data-feed_layout=masonry]').on('layoutComplete', function (e, items) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(items).each(function (i, item) {
      //      setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(item.element).addClass('ig-image-loaded'); //      }, 500 + (i * 50));
    });
  }); // Popup
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed').on('qligg.loaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-list', $item),
        options = $item.data('feed'); // Redirect
    // -------------------------------------------------------------------------

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-item .insta-gallery-icon.qligg-icon-instagram', $wrap).on('click', function (e) {
      e.stopPropagation();
    }); // Carousel
    // -------------------------------------------------------------------------
    //$('.insta-gallery-item', $wrap).on('mfpOpen', function (e) {
    //});

    if (!options.popup.display) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-item', $wrap).magnificPopup({
      type: 'inline',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = this.st.mainClass + ' ' + 'qligg-mfp-wrap';
        },
        elementParse: function elementParse(item) {
          var media = '',
              profile = '',
              counter = '',
              caption = '',
              info = '',
              likes = '',
              date = '',
              comments = '';

          if (item.el.data('item').type && (item.el.data('item').type == 'video' || item.el.data('item').file_type == 'video')) {
            media = '\n\
              <video autoplay>\n\
                <source src="' + item.el.data('item').videos.standard + '" type="video/mp4">\n\
              </video>';
          } else {
            media = '<img src="' + item.el.data('item').images.standard + '"/>';
          }

          counter = '<div class="mfp-icons"><div class="mfp-counter">' + (item.index + 1) + ' / ' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-item', $wrap).length + '</div><a class="mfp-link" href="' + item.el.data('item').link + '" target="_blank" rel="noopener"><i class="qligg-icon-instagram"></i>Instagram</a></div>';

          if (options.popup.profile) {
            profile = '<div class="mfp-user"><img src="' + options.profile.profile_picture_url + '"><a href="https://www.instagram.com/' + options.profile.username + '" title="' + options.profile.name + '" target="_blank" rel="noopener">' + options.profile.username + '</a></div>';
          }

          if (options.popup.caption) {
            caption = '<div class="mfp-caption">' + item.el.data('item').caption + '</div>';
          }

          if (item.el.data('item').date) {
            date = '<div class="mfp-date">' + item.el.data('item').date + '</div>';
          }

          if (item.el.data('item').comments && options.popup.comments) {
            comments = '<div class="mfp-comments"><i class="qligg-icon-comment"></i>' + item.el.data('item').comments + '</div>';
          }

          if (item.el.data('item').likes && options.popup.likes) {
            likes = '<div class="mfp-likes"><i class="qligg-icon-heart"></i>' + item.el.data('item').likes + '</div>';
          }

          if (options.popup.likes || options.popup.comments) {
            info = '<div class="mfp-info">' + likes + comments + date + '</div>';
          }

          item.src = '<div class="mfp-figure ' + options.popup.align + '">' + media + '<div class="mfp-close"></div><div class="mfp-bottom-bar"><div class="mfp-title">' + profile + counter + caption + info + '</div></div></div>';
        }
      },
      gallery: {
        enabled: true
      }
    });
  }); // Init
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed').on('click', '.insta-gallery-button.load', function (e) {
    e.preventDefault();
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.delegateTarget);

    if (!$item.hasClass('loaded')) {
      return false;
    }

    var next_max_id = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-list .insta-gallery-item:last-child', $item).data('item').i;
    qligg_load_item_images($item, next_max_id);
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.insta-gallery-feed').each(function (index, item) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(item);

    if ($item.hasClass('loaded')) {
      return false;
    }

    qligg_load_item_images($item, 0);
  }); // IE8
  // ---------------------------------------------------------------------------
}

if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
  document.body.className += ' ' + 'instagal-ie-8';
}

if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
  document.body.className += ' ' + 'instagal-ie-9';
} ///// })(jQuery);

/***/ }),

/***/ "./src/frontend/scss/style.scss":
/*!**************************************!*\
  !*** ./src/frontend/scss/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg.js.map