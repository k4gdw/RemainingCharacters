REM pack.bat
del *.nupkg
ajaxminifier.exe -comments:none -xml ..\files.xml -clobber
nuget.exe update -self
nuget.exe pack jQuery.remainingCharacters.nuspec
del ..\*.min.js
