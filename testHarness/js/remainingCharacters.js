/*
* remainingCharacters JavaScript Library v2.1.6
* http://github.com/k4gdw/jQuery.remainingCharacters
*
* Copyright 2012 K4GDW Software. All rights reserved.
*
* Redistribution and use in source and binary forms,   with or without
* modification, are permitted provided that the  following  conditions
* are met:
* 
* 1.	Redistributions of source code must retain the above copyright
*		notice, this list of conditions and the  following disclaimer.
* 
* 2.	Redistributions  in  binary  form  must  reproduce  the  above
*		copyright notice, this list of conditions  and  the  following
*		disclaimer in the   documentation   and/or   other   materials
*		provided with the distribution.
* 
* THIS SOFTWARE  IS PROVIDED BY K4GDW SOFTWARE "AS IS" AND ANY EXPRESS
* OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED  TO,  THE  IMPLIED
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR  A  PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL K4GDW SOFTWARE OR CONTRIBUTORS  BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  EXEMPLARY, OR
* CONSEQUENTIAL  DAMAGES  (INCLUDING, BUT NOT  LIMITED TO, PROCUREMENT
* OF SUBSTITUTE  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;  OR
* BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY
* WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
* OR OTHERWISE) ARISING IN ANY WAY  OUT OF THE USE   OF THIS SOFTWARE,
* EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function ($) {
    $.fn.remainingCharacters = function (args) {
    	var target = args.target;
    	var maxChars = args.maxChars;
    	var hideTarget = args.hideTarget || false;
    	var current = this.val() || '';
    	var fadeTarget;
    	var fadeSpeed;
    	if(args.fadeTarget){
    		fadeTarget = args.fadeTarget.fade || false;
    		fadeSpeed = args.fadeTarget.speed || 'fast';
    	}
    	if (hideTarget){
    		$(target).hide();	
    	}
    	$(target).html((maxChars - current.length) + ' characters remaining.');
        this.keyup(function() {
            $(target).html((maxChars - this.value.length) + ' characters remaining.');
        }).keydown(function(e) {
        	if (this.value.length > (maxChars - 1)) {
				if (((e.keyCode >= 48) && (e.keyCode <= 111))
						|| ((e.keyCode >= 186) && (e.keyCode <= 222)) 
							|| e.keyCode == 32
								|| ((e.keyCode == 13) && (this.tagName == 'TEXTAREA'))) {
						return false;
					}
				}
				return true;
        	}).focus(function(){        		
        		if (fadeTarget){
        			$(target).fadeIn(fadeSpeed);
        			$(target).html((maxChars - this.value.length) + ' characters remaining.');
	        	} else {
	        		$(target).show();
	        	}
        	}).blur(function(){
        		if (hideTarget){
        			if (fadeTarget){
        				$(target).fadeOut(fadeSpeed);
	        		} else {
	        			$(target).hide();
	        		}
        		}
        	});	
        return this;
	};
})( jQuery );
