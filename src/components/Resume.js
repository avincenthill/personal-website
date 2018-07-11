//a Resume react component
import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import "../styles/main.css";
import resume from "../pdf/Alexander J. Vincent-Hill - Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <a
          href={require("../pdf/Alexander J. Vincent-Hill - Resume.pdf")}
          download="Alexander J. Vincent-Hill - Resume.pdf"
        >
          Download resume!
        </a>
        <Document file={resume}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </React.Fragment>
    );
  }
}

export default Resume;
//import Resume from "./Resume";
