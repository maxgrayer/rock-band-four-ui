import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Home from "components/Home";
import Admin from "components/Admin";
import Songs from "components/Songs";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "components/Navigation";
import AppFooter from "components/AppFooter";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <div className="content-container">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/admin" component={Admin} />
          <Route path="/songs" component={Songs} />
          <Route path="/home" component={Home} />
        </div>
      </Switch>
      <AppFooter />
    </div>
  );
}

export default App;
