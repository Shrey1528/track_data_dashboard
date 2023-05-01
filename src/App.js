import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form/Form";
import Visualize from "./pages/Visualize/Visualize";

function App() {
  return (
    <Container className="App">
      <Sidebar />
      <MainContainer>
        <Navbar />
        <MarginBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Visualize" element={<Visualize />} />
        </Routes>
      </MainContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6fefd;
  overflow-x: hidden;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 10px;
  display: flex;
`;

const MainContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e7f3f6;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const MarginBar = styled.div`
  width: "100%";
  height: 2rem;
  margin-top: 1rem;
`;
