import React from "react";
import { Footercss } from "./styles";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Footercss>
      <footer id="footer">
        <ul className="lista-footer">
          <FaFacebook id="fb" className="lista" />
          <FaInstagramSquare id="insta" className="lista" />
          <FaTwitter id="tt" className="lista" />
          <FaGithub id="git" className="lista" />
        </ul>
        <br />
        <span className="footer-span">
          @sem fins empresariais(apenas usando infomações para estudo e prática)
        </span>
      </footer>
    </Footercss>
  );
};

export default Footer;
