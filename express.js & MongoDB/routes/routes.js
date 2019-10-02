//Declaring constants. Handling routes, example /archive shows filled forms. Request controller file that handles functions
const express = require("express"),
route = express.Router(),
controller = require("../controllers/controller");

//Get root file(addList.pug)
route.get("/", (req, res) => {
    controller.getFormPage(req, res);
});

//Save data to myList file and forward user from addList file
route.post("/", (req, res) => {
    controller.postNewForm(req, res);
});

//Show filled forms
route.get("/archive", (req, res) => {
    controller.getAllForms(req, res);
});

//Remove by id
route.get("/remove/:listId", (req, res) => {
    controller.removeFormById(req, res);
});

//Get modifyList.pug
route.get("/modify/:listId", (req, res) => {
    controller.getModifyForm(req, res);
});

//Update mofiyList.pug
route.post("/modify/:listId", (req, res) => {
    controller.postModifyForm(req, res);
});

//Export routes
module.exports = route;