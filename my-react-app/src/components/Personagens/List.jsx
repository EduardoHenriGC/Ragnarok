import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export function List(props) {
  const [modal, setModal] = useState(false);
  return (
    <div className="news_div">
      <img src={props.info.img} alt="" />
      <div className="news_icon">
        <HiOutlineArrowNarrowRight className="icon" />
        <button className="btn-open" onClick={() => setModal(!modal)}>
          more
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="left-section">
              <img src={props.info.img} alt="" />
            </div>

            <div className="right-section">
              <h3>{props.info.nome}</h3>
              <span>{props.info.descricao}</span>
              <button className="btn-close" onClick={() => setModal(!modal)}>
                fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
