function supports_html5_storage() {
  try {
    return 'sessionStorage' in window && window['sessionStorage'] !== null;
  } catch (e) {
    return false;
  }
}

function save_page(form) {
    if (supports_html5_storage())
    {
	var storage = window.sessionStorage;
	form.filter(':input').each(function(ind,elem){
	    if (elem.name && elem.value) {
		console.log("Saved" + elem.name + " = " + elem.value);
		storage.setItem(elem.name,elem.value);
	    }
	    else
		{
		    console.log("Skipped saving " + elem);
		}
	});
    }
    else
    {
	alert("Warning; HTML5 storage not available; data will not propagate between pages");
    }
}

function load_page(form)
{
    if (supports_html5_storage())
    {
	var storage = window.sessionStorage;
	form.filter(':input').each(function(ind,elem){
	    if (elem.name) {
		elem.value = storage.getItem(elem.name);
		console.log("Loaded" + elem.name + " = " + elem.value);
	    }
	    else {
		console.log("Skipped saving" + elem);
	    }
	});
    }

}
;