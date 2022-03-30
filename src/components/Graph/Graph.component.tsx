import React from "react";
import "../../styles/components/_graph.styles.scss";
import Linegraph from "./Linegraph/linegraph";

const Graph = () => {
  return (
    <>
      {/*Make through json data and render all three components*/}
      <div className="Graph">
        <Linegraph />
      </div>
    </>
  );
};

export default Graph;
