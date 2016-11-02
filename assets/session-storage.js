$(document).ready(function() {

	$('form').on( "submit", function( event ) {
      if ( this.checkValidity && !this.checkValidity() ) {
          $( this ).find( ":invalid" ).first().focus().addClass('input-error');
          event.preventDefault();
      }
  });

	// Get Data
	getData = function() {
		for (i = 0; i < sessionStorage.length; i++) {
			if (sessionStorage.getItem(sessionStorage.key(i)) != "undefined") {
	    	window[sessionStorage.key(i)] = sessionStorage.getItem(sessionStorage.key(i));
	    }
	    else {
	    	window[sessionStorage.key(i)] = "";
	    }
		}
		// Remove Benefits if not applying to them
		if ((typeof benefitChoiceFoodAssistance != "undefined") && (typeof benefitChoiceHealthcare != "undefined")) {
			if (benefitChoiceFoodAssistance == "no") {
			  $('.snap-only').remove();
			}

			if (benefitChoiceHealthcare == "no") {
			  $('.medicaid-only').remove();
			}
		}
	}

	getData();

	//Save Data
	storeData = function() {
		$('input[type="tel"], input[type="number"], input[type="text"], input[type="email"], input[type="password"], select').each(function(){
		    var value = $(this).val();
		    var key = $(this).attr('id');
		    sessionStorage.setItem(key, value);
		});

		$("input[type='radio']:checked").each(function(){
		    var value = $(this).val();
		    var key = $(this).attr('name');
		    sessionStorage.setItem(key, value);
		});
		$("input[type='checkbox']").each(function(){
		    var value = "no";
		    var key = $(this).attr('id');
		    sessionStorage.setItem(key, value);
		});
		$("input[type='checkbox']:checked").each(function(){
		    var value = "yes";
		    var key = $(this).attr('id');
		    sessionStorage.setItem(key, value);
		});
	}

    // For now, if browser does not support HTML5 validation, allow form data to be submitted without validation.
    // In practice, this should be replaced with a shim for IE9.
    checkValidityIfSupported = function(elem) {
	if (typeof elem.checkValidity == 'function') {
	    return elem.checkValidity();
	} else {
	    return true;
	}
    }
});
