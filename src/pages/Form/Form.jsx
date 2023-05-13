import React from "react";
import {
  Container,
  InputButton,
  InputButtonContainer,
  InputMainContainer,
  TableContainer,
} from "./FormStyled";
import { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { Flip, ToastContainer, toast } from "react-toastify";

const Form = ({ fileId }) => {
  const [ccNum, setCCNum] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");

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

    if (gender) {
      query.push(`gender=${gender}`);
    }

    if (city) {
      query.push(`city=${city}`);
    }

    if (job) {
      query.push(`job=${job}`);
    }

    return query.join("&");
  }

  async function getData() {
    toast.success("Successfull", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    const query = URLParamBuilder();
    try {
      const response = await axios.get(
        `http://localhost:8000/api/process_file/${fileId}/?${query}`
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
        <InputMainContainer>
          {/* <InputCon className="input-group">
            <Input
              className="input"
              name="text"
              type="text"
              // placeholder="CC Number"
              value={ccNum}
              onChange={(event) => {
                setCCNum(event.target.value);
              }}
            />
            <label className="label">CC Number</label>
          </InputCon> */}

          {/* <Input
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
            }} />*/}

          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="CC Number"
            value={ccNum}
            onChange={(event) => {
              setCCNum(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="First Name"
            value={first}
            onChange={(event) => {
              setFirst(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="Last Name"
            value={last}
            onChange={(event) => {
              setLast(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="Gender"
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="City"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label="Job"
            value={job}
            onChange={(event) => {
              setJob(event.target.value);
            }}
            style={{ width: "70%", backgroundColor: "white" }}
          />
        </InputMainContainer>
        <InputButtonContainer>
          <InputButton
            onClick={(event) => {
              event.preventDefault();
              getData();
            }}
          >
            Search
          </InputButton>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            transition={Flip}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </InputButtonContainer>
        {data ? (
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>CC Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((ele) => {
                  return (
                    <tr key={ele.props?.cc_num}>
                      <td>{ele.props?.cc_num}</td>
                      <td>{ele.props?.first}</td>
                      <td>{ele.props?.last}</td>
                      <td>{ele.props?.gender}</td>
                      <td>{ele.props?.city}</td>
                      <td>{ele.props?.job}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableContainer>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Form;
