$(function() {

  var $explainer = $('.explainer'),
      $explainerToggle = $('.explainer__toggle'),
      $explainerContent = $('.explainer__content');

  $explainerContent.attr("aria-hidden", "true").addClass("hide");

  $explainerToggle.on('click', function(){

    var attr = $(this).attr('aria-expanded');
    if (typeof attr !== typeof undefined && attr == "false") {
      $(this).next().attr("aria-hidden", "false").removeClass("hide");
      $(this).attr("aria-expanded", "true");
    }

    if (typeof attr !== typeof undefined && attr == "true") {
      $(this).next().attr("aria-hidden", "true").addClass("hide");
      $(this).attr("aria-expanded", "false");
    }
    return false;

  });

});
