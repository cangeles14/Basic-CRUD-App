//Dependencies
var express         = require('express'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    dotenv          = require('dotenv'),
    methodOverride  = require('method-override'),
    Item            = require("./models/item"),
    app             = express();

//MongoDB Setup
var url = process.env.DATABASEURL || "mongodb://localhost/finder_app";
mongoose.connect(url);


//View Engine
app.set("view engine", "ejs");

//Run/Use Express variables
require('dotenv').config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

//Require Routes
var itemRoutes = require("./routes/items");
app.use(itemRoutes);

//Startup landing index page
app.get("/", function(req,res){
    res.redirect("/items");
});

//Listen PORT
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Finder Sever has started!"); 
});