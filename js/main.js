// include plugins/fit-columns.js

;$(window).on('load', function() {
  $cont = $('.js-isotope')
  $cont.isotope({
    itemSelector: '.sympl',
    columnWidth: '25%'
    // layoutMode: 'fitColumns'
  });

  $(window).on('resize', function() {
    $cont.isotope();
  });
});