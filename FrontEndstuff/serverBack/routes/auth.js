// routes/auth.js
const express = require("express");
const router = express.Router();
const Auth = require("../controllers/authController");

router.post("/signup", Auth.signUp);
router.post("/login", Auth.login);

module.exports = router;
