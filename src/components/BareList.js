import React from "react";
import Autocomplete from "./Autocomplete";
const BareList = (props) => {
  const { songs } = props;
  if (!songs || songs.length === 0) return <p>No songs, sorry!</p>;
  return (
    <div>
      <h2 className="list-head">Complete Song Library</h2>
      <Autocomplete songs={songs} />
    </div>
  );
};
export default BareList;
