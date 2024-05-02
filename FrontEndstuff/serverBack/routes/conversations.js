const express = require("express");
const user_name = require("../controllers/authController").user_name;
const router = express.Router();
const Message = require("../models/Message");
//const recipient = require("../file").recipient;
/*
 *The below will retrieve all messages with the given sender and recipient
 *and send them to the page as a conversation
 *
 *Should also order the conversation chronologically
 *
 *THIS SHOULD REMOVE THE NEED FOR ACTUALLY SENDING MESSAGES - FETCHING CONV DATA FROM THE DB WILL LOAD NEW MESSAGES
 *
 * Latest Update: Need the recipient as its updated from the react component (connection that's selected)
 *
 *Tristan
 *April 27th
 *
 */
router.get("/", async(req,res) => {
	try{
		const conversation = await Message.find({$or:[{sender: `${user_name}`,recipient: `${recipient}`},{/*sender: `${recipient}`,recipient: `${user_name}`*/}]}, {id:0})
		conversation.sort({timestamp:'asc'});
		console.log(conversation);
		exports.conversation = conversation;
	} catch (error) {
		console.log(error.message)
	}
});


