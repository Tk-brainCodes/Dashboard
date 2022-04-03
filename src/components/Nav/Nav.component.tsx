import React, { useState } from "react";
import Userdropdown from "../../assests/sharedicons/userdropdown.svg";
import Notificationicon from "../../assests/sharedicons/notification.svg";
import Iconsearch from "../../assests/sharedicons/icon-search.svg";
import Linedivider from "../../assests/sharedicons/Linedivider.svg";
import { MENU_DATA } from "./menudata";
import Subnav from "./Subnav/subnav";
import styled from "styled-components";
import {
  CardContainer,
  Card,
  CardText,
  TextStyle,
  NavList,
  TopHeader,
  SearchBar,
  SearchIcon,
  Search,
  HeaderAuth,
  Notification,
  Badge,
  Authentication,
  UserImage,
  IconContainer,
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
    <TopHeader>
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
      <SearchBar>
        <Search name="search" type="text" placeholder="Ask us any question" />
        <SearchIcon>
          <img src={Iconsearch} alt="search-icon" />
        </SearchIcon>
      </SearchBar>
      <HeaderAuth>
        <Notification>
          <img src={Notificationicon} alt="notification" />
          <Badge>3</Badge>
        </Notification>
        <img src={Linedivider} alt="divider" />
        <Authentication>
          <UserImage />
          <IconContainer>
            <img src={Userdropdown} alt="dropdown" />
          </IconContainer>
        </Authentication>
      </HeaderAuth>
    </TopHeader>
  );
};

export default Nav;
