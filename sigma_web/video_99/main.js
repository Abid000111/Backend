const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/company");

app.set("view engine", "ejs");

const getRandom = (arr) => {
	let rno = Math.floor(Math.random() * arr.length);
	return arr[rno];
};

app.get("/", (req, res) => {
	res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
	// CLear the collection Employee
	await Employee.deleteMany({});

	// Generate random data
	let ranNames = ["Abid", "Shahrier", "Mahadi", "Hasan"];
	let ranCities = ["DHaka", "Sylhet", "Cox's Bazar", "Rangamati"];
	let ranLang = ["js", "Python", "C++", "Java"];

	for (let i = 0; i < 10; i++) {
		let e = await Employee.create({
			name: getRandom(ranNames),
			salary: Math.floor(Math.random() * 100000),
			language: getRandom(ranLang),
			city: getRandom(ranCities),
			IsManager: Math.random() > 0.5 ? true : false
		});
		console.log(e);
	}
	console.log("created dummy 10 data");

	res.send("Generated dummy data");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
