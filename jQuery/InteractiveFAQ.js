// Q3.js - Interactive FAQ
$(function() {
  // Click question -> toggle answer visibility
  $('.faq').on('click', '.question', function() {
    $(this).next('.answer').slideToggle(120);
  });

  // Hover -> change question color
  $('.faq').on('mouseenter', '.question', function() {
    $(this).css('color', '#1a73e8');
  }).on('mouseleave', '.question', function() {
    $(this).css('color', '');
  });

  // Double-click question -> collapse all answers
  $('.faq').on('dblclick', '.question', function() {
    $('.answer').slideUp(150);
  });

  // Focus on answer input -> highlight parent question
  $('#qa-input').on('focus', function() {
    $(this).closest('.qa').find('.question').addClass('focused');
  });

  // Blur from input -> reset background color
  $('#qa-input').on('blur', function() {
    $(this).closest('.qa').find('.question').removeClass('focused');
  });
});
