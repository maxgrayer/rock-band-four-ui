import React from "react";
const SongItem = (song) => {
  if (!song) {
    return null;
  }
  return (
    <li className="list">
      <span className="song-artist">{song.artist} - </span>
      <span className="song-title">{song.title}</span>
      <span className="song-length">
        {" "}
        ({stringLengthFromMillis(song.duration)})
      </span>
    </li>
  );
};

function stringLengthFromMillis(millis) {
  if (millis === -1) {
    return "-1";
  }
  var date = new Date(millis);
  var mm = date.getUTCMinutes().toString();
  var ss = date.getSeconds().toString();
  return mm + ":" + ss.padStart(2, "0");
}
export default SongItem;
