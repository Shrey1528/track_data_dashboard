import React, { useState } from "react";
import { Company, Container, Tab, TabsContainer } from "./SidebarStyled";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineForm, AiOutlinePoweroff } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineDataExploration } from "react-icons/md";

const Sidebar = () => {
  const closewindow = () => {
    var confirm_result = window.confirm("Are you sure you want to logout?");
    if (confirm_result === true) {
      window.close();
    }
  };

  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <Container>
      <Company>
        <MdOutlineDataExploration />
        Track Data
      </Company>
      <TabsContainer>
        <Link to="/" className="links">
          <Tab
            className={`${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            <RiDashboardLine className="icon" />
            Overview
          </Tab>
        </Link>
        <Link to="/visualize" className="links">
          <Tab
            className={`${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            <BsBarChart className="icon" />
            Data Visualize
          </Tab>
        </Link>
        <Link to="/form" className="links">
          <Tab
            className={`${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            <AiOutlineForm className="icon" />
            Data Filter
          </Tab>
        </Link>
        <Tab onClick={closewindow}>
          <AiOutlinePoweroff className="icon" />
          Logout
        </Tab>
      </TabsContainer>
    </Container>
  );
};

export default Sidebar;
