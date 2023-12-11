#!/bin/bash

# script to add files automatically when this file is run 

git add .
echo "Enter your commit message"
read commit_message
git commit -m "$commit_message"
git push origin main

# for creating a production ready code
# npm run build