import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
