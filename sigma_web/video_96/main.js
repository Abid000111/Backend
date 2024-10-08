import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/todo");

const app = express();
const port = 3000;


app.get("/", (req, res) => {
	console.log("Request received for main root");
	const todo = new Todo({
		title: "Drink tea",
		desc: "Make a cup of tea and drink it",
		isDone: false
	});
	todo.save();
	res.send("Hello World!");
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/aaa", async (req, res) => {

	// console.log("Headers: -----------", req.headers);
	console.log("Before DB call");
	let todo = await Todo.findOne({});
	console.log("After DB call");
	res.json(todo);
	// res.json({ title: todo.title, desc: todo.desc });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
