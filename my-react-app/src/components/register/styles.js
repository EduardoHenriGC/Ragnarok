import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://cdn.clickwallpapers.net/images/clickwallpapers-god-of-war-sony-playstation_img3.jpg");
  width: 100%;
  height: 75vh;
  background-position: center;
  background-size: cover;

  .content {
    margin-top: 26px;
    width: 50%;
    float: right;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    gap: 25px;
    margin-right: 50px;

    height: 60vh;

    h3 {
      font-size: 1.6rem;
    }
    p {
      margin-top: 10px;
      width: 75%;
      text-align: left;
    }
  }

  .btn {
    padding: 12px;
    width: 190px;
    cursor: pointer;
    transition: 0.5s ease;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 600;

    :hover {
      color: #fff;
      background: transparent;
      border: 2px solid #799be6;
      box-shadow: 0 0 10px 0 #799be6 inset, 0 0 10px 4px #799be6;
      border-radius: 10px;
    }
  }

  @media (max-width: 400px) {
    .content {
      height: 85vh;
    }
  }
  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
    text-align: center;
    .content {
      width: 100%;
      margin: 0;

      align-items: center;
      justify-content: center;
      float: none;
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
