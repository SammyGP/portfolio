var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var nodeMailer = require("nodemailer");

// allows the scripts from the public folder to be run
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.render("index.ejs");
});

// mailing

app.get("*", function(req, res){
	res.redirect("/");
});
app.listen(3000);
//app.listen(process.env.PORT, process.env.IP);