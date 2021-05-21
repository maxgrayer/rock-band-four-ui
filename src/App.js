import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import BareList from "./components/BareList";
import SongsLoading from "./components/SongsLoading";

function App() {
  const BareListWithLoading = SongsLoading(BareList);
  const [appState, setAppState] = useState({
    loading: false,
    songs: null,
  });

  useEffect(() => {
    setAppState({ loading: true, songs: null });
    const apiUrl = "http://localhost:8080/songs/";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((songs) => {
        setAppState({ loading: false, songs: songs });
      });
  }, [setAppState]);
  return (
    <div className="app">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top app-logo"
          />{" "}
          Rock Band 4 Song Library
        </Navbar.Brand>
      </Navbar>
      <br />
      <div className="songs-container">
        <BareListWithLoading
          isLoading={appState.loading}
          songs={appState.songs}
        />
      </div>
      <footer>
        <div className="footer">
          Built with{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          by Max Grayer
        </div>
      </footer>
    </div>
  );
}

export default App;
