//Creating our schema. Schema includes Name, Email and Hours
const mongoose = require("mongoose"),
Schema = mongoose.Schema;

//logSchema luo uuden Scheeman, jota mongoose käyttää. Tämä pitää sisällään nimen, sähköpostin ja yrityksen. 
const mySchema = new Schema({
    name: String,
    email: String,
    hours: Number,
}, { timestamps: true });

//Exporting our schema and making an variable that includes everything inside schema
const dataLogger = mongoose.model("Saved form", mySchema);
module.exports = dataLogger;
