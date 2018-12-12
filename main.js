jQuery(document).ready(function ($) {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    // centerMode: true,
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

  $("#room").on('click', function () {
    $('.main-slider-carousel-wrapper').toggleClass("slider-slide-up");
  });

  $("#slide-bar-arrow").on('click', function () {
    $('.slide-bar-wrapper').toggleClass("side-bar-show");
  });

  $( "#accordion" ).accordion();
});