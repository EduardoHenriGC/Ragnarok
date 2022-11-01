import React, { useState } from "react";
import { Container } from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <div className="Navbar">
        <h2 data-text="RAGNAROK" className="nav-logo">
          RAGNAROK
        </h2>
        <div className="logo_container">
          <img
            src="https://www.pngplay.com/wp-content/uploads/10/God-Of-War-Logo-No-Background.png"
            alt=""
          />
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="#registro">registro</a>
          <a href="#novidades">news</a>
          <a href="#personagem">players</a>
          <a href="#footer">Contact</a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
