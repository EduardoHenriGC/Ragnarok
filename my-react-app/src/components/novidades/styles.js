import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: #fafafa;
  width: 100%;
  margin: 50px auto;

  .content_texto {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: center;
    padding: 24px;

    width: 50%;
    font-size: 1rem;
    letter-spacing: 3px;

    span {
      margin-top: 20px;
      color: red;
      font-weight: bold;
    }
    h3 {
      margin-top: 20px;
    }

    p {
      margin-top: 20px;
    }
  }
  .texto_left {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .texto_right {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    display: flex;
    width: 70%;
    height: 350px;
    margin: 50px auto;
    justify-content: space-between;

    .img_content {
      width: 700px;
      height: 350px;
    }
    img {
      max-width: 100%;
      height: 100%;
      border-radius: 14px;
    }
  }
  @media (max-width: 1200px) {
    .content {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 25px auto;

      .img_content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 94%;
        height: 250px;
      }
    }
    .content_texto {
      font-size: 1rem;
      width: 90%;
      margin: 0 auto;
      text-align: left;
    }
  }
`;
