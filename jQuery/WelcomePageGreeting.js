// Q1.js - Welcome Page Greeting
$(document).ready(function() {
  // Determine greeting based on current time
  const hour = new Date().getHours();
  let text = "Welcome";
  if (hour < 12) text = "Good Morning";
  else if (hour < 18) text = "Good Afternoon";
  else text = "Good Evening";

  $('#greeting').text(`${text}, Visitor!`);
  $('#time-info').text(`Current hour: ${hour}`);

  // When greeting clicked -> show alert
  // Using .on to attach click handler
  $('#greeting').on('click', function() {
    alert($(this).text() + " — have a productive day!");
  });

  // Change Greeting button -> motivational quote
  $('#change-greeting').on('click', function() {
    $('#greeting').text("Push harder than yesterday if you want a different tomorrow.");
  });

  // Toggle visibility of welcome message
  $('#toggle-welcome').on('click', function() {
    $('#welcome-msg').toggle(); // toggle visibility
  });
});
