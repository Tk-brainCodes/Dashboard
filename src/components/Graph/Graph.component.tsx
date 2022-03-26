import React from "react";
import "./Graph.styles.scss";
import Linegraph from "./Linegraph/linegraph";

const Graph = () => {
  return (
    <div className="Graph">
      <div className="Graph-component">
        <Linegraph />
        <div className="Graph-aside">
          <div className="card-1">
            <div className="card-title">Average Response Time</div>
            <div className="time">30 Mins</div>
          </div>
          <div className="card-2">
            <div className="card-title"> Response Time</div>
            <div className="time">1 Hour 30 Mins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
