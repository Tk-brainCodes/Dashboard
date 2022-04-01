import React, { useState, useEffect } from "react";
import Graph from "../../components/Graph/Graph.component";
import Header from "../../components/Header/Header.component";
import { TabsDetailData } from "./Tabdata";
import Iconsearch from "../../assests/sharedicons/icon-search.svg";
import Dropdownblack from "../../assests/sharedicons/dropdown-black.svg";
import Linedivider from "../../assests/sharedicons/Linedivider.svg";
import "../../styles/components/_analytics.styles.scss";

const Analytic: React.FC = () => {
  const options = ["Highest", "Lowest", "Average"];
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [selectedOption, setSelectedOption] = useState<null | string | number>(
    null
  );

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  const onOptionClicked = (value: number | string | null) => (): void => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="Header">
        <div className="Header-container">
          <Header />
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
            <div className="Description-field-content">
              <div className="search-container">
                <img id="des-search" src={Iconsearch} alt="icon search" />
                <input
                  id="search-analytics"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
              </div>
              <div className="DropDownContainer">
                <div
                  className="DropDownHeader"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedOption || "Filter Options"}
                  <img src={Dropdownblack} alt="dropdown-icon" />
                </div>
                {isOpen && (
                  <div className="DropDownListContainer">
                    {options.map((option) => (
                      <ul key={Math.random()}>
                        <li onClick={onOptionClicked(option)}>{option}</li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <img src={Linedivider} alt="divider" />
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

export default Analytic;
