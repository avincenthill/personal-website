//a Resume react component
import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import Nav from "./Nav";
import "../styles/main.css";
import resume from "../pdf/Alexander J. Vincent-Hill - Resume.pdf";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div class="resume">
          <Document file={resume}>
            <Page pageNumber={1} renderTextLayer={false} />
            <a href={"../pdf/Alexander J. Vincent-Hill - Resume.pdf"}>
              Download resume!
              {/* TBD fix this link to pdf, goes to 404 */}
            </a>
          </Document>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
//import Resume from "./Resume";
