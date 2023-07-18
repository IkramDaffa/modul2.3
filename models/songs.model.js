let songs = [
  {
    id: "12345",
    title: "Song Title",
    artists: "Artist 1, Artist 2",
    url: "https://spotify.com/track/12345",
    count: 1,
  },
  {
    id: "12346",
    title: "Song Title2",
    artists: "Artist 1 Artist 2",
    url: "https://spotify.com/track/12345",
    count: 2,
  },
  {
    id: "12347",
    title: "Song Title3",
    artists: "Artist 1 Artist 2",
    url: "https://spotify.com/track/12345",
    count: 3,
  },
];

const findSongById = (id) => {
  return songs.find((song) => song.id === id);
};
const SortMostPlayedSongs = () => {
  return songs.sort((a, b) => b.count - a.count);
};

module.exports = { findSongById, SortMostPlayedSongs };
