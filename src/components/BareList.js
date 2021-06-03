import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import SongItem from "./SongItem";
const BareList = (props) => {
  const { songs } = props;
  if (!songs || songs.length === 0) return <p>No songs, sorry!</p>;
  return (
    <div>
      <h2 className="list-head">Complete Song Library</h2>
      <CardDeck>
        {songs.map((song) => {
          return <SongItem key={song.id} {...song} />;
        })}
      </CardDeck>
    </div>
  );
};
export default BareList;
