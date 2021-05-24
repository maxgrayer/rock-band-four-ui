import logo from "../logo.svg";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
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
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/songs">Songs</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
