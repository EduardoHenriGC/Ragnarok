import styled from "styled-components";

export const Footercss = styled.div`
  footer {
    background-color: #333;

    padding: 10px;
    margin-top: 150px;
  }
  .lista-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 17vh;
  }
  .footer-span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .lista {
    margin: 4px;
  }
  .footer-span {
    font-size: 20px;
    margin-bottom: 50px;
  }
  #tt,
  #insta,
  #fb,
  #git {
    cursor: pointer;
    background-color: #18191f;
    font-size: 1.3rem;
    color: #fff;

    border-radius: 0.5rem;
    padding: 15px 15px;
    margin: 0 10px;
    animation: animated 8s linear infinite;
    text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
      0 0 200px #0072ff;
  }

  #insta {
    animation-delay: 0.3s;
  }
  #tt {
    animation-delay: 0.7s;
  }
  #git {
    animation-delay: 0.1s;
  }

  @keyframes animated {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`;
