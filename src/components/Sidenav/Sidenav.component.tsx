import React, { useState } from "react";
import { MENU_DATA } from "./menudata";
import ArrowRight from "../../assests/navicons/arrowright.svg";
import "../../styles/layouts/_sidenav.styles.scss";

const Sidenav = () => {
  const [data, setData] =
    useState<{ name: string; id: number; icon: string }[]>(MENU_DATA);

  return (
    <div className="side-nav">
      <div className="card-container">
        <div className="card">
          <div className="card-text">
            <div className="text-style">
              <b id="Gelion-bold">Metacare</b> <br /> adeyinka@metacare.app
            </div>
          </div>
        </div>
      </div>
      <div className="menu-list">
        <div className="nav-list">
          {data.map((Link) => (
            <div key={Link.id} className="nav-list-container">
              <div className="list-icon">
                <img className="image-icon" src={Link.icon} alt="icon" />
                <div className="list-text">{Link.name}</div>
              </div>
              <div className="list-dropdown">
                <img src={ArrowRight} alt="arrow-dropdown" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
