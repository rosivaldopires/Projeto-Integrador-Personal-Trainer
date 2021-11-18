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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map