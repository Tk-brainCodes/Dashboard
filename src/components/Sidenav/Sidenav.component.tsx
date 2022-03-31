import React from "react";
import { MENU_DATA } from "./menudata";
import ArrowRight from "../../assests/navicons/arrowright.svg";
import "../../styles/layouts/_sidenav.styles.scss";

const Sidenav = () => {
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
          {MENU_DATA.map((list) => (
            <div className="nav">
              <div key={list.id} className="nav-list-container">
                <div className="list-icon">
                  <img className="image-icon" src={list.icon} alt="icon" />
                  <div className="list-text">{list.name}</div>
                </div>
                <div className="list-dropdown">
                  <img src={ArrowRight} alt="arrow-dropdown" />
                </div>
              </div>
              {list.items.map((item) => (
                <div key={item.id} className="drop-down-container">
                  <ul>
                    <li>{item.name}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
