import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Us from "./pages/Us";
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Homepage />
        <Team />
        <Us />
        <Products />
      </>
    );
  }
}