import React from "react";
import "./Graph.styles.scss";
import Linegraph from "./Linegraph/linegraph";

const Graph = () => {
  return (
    <>
      {/*Make through json data and render all three components*/}
      <div className="Graph">
        <div className="Graph-component">
          <Linegraph />
        </div>
      </div>
    </>
  );
};

export default Graph;
