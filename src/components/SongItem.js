import cover from "../cover.png";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SongItem = (song) => {
  if (!song) {
    return null;
  }
  return (
    <Card className="text-center">
      <Card.Header as="h5">{song.artist}</Card.Header>
      <Card.Img
        variant="top"
        src={!!song.awsArtworkLink ? song.awsArtworkLink : cover}
        alt={song.album}
        onError={addDefaultSrc}
      />
      <Card.Body>
        <Card.Title>{song.title}</Card.Title>
        <Card.Text>({stringLengthFromMillis(song.duration)})</Card.Text>
        <Link
          to={{
            pathname: "song-details",
            state: { song: song },
          }}
        >
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">
        {song.owned
          ? "In Library"
          : song.onWishlist
          ? "On Wishlist"
          : "Purchase"}
      </Card.Footer>
    </Card>
  );
};

function addDefaultSrc(event) {
  event.target.src = cover;
}

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
