import React from "react";
import SongItem from "./SongItem";
const BareList = (props) => {
  const { songs } = props;
  if (!songs || songs.length === 0) return <p>No songs, sorry!</p>;
  return (
    <ul className="no-bullets">
      <h2 className="list-head">Complete Song Library</h2>
      {songs.map((song) => {
        return <SongItem key={song.id} {...song} />;
      })}
    </ul>
  );
};
export default BareList;
