//a Resume react component
import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import "../styles/main.css";
import $ from "jquery";
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
        <Document file={resume} onLoadSuccess={this.resizeResume()}>
          <Page pageNumber={1} renderTextLayer={false} />
        </Document>
      </React.Fragment>
    );
  }
  componentDidMount() {
    setTimeout(() => this.resizeResume(), 500);
  }
  resizeResume() {
    /* brutal jquery hack to resize pdf after mounting/loading with react-pdf */
    var img = $("canvas.react-pdf__Page__canvas");
    //var height = img.height();
    var width = img.width();
    var ratio = 0.77272727272;
    if (width < 612) {
      img.height(width / ratio);
    }
  }
}

export default Resume;
//import Resume from "./Resume";
