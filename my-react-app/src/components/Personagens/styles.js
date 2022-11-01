import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  overflow-x: scroll;
  overflow-y: hidden;

  scroll-snap-type: x mandatory;
  scroll-padding: 24px;
  ::-webkit-scrollbar {
    /* width of the entire scrollbar */
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #000; /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid #c2ac3a; /* creates padding around scroll thumb */
  }

  img {
    width: 100%;
    height: 100%;
  }
  .news_div {
    scroll-snap-align: start;
    max-height: 100%;
    position: relative;
    flex: 0 0 20%;

    p {
      font-weight: bold;

      :hover {
        color: #c2ac3a;
      }
    }

    .icon {
      font-size: 35px;
      color: #c2ac3a;
    }

    .btn-open {
      background-color: transparent;
      color: #fff;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      border: none;
    }
    .btn-close {
      background: transparent;
      color: #000;

      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;
      padding: 8px 17px;
      border: 2px solid #222;
      border-radius: 32px;
      transform: translate(0);
      overflow: hidden;
      cursor: pointer;
      :hover {
        border: 2px solid #880606;
        color: #880606;
      }
      ::before {
        content: "";
        position: absolute;
        background-color: #880606;
        width: 8px;
        top: 0;
        bottom: 0;
        left: -32px;
        transform: rotate(-16deg);
        filter: blur(6px);
      }
      :hover::before {
        left: calc(100% + 32px);
        transition: 0.75s;
      }
    }
  }
  .news_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 0;
    text-align: center;
    color: #fff;
    text-transform: uppercase;

    gap: 5px;
    font-size: 1rem;

    width: 100%;
    cursor: pointer;
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #c2ac3a;
    position: fixed;
    z-index: 1;
    top: 20%;
    bottom: 20%;
    right: 20%;
    left: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
  }
  .right-section {
    width: 75%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 30px;
    padding: 20px;

    h3 {
      text-transform: uppercase;
    }
  }
  .left-section {
    width: 25%;
    margin-left: 2rem;
    img {
      border-radius: 0.25rem;
    }
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    .news_div {
      flex: 0 0 33.33%;
    }
  }

  @media (max-width: 778px) {
    .news_div {
      flex: 0 0 50%;
    }
    .left-section {
      margin: 0;
      width: auto;
    }
    .right-section {
      margin: 0 auto;
      width: auto;
    }

    .modal-content {
      border-radius: 0;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 300px;
      }
    }
  }

  @media (min-width: 779px) and (max-width: 1300px) {
    .modal-content {
      top: 15%;
      bottom: 15%;
      right: 10%;
      left: 10%;

      img {
        min-height: 270px;
      }
    }
  }
`;
