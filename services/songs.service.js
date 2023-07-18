const {
  findSongById,
  SortMostPlayedSongs,
} = require("../models/songs.model.js");

const getSongById = (id) => {
  const songData = findSongById(id);
  if (songData == null) {
    throw {
      type: "not-found",
      message: "Cannot find song by id",
    };
  }
  return songData;
};

const getMostPlayedSongs = () => {
  const songsData = SortMostPlayedSongs();
  if (songsData == null) {
    throw {
      type: "not-found",
      message: "there's not song in our database",
    };
  }
  return songsData;
};

module.exports = { getSongById, getMostPlayedSongs };
