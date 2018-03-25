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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);

$(document).ready(function() {
  // Set up font page carousel
  $('.main-carousel').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000
  });
  $('.carousel-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.productThumbCarousel-list'
  });
  $('.productThumbCarousel-list').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="btn btn-secondary slick-next"><i class="fa fa-angle-right"></i></button>',
      prevArrow: '<button class="btn btn-secondary slick-prev"><i class="fa fa-angle-left"></i></button>',
      asNavFor: '.carousel-inner',
      dots: false,
      //centerMode: true,
      focusOnSelect: true
  });

  // Set up related-products carousels
  var $relatedProductsContainers = $('.related-products');

  $relatedProductsContainers.each(function(i, container) {
    var $container = $(container);

    $container.find('.related-products-list').slick({
      dots: false,
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      prevArrow: $container.find('.related-products-prev'),
      nextArrow: $container.find('.related-products-next'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  });
  //
  // Set up sticky product on product page

    var $productHeader = $('.product_header');
    var $productHeaderHeight = $productHeader.height();
    var $headerHeight = $('.header').height();
    var $productTabs = $('.product-detail-tabs > .navbar');
    var $productScrollPoint = $productHeaderHeight+$headerHeight+$productTabs.height() +20;


    $(window).scroll(function(){
        if ($(window).scrollTop() >= $productScrollPoint){
            $productHeader.addClass('fixed');
            $productTabs.addClass('fixed');
            $('.product-detail-tabs').css('padding-top', ($productScrollPoint -20));
        }else {
            $productHeader.removeClass('fixed');
            $productTabs.removeClass('fixed');
            $('.product-detail-tabs').css('padding-top', '0');
        }
    });
    $('body').scrollspy({target: '#product-detail-info'});
  // Set up sticky footer on cart page

  var $cartFooter = $('.cart-footer');
  var $cartServices = $('.cart-services');


  function checkOffset() {
    var y = $(window).scrollTop();
    var viewportHeight = window.innerHeight;

    if (y + viewportHeight < $cartServices.offset().top) {
      $cartFooter.css('position', 'fixed');

    } else {
      $cartFooter.css('position', 'static');
    }
  }


  // Only enable sticky footer on cart page
    if ($cartFooter.length > 0 && $cartServices.length > 0) {
        $(document).scroll(checkOffset);
        checkOffset();
    }

  // Set up category selector dropdowns
  $('.category-selector-items').on('click', function(e) {
    var $target = $(e.target);

    if (!$target.hasClass('category-selector-button')) {
      return;
    }

    if ($target.parent().hasClass('show')) {
      $target.parent().removeClass('show');
    } else {
      $(this).children().each(function(index, item) {
        $(item).removeClass('show');
      });
      $target.parent().addClass('show');
    }
  });

});


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map