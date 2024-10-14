import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
	userName: String,
	pass: String
});

export const Info = mongoose.model("Info", infoSchema);
