require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  "mongodb+srv://admin:Laksono07@cluster0.hlnsm9i.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongoDB", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
