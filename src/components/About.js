//a About react component
import React, { Component } from "react";
import "../styles/main.css";
import Nav from "./Nav";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <br />
        <div>About</div>
      </React.Fragment>
    );
  }
}

export default About;
//import About from "./About";
