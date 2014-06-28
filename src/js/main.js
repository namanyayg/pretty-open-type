$(window).on('load', function() {
  $cont = $('.js-isotope')
  $cont.isotope({
    itemSelector: '.sympl',
    columnWidth: '25%',
    sortBy: 'random',
  });

  $cont.isotope('shuffle');

  $(window).on('resize', function() {
    $cont.isotope();
  });
});