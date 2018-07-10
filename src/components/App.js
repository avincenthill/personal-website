import React, { Component } from "react";
import Nav from "./Nav";
import "../styles/main.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav handleRoute={this.handleRoute} />
        <div>Test</div>
      </React.Fragment>
    );
  }
}

export default App;
