#!/bin/bash
git pull
npm install
npm run build
cp .htaccess build
cp -r build/* ../www
