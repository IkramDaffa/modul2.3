const express = require("express");

const {
  getSong,
  mostPlayed,
  playSong,
} = require("../controllers/song.controller.js");

const router = express.Router();

router.get("/mostPlayed", (req, res) => {
  try {
    const songs = mostPlayed();
    res.send(songs);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.put("/play/:id", (req, res) => {
  try {
    const song = playSong(req.params.id);
    res.send(song);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/:id", (req, res) => {
  try {
    const songResult = getSong(req.params.id);
    res.send(songResult);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
