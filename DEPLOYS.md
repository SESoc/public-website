# Some important information about Deploying to CSC servers #
- CSC uses Apache
- the .htaccess in sesoc/www folder is needed. Please don't clear the directory, otherwise you need to make a new .htaccess file within sesoc/www with the following contents:
```
Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

# Steps to Deploy (if not using the deploy.sh script) #
1. login to any CSC server
2. cd to the sesoc's subdirectory in users
3. ```become_club sesoc```
4. ```cd public-website```
5. ```./deploy.sh``` (and follow any instructions given)
6. done!


# Steps to Deploy (if not using the deploy.sh script) #
1. login to any CSC server
2. cd to the sesoc's subdirectory in users
3. ```become_club sesoc```
4. ```cd public-website```
5. ```git pull``` (may need to login with github credentials)
6. ```npm install```
7. ```npm run build```
8. ```cp -r build/* ../www```
9. done!
