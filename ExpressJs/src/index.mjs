import express from "express";
import mongoose from "mongoose";
// import BackblazeB2 from "backblaze-b2"; // Import B2 SDK
import dotenv from "dotenv";
import multer from "multer";
import { Info } from "../models/Info.js";

dotenv.config();

await mongoose.connect("mongodb://localhost:27017/farm");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// const b2 = new BackblazeB2({
// 	applicationKeyId: process.env.B2_APP_KEY_ID, // Your application key ID
// 	applicationKey: process.env.B2_APP_KEY // Your application key
// });

// Authenticate with B2
// await b2.authorize();

const upload = multer({ dest: "./uploads" });

const mockUsers = [
	{ id: 1, username: "Abid", role: "Founder" },
	{ id: 2, username: "Shahrier", role: "CEO" },
	{ id: 3, username: "Mahadi", role: "Chair Man" },
	{ id: 4, username: "Hasan", role: "Mnager" },
	{ id: 5, username: "Karim", role: "Talenr" },
	{ id: 6, username: "Fayaz", role: "Labour" },
	{ id: 7, username: "Rahman", role: "Peon" }
];

app.get("/", (req, res) => {
	res.status(200).send("Hello...!!!");
});

app.post("/upload", upload.single("photo"), (req, res) => {
	console.log(req.headers);
	// console.log(req.file);

	// res.json(req.headers);
	res.json(req.file);
});

app.get("/api/users", (req, res) => {
	console.log(req.query);

	const {
		query: { filter, value }
	} = req;

	if (!filter && !value) return res.send(mockUsers);

	if (filter && value)
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));

	return res.send(mockUsers);
});

app.post("/api/users", (req, res) => {
	console.log(req.body);
	return res.sendStatus(200);
});

app.get("/api/users/:id", (req, res) => {
	const parsedId = parseInt(req.params.id);

	console.log(req.params);
	console.log(parsedId);

	if (isNaN(parsedId))
		return res.status(400).send({ msg: "Bad request. Invalid Id" });

	const findUser = mockUsers.find((user) => user.id === parsedId);

	if (!findUser) return res.sendStatus(404);

	return res.send(findUser);
});

app.get("/api/products", (req, res) => {
	res.send([{ id: 123, name: "Chiken Breast", price: 12.99 }]);
});

app.listen(PORT, () => {
	console.log(`Running on Port ${PORT}`);
});
