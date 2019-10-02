//Declaring constants and requiring Mongoose, routes and bodyparser
const express = require("express"),
app = express(),
port = 3000;
mongoose = require("mongoose");
db = require("./config/keys_dev.js").mongoURI;
routes = require("./routes/routes.js");
bodyParser = require("body-parser");
//Parse data by using Json and handle post commands
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
Connect Mongoose to our Express server.
You can can use local MongoDB by following command: */

mongoose.connect("mongodb://localhost:27017/DBofForms", { useNewUrlParser: true, useUnifiedTopology: true });

//With this command you can use MongoDB Atlas. If you want to use Atlas, read keys_dev file inside config folder and add your cluster and credentials 

/*
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
    */

//We're using pug as front end view
app.set("view engine", "pug");
//Declaring root folder "/"
app.use("/", routes);
//Listening on port 3000
app.listen(port, () => console.log("Server is running on port: " + port));