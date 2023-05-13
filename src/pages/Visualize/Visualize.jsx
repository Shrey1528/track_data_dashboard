import React from "react";
import {
  Button,
  ChartContainer,
  Container,
  InputContainer,
  LoaderCon,
  Stats,
  StatsContainer,
} from "./VisualizeStyled";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import axios from "axios";
import { Legend } from "chart.js";
import { useState } from "react";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { MdFileUpload } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Visualize = ({ requestId, setFileId }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [numberOfCats, setNumberOfCats] = useState(0);
  const [avgTicket, setAvgTicketValue] = useState(0);
  const [catChartData, setCatChartData] = useState([]);
  const [stateChartData, setStateChartData] = useState([]);
  // const [catVsAmt, setCatVsAmt] = useState([]);

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [Id, setID] = useState("");

  const LOCALHOST = "127.0.0.1:8000";

  async function onFileUpload() {
    if (!file) return;

    try {
      setFileName(`${file.name + v4()}`);
      const fileRef = ref(storage, `csv/${fileName}`);
      const uploadedFile = await uploadBytes(fileRef, file);

      toast.success("File Uploaded Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      if (uploadedFile) {
        const response = await getDownloadURL(ref(storage, `csv/${fileName}`));
        if (response) {
          const innerRes = await axios.post(
            `http://${LOCALHOST}/api/process_file/`,
            {
              file_url: response,
              n_rows: 100,
            }
          );
          if (innerRes) {
            checkData(innerRes.data.data.id);
          }
          setID(innerRes.data.data.id);
          setFileId(innerRes.data.data.id);
          console.log(Id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function checkData(id) {
    let newCatChartData = [];
    let newCityData = [];
    let newCatAmtData = [];
    let ticketSum = 0;
    setLoading(true);
    try {
      console.log(requestId);
      let response;

      response = await axios.get(`http://${LOCALHOST}/api/process_file/${id}/`);

      if (response) {
        setData(response.data.data);

        let newCatMap = {};
        let newCityMap = {};
        let newCatAmt = {};

        response.data.data.forEach((element) => {
          if (element.props) {
            if (element.props.category) {
              if (newCatMap.hasOwnProperty(element.props.category)) {
                const freq = newCatMap[element.props.category];
                newCatMap[element.props.category] = freq + 1;
              } else {
                newCatMap[element.props.category] = 1;
              }
            }
            if (element.props.state) {
              if (newCityMap.hasOwnProperty(element.props.state)) {
                const freq = newCityMap[element.props.state];
                newCityMap[element.props.state] = freq + 1;
              } else {
                newCityMap[element.props.state] = 1;
              }
            }

            if (element.props.category && element.props.amt) {
              if (newCatAmt.hasOwnProperty(element.props.category)) {
                const freq = newCatAmt[element.props.category];
                newCatAmt[element.props.category] =
                  parseInt(freq) + parseInt(element.props.amt);
              } else {
                newCatAmt[element.props.category] = parseInt(element.props.amt);
              }
            }

            if (element.props.amt) {
              ticketSum += element.props.amt;
            }
          }
        });

        Object.keys(newCatMap).forEach((ele) => {
          newCatChartData.push({
            name: ele,
            value: newCatMap[ele],
          });
        });

        Object.keys(newCityMap).forEach((ele) => {
          newCityData.push({
            name: ele,
            value: newCityMap[ele],
          });
        });

        Object.keys(newCatAmt).forEach((ele) => {
          newCatAmtData.push({
            name: ele,
            value: newCatAmt[ele],
          });
        });

        setCatChartData(newCatChartData);
        setStateChartData(newCityData);
        setNumberOfCats(newCatChartData.length);
        // setCatVsAmt(newCatAmtData);
        setAvgTicketValue(ticketSum / data.length);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // useEffect(() => {
  //   checkData();
  // }, []);

  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }

  if (loading) {
    return (
      <LoaderCon>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </LoaderCon>
    );
  }

  return (
    <Container>
      {data ? (
        <>
          <StatsContainer>
            <Stats className="transaction">
              <h4>Number Of Transactions</h4>
              <p>{data.length}</p>
            </Stats>
            <Stats className="categories">
              <h4>Number Of Categories</h4>
              <p>{numberOfCats}</p>
            </Stats>
            <Stats className="ticket">
              <h4>Average Ticket Size</h4>
              <p>{avgTicket.toPrecision(2)}</p>
            </Stats>
          </StatsContainer>
          <ChartContainer>
            <div className="sub">
              <h4>Category V/S Frequency</h4>
              <BarChart width={900} height={300} data={catChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </div>

            <div className="sub">
              <h4>City V/S Frequency</h4>
              <BarChart width={900} height={300} data={stateChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </div>

            {/* <BarChart
              width={window.innerWidth * 0.75}
              height={250}
              data={catVsAmt}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart> */}
          </ChartContainer>
        </>
      ) : (
        <>
          <InputContainer>
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            <Button onClick={onFileUpload}>
              <span className="text">Upload File</span>
              <span className="icon">
                <MdFileUpload style={{ fontSize: "20px" }} />
              </span>
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
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
          </InputContainer>
        </>
      )}
    </Container>
  );
};

export default Visualize;
