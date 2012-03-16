/*
* This file has been generated to support Visual Studio IntelliSense.
* You should not use this file at runtime inside the browser--it is only
* intended to be used only for design-time IntelliSense.  Please use the
* standard jQuery library for all production use.
*
* Comment version: 2.0.0
*/

/*!
* remainingCharacters JavaScript Library v2.0.0
* http://github.com/k4gdw/jQuery.remainingCharacters
*
* Copyright 2012 K4GDW Software. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
* 
* 1.	Redistributions of source code must  retain  the  above  copyright notice,
*		this list of conditions and the following disclaimer.
* 
* 2.	Redistributions  in binary form must reproduce the above copyright notice,
*		this list of conditions and the  following disclaimer in the documentation
*		and/or other materials provided with the distribution.
* 
* THIS SOFTWARE  IS PROVIDED BY K4GDW SOFTWARE "AS IS" AND ANY  EXPRESS OR IMPLIED
* WARRANTIES,    INCLUDING,  BUT   NOT   LIMITED  TO,  THE  IMPLIED  WARRANTIES OF
* MERCHANTABILITY   AND  FITNESS  FOR  A  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
* EVENT SHALL K4GDW  SOFTWARE OR CONTRIBUTORS  BE LIABLE FOR ANY DIRECT, INDIRECT,
* INCIDENTAL, SPECIAL,  EXEMPLARY, OR  CONSEQUENTIAL  DAMAGES  (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT  OF SUBSTITUTE  GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS;   OR  BUSINESS   INTERRUPTION)   HOWEVER   CAUSED  AND ON ANY THEORY OF
* LIABILITY WHETHER IN CONTRACT,  STRICT LIABILITY, OR TORT  (INCLUDING NEGLIGENCE
* OR OTHERWISE) ARISING IN ANY WAY  OUT OF THE USE   OF  THIS  SOFTWARE,  EVEN  IF
* ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* 
* The views and conclusions contained in  the software and documentation are those
* of the authors and should not be interpreted  as representing official policies,
* either expressed or implied, of K4GDW Software.
*/

(function ($) {
	$.fn.remainingCharacters = function (args) {
		/// <summary>
		/// Accepts a string containing a CSS selector which is used to
		/// identify the dom element to which the plugin is to be supplied.
		/// It also expects a target for the output and an integer indicating
		/// how many characters are to be allowed.
		/// 
		/// <para>When this plugin is applied to an input or textarea DOM
		/// element and is supplied with an output target and character limit.
		/// The user will be shown how many characters they can enter and be
		/// prevented from entering more.
		/// </summary>
		/// <param name="args" type="Object">
		///	A javascript literal with various parameters to configure the
		///	plugin.
		///	<code>
		///		{
		///			target: output,
		///			maxChars: 144,
		///			hideTarget: true,
		///			fadeTarget: {
		///				fade: true,
		///				speed: 'slow'
		///		}
		///	</code>
		///	target:		A javascript object pointing to the DOM element that is
		///				intended to catch the output (required)
		///	maxChars:	An integer indicating how many characters to allow (required)
		///	hideTarget:	a boolean indicating whether to hide the output target until
		///				the the hosting textbox has focus, (optional, default: false)
		///	fadeTarget: A javascript literal containing the following proerties:
		///				fade:	boolean, optional, defaults to false
		///				speed:	string, optional, defaults to 'fast'
		/// </param>
    	var target = args.target;
    	var maxChars = args.maxChars;
    	var hideTarget = args.hideTarget || false;
    	var fadeTarget;
    	var fadeSpeed;
    	if(args.fadeTarget){
    		fadeTarget = args.fadeTarget.fade || false;
    		fadeSpeed = args.fadeTarget.speed || 'fast';
    	}
    	$(target).html(maxChars + ' characters remaining.');
    	if (hideTarget){
    		$(target).hide();	
    	}
        this.keyup(function() {
            $(target).html((maxChars - this.value.length) + ' characters remaining.');
        }).keydown(function(e) {
        	if (this.value.length > (maxChars - 1)) {
				if (((e.keyCode >= 48) && (e.keyCode <= 111))
						|| ((e.keyCode >= 186) && (e.keyCode <= 222)) 
							|| e.keyCode == 32
								|| e.keyCode == 9
									|| ((e.keyCode == 13) && (this.tagName == 'TEXTAREA'))) {
						return false;
					}
				}
				return true;
        	}).focus(function(){        		
        		if (fadeTarget){
        			$(target).fadeIn(fadeSpeed);
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