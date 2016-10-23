$(document).ready(function() {

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
});