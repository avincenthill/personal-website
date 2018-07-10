import React, { Component } from "react";
import "../styles/main.css";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="./">
          <img
            className="logo"
            src={require("../img/AVH-Design-Logo.png")}
            alt="AVH"
          />
        </a>
      </React.Fragment>
    );
  }
}

export default Logo;
