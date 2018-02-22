// //Dependencies
var mongoose = require('mongoose');

//Schema Setup
var itemSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    department: String,
    hiredBefore: {type: String, default: "No"}
});

// //Export
module.exports = mongoose.model("Item", itemSchema);
