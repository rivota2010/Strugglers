const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost/lines", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define routes
app.use("/api/messages", require("./routes/messages"));
app.use("/api/auth/signup", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
