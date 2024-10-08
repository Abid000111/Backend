import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema({
	title: String,
	desc: String,
	isDone: Boolean
});

export const Todo = mongoose.model("Todo", TodoSchema);
