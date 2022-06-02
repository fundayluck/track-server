const express = require("express");
const moongose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = moongose.model("Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const track = await Track.find({ userId: req.user._id });

  res.send(track);
});

module.exports = router;
