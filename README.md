# WeatherAppUsingNodeJS
In order to run this project install following npm modes

### Request npm module
npm i request@2.88.2

### HBS npm module
npm i hbs@4.1.1

### Express npm module
npm i express@4.17.1

### Path npm module
npm i path@0.12.7

### Nodemon npm module
npm i nodemon@2.0.7


## Running code
###  start server (port no selected as 3000)
nodemon src/app.js -e js,hbs

###  client 
### open browser and http://localhost:3000

# Steps to commit code from commandline
### git init
### git status 
### git add public/ src/ templates/ package.json package-lock.json
### git commit -m "First commit"
### git config --global user.email "chinmaya.mishra96@gmail.com"
### git branch -M master
### git remote add origin https://github.com/ChinmayaKumarMishra/WeatherApp.git
### git push -u origin master


# SSH key generation

$ ls -a -l ~/.ssh
$ ssh-keygen -t rsa -b 4096 -C "chinmaya.mishra96@gmail.com"
$ ls -a -l ~/.ssh

Your public key has been saved in /<user path>/.ssh/id_rsa.pub

ssh -T git@github.com

# Heroko commands
heroku keys:add
heroku create cm-weather-app
npm run start
