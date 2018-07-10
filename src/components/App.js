import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/main.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div>App</div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
