# Node.js-MongoDB-CRUD
Creating a web server that uses MongoDB. As a front-end view we're using Pug. Data can be saved locally or in MongoDB <a href="https://codeforgeek.com/mongodb-atlas-node-js/">Atlas</a> If you are using MongoDB locally, you can view saves with <a href="https://www.mongodb.com/products/compass/">MongoDB Compass</a>
# Idea
The idea is to ask user 3 inputs:
<br>
-Name
<br>
-Email
<br>
-How many hours can user work in a week
<br>
After that the user will be forwarded to the next page where he/she can view listed forms.
<br>
Between the process when user gets forwarded to the next page the program saves inputs in MongoDB.
<br>
User can also edit and remove filled forms from database
<br>
# Running the program
Install following node package managers ( example: npm i mongoose, and npm i express --save )
<br>
-express
<br>
-mongoose
<br>
-pug
<br>
run the server by using node app.js command
# Images and routes
Root:
<br>localhost:3000/ "/"
![addForm](https://user-images.githubusercontent.com/52996898/66045118-b84e3b80-e52b-11e9-8ebe-85e417cd2491.PNG)
<br>
Archive:
<br>localhost:3000/archive "/archive"
![archive](https://user-images.githubusercontent.com/52996898/66045156-cb610b80-e52b-11e9-8019-8dbf864b5c4b.PNG)
<br>
Edit:
<br>localhost:3000/modify "/modify"
![edit](https://user-images.githubusercontent.com/52996898/66045188-dd42ae80-e52b-11e9-806b-655b2b3b582d.PNG)
<br>
Console logging
<br>
![loggings](https://user-images.githubusercontent.com/52996898/66045191-dfa50880-e52b-11e9-8dfd-b9ed2bad468b.PNG)
<br>
MondoDB Compass
![compass](https://user-images.githubusercontent.com/52996898/66045232-f4819c00-e52b-11e9-8424-c410eccbfb38.PNG)
