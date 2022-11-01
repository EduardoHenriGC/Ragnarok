import React from "react";
import { Container } from "./styles";

const Novidades = () => {
  return (
    <Container id="novidades">
      <div className="content grid">
        <div className="content_texto texto_left">
          <span>lorem</span>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            sunt optio dignissimos tempora provident non possimus doloribus
            libero iusto. Totam illo eius, repellat, molestiae voluptatibus
            molestias eum in reiciendis voluptatum mollitia consequatur corporis
            quod, excepturi numquam est. Inventore iusto expedita repellat
            deserunt magnam perferendis commodi fuga cupiditate mollitia fugit,
            voluptatem reprehenderit et at soluta officiis corporis facilis vero
            velit aperiam.
          </p>
        </div>
        <div className="img_content ">
          <img
            src="https://noticiascamaqua.com.br/wp-content/uploads/2022/10/169150-attachment.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="content grid">
        <div className="img_content ">
          <img
            src="https://pbs.twimg.com/media/FbbyqSUWYAMZGDq?format=jpg&name=small"
            alt=""
          />
        </div>
        <div className="content_texto texto_right grid_b2">
          <span>lorem</span>
          <h3>Lorem, ipsum.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            assumenda dolor sapiente praesentium cum exercitationem error ab ea.
            Explicabo doloribus cupiditate aliquam illo officiis iusto obcaecati
            ea voluptas voluptatibus suscipit debitis voluptatem inventore nulla
            modi saepe facilis, alias dolorum omnis veritatis delectus. At
            mollitia ea inventore, magnam totam aperiam molestias ratione minus
            voluptatem numquam delectus excepturi.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Novidades;
