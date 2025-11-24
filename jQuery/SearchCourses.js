// Q7.js - Search Courses
$(function() {
  function resetHighlights() {
    $('#course-list .course').removeClass('match').show().each(function() {
      // remove marked spans if any
      const original = $(this).text();
      $(this).html(original);
    });
  }

  $('#search').on('keyup', function() {
    const q = $(this).val().trim().toLowerCase();
    if (!q) {
      resetHighlights();
      $('#count').text($('#course-list .course').length);
      return;
    }

    let matches = 0;
    $('#course-list .course').each(function() {
      const txt = $(this).text();
      const low = txt.toLowerCase();
      if (low.indexOf(q) !== -1) {
        // Highlight matched text using .html() and wrapping <mark>
        const regex = new RegExp(`(${q})`, 'ig');
        const newHtml = txt.replace(regex, '<mark>$1</mark>');
        $(this).html(newHtml).addClass('match').show();
        matches++;
      } else {
        // Toggle visibility of non-matching courses
        $(this).hide();
      }
    });

    $('#count').text(matches);
  });

  // Clear search -> show all courses
  $('#clear').on('click', function() {
    $('#search').val('');
    resetHighlights();
    $('#count').text($('#course-list .course').length);
  });

  // initial count
  $('#count').text($('#course-list .course').length);
});
