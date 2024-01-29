const express = require("express");
const app = express();

app.use(function(req, res, next){
	console.log("hello from middleware");
	next();
});
app.use(function(req, res, next){
	console.log("hello from middleware2");
	next();
});
app.use(function(req, res, next){
	console.log("hello from middleware3");
	next();
});

app.get("/", function (req, res) {
	res.send("hey");
});
app.get("/profile", function (req, res) {
	res.send("hello from profile");
});

app.listen(3000);