import React from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Dateicon from "../../../assests/sharedicons/dateicon.svg";
import LineDivider from "../../../assests/sharedicons/Linedivider.svg";
import { LINE_GRAPH_DATA } from "./Linegraph.data";

const Linegraph: React.FC = () => {
  return (
    <>
      {LINE_GRAPH_DATA.map((option, id) => (
        <div className="Graph-component" key={id}>
          <div className="line-chart">
            <div className="graph-heading">
              <div className="graph-heading-text">
                <div className="graph-text">
                  <b> {option.title}</b>
                  <div className="graph-percentage">+4.14%</div>
                </div>
              </div>
              <div className="graph-header-content">
                <li className="graph-priority">
                  <div
                    className="rectangle"
                    style={{
                      backgroundColor: `${option.color}`,
                      width: " 0.63em",
                      height: " 0.63em",
                      borderRadius: "0.13em",
                      cursor: "pointer",
                      border: `0.06em solid ${option.color}`,
                    }}
                  />
                  High Priority
                </li>
                <img src={LineDivider} alt="line divider" />
                <div className="graph-date-picker">
                  <li>
                    <b>This Month</b>
                  </li>
                  <img src={Dateicon} alt="dateicon" />
                </div>
              </div>
            </div>
            <div className="react-apex-chart">
              <ReactApexChart
                options={option.options}
                series={option.series}
                height={225}
                width={790}
              />{" "}
            </div>
          </div>
          <div className="Graph-aside">
            <div className="card-1">
              <div className="card-title">{option.cardTitle}</div>
              <div className="time">30 Mins</div>
            </div>
            <div className="card-2">
              <div className="card-title"> Response Time</div>
              <div className="time">1 Hour 30 Mins</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Linegraph;
