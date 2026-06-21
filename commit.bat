@echo off
echo Adding files to git...
git add .
echo.
echo Committing changes...
git commit -m "Update profile picture, projects, and CGPA in portfolio"
echo.
echo Pushing changes...
git push
echo.
echo Done!
pause
