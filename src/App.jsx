import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Us from "./pages/Us";
import Department from "./pages/Department";
import Member from "./pages/Member";
import Invatation from "./pages/Invatation";
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Homepage />
        <Team />
        <Us />
        <Products />
        <Department />
        <Member />
        <Invatation />
      </>
    );
  }
}