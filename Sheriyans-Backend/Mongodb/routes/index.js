var express = require("express");
var router = express.Router();
const userModel = require("./users");

// // session

// router.get("/", function (req, res, next) {
// 	req.session.ban = true;
// 	res.render("index", { title: "Express.js" });
// });

// router.get("/checkban", function (req, res) {
// 	console.log(req.session);
// 	if (req.session.ban === true) {
// 		res.send("You are banned and check console for session data");
// 	}
// 	else{
// 		res.send("not banned")
// 	}
// });

// router.get("/removeban", function (req, res) {
// 	req.session.destroy(function(err) {
// 		if (err) throw err;
// 		res.send("ban removed");
// 	});
// });

// cookie

router.get("/", function (req, res) {
	res.cookie("age", 23);
	res.render("index", { title: "Express.js" });
});

router.get("/read", function (req, res) {
	console.log(req.cookies.age);
	res.send("check console");
});

router.get("/delete", function (req, res) {
	res.clearCookie("age");
	res.send("cookies are cleared");
});

// router.get("/create", async function (req, res){
// 	const createduser = await userModel.create({
// 		username: "abid",
// 		age: 25,
// 		name: "abid"
// 	});
// 	res.send(createduser);
// });

router.get("/allusers", async function (req, res) {
	// let allusers = await userModel.find();
	// res.send(allusers);
	let allusers = await userModel.findOne({ username: "abid" });
	res.send(allusers);
});

router.get("/delete", async function (req, res) {
	let deleteduser = await userModel.findOneAndDelete({ username: "abid" });
	res.send(deleteduser);
});

module.exports = router;
