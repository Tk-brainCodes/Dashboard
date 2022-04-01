import React from "react";
import "../../styles/components/_graph.styles.scss";
import Linegraph from "./Linegraph/linegraph";

const Graph: React.FC = () => {
  return (
    <>
      <div className="Graph">
        <Linegraph />
      </div>
    </>
  );
};

export default Graph;
