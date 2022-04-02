import React, { useState } from "react";
import Userdropdown from "../../assests/sharedicons/userdropdown.svg";
import Notificationicon from "../../assests/sharedicons/notification.svg";
import Iconsearch from "../../assests/sharedicons/icon-search.svg";
import Linedivider from "../../assests/sharedicons/Linedivider.svg";
import "../../styles/layouts/_nav.styles.scss";
import { MENU_DATA } from "./menudata";
import Subnav from "./Subnav/subnav";
import styled from "styled-components";
import {
  CardContainer,
  Card,
  CardText,
  TextStyle,
  NavList,
} from "../../styles/layouts/_sidenav.styles";

const Open = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;
const SideNav = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: $main-color;
  width: auto !important;
  height: 100vh;
  border-right: 0.06em solid #ecebf5;
  background-color: #fff;
  display: block;

  @media (max-width: 1024px) {
    left: ${({ navBar }) => (navBar ? "0" : "-100%")};
    transition: 300ms;
  }
`;

const Nav: React.FC = () => {
  const [navBar, setNavBar] = useState<Boolean>(false);

  return (
    <div className="top-header">
      <Open onClick={() => setNavBar(!navBar)}>open</Open>
      <SideNav navBar={navBar}>
        <CardContainer>
          <Card>
            <CardText>
              <TextStyle>
                <b style={{ fontSize: "0.88rem", color: "black" }}>Metacare</b>{" "}
                <br /> adeyinka@metacare.app
              </TextStyle>
            </CardText>
          </Card>
        </CardContainer>
        <NavList>
          {MENU_DATA.map((item, index) => (
            <Subnav item={item} key={index} />
          ))}
        </NavList>
      </SideNav>
      <div className="Search-bar">
        <input
          name="search"
          type="text"
          placeholder="Ask us any question"
          id="search"
        />
        <div className="search-icon">
          <img src={Iconsearch} alt="search-icon" />
        </div>
      </div>
      <div className="Header-Auth">
        <div className="notification">
          <img src={Notificationicon} alt="notification" />
          <div className="badge">3</div>
        </div>
        <img src={Linedivider} alt="divider" />
        <div className="authentication">
          <div className="user-image" />
          <div className="icon-container">
            <img src={Userdropdown} alt="dropdown" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
