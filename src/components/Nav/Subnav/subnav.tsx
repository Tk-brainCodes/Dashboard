import React, { useState } from "react";
import {
  NavListContainer,
  ListIcon,
  ImageIcon,
  ListText,
  ListDropdown,
  DropDownContainer,
  UL,
  LI,
} from "../../../styles/layouts/_sidenav.styles";
import ArrowRight from "../../../assests/navicons/arrowright.svg";
import Dropdownblack from "../../../assests/navicons/dropdown-light.svg";

const Subnav = ({ item }: any) => {
  const [subnav, setSidenav] = useState<Boolean>(false);
  const showSidenav = (): void => setSidenav(!subnav);

  return (
    <>
      <NavListContainer onClick={showSidenav}>
        <ListIcon>
          <ImageIcon src={item.icon} alt="icon" />
          <ListText style={{ color: `${subnav ? ` #6837ef` : "#696d8c"}` }}>
            {item.name}
          </ListText>
        </ListIcon>
        <ListDropdown>
          {item.subNav && subnav ? (
            <img src={Dropdownblack} alt="arrow-dropdown" />
          ) : item.subNav ? (
            <img src={ArrowRight} alt="arrow-right" />
          ) : null}
        </ListDropdown>
      </NavListContainer>
      {subnav &&
        item.subNav.map((items: any, index: number) => (
          <DropDownContainer key={index}>
            <UL>
              <LI>{items.name}</LI>
            </UL>
          </DropDownContainer>
        ))}
    </>
  );
};

export default Subnav;
