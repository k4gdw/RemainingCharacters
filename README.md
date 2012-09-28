This is a jQuery plugin that adds a Twitter (tm) style  "characters remaining"
display to an html text input element such as `<input>` or `<textarea>`.

This html snippet shows how to apply the plugin to a `<textarea>` element:

        <html>
            <head>
                <script src='jQuery.1.7.1.js' type='text/javascript'></script>
            <script src='remainingCharacters.js' type='text/javascript'></script>
        </head>
        <body>
            <div id="charsLeftTarget"></div>
            <textarea id="charsLeft"></textarea>
            <script type="text/javascript">
    	    $().ready(function(){
    		$('#charsLeft').remainingCharacters({
    			target: output,
    			maxChars: 140,
    			hideTarget: true,
    			fadeTarget: {
    				fade: true,
    				speed: 'slow'
    			}
    		    });
    	        });
            </script>
        </body>
    </html>
   
It's been tested against [jQuery](http://jquery.com/) 1.7.1 and **IT WORKS ON MY MACHINE**.  If you find a bug, please submit an issue.  If you know how to  fix an issue feel free to  fork it and  submit  a pull request.   I'll gladly check it out and merge your code if it's appropriate.

#CHANGE HISTORY

**TODO:**  Figure out how to generate the output as a floating `<div>` with an absolute position relative to the textbox so that it is outside the regular page flow, allowing so that the `<input>` or `<textarea>` it's applied to doesn't jump around when the output `<div>` visibility is toggled.

v2.2.3
-------
Changed the vsdoc file to an intellisense file and updated the nuget package.  I've been dog-fooding this version for a little while now so I think it's ready for general release.  

v2.2.2b
--------
Changed this file from a plain README file to README.md so it has decent formatting.

v2.2.0
--------
Made the target parameter optional.  If it's not supplied, a `<span>` is created
and inserted into the DOM and used as the target.

	    <span id='rcOutput' style="float: right;"></span>

For this to work properly, the textbox the plugin is applied to needs to be inside
some other container such as a `<div>` or `<td>`.  Otherwise, when the `<span>` is
inserted and floated, it'll not be in a useful location.  Also, if the textbox is
the only element inside that container when the `<span>` is hidden or revealed via
the hideTarget/fadeTarget properties, it'll jump around.  The same thing will 
happen if the container isn't wide enough for the `<span>` to fit without wrapping.


v2.1.7
---------
The vsdoc intellisense is improved.  Not perfect, but much better.

v2.1.6
---------
Fixed bug that prevented user from tabbing off of a filled up textbox.

v2.1.5
---------
Missed moving some of the 2.1.4 changes into the vsdoc file.

v2.1.4
---------
Fixed the incorrect initialization issue, for real this time.

v2.1.2
---------
Rolling back the "fix" applied in v2.1.1.  It broke something and I'm not sure
what.

v2.1.1
---------
Fixed a bug that caused a textbox that was populated from a database to show an
incorrect character count until the user actually starts typing.

v2.1.0
---------
Changed the NuGet package to install the latest jQuery  instead  of  using the
complicated dependency resolution system NuGet uses by default.   Also added a
minified version.

v2.0.0
---------
Added the ability to optionally hide the output and show it when the text  box
receives focus, the hide it again when the user leaves the textbox.  This  was
a major version bump because I was starting to need more  and more  parameters
so it became easier to just accept an "args" parameter which is  a  javascript
literal object as described above.   This  will  make  it  easier  to  add new
parameters in future versions without breaking backward compatibility.

v1.0.1
---------
Fixing the issue where enter is disabled  if the user  hits the maximum number
of characters.

v1.0.0
---------
The plugin now takes a reference to the target  element to use for  displaying
the number of characters remaining and how many characters to allow.   It also
restricts the user from actually entering too many characters.

v0.1.0
---------
Project created. 3/15/2012 at half past six PM central time. -- Bryan Johns