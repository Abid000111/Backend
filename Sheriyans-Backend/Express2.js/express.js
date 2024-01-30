const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

// adding dynamic value through ejs

app.get("/", function (req, res) {
	res.render("home", {use: "This line is about use of <%= %>"});
});

app.get("/about", function (req, res) {
	res.render("about");
});

app.get("/profile", function (req, res) {
	res.send("Hello from profile");
});


// dynamic routing

app.get("/profile/:username", function (req, res) {
	res.send(`Hello from ${req.params.username}`);
});

app.get("/about", function (req, res) {
	res.send("Hello from about");
});


app.listen(3000);
