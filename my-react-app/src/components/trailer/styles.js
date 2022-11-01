import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 200px auto;
  width: 100%;
  height: auto;

  .video {
    width: 550px;

    height: 350px;
  }

  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 700px) {
    margin: 100px auto;
    .video {
      margin: 0 auto;
      width: 98%;
      height: 290px;
      margin-top: 80px;
    }
  }
`;
