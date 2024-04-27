const User = require("../models/User");
const bcrypt = require("bcrypt");
const mong = require('mongoose');

exports.signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
/*
 *The below will use the built in bycrypt.compare method to verify the
 *hashed password with the provided plaintext
 *
 *Upon succesful verification, we will need to globally store the username
 *for subsequent queries of the database and loading their account settings
 */
exports.login = async (req, res) => {
  // Login logic
	try{
		const{ username, email, plaintext} = req.body;
		const hP = User.find({username: `${username}`},{plaintext:1}) 
		console.log(hP);
		if (hP != ""){
		bcrypt.compare(plaintext, hP, (err,result) => {
			if (err) {
				console.log("error");
			}
			if (result){
				//log in with said username
				console.log(`Welcome, ${username}!`)
			}
			else{
				console.log("Password did not match");
			}
		})}
		else{
			console.log("No account found with specified username")
		}
}
catch (error) {
	console.log(error.message);
}
}
