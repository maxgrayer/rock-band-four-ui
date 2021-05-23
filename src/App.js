import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Home from "components/Home";
import Songs from "components/Songs";
import { Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/songs" component={Songs} />
        <Route path="/" component={Home} />
      </Switch>
      <br />
      <div className="content-container"></div>
      <footer>Built with 💚 by Max Grayer</footer>
    </div>
  );
}

export default App;
