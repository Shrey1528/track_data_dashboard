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
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  .transaction {
    border-bottom: 5px solid #0c5fe4;
    p {
      color: #0c5fe4;
    }
  }
  .categories {
    border-bottom: 5px solid #e30b74;
    p {
      color: #e30b74;
    }
  }
  .ticket {
    border-bottom: 5px solid #1cc747;
    p {
      color: #1cc747;
    }
  }
`;

export const Stats = styled.div`
  width: 20%;
  height: 80%;
  padding: 8px 20px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 1px 2px 5px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    width: 50%;
    line-height: 20px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 12%;
    max-width: 50%;
    padding: 2%;
    height: 75%;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 1rem;
  /* grid-template-columns: repeat(2, 1fr); */
  /* border: 1px solid red; */
  width: 90%;
  padding: 5px;
`;

export const InputContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  input {
    width: 35%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(190, 190, 190), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  input[type="file"]::-webkit-file-upload-button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #180039;
    color: beige;
    cursor: pointer;
    &:hover {
      background-color: orange;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const Content = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  /* background: #e62222; */
  background: linear-gradient(
    320deg,
    rgba(0, 140, 255, 0.678),
    rgba(128, 0, 128, 0.308)
  );
  span {
    transition: 200ms;
  }
  .text {
    transform: translateX(20px);
    color: #180039;
    font-weight: 600;
  }
  .icon {
    position: absolute;
    border-left: 1px solid silver;
    transform: translateX(100px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #180039;
  }
  &:hover {
    background: linear-gradient(
      320deg,
      rgba(0, 140, 255, 0.678),
      rgba(128, 0, 128, 0.308)
    );
    .text {
      color: transparent;
    }
    .icon {
      width: 150px;
      border-left: none;
      transform: translateX(0);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    .icon {
      transform: scale(0.8);
    }
  }
`;

export const LoaderCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
