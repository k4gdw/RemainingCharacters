///C:\K4GDW.Projects\MICRS\Website\Scripts\jquery-1.7.1-vsdoc.js
(function ($) {
    $.fn.remainingCharacters = function (target,maxChars) {
    	$(target).html(maxChars + ' characters remaining.');
        this.keyup(function() {
            $(target).html((maxChars - this.value.length) + ' characters remaining.');
        }).keydown(function(e) {
        	if (this.value.length > (maxChars - 1)) {
				if (((e.keyCode >= 48) && (e.keyCode <= 111))
						|| ((e.keyCode >= 186) && (e.keyCode <= 222)) 
							|| e.keyCode == 32
								|| e.keyCode == 9
									|| e.keyCode == 13) {
						return false;
					}
				}
				return true;
        	});	
        return this;
	};
})( jQuery );
