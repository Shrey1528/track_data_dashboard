import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  height: 150%;
  width: 100%;
  margin-top: 1rem;
  border-bottom-right-radius: 10px;
  overflow-y: scroll;

  .chart-canvas {
    width: 50%;
    height: 50%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #180039;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;

export const ChartConOne = styled.div`
  width: 100%;
  height: 50%;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
  /* padding: 3%; */
`;

export const Chart = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #ebe6e6;
  box-shadow: 28px 28px 56px #bebebe, -28px -28px 56px #ffffff;
`;
