# Some important information about Deploying to CSC servers #
- CSC uses Apache
- the .htaccess in sesoc/www folder is needed. Please don't clear the directory, otherwise you need to make a new .htaccess file within sesoc/www with the following contents:
```
Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```



# Steps to Deploy #
1. login to any CSC server
2. cd to the sesoc's subdirectory in users
3. cd public-website
4. git pull (may need to login with github credentials)
5. npm run build
6. cp -r build/* ../www
7. done!
