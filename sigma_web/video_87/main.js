const fs = require("fs");

// console.log(fs);

// fs.writeFileSync("Mahadi.txt", "Mahadi is a good boy");

console.log("starting");
fs.writeFile("Mahadi2.txt", "Mahadi is a good boy 2", () => {
	console.log("done");
	fs.readFile("Mahadi2.txt", (error, data) => {
		console.log(error, data.toString());
	});
});

fs.appendFile("Mahadi.txt", "added text", e => console.log(e));
console.log("ending");
