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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/settings.js":
/*!*********************************!*\
  !*** ./src/backend/settings.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-serializejson */ "jquery-serializejson");
/* harmony import */ var jquery_serializejson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_serializejson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wp-color-picker-alpha */ "wp-color-picker-alpha");
/* harmony import */ var wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wp_color_picker_alpha__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wp-util */ "wp-util");
/* harmony import */ var wp_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wp_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! backbone */ "backbone");
/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_5__);







(function ($) {
  "use strict";

  _.mixin({
    escapeHtml: function escapeHtml(attribute) {
      return attribute.replace('&amp;', /&/g).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    },
    getFormData: function getFormData($form) {
      return $form.serializeJSON();
    }
  }); // Spinner
  // -------------------------------------------------------------------------


  function ig_change_spinner(link) {
    if (link) {
      if (!$('#qligg-save-settings .insta-gallery-spinner img').length) {
        var img = '<img src="' + link + '" class="ig-spin" />';
        $('#qligg-save-settings .insta-gallery-spinner').append(img);
      } else {
        $('#qligg-save-settings .insta-gallery-spinner img').attr('src', link);
      }

      $('#qligg-save-settings .insta-gallery-spinner .ig-spin').hide();
      $('#qligg-save-settings .insta-gallery-spinner img').show();
    } else {
      $('#qligg-save-settings .insta-gallery-spinner .ig-spin').show();
      $('#qligg-save-settings .insta-gallery-spinner img').remove();
    }
  }

  var $igs_image_id = $('input[name=insta_spinner_image_id]'),
      $igs_reset = $('#ig-spinner-reset');
  $('#qligg-save-settings').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this),
        $spinner = $form.find('.spinner');
    $.ajax({
      url: ajaxurl,
      type: 'post',
      dataType: 'JSON',
      data: {
        action: 'qligg_save_settings',
        nonce: qligg_settings.nonce.qligg_save_settings,
        settings_data: $form.serialize()
      },
      beforeSend: function beforeSend() {
        $spinner.addClass('is-active');
      },
      success: function success(response) {},
      complete: function complete() {
        $spinner.removeClass('is-active');
      },
      error: function error(jqXHR, textStatus) {
        console.log(textStatus);
      }
    });
  }); // reset spinner to default

  $igs_reset.on('click', function () {
    $igs_image_id.val('');
    ig_change_spinner();
    $(this).hide();
  });
  if ($igs_image_id.val() == '') $igs_reset.hide();
  if ($igs_image_id.data('misrc') != '') ig_change_spinner($igs_image_id.data('misrc')); // Upload media image
  // ---------------------------------------------------------------------------

  $('#ig-spinner-upload').on('click', function (e) {
    e.preventDefault();
    var image_frame;

    if (image_frame) {
      image_frame.open();
    } // Define image_frame as wp.media object


    image_frame = wp.media({
      title: 'Select Media',
      multiple: false,
      library: {
        type: 'image'
      }
    });
    image_frame.on('close', function () {
      // On close, get selections and save to the hidden input
      // plus other AJAX stuff to refresh the image preview
      var selection = image_frame.state().get('selection');

      if (selection.length) {
        var gallery_ids = new Array();
        var i = 0,
            attachment_url;
        selection.each(function (attachment) {
          gallery_ids[i] = attachment['id'];
          attachment_url = attachment.attributes.url;
          i++;
        });
        var ids = gallery_ids.join(",");
        $igs_image_id.val(ids);
        ig_change_spinner(attachment_url);
      } // toggle reset button


      if ($igs_image_id.val() == '') {
        $igs_reset.hide();
      } else {
        $igs_reset.show();
      }
    });
    image_frame.on('open', function () {
      // On open, get the id from the hidden input
      // and select the appropiate images in the media manager
      var selection = image_frame.state().get('selection');
      var ids = $igs_image_id.val().split(',');
      ids.forEach(function (id) {
        attachment = wp.media.attachment(id);
        attachment.fetch();
        selection.add(attachment ? [attachment] : []);
      });
    });
    image_frame.open();
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
//# sourceMappingURL=settings.js.map