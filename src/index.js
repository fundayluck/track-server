const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hi world!");
});

app.listen(3000, () => {
  console.log("listning on port 3000");
});
