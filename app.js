var express = require("express");
var app = express();

// allows the scripts from the public folder to be run
app.use(express.static('public'))

app.get("/", function(req, res){
	res.render("index.ejs");
});
app.get("*", function(req, res){
	res.redirect("/");
});

app.listen(3000, function(){
	console.log(process.env.IP);
});