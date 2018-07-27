import React, { Component } from "react";
import "../styles/main.css";
//import $ from 'jquery'
//import _ from 'underscore'
import Nav from "./Nav";
import Footer from "./Footer";
require("dotenv").config();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Nav />
          {this.props.children}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
