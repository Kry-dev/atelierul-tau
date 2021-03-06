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

$(document).ready(function () {
    // Set up font page carousel
    $('.main-carousel').slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000
    });
    var initProductSlider = function(){
        $('.carousel-inner').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.productThumbCarousel-list'
        });
    };
    initProductSlider();
    $('.productThumbCarousel-list').slick({
        variableWidth: true,
        slidesToScroll: 1,
        nextArrow: '<button class="btn btn-secondary slick-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button class="btn btn-secondary slick-prev"><i class="fa fa-angle-left"></i></button>',
        asNavFor: '.carousel-inner',
        dots: false,
        focusOnSelect: true
    });

    // Set up related-products carousels
    var $relatedProductsContainers = $('.related-products');

    $relatedProductsContainers.each(function (i, container) {
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
    // $('.navbar-toggler .navbar-toggler').off( "mouseenter mouseleave" ,function () {
    //     $('navbarNav').addClass('show');
    // });
    // Set up sticky product on product page

    var $productHeader = $('.product_header');
    var $productTabs = $('.product-detail-tabs > .navbar');
    var $productScrollPoint = 210;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".sidebar-section").height()){
            $(".mobile-header").addClass('fixed');
        }else {
            $(".mobile-header").removeClass('fixed');
        }
        if ($(window).scrollTop() >= $productHeader.height() - 100) {
            $('#navbar_product').addClass('navbar-product-visible');
            //$productHeader.addClass('fixed');
            $productTabs.addClass('fixed');
            //$('.product-detail-content').css('padding-top', $productScrollPoint);
        }else{
            $('#navbar_product').removeClass('navbar-product-visible');
            //$productHeader.removeClass('fixed');
            $productTabs.removeClass('fixed');
            //$('.product-detail-content').css('padding-top', '0');
        }
        if ($(window).scrollTop() <= $productScrollPoint){
            $('.carousel-inner').slick('reinit');
        }

    });

    // Add scrollspy to <body>
    var offsetVal = 130;
    $('body').scrollspy({target: "#product-detail-info", offset: offsetVal});

    $("#product-detail-info li a").click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top - offsetVal}, 800);
    });

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
    // $('.category-selector-items').parent().hover(function (e) {
    //     var $target = $(e.type === "mouseenter");
    //
    //     if (!$target.children().hasClass('category-selector-button')) {
    //         return;
    //     }
    //     if ($target.children().hasClass('show')) {
    //         $target.children().removeClass('show');
    //     } else {
    //         $(this).children().each(function (index, item) {
    //             $(item).removeClass('show');
    //         });
    //         $target.children().addClass('show');
    //     }
    // });
    $('.category-selector-items').parent().on("mouseover" , function () {
        $(this).children('.collapse').collapse('show');
    });
    $('.category-selector-items').parent().on("mouseleave" , function () {
        $(this).children('.collapse').collapse('hide');
    });
    $('.header-search-icon').click(function (e) {
        e.preventDefault();
        $('.header-search').addClass('d-flex')
    });
    $('#closeMobileSearch').click(function (e) {
        e.preventDefault();
        $('.header-search').removeClass('d-flex')
    });
    $('#showFilterListing').click(function () {
        $('.filter-box').slideDown( "300");
    });
    $('#closeFilterListing').click(function (e) {
        e.preventDefault();
        $('.filter-box').slideUp( "300");
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".main-products").height() - 200) {
            $('.main-products > .scrollTop').addClass("show");
        } else {
            $('.main-products > .scrollTop').removeClass("show");
        }
        if ($(this).scrollTop() > $(".accessories-listing-fiters").height()) {
            $('#scrollTop').addClass("show");
        } else {
            $('#scrollTop').removeClass("show");
        }
    });
    $('#scrollTop').click(function(){
        $('html, body').animate({scrollTop : 0});
        return false;
    });
    var maxColHeight = 0;
    $(".related-products-list .related-product .product-preview-title").each(function(){
        if ($(this).height() > maxColHeight) {
            maxColHeight = $(this).height();
        }
    });
    $(".related-products-list .related-product .product-preview-title").height(maxColHeight);

    var anchor_top = $("#tablesorter-demo").offset().top;
    var anchor_bottom = $("#bottom_anchor").offset().top;
    function moveScroll(){
        var scroll = $(window).scrollTop();

        if (scroll>anchor_top && scroll<anchor_bottom) {
            clone_table = $("#clone");
            if(clone_table.length == 0){
                clone_table = $("#tablesorter-demo").clone();
                clone_table.attr('id', 'clone');
                clone_table.css({position:'fixed',
                    'pointer-events': 'none',
                    top: 100});
                clone_table.width($("#tablesorter-demo").width());
                $(".accessories-listing-items").append(clone_table);
                $("#clone").css({visibility:'hidden'});
                //$("#clone thead").css({visibility:'visible', 'pointer-events':'auto', 'background': 'white', 'height':'150px'});
                $("#clone thead").addClass('thead-fixed');
            }
        } else {
            $("#clone").remove();
        }
    }
    if(anchor_top != true){
        $(window).scroll(moveScroll);
    }

});


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map