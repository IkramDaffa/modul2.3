const {
  getSongById,
  getMostPlayedSongs,
} = require("../services/songs.service");

const getSong = (id) => {
  if (id.length <= 3) {
    throw {
      status: "validation-error",
      message: "Minimal ID length 3",
    };
  }
  try {
    const song = getSongById(id);
    return {
      status: "success",
      song,
    };
  } catch (e) {
    throw e;
  }
};

const mostPlayed = () => {
  try {
    const songs = getMostPlayedSongs();
    return {
      type: "success",
      songs,
    };
  } catch (e) {
    throw e;
  }
};
const playSong = (id) => {
  try {
    const song = getSongById(id);
    song.count++;
    return {
      type: "success",
      song,
    };
  } catch (e) {
    throw e;
  }
};

module.exports = { getSong, mostPlayed, playSong };
