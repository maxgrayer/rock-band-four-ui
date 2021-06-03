import React from "react";
import { Card } from "react-bootstrap";
const SongDetails = (props) => {
  let song = props.location.state.song;
  if (!song) {
    return null;
  }
  return (
    <Card>
      <Card.Body>
        <Card.Title>{song.artist}</Card.Title>
        <Card.Text>
          {song.title}
          <br />({stringLengthFromMillis(song.duration)})
        </Card.Text>
      </Card.Body>
    </Card>
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
export default SongDetails;
