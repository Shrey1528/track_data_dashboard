import React from "react";
import { Container, Message, Profile, Settings, User } from "./NavbarStyled";
import { AiOutlineMessage } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import avatar from "../../assets/Avatar.jpg";
import { Tooltip } from "react-tooltip";

const Navbar = ({ setID }) => {
  return (
    <>
      <Container>
        <User>
          <Settings>
            <FiSettings
              className="icon"
              data-tooltip-id="tooltip"
              data-tooltip-content="Settings"
            />
          </Settings>
          <Message>
            <AiOutlineMessage
              className="icon"
              data-tooltip-id="tooltip"
              data-tooltip-content="Messages"
            />
          </Message>
          <Profile>
            <img
              src={avatar}
              alt="user-avatar"
              data-tooltip-id="tooltip"
              data-tooltip-content="Profile"
            />
          </Profile>
        </User>
      </Container>
      <Tooltip id="tooltip" place="bottom" style={{ fontSize: "10px" }} />
    </>
  );
};

export default Navbar;
