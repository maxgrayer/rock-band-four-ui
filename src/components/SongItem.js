import React from "react";
import { Button, Card } from "react-bootstrap";
const SongItem = (song) => {
  if (!song) {
    return null;
  }
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={song.awsArtworkLink} />
      <Card.Body>
        <Card.Title>{song.artist}</Card.Title>
        <Card.Text>
          {song.title}
          <br />({stringLengthFromMillis(song.duration)})
        </Card.Text>
        <Button variant="primary">Details</Button>
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
export default SongItem;
