const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello World! Get req.");
	console.log("Get request on {/} route");
});

app.get("/public_page", (req, res) => {
	// res.sendFile(__dirname + "/public/public_page.html");
	res.sendFile("public/public_page.html", { root: __dirname });
	console.log("get req on {/public_page.html} route");
});

app.get("/public_page/code", (req, res) => {
	fs.readFile(__dirname + "/public/public_page.html", "utf8", (err, data) => {
		if (err) {
			res.status(500).send("Error reading file");
		} else {
			res.set("Content-type", "text/plain");
			res.send(data);
		}
	});
	console.log("get req on {/public_page/code} route");
	console.log("html code is displayed on {/public_page/code} route");
});

app.get("/code", (req, res) => {
	const publicPagePath = __dirname + "/public/public_page.html";
	const mainJsPath = __dirname + "/main.js";

	// Read both files asynchronously
	fs.readFile(publicPagePath, "utf8", (err1, htmlData) => {
		if (err1) {
			res.status(500).send("Error reading public_page.html");
			console.log(err1);
			return;
		}

		fs.readFile(mainJsPath, "utf8", (err2, jsData) => {
			if (err2) {
				res.status(500).send("Error reading main.js");
				console.log(err2);
				return;
			}

			// Concatenate both HTML and JS content
			const combinedData = `
                ======= public_page.html =======
                ${htmlData}
                
                ======= main.js =======
                ${jsData}
            `;

			// Send the combined content as plain text
			res.set("Content-Type", "text/plain");
			res.send(combinedData);
		});
	});

	console.log("GET request on {/code} route");
});

app.post("/", (req, res) => {
	res.send("Hello World! Post req result in console");
	console.log("It is a post req on {/} route");
});

app.put("/", (req, res) => {
	res.send("Hello World! Put req result in console");
	console.log("It is a put req on {/} route");
});

app.get("/blog/:slug", (req, res) => {
	res.send(`hello ${req.params.slug}`);
});

app.get("/blog/:slug/:second", (req, res) => {
	res.send(`hello ${req.params.slug} and ${req.params.second}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
