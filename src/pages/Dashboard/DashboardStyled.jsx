import styled from "styled-components";

export const Container = styled.div`
  height: 150%;
  border-bottom-right-radius: 10px;
  padding: 2%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  h1 {
    font-style: italic;
    span {
      color: red;
    }
  }

  .chart-canvas {
    width: 50%;
    height: 50%;
  }
`;

export const Content = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;

export const Chart = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #ebe6e6;
  box-shadow: 28px 28px 56px #bebebe, -28px -28px 56px #ffffff;
`;
