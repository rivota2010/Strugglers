const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const uri = "mongodb+srv://triaikman:LMHM7TmYl1kT52Fr@mwtaikman.sevurxb.mongodb.net/?retryWrites=true&w=majority&appName=MWTAikman";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define routes
app.use("/api/messages", require("./routes/messages"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/newConnection", require("./routes/connections"));
app.use("/api/conversations", require("./routes/conversations"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
