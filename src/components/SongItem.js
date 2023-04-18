import cover from "../cover.png";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SongItem = (song) => {
  if (!song) {
    return null;
  }

  const imageUrl = `https://rb4.app/getImage?filename=${song.shortName}&width=300&height=300&format=png`;

  return (
    <Card className="song-item">
      <Card.Header as="h5" className="wrap-text">
        {song.artist}
      </Card.Header>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={song.album}
        onError={addDefaultSrc}
      />
      <Card.Body>
        <Card.Title className="wrap-text">{song.title}</Card.Title>
        <Card.Text style={{ fontStyle: "italic" }}>{song.album}</Card.Text>
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
        {song.isOwned ? (
          "In Library"
        ) : (
          <a href={song.xboxStoreLink} target="_blank" rel="noreferrer">
            {song.onWishlist ? "On Wishlist" : "Purchase"}
          </a>
        )}
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
