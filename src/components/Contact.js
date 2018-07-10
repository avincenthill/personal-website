//a Contact react component
import React, { Component } from "react";
import "../styles/main.css";
import Nav from "./Nav";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <br />
        <div>Contact</div>
      </React.Fragment>
    );
  }
}

export default Contact;
//import Contact from "./Contact";
