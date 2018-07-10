import React, { Component } from "react";
import "../styles/main.css";

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <a href="./">
            <img
              src={require("/public/AVH-Design-Logo.png")}
              alt="AVH Design"
            />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Logo;
