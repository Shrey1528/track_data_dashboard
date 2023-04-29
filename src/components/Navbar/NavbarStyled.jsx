import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-top-right-radius: 10px;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 30%;
  padding: 5px;
  margin-left: 2rem;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 1px gray;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  border: 1px solid black;
  padding: 5px;
  display: flex;
  border-radius: 50%;
  background-color: #180039;
  cursor: pointer;
  .search-icon {
    color: white;
  }
`;

export const Input = styled.input`
  width: 95%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const User = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
  align-items: center;
  justify-content: end;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px gray;
  background-color: white;

  cursor: pointer;
  .icon {
    font-size: 1.5rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px gray;
  background-color: white;

  width: 6%;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px gray;
  background-color: white;
  cursor: pointer;
  .icon {
    font-size: 1.3rem;
  }
`;
