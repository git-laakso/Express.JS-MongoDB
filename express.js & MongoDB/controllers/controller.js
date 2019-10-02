/**
 * Creating functions and calling them in routes.js. Also we're reading pug files
 * Declaring constants. Request our model where we're defining Name, Email and Hours
 */

const dataLogger = require("../models/model.js");
//Creating function that reads "addList" pug fiel in views. Calling by this function we can get our form that user can fill
const getFormPage = (req, res) => {
    res.render("addList"), { title: "New form" };
}

//Save filled form and do console logging. Also forward user to the next page and show filled forms
const postNewForm = (req, res) => {
    const newDatalogger = new dataLogger(req.body);
    newDatalogger.save().then(result => {
        //console.log(result);

        dataLogger.find((err, lists) => {
            if (err) console.log(err);
            console.log(lists);
            //res.render("myList", { title: "Forms", lists: lists });
        })
        res.redirect("/archive");
    }).catch(err => console.log(err));
}

//Fetch filled forms and sort by name
const getAllForms = (req, res) => {
    dataLogger.find((err, lists) => {
        if (err) console.log(err);
        res.render("myList", { title: "Forms", lists: lists })
    }).sort({ name: 1 });
}

//Remove form by id
const removeFormById = (req, res) => {
    dataLogger.findByIdAndRemove(req.params.listId, (err) => {
        console.log(req.params);
        if (err) {
            console.log(err)
        } else {
            console.log("Document removed: " + req.params.listId);
            res.redirect("/archive");
        }
    });
}

//Get modifyList.pug file from views and read it
const getModifyForm = (req, res) => {
    dataLogger.findById(req.params.listId, (err, myList) => {
        if (err) {
            console.log(err);
            res.redirect("/archive");
        } else {
            res.render("modifyList", {
                title: "Edit", listid: myList._id,
                name: myList.name, email: myList.email, hours: myList.hours
            });
        }
    });
}

//We just called modifyList.pug and now we're saving user changes
const postModifyForm = (req, res) => {
    dataLogger.findByIdAndUpdate(req.params.listId, req.body, { new: true }, (err, myList) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Modified: " + req.params.listId + myList._id);
            res.redirect("/archive");
        }
    })
}

//Export our functions to routes
module.exports = { getFormPage, getAllForms, postNewForm, removeFormById, getModifyForm, postModifyForm }