import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

import MainLogo from "../images/MainLogoWhite.png";
import "../styles/others.css";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <div className="mainFooterWrapper">
        <div className="leftFooter">
          <div className="socialSide">
            <img className="mainLogo" src={MainLogo} alt="" />
            <p>
              We are committed to providing <br />
              personalized industrial solutions.
            </p>
            <div>
              <a
                href="https://www.instagram.com/buildamodel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/buildamodel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/buildamodel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </div>
          </div>
          <div className="linksWrapper">
            <div>
              <h4>Quick Links</h4>
              <a href="#hero">Home</a>
              <a href="#what-we-do">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Contact Us</h4>
              <p>Iyyenchery, Urapakkam, Chennai - 603210</p>
              <p>
                <b>Email: </b>buildamodel.in@gmail.com
              </p>
              <p>
                <b>Phone: </b>+91 87786 05741
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="rightFooter">
          <p>© 2025 BuildaModel — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
