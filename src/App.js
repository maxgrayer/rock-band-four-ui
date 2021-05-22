import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import Home from "components/Home";

function App() {
  return (
    <div className="app">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">
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
      <div className="content-container">
        <Home />
      </div>
      <footer>Built with 💚 by Max Grayer</footer>
    </div>
  );
}

export default App;
