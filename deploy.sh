#!/bin/bash
npm run build
cd build
git init
git add .
git commit -m "update"
git push --force https://github.com/nattinan-mansuk/portfolio.git HEAD:gh-pages
cd ..