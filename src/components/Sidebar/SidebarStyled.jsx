import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(26, 0, 61);
  border: 1px solid black;
  height: 100%;
  width: 20%;

  color: white;
`;

export const Company = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: white;
  font-weight: 600;
  font-size: 1.8rem;
  text-shadow: #fff 1px 1px 5px;
`;

export const TabsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 10px 0;
  .links {
    text-decoration: none;
  }
  .active-tabs {
    text-shadow: #1ec5ff 1px 1px 5px;
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const Tab = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 10px 5px;
  cursor: pointer;
  font-style: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #1ec5ff;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const Credits = styled.div`
  width: 65%;
  bottom: 6%;
  position: absolute;
  left: 5%;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  .heart {
    color: red;
  }
`;
