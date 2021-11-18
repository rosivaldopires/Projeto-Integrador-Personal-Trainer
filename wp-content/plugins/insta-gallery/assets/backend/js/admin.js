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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/admin.js":
/*!******************************!*\
  !*** ./src/backend/admin.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wp-util */ "wp-util");
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wp_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-serializejson */ "jquery-serializejson");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wp-color-picker-alpha */ "wp-color-picker-alpha");
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_5__);







(function ($) {
  "use strict";

  _.mixin({
    escapeHtml: function escapeHtml(attribute) {
      return attribute.replace('&amp;', /&/g).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    },
    getFormData: function getFormData($form) {
      return $form.serializeJSON();
    }
  }); // Model
  // ---------------------------------------------------------------------------


  var Account = Backbone.Model.extend({
    defaults: {
      access_token: ''
    }
  });
  var AccountView = Backbone.View.extend({
    events: {
      'change input': 'enable',
      'click .media-modal-close': 'close',
      'submit .media-modal-form': 'submit'
    },
    templates: {},
    initialize: function initialize() {
      _.bindAll(this, 'open', 'render', 'close', 'enable', 'submit');

      this.init();
      this.open();
    },
    init: function init() {
      this.templates.window = wp.template('qligg-modal-account-main');
    },
    render: function render() {
      var modal = this;
      modal.$el.html(modal.templates.window(modal.model.attributes));
    },
    updateModel: function updateModel(e) {
      e.preventDefault();
      var modal = this,
          $form = modal.$el.find('form');

      var model = _.getFormData($form);

      this.model.set(model);
    },
    enable: function enable(e) {
      $('.media-modal-submit').prop('disabled', false);
      this.updateModel(e);
    },
    open: function open(e) {
      this.render();
      $('body').addClass('modal-open').append(this.$el);
    },
    close: function close(e) {
      e.preventDefault();
      this.undelegateEvents();
      $(document).off('focusin');
      $('body').removeClass('modal-open');
      this.remove();
      return;
    },
    submit: function submit(e) {
      e.preventDefault();
      var modal = this,
          $modal = modal.$el.find('#qligg_modal'),
          $spinner = $modal.find('.settings-save-status .spinner'),
          $saved = $modal.find('.settings-save-status .saved');
      $.ajax({
        url: ajaxurl,
        data: {
          action: 'qligg_add_account',
          nonce: qligg_account.nonce.qligg_add_account,
          account_data: modal.model.attributes
        },
        dataType: 'json',
        type: 'POST',
        beforeSend: function beforeSend() {
          $('.media-modal-submit').prop('disabled', true);
          $spinner.addClass('is-active');
        },
        complete: function complete() {
          $spinner.removeClass('is-active');
        },
        error: function error(response) {
          alert('Error!');
        },
        success: function success(response) {
          //console.log(response);
          if (response.success) {
            $modal.addClass('reload');
            $saved.addClass('is-active');

            _.delay(function () {
              $saved.removeClass('is-active');
            }, 5000);

            modal.close(e);
            window.location.reload();
          } else {
            alert(response.data);
          }
        }
      });
      return false;
    }
  });
  var AccountModal = Backbone.View.extend({
    initialize: function initialize(e) {
      var model = new Account();
      model.set({
        access_token: ''
      });
      new AccountView({
        model: model
      });
    }
  }); // Copy token
  // ---------------------------------------------------------------------------

  $(document).on('click', '[data-qligg-copy-token]', function (e) {
    e.preventDefault();
    $($(this).data('qligg-copy-token')).select();
    document.execCommand('copy');
  }); // Delete token
  // -------------------------------------------------------------------------

  $(document).on('click', '[data-qligg-delete-token]', function (e) {
    e.preventDefault();
    var c = confirm(qligg_account.message.confirm_delete);

    if (!c) {
      return false;
    }

    var $button = $(e.target),
        account_id = $button.closest('[data-account_id]').data('account_id'),
        $spinner = $(e.target).closest('td').find('.spinner');
    $.ajax({
      url: ajaxurl,
      type: 'post',
      data: {
        action: 'qligg_delete_account',
        account_id: account_id,
        nonce: qligg_account.nonce.qligg_delete_account
      },
      beforeSend: function beforeSend() {
        $spinner.addClass('is-active');
      },
      success: function success(response) {
        if (response.success) {
          setTimeout(function () {
            window.location.reload();
          }, 300);
        } else {
          alert(response.data);
        }
      },
      complete: function complete() {
        $spinner.removeClass('is-active');
      },
      error: function error(jqXHR, textStatus) {
        console.log(textStatus);
      }
    });
  }); //// Renew token 

  $(document).on('click', '[data-qligg-renew-token]', function (e) {
    e.preventDefault();
    var $button = $(e.target),
        account_id = $button.closest('[data-account_id]').data('account_id'),
        $spinner = $(e.target).closest('td').find('.spinner'); ////alert(access_token);

    $.ajax({
      url: ajaxurl,
      type: 'post',
      data: {
        action: 'qligg_renew_access_token',
        account_id: account_id,
        nonce: qligg_account.nonce.qligg_renew_access_token
      },
      beforeSend: function beforeSend() {
        $spinner.addClass('is-active');
      },
      success: function success(response) {
        alert(response.data);

        if (response.success) {
          setTimeout(function () {
            window.location.reload();
          }, 300);
          console.log(response);
        } else {
          alert(response.data);
        }
      },
      complete: function complete() {
        $spinner.removeClass('is-active');
      },
      error: function error(jqXHR, textStatus) {
        console.log(textStatus);
      }
    });
  }); // Save token
  // ---------------------------------------------------------------------------

  $('#qligg-add-token').on('click', function (e) {
    e.preventDefault();
    new AccountModal(e);
  });
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "backbone":
/*!**************************************!*\
  !*** external ["window","Backbone"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["window"]["Backbone"]; }());

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ }),

/***/ "jquery-serializejson":
/*!*******************************************!*\
  !*** external ["window","serializeJSON"] ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["window"]["serializeJSON"]; }());

/***/ }),

/***/ "underscore":
/*!**************************!*\
  !*** external ["_","."] ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["_"]["."]; }());

/***/ }),

/***/ "wp-color-picker-alpha":
/*!*******************************************!*\
  !*** external ["window","wpColorPicker"] ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["window"]["wpColorPicker"]; }());

/***/ }),

/***/ "wp-util":
/*!******************************!*\
  !*** external ["wp","util"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["util"]; }());

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map