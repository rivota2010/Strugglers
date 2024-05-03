const mong = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema =  mong.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
	  type: [String],
	  required: true
  },
  blocked: {
	  type: [String],
	  required: false
  }
});

module.exports = mong.model("User", userSchema);
