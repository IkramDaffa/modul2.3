const express = require("express");
const app = express();

const songsRoute = require("./routes/songs.routes.js");
app.use(express.json());

app.use("/", songsRoute);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
