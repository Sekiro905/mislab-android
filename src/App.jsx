import React, { Component } from "react";

import Department from "./pages/Department";
import Member from "./pages/Member";
import Invatation from "./pages/Invatation";

export default class App extends Component {
  render() {
    return (
      <div>
        <Department />
        <Member />
        <Invatation />
      </div>
    );
  }
}
