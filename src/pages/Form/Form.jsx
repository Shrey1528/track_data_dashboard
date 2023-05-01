import React from "react";
import {
  Container,
  Input,
  InputButton,
  InputContainer,
  TableContainer,
} from "./FormStyled";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [ccNum, setCCNum] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [data, setData] = useState();

  function URLParamBuilder() {
    let query = [];
    if (first) {
      query.push(`first=${first}`);
    }

    if (last) {
      query.push(`last=${last}`);
    }
    if (ccNum) {
      query.push(`cc_num=${ccNum}`);
    }

    return query.join("&");
  }

  async function getData() {
    const query = URLParamBuilder();
    try {
      const response = await axios.get(
        `http://localhost:8000/api/process_file/100103/?${query}`
      );
      if (response) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <InputContainer>
          <Input
            type="text"
            placeholder="CC Number"
            value={ccNum}
            onChange={(event) => {
              setCCNum(event.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="First Name"
            value={first}
            onChange={(event) => {
              setFirst(event.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={last}
            onChange={(event) => {
              setLast(event.target.value);
            }}
          />
        </InputContainer>
        <InputButton
          onClick={(event) => {
            event.preventDefault();
            getData();
          }}
        >
          Fetch
        </InputButton>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>CC Number</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((ele) => {
                return (
                  <tr key={ele.props.cc_num}>
                    <td>{ele.props.cc_num}</td>
                    <td>{ele.props.first}</td>
                    <td>{ele.props.last}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Form;
