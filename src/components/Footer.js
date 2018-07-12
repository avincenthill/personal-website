import React, { Component } from "react";
import "../styles/main.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          {"Copyright Alexander J. Vincent-Hill " + new Date().getFullYear()}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
