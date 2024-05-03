const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
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
  const message = new Message({
    sender: `${user_name}`,
    /* recipient: `${recipient}`
     */
    text: req.body.text,
    timestamp: time.getTime(),
  });
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
