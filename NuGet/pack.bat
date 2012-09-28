REM pack.bat
del *.nupkg
ajaxmin.exe -comments:none -xml ..\files.xml -clobber
nuget.exe update -self
nuget.exe pack jQuery.remainingCharacters.nuspec
del ..\*.min.js
