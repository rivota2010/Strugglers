const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
let time = new Date()
// Get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find({/*sender:`${username}`*/});
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a message
router.post("/", async (req, res) => {
  const message = new Message({
 /* sender: `${username}`
  * recipient: `${conversation}`
 */
    text: req.body.text, 
    timestamp: time.getTime();
  });
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
