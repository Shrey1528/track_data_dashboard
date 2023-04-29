import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  padding: 3% 0;
`;

export const InputContainer = styled.div`
  width: 90%;
  height: 20%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: 1rem;
`;

export const Input = styled.input`
  width: 70%;
  height: 70%;
  padding: 1%;
  border-radius: 10px;
  border: 1px solid gray;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px 1px rgb(26, 0, 61);
  }
`;

export const TableContainer = styled.div`
  border: 3px solid rgb(26, 0, 61);
  border-radius: 10px;
  width: 90%;
  margin: 2rem auto;
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
