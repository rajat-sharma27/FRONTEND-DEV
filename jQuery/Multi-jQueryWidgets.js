// Q9.js - Multi-jQuery Widgets using jq1 (v1) and jq2 (v2)
// This file assumes window.jq1 (old) and window.jq2 (modern) are available.

// Carousel handled by version 1 (jq1)
(function($) {
  // simple rotation by toggling text every 2s
  let idx = 0;
  const slides = ['Slide A','Slide B','Slide C'];
  setInterval(function() {
    idx = (idx + 1) % slides.length;
    $('#carousel').text('Carousel (v1): ' + slides[idx]);
  }, 2000);
})(window.jq1);

// Modal popups and tooltips handled by version 2 (jq2)
(function($) {
  // Manage modal popup
  $('#modal-trigger').on('click', function() {
    $('#modal').fadeIn(150);
  });

  $('#close-modal').on('click', function() {
    $('#modal').fadeOut(120);
  });

  // Version 1 highlights active widget (use jq1)
  (function($old) {
    $old('#widget-a').on('click', function() {
      $old('.widget').removeClass('active');
      $old(this).addClass('active');
    });
  })(window.jq1);

  // Version 2 attaches tooltips on hover for widget-b
  $('#widget-b').hover(function() {
    const tip = $('<div class="tip">Tooltip (v2)</div>').css({position:'absolute', top: $(this).offset().top + 30, left: $(this).offset().left});
    $('body').append(tip);
    $(this).data('tip', tip);
  }, function() {
    const tip = $(this).data('tip');
    if (tip) tip.remove();
  });

})(window.jq2);
