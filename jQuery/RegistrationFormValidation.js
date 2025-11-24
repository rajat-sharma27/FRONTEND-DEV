// Q10.js - Registration Form Validation
$(function() {
  function markInvalid($el, msg) {
    $el.addClass('invalid');
    $('#message').text(msg).removeClass('success');
  }
  function clearInvalid($el) {
    $el.removeClass('invalid');
    $('#message').text('');
  }

  // Name field not empty
  $('#name').on('input', function() {
    if ($(this).val().trim() === '') $(this).addClass('invalid');
    else $(this).removeClass('invalid');
  });

  // Email field -> valid format and uniqueness
  $('#email').on('blur', function() {
    const val = $(this).val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      $(this).addClass('invalid');
      $('#message').text('Invalid email format');
      return;
    }
    // uniqueness check (simulated)
    if (window.existingEmails.indexOf(val.toLowerCase()) !== -1) {
      $(this).addClass('invalid');
      $('#message').text('Email already taken');
    } else {
      $(this).removeClass('invalid');
      $('#message').text('');
    }
  });

  // Password minimum 8 characters
  $('#password').on('input', function() {
    if ($(this).val().length < 8) $(this).addClass('invalid');
    else $(this).removeClass('invalid');
  });

  // Submit handler -> show success message if all valid
  $('#reg-form').on('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const $name = $('#name'), $email = $('#email'), $pw = $('#password');

    if ($name.val().trim() === '') { markInvalid($name, 'Name required'); valid = false; }
    if ($email.val().trim() === '') { markInvalid($email, 'Email required'); valid = false; }
    // re-run simple validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test($email.val().trim())) { markInvalid($email, 'Invalid email'); valid = false; }
    if (window.existingEmails.indexOf($email.val().toLowerCase()) !== -1) { markInvalid($email, 'Email already exists'); valid = false; }
    if ($pw.val().length < 8) { markInvalid($pw, 'Password must be 8+ chars'); valid = false; }

    if (valid) {
      $('#message').text('Registration successful!').addClass('success');
      // reset form and styles
      this.reset();
      $('.invalid').removeClass('invalid');
    }
  });

  // Highlight invalid fields dynamically with red border using .css()
  // Already handled via .invalid class, but here's dynamic demonstration:
  $(document).on('input', 'input', function() {
    if ($(this).hasClass('invalid')) $(this).css('border','2px solid red');
    else $(this).css('border','');
  });
});
