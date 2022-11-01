import React from "react";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <div class="lds-hourglass"></div>
    </Container>
  );
};

export default Loading;
