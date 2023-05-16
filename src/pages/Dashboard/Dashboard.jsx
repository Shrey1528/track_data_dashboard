import React, { useEffect, useState } from "react";
import {
  Chart,
  ChartConOne,
  ChartConThree,
  ChartConTwo,
  CityLegendCon,
  ColorBox,
  Container,
  LegendCon,
} from "./DashboardStyled";
import axios from "axios";
import {
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import { LoaderCon } from "../Visualize/VisualizeStyled";
import { RotatingLines } from "react-loader-spinner";
import { catAmtData, categoryData, cityFreqData, colors } from "../../data";
const LOCALHOST = "127.0.0.1:8000";

const Dashboard = ({ fileId }) => {
  const [data, setData] = useState();
  const [catChartData, setCatChartData] = useState([]);
  const [stateChartData, setStateChartData] = useState([]);
  const [newCatAmt, setNewCatAmt] = useState([]);
  const [newGenderData, setNewGenderData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const response = await axios.get(`http://${LOCALHOST}/api/process_file/`);
    const data = response.data;
    console.log(data);
  }

  async function checkData(id) {
    let newCatChartData = [];
    let newCityData = [];
    let newCatAmtData = [];
    setLoading(true);
    try {
      let response;

      response = await axios.get(`http://${LOCALHOST}/api/process_file/`);

      if (response) {
        setData(response.data.data);

        let newCatMap = {};
        let newCityMap = {};
        let newCatAmt = {};
        let newGenderMap = {};

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

            if (element.props.gender) {
              if (newGenderMap.hasOwnProperty(element.props.gender)) {
                const freq = newGenderMap[element.props.gender];
                newGenderMap[element.props.gender] = freq + 1;
              } else {
                newGenderMap[element.props.gender] = 1;
              }
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
          if (newCatAmt[ele] !== 0) {
            newCatAmtData.push({
              name: ele,
              value: newCatAmt[ele],
            });
          }
        });

        Object.keys(newGenderMap).forEach((ele) => {
          newGenderData.push({
            name: ele,
            value: newGenderMap[ele],
          });
        });

        newCatChartData.forEach((ele, index) => {
          ele["fill"] = colors[index];
        });

        newCatAmtData.forEach((ele, index) => {
          ele["fill"] = colors[index];
        });

        newCityData.forEach((ele, index) => {
          ele["fill"] = colors[index];
        });

        newGenderData.forEach((ele, index) => {
          ele["fill"] = colors[index];
        });

        setCatChartData(newCatChartData);
        setStateChartData(newCityData);
        setNewCatAmt(newCatAmtData);
        setNewGenderData(newGenderData);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    checkData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(catChartData);

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
          <ChartConOne>
            <Chart>
              <p>Category V/S Frequency</p>
              <ResponsiveContainer width="95%" height="50%">
                <BarChart
                  width={500}
                  height={300}
                  data={catChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={data.name} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
              <LegendCon>
                {categoryData.map((cat) => {
                  return (
                    <div className="legend">
                      <ColorBox color={cat.bgColor}></ColorBox>
                      <p>{cat.text}</p>
                    </div>
                  );
                })}
              </LegendCon>
            </Chart>
            <Chart>
              <p>Category V/S Amount($)</p>
              <ResponsiveContainer width="95%" height="50%">
                <BarChart
                  width={500}
                  height={300}
                  data={newCatAmt}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={data.name} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />;
                </BarChart>
              </ResponsiveContainer>
              <LegendCon>
                {catAmtData.map((cat) => {
                  return (
                    <div className="legend">
                      <ColorBox color={cat.bgColor}></ColorBox>
                      <p>{cat.text}</p>
                    </div>
                  );
                })}
              </LegendCon>
            </Chart>
          </ChartConOne>
          <ChartConTwo>
            <Chart>
              <p>Male V/S Female</p>
              <ResponsiveContainer width="85%" height="85%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={newGenderData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
          </ChartConTwo>
          <ChartConThree>
            <Chart>
              <p>City V/S Frequency</p>
              <ResponsiveContainer width="90%" height="80%">
                <BarChart
                  width={500}
                  height={300}
                  data={stateChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={data.name} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />;
                </BarChart>
              </ResponsiveContainer>
              <CityLegendCon>
                {cityFreqData.map((cat) => {
                  return (
                    <div className="legend">
                      <ColorBox color={cat.bgColor}></ColorBox>
                      <p>{cat.text}</p>
                    </div>
                  );
                })}
              </CityLegendCon>
            </Chart>
          </ChartConThree>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Dashboard;
