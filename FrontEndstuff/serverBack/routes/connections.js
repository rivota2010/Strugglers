const express = require("express");
const user_name = require("../controllers/authController").user_name;
const router = express.Router();
const User = require("../models/User");
/*
 *The below code will retrieve all friends of the given user on a get request
 *and add a friend to their friends list upon a post request
 *
 * Tristan
 * April 27th
 */


router.get("/", async(req,res) => {
	try{
		const connections = await User.find({username: `${user_name}`},{friends:1})
		console.log(connections);
		res.send(connections)
	}catch (error) {
		console.log(error.message)
	}
});

router.post("/", async (req,res) => {
	try{
	const newConnection = "Elon Musk"//req.body? 
	const friends = await User.find({username: `${user_name}`},{friends:1})
        const update = await User.updateOne({ username: `${user_name}` }, { friends: `${friends.push(`${newConnection}`}` });
	} catch (error) {
		console.log(error.message)
	}
});

module.exports = router;
