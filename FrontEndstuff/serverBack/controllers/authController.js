const User = require("../models/User");
const argon2 = require("argon2");
let user_name = "Placeholder";

exports.signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await argon2.hash(password);
    console.log("password hashed before in DB:", hashedPassword);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
    exports.user_name = username;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request received:", { email }); // Log the received email

    const user = await User.findOne({ email });

    console.log("User information:", user); // Log the user's information
    if (!user) {
      console.log("User not found:", { email }); // Log if user is not found
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      console.log("Invalid password:", { email }); // Log if password is invalid
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Login successful:", { email }); // Log if login is successful
    console.log("AUTH: ", user.username);
    user_name = user.username;
    exports.user_name = user_name;

    // Here you can generate a JWT token for authentication
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error); // Log any errors that occur during login
    res.status(500).json({ error: error.message });
  }
};
