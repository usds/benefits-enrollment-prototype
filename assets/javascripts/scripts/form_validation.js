$(document).ready(function(){
  'use strict';
  var $inputs = $('input:not([type="hidden"]), input:not([type="submit"]), select'),
      $form = $('form'),
      $submit = $('.usa-button-big'),
      errorClass = "contains-error",
      feedbackSelector = ".form-feedback",
      errorID = "error",
      $errorplaceholder = $('.error-placeholder');

  var displayErrors = function($el) {
    var errorMessage = $el.attr('data-custom-validity') || $el[0].validationMessage,
      errorFieldName = $el.attr('id'),
      $label = $('label[for="'+errorFieldName+'"]'),
      $container = $el.closest('.field-group');

    if (($el.attr("type") != "radio") && ($el.attr("type") != "checkbox")) {
      var errorMessage = '<p aria-atomic="true" class="form-feedback form-feedback--error" role="alert">'+errorMessage+'</p>';
      $el.addClass(errorClass);
      $label.addClass(errorClass);
      $el.next().remove('.form-feedback');
      console.log($el.parents().find($errorplaceholder).length);
      if ($el.parents().find($errorplaceholder).length) {
        $errorplaceholder.html(errorMessage);
      }
      else {
        $el.after(errorMessage);
      }
    }
    else {
      $el.parent().parent().parent().find('.form-feedback').remove();
      $el.parent().parent().before('<p aria-atomic="true" class="form-feedback form-feedback--error" role="alert">'+errorMessage+'</p>');
    }
    $el.focus();
    $container.attr('id',  errorID).addClass(errorClass);
    location.href = "#" + errorID;
  };

  var clearErrors = function($el) {
    $el.removeClass(errorClass);
    $(feedbackSelector).remove();
    $('label.'+ errorClass).removeClass(errorClass);
    $('#error').removeClass(errorClass).removeAttr('id');
  };

  var checkValidations = function(event) {
    // Redefine the inputs since some will be removed on page load
    $inputs = $('input:not([type="hidden"]), input:not([type="submit"]), select');

    // Validate each input
    $inputs.each(function() {
      var $el = $(this);
      if (!this.checkValidity()) {
        event.preventDefault();
        clearErrors($el);
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
    /*$inputs.on("keyup", function(){
      if ($(this).val()){
        clearErrors($(this));
      }
    });*/
  }

});
