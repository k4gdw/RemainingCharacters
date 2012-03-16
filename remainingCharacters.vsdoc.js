/*
* This file has been generated to support Visual Studio IntelliSense.
* You should not use this file at runtime inside the browser--it is only
* intended to be used only for design-time IntelliSense.  Please use the
* standard jQuery library for all production use.
*
* Comment version: 1.0.1
*/

/*!
* remainingCharacters JavaScript Library v1.0.1
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
	$.fn.remainingCharacters = function (target, maxChars) {
		/// <summary>
		/// <para>
		/// Accepts a string containing a CSS selector which is used to
		/// identify the dom element to which the plugin is to be supplied.
		/// It also expects a target for the output and an integer indicating
		/// how many characters are to be allowed.
		/// </para>
		/// <para>When this plugin is applied to an input or textarea DOM
		/// element and is supplied with an output target and character limit.
		/// The user will be shown how many characters they can enter and be
		/// prevented from entering more.
		/// </para>
		/// </summary>
		/// <param name="target" type="Object">
		///		A reference to the dom element to receive the output.
		/// </param>
		/// <param name="maxChars" type="Integer">
		///		How many characters are allowed.
		/// </param>
    	$(target).html(maxChars + ' characters remaining.');
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
        	});	
        return this;
	};
})( jQuery );