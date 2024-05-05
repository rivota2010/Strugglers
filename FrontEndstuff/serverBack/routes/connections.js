const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route to retrieve all connections (friends) of a user
router.get("/", async (req, res) => {
  try {
    let user_name = require("../controllers/authController").user_name;
    console.log("CONNECTIONS: ", user_name);
    const connections = await User.find(
      { username: `${user_name}` },
      { friends: 1 }
    );
    res.json(connections); // Send the retrieved connections as JSON response
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to add a new connection (friend) to a user
router.post("/", async (req, res) => {
  try {
    let user_name = require("../controllers/authController").user_name;
    const newConnection = req.query.friend; // Example new connection data, you should retrieve it from req.body
	console.log(newConnection);
    const friend_user = await User.findOne({username:`${newConnection}`});
    if (!friend_user) throw new Error('Username not registered');
    // Update the user document to add the new connection
    const updatedUser = await User.findOneAndUpdate(
      {username: `${user_name}`},
      { $push: { friends: newConnection } },
      { new: true }
    );
    res.json(updatedUser); // Send the updated user document as JSON response
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
