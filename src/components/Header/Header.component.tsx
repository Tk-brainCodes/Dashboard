import React, { useState, useEffect } from "react";
import Graph from "../Graph/Graph.component";
import { TabsDetailData } from "./Tabdata";
import "./Header.styles.scss";

const Header = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  return (
    <>
      <div className="Header">
        <div className="Header-container">
          <div className="top-header">
            <div className="Search-bar">
              <input
                name="search"
                type="text"
                placeholder="Ask us any question"
                id="search"
              />
              <div className="search-icon" />
            </div>
            <div className="Header-Auth"></div>
          </div>
          <div className="tab">
            <ul className="tab-list">
              {TabsDetailData.map((data) => (
                <li
                  key={data.id}
                  onClick={() => setActiveTab(data.tabName)}
                  className={activeTab === `${data.tabName}` ? "active" : ""}
                >
                  {data.tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Description">
          <div className="Decription-title-container">
            {TabsDetailData.map((title) => (
              <div key={title.id} className="Description-title">
                {activeTab === title.tabName && title.description}
              </div>
            ))}
          </div>
          <div className="Description-field">
            <div className="search-container">
              <input
                id="search-analytics"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="DropDownContainer">
              <div className="DropDownHeader">Filter Options</div>
              <div className="DropDownListContainer">
                <ul>
                  <li>Mangoes</li>
                  <li>Apples</li>
                  <li>Oranges</li>
                </ul>
              </div>
            </div>
            <button name="export" id="export-button">
              Export
            </button>
          </div>
        </div>
      </div>
      {activeTab === "tab1" && <Graph />}
    </>
  );
};

export default Header;
