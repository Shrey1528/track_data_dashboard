import styled from "styled-components";

export const Container = styled.div`
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
  width: 95%;
  height: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const ChartConTwo = styled.div`
  width: 95%;
  height: 50%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const ChartConThree = styled.div`
  width: 95%;
  height: 77%;
  display: flex;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const Chart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  box-shadow: 0px 5px 10px 2px #c5c5c5;
  background-color: white;
`;

export const LegendCon = styled.div`
  width: 90%;
  height: 20%;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.5rem;
  .legend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.6rem;
  }
`;

export const CityLegendCon = styled.div`
  width: 80%;
  height: 20%;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  column-gap: 0.5rem;
  margin-bottom: 1rem;
  .legend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.6rem;
  }
`;

export const ColorBox = styled.div`
  border: 1px solid ${(props) => props.color};
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5px;
  color: white;
`;
