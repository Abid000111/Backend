const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	let siteName = "Adidas";
	let searchText = "Find";
	let searchText2 = "Search now";
	res.render("index", {siteName: siteName, searchText: searchText, searchText2: searchText2});
	// res.sendFile("index");
	console.log("/ done");
});

app.get("/blog/:slug", (req, res) => {
	let blogTitle = "Adidas why amd when?";
	let blogContent = "Its a very good brand";
	res.render("index", {blogTitle: blogTitle, blogContent: blogContent});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
