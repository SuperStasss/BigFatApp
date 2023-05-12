const $page = $('html, body');
$('a[href*="#"]').click(function() {
  const href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 400);
  return false;
});