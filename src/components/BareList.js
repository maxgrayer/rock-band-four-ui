import React from "react";
const BareList = (props) => {
  const { songs } = props;
  if (!songs || songs.length === 0) return <p>No songs, sorry!</p>;
  return (
    <ul className="no-bullets">
      <h2 className="list-head">Complete Song Library</h2>
      {songs.map((song) => {
        return (
          <li key={song.id} className="list">
            <span className="repo-text">{song.artist} - </span>
            <span className="repo-description">{song.title}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default BareList;
