import React from "react";
import { Container } from "./styles";

const Trailer = () => {
  return (
    <Container>
      <div className="video_2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/maMjiMRiD_o"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        >
          {" "}
        </iframe>
      </div>

      <div className="video_2">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/M2zRFHgPhQs"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        >
          {" "}
        </iframe>
      </div>
    </Container>
  );
};

export default Trailer;
