import React, { Component } from "react";
import "../styles/main.css";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul id="nav">
            <li class="logo">
              <a href="https://www.example.com">LOST.</a>
            </li>
            <li>
              <a href="https://www.example.com">Home</a>
            </li>
            <li>
              <a href="https://www.example.com">About</a>
            </li>
            <li>
              <a href="https://www.example.com">Images</a>
            </li>
            <li>
              <a href="https://www.example.com">Locations</a>
            </li>
            <li>
              <a href="https://www.example.com">Maps</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;
