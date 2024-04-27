const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
/*
 *The below will retrieve all messages with the given sender and recipient
 *and send them to the page as a conversation
 *
 *Should also order the conversation chronologically
 *
 *THIS SHOULD REMOVE THE NEED FOR ACTUALLY SENDING MESSAGES - FETCHING CONV DATA FROM THE DB WILL LOAD NEW MESSAGES
 *
 *
 *Tristan
 *April 27th
 *
 */
router.get("/", async(req,res) => {
	try{
		const conversation = await Message.find({$or:[{/*sender: `${username}`,recipient: `${recipient}`*/},{/*sender: `${recipient}`,recipient: `${sender}`*/}]}, {id:0})
		conversation.sort({timestamp:'asc'});
		res.send(conversation);
	} catch (error) {
		console.log(error.message)
	}
});


