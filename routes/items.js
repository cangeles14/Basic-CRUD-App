// //Dependencies
var express    = require("express");
var router     = express.Router();
var Item    = require('../models/item');
    
//RESTFul Routes

//Index Route get all items from database
router.get("/items", function(req,res){
    Item.find({}, function(err, item){
        if(err) {
            console.log("index error");
        } else {
            res.render("index", {item: item});
        }
    });
});

//New Route
router.get("/items/new", function(req,res){
    res.render("new");
});

//Create Route
router.post("/items", function(req,res){
    Item.create(req.body.item, function(err,newItem){
        if (err) {
            res.render("index");
            console.log("create error");
        } else {
            console.log(req.body.item);
            res.redirect("/items");
        }
    });
});

//Show Route
router.get("/items/:id", function(req,res){
    Item.findById(req.params.id, function(err, foundItem){
        if (err) {
            res.redirect("/items");
            console.log("show error");
        } else {
            res.render("show", {item: foundItem});
        }
    });
});

// Edit Route
router.get("/items/:id/edit", function(req,res){
    Item.findById(req.params.id, function(err, foundItem){
        if (err) {
            console.log("edit error");
            res.redirect("/items");
        } else {
            res.render("edit", {item: foundItem});
        }
    });
});

//Update Route
router.put("/items/:id", function(req,res){
    Item.findByIdAndUpdate(req.params.id, req.body.item, function(err, updatedItem){
        if (err) {
            res.redirect("/items");
        } else {
            res.redirect("/items/" + req.params.id);
        }
    });
});

//Destroy Route
router.delete("/items/:id", function(req,res){
    Item.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            res.redirect("/items");
        } else {
            res.redirect("/items");
        }
    });
});


// //Exports
module.exports = router;