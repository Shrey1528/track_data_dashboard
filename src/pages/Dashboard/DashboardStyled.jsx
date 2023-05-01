import styled from "styled-components";

export const Container = styled.div`
  height: 150%;
  width: 100%;
  margin-top: 1rem;
  border-bottom-right-radius: 10px;
  padding: 2%;
  overflow-y: scroll;
  overflow-x: hidden;
  align-items: center;
  justify-items: center;

  .chart-canvas {
    width: 50%;
    height: 50%;
  }
`;

export const StatsContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Stats = styled.div`
  width: 25%;
  height: 2rem;
  padding: 8px 16px;
  border-radius: 20px;
  border: 3px solid rgb(26, 0, 61);
  background-color: #ffffff;
  box-shadow: 1px 2px 5px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    min-width: 12%;
    max-width: 50%;
    padding: 2%;
    height: 75%;
    border-radius: 50%;
    background-color: rgb(26, 0, 61);
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid red;
  width: auto;
  padding: 5px;
`;

export const Content = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;

// export const Chart = styled.div`
//   width: 90%;
//   height: 60%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50px;
//   background: #ebe6e6;
//   box-shadow: 28px 28px 56px #bebebe, -28px -28px 56px #ffffff;
// `;
