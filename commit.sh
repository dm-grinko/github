#!/bin/bash 

export GIT_AUTHOR_DATE="$1"
export GIT_COMMITTER_DATE="$1"

echo $1 >> changes.txt

git add .
git commit --date="$1" -m "commit $1"
git push origin master