// Q8.js - Dynamic Blog Posts
$(function() {
  // Add New Post -> append a new post
  $('#add-post').on('click', function() {
    const n = $('#posts .post').length + 1;
    $('#posts').append(`<article class="post">Post ${n} - New article</article>`);
  });

  // Prepend Featured Post -> add at top
  $('#prepend-featured').on('click', function() {
    $('#posts').prepend(`<article class="post featured">Featured - Special announcement</article>`);
  });

  // Remove Last Post -> delete last element
  $('#remove-last').on('click', function() {
    $('#posts .post').last().remove();
  });

  // Add tags to posts -> use .before()/.after() for placement
  $('#add-tag').on('click', function() {
    const tag = $('#tag-text').val().trim();
    if (!tag) return;
    const $last = $('#posts .post').last();
    // place tag before the last post (as demonstration)
    $last.before(`<span class="tag">#${tag}</span>`);
    $('#tag-text').val('');
  });

  // Highlight posts with specific keywords dynamically
  // when a post is clicked, check keyword 'Security' and highlight
  $('#posts').on('click', '.post', function() {
    const txt = $(this).text();
    if (txt.indexOf('Security') >= 0) $(this).addClass('highlight');
    else $(this).removeClass('highlight');
  });
});
