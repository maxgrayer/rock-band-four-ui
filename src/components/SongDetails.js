import cover from "../cover.png";
import React from "react";
import { Image, Row, Col } from "react-bootstrap";
const SongDetails = (props) => {
  let song = props.location.state.song;
  if (!song) {
    return null;
  }

  const imageUrl = `https://rb4.app/getImage?filename=${song.shortName}&width=300&height=300&format=png`;
  const songLength = stringLengthFromMillis(song.duration);

  return (
    <div>
      <Row>
        <Col className="col-12 col-md-6 col-xl-3">
          <Image
            src={imageUrl}
            alt={song.album}
            onError={addDefaultSrc}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <p>
            {song.isOwned ? (
              "In Library"
            ) : (
              <a href={song.xboxStoreLink} target="_blank" rel="noreferrer">
                {song.onWishlist ? "On Wishlist" : "Purchase"}
              </a>
            )}
          </p>
        </Col>
        <Col className="col-12 col-md-6 col-xl-9">
          <h5>{song.title}</h5>
          <p>{song.artist}</p>
          <p>
            <i>
              {song.album} ({song.year})
            </i>
          </p>
          <p>
            {songLength} | {song.genre} | {song.bpm} BPM
          </p>
          <p>Released {song.releaseDate} </p>
          <div>
            <Row>
              <Col>Guitar: {song.displayRankGuitar}</Col>
              <Col>Bass: {song.displayRankBass}</Col>
            </Row>
            <Row>
              <Col>Drums: {song.displayRankDrums}</Col>
              <Col>Vocal: {song.displayRankVocal}</Col>
            </Row>
            <Row>
              <Col>Band: {song.displayRankBand}</Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr />
      <br />
    </div>
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
export default SongDetails;
