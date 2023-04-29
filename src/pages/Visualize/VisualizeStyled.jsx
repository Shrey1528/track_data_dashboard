import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const InputContainer = styled.div`
  height: 20%;
  width: 90%;
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid gray;
    padding: 1%;
    width: 40%;
  }
`;
