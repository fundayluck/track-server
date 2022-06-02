const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
  "mongodb+srv://admin:Laksono07@cluster0.hlnsm9i.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongoDB", err);
});

app.get("/", (req, res) => {
  res.send("hi world!");
});

app.listen(3000, () => {
  console.log("listning on port 3000");
});
