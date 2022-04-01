import React, { useState } from "react";
import { MENU_DATA } from "./menudata";
import ArrowRight from "../../assests/navicons/arrowright.svg";
import {
  SideNav,
  CardContainer,
  Card,
  CardText,
  TextStyle,
  NavList,
  NavListContainer,
  ListIcon,
  ImageIcon,
  ListText,
  ListDropdown,
  DropDownContainer,
  UL,
  LI,
} from "../../styles/layouts/_sidenav.styles";

const Sidenav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <SideNav>
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
        {MENU_DATA.map((list) => (
          <>
            <NavListContainer key={list.id}>
              <ListIcon onClick={() => setIsOpen(!isOpen)}>
                <ImageIcon src={list.icon} alt="icon" />
                <ListText>{list.name}</ListText>
              </ListIcon>
              <ListDropdown>
                <img src={ArrowRight} alt="arrow-dropdown" />
              </ListDropdown>
            </NavListContainer>
            {list.items.map((item) => (
              <>
                {isOpen === true && item.id ? (
                  <DropDownContainer key={item.id}>
                    <UL>
                      <LI>{item.name}</LI>
                    </UL>
                  </DropDownContainer>
                ) : (
                  ""
                )}
              </>
            ))}
          </>
        ))}
      </NavList>
    </SideNav>
  );
};
export default Sidenav;
