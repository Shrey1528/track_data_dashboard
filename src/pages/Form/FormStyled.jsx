import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 2% 0;
  overflow-y: scroll;

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

export const InputMainContainer = styled.div`
  width: 100%;
  height: 20%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: 1.25rem;
`;

export const Input = styled.input`
  width: 70%;
  height: 70%;
  padding: 10px 5px;
  border-radius: 10px;
  border: 1px solid gray;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px 1px rgb(26, 0, 61);
  }
`;

export const TableContainer = styled.div`
  border: 3px solid rgb(26, 0, 61);
  width: 90%;
  margin: 2rem auto;
  border-radius: 10px;
  table {
    width: 100%;
    border-radius: 10px;
  }
  th {
    background-color: rgb(26, 0, 61);
    color: #dddddd;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;

export const InputButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputButton = styled.button`
  width: 20%;
  border: none;
  background: linear-gradient(
    320deg,
    rgba(0, 140, 255, 0.678),
    rgba(128, 0, 128, 0.308)
  );
  color: #180039;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 10px 0;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
`;
