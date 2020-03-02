//a Contact react component
import React, { Component } from "react";
import "../styles/main.css";
import Ionicon from "react-ionicons";

//TBD make these icons not words
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact">
          <b>Alexander (Alex) John Vincent-Hill</b>
          <br />
          <div className="contactsWrapper">
            <br />
            <div className="contactItem btn">
              <a href="mailto:alexanderjvincenthill@gmail.com">
                <Ionicon icon="ios-mail" fontSize="2.25em" color="white" />
              </a>
              <br />
              <a href="mailto:alexanderjvincenthill@gmail.com">
                alexanderjvincenthill@gmail.com
              </a>
            </div>
            <div className="contactItem btn">
              <a href="tel:+1-541-602-9122">
                <Ionicon icon="ios-call" fontSize="2.25em" color="white" />
              </a>
              <br />
              <a href="tel:+1-541-602-9122">(541) 602-9122</a>
            </div>
            <div className="contactItem btn">
              <a href="https://www.linkedin.com/in/avincenthill">
                <Ionicon icon="logo-linkedin" fontSize="2.25em" color="white" />
              </a>
              <br />
              <a href="https://www.linkedin.com/in/avincenthill">
                www.linkedin.com/in/avincenthill/
              </a>
            </div>
            <div className="contactItem btn">
              <a href="https://www.github.com/avincenthill">
                <Ionicon icon="logo-github" fontSize="2.25em" color="white" />
              </a>
              <br />
              <a href="https://www.github.com/avincenthill">
                www.github.com/avincenthill/
              </a>
            </div>
            <div className="contactItem btn">
              <a href={require("../pdf/avh_resume.pdf")}>
                <Ionicon icon="ios-document" fontSize="2.25em" color="white" />
              </a>
              <br />
              <a
                href={require("../pdf/avh_resume.pdf")}
                download="avh_resume.pdf"
              >
                Alexander J. Vincent-Hill - Resume.pdf
              </a>
            </div>
            <br />
          </div>
          <div className="h2">
            <br />
            <b>Like my work and want to buy me a coffee?</b>
            <div>
              <br />
              <b>BTC</b> 3HNV4sk3VXWa7uqz6zBJMRDNUT1DgUrXg5
            </div>
            <div>
              <b>ETH</b> 0x0c1E3D699D58c9f28753115479Ff8b9Dc40784F2
            </div>
            <br />
            <form
              class="paypal_button btn"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="encrypted"
                value="-----BEGIN PKCS7-----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-----END PKCS7-----
    "
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                class="paypal-button"
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Contact;
//import Contact from "./Contact";
