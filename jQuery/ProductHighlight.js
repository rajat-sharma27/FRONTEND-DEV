// Q2.js - Product Highlight
$(function() {
  // Click on a product -> highlight background
  $('#products').on('click', '.product', function(e) {
    // Prevent when Favorite button clicked (let favorite handle it)
    if ($(e.target).is('.fav')) return;
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });

  // Hover over a product -> show additional product details
  // Using .on('mouseenter') and .on('mouseleave')
  $('#products').on('mouseenter', '.product', function() {
    $(this).find('.details').slideDown(120);
  }).on('mouseleave', '.product', function() {
    $(this).find('.details').slideUp(80);
  });

  // Clicking "Favorite" icon toggles selected class
  $('#products').on('click', '.fav', function(e) {
    e.stopPropagation(); // prevent product click
    $(this).toggleClass('selected');
    $(this).text($(this).hasClass('selected') ? '♥ Favorited' : '♡ Favorite');
  });

  // Apply different styles to products with discounts using attribute selector
  // highlight .product elements with data-discount > 0
  $('.product[data-discount]').each(function() {
    const disc = parseInt($(this).attr('data-discount'), 10) || 0;
    if (disc > 0) $(this).find('.discount').show();
  });

  // Show alert if a product is out of stock (data-stock)
  $('#products').on('click', '.product', function() {
    const stock = parseInt($(this).attr('data-stock'), 10);
    if (stock === 0) {
      alert('Sorry, ' + $(this).data('name') + ' is out of stock.');
    }
  });
});
