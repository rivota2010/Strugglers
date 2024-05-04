const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const Line = require("../models/Line");
//const recipient = require("../file").recipient;

let time = new Date();
// Get all messages
router.get("/", async (req, res) => {
  try {
    let user_name = require("../controllers/authController").user_name;
    const messages = await Message.find({ sender: `${user_name}` });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a message
router.post("/", async (req, res) => {
  try {
    let recipient = req.query.recipient
    let user_name = require("../controllers/authController").user_name;
    let emotion = req.query.emotion;
	  console.log(emotion);
    let line = ""
    let message;
	await Line.find({emotion: `${emotion}`}, {_id:0}).then(function(data){
		console.log((data))
		let rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) {
			line = ((data[rand_index]).content)
			console.log("line   ",line)
			message = new Message({
				sender: `${user_name}`,
				recipient: `${recipient}`,
				text: `${line}`, 
				timestamp: time.getTime(),
				emotion: `${emotion}`
			  })}})
			console.log("SENDING MESSAGE: ",message.text)
			const newMessage = await message.save();
			res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
