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
  },
  history: {
	  type: [String],
	  required: false
  }
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

module.exports = mong.model("User", userSchema);
