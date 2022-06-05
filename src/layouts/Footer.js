import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer-wrap">
        <div className="icons">
          <FontAwesomeIcon icon={faFacebook} size="3x" className="facebook" />
          <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter" />
          <div className="inst">
            <FontAwesomeIcon
              icon={faInstagram}
              size="3x"
              className="instagram"
            />
          </div>
        </div>
        <div className="info">
          <span>Info &bull; Support &bull; Marketing</span>
        </div>
        <div className="terms">
          <span>Terms of Use &bull; Privacy Policy</span>
        </div>
      </div>
    </>
  );
}
