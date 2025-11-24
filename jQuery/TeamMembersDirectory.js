// Q5.js - Team Members Directory
$(function() {
  // Click a manager -> highlight all direct reports
  $('.team').on('click', '.manager', function() {
    const managerId = $(this).attr('data-id');
    $('.employee').removeClass('highlight');
    $(`.employee[data-manager="${managerId}"]`).addClass('highlight');
  });

  // Hover on an employee -> show contact info using .next() or .find()
  $('.team').on('mouseenter', '.employee', function() {
    $(this).find('.contact').fadeIn(120);
  }).on('mouseleave', '.employee', function() {
    $(this).find('.contact').fadeOut(80);
  });

  // Click on a department -> change background of all members in that department using .children()
  $('.team').on('click', '.dept-title', function() {
    const $dept = $(this).closest('.department');
    $dept.children('.reports').find('.employee').css('background','#f0fff0');
    // reset others
    $('.department').not($dept).find('.employee').css('background','');
  });

  // Select a random employee -> highlight sibling employees
  $('#random-employee').on('click', function() {
    const $emps = $('.employee');
    const idx = Math.floor(Math.random() * $emps.length);
    const $chosen = $emps.eq(idx);
    $chosen.siblings('.employee').addClass('highlight');
  });

  // Collapse/expand team using .parent() and .find()
  $('#toggle-team').on('click', function() {
    // toggle reports for all departments
    $('.department').each(function() {
      // .find to locate the reports element inside
      $(this).find('.reports').slideToggle(200);
    });
  });
});
