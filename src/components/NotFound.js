import React, { Component } from "react";
import "../styles/main.css";
import Logo from "./Logo";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <div>404 Not Found</div>
        <br />
        <div className="logo404 btn">
          <Logo />
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
