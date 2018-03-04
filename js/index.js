require('../sass/main.scss');

$(document).ready(function() {
  // Set up font page carousel
  $('.main-carousel').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000
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
