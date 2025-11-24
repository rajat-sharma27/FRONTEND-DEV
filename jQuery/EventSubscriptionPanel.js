// Q6.js - Event Subscription Panel
$(function() {
  // Subscribe -> enable notifications
  $('#topics').on('click', '.subscribe', function() {
    const $topic = $(this).closest('.topic');
    $topic.addClass('subscribed');
    showMessage($topic.text().trim().split(' ')[0] + ' subscribed successfully');
  });

  // Unsubscribe -> disable notifications
  $('#topics').on('click', '.unsubscribe', function() {
    const $topic = $(this).closest('.topic');
    $topic.removeClass('subscribed');
    showMessage($topic.text().trim().split(' ')[0] + ' unsubscribed');
  });

  // Dynamically add new subscription topics -> attach .on() click events (delegation used)
  $('#add-topic').on('click', function() {
    const name = $('#new-topic').val().trim();
    if (!name) return showMessage('Provide a topic name');
    const $el = $(`<div class="topic">${name} <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>`);
    $('#topics').append($el);
    showMessage(`Added topic: ${name}`);
    $('#new-topic').val('');
  });

  // Remove specific subscription -> detach .off() event (example: remove Unsubscribe button handler for 'Blog')
  // Demonstration: turn off unsubscribe for topic named 'Blog'
  $('#topics .topic').each(function() {
    const txt = $(this).text();
    if (txt.indexOf('Blog') >= 0) {
      // detach click handler for unsubscribe buttons inside this element
      $(this).find('.unsubscribe').off('click');
    }
  });

  // Show success message -> dynamically inserted into DOM on action
  function showMessage(msg) {
    const $m = $(`<div class="msg">${msg}</div>`);
    $('#messages').empty().append($m);
    setTimeout(() => { $m.fadeOut(300, () => $m.remove()); }, 2000);
  }
});
