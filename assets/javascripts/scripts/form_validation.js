$(document).ready(function(){
  'use strict';
  var $inputs = $('input:not([type="hidden"]), input:not([type="submit"])'),
      $form = $('form'),
      $submit = $('.usa-button-big'),
      errorClass = "contains-error",
      feedbackSelector = ".form-feedback";

  var displayErrors = function($el) {
    var errorMessage = $el.attr('data-custom-validity') || $el[0].validationMessage,
      errorFieldName = $el.attr('id'),
      $label = $('label[for="'+errorFieldName+'"]'),
      $container = $el.closest('.field-group'),
      errorID = "error";

    if (($el.attr("type") != "radio") && ($el.attr("type") != "checkbox")) {
      $el.addClass(errorClass);
      $label.addClass(errorClass);
      $el.next().remove('.form-feedback');
      $el.after('<p aria-atomic="true" class="form-feedback form-feedback--error" role="alert">'+errorMessage+'</p>');
    }
    else {
      $el.parent().parent().parent().find('.form-feedback').remove();
      $el.parent().parent().before('<p aria-atomic="true" class="form-feedback form-feedback--error" role="alert">'+errorMessage+'</p>');
    }
    $el.focus();
    $container.attr('id',  errorID);
    location.href = "#" + errorID;
  };

  var clearErrors = function($el) {
    $el.removeClass(errorClass);
    $el.next().remove(feedbackSelector);
    $('label.'+errorClass).removeClass(errorClass);
    $('#error').removeAttr('id');
  };

  var checkValidations = function(event) {
    // Redefine the inputs since some will be removed on page load
    $inputs = $('input:not([type="hidden"]), input:not([type="submit"])');

    // Validate each input
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

  // checkValidity() will crash IE9, so we need to bypass it there.
  var hasBrowserValidation = (typeof document.createElement('input').checkValidity == 'function');

  if (hasBrowserValidation) {
    $submit.on("click", checkValidations);
    $inputs.on("keyup", function(){
      if ($(this).val()){
        clearErrors($(this));
      }
    });
  }

});
