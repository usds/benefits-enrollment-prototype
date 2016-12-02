$(function() {

var digitsPerBox = 2;

/// EACH INPUT
$(".auto-advance, .auto-advance-4, .auto-advance-3").on("input",function(e) {
    if ($(this).is(".auto-advance-4")) {
      digitsPerBox = 4;
    }
    else if ($(this).is(".auto-advance-3")) {
      digitsPerBox = 3;
    }
    else {
      digitsPerBox = 2;
    }

    if (e.target.value.length == digitsPerBox) {
        var t = $( e.target );
        t.parent().next().find('input').focus();
    }
    /// LIMIT DIGITS PER BOX
    if (e.target.value.length > digitsPerBox) {
        e.target.value = e.target.value.substr(0,digitsPerBox);
    }


///// ONLY NUMBER ALLOWED
}).keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&                 (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
});
});
