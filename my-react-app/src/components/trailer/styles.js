import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin: 100px auto;
  width: 100%;
  height: auto;
  .video_1 {
    width: 550px;
    height: 350px;
  }
  .video_2 {
    width: 550px;
    height: 350px;
  }
  @media (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 700px) {
    .video_1,
    .video_2 {
      margin: 0 auto;
      width: 98%;
      height: 290px;
    }
  }
`;
