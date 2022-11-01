import React from "react";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Novidades from "../../components/novidades";
import Personagens from "../../components/Personagens";
import Register from "../../components/register";
import Trailer from "../../components/trailer";
import GlobalStyle from "../../GlobalStyle";

const Homepage = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero />

      <Novidades />
      <Register />
      <Trailer />
      <Personagens />
      <Footer />
    </div>
  );
};

export default Homepage;
