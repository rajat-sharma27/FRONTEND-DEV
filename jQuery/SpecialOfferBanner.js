// Q4.js - Special Offer Banner
$(function() {
  const $banners = $('#banners .banner');

  // Hide specific banners (hide first two for example)
  $('#hide-btn').on('click', function() {
    $banners.slice(0,2).hide();
  });

  // Show hidden banners
  $('#show-btn').on('click', function() {
    $banners.show();
  });

  // Slide Up/Down toggle for banners container
  $('#slide-toggle').on('click', function() {
    $('#banners').children().first().slideToggle(200);
  });

  // Fade In/Fade Out for entire banners area
  $('#fade-toggle').on('click', function() {
    if ($('#banners').is(':visible')) $('#banners').fadeOut(300);
    else $('#banners').fadeIn(300);
  });

  // Automatically rotate through banners every 5 seconds using fadeIn/fadeOut
  let idx = 0;
  setInterval(function() {
    const $all = $banners;
    $all.eq(idx).fadeOut(400, function() {
      idx = (idx + 1) % $all.length;
      $all.eq(idx).fadeIn(400);
    });
  }, 5000);
});
