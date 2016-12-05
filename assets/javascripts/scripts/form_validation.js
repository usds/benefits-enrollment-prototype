
$(document).ready(function(){
  'use strict';
  var $inputs = $('input:not([type="hidden"]), input:not([type="submit"])'),
      $form = $('form'),
      $submit = $('.usa-button-big'),
      errorClass = "contains-error",
      feedbackSelector = ".form-feedback";

  var displayErrors = function($el) {
    var errorMessage = $el.attr('data-custom-validity') || $el[0].validationMessage,
        errorLocation = $el.attr('id');
    $el.addClass(errorClass);
    $el.next().remove('.form-feedback');
    $el.after('<p aria-atomic="true" class="form-feedback form-feedback--error" role="alert">'+errorMessage+'</p>');
    location.href = "#" + errorLocation;
  };

  var clearErrors = function($el) {
    $el.removeClass(errorClass);
    $el.next().remove(feedbackSelector);
  };

  var checkValidations = function(event) {
    $inputs.each(function() {
      var $el = $(this);
      if (!this.checkValidity()) {
        event.preventDefault();
        displayErrors($el);
        return false;
      }
      else {
        clearErrors($el);
      }
    });
  };

  $submit.on("click", checkValidations);
  $inputs.on("keyup", function(){
    if ($(this).val()){
      clearErrors($(this));
    }
  });
  console.log($submit.length);
});
