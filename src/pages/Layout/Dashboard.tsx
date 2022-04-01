import React from "react";
import Analytics from "../Analytic/Analytic.component";
import "../../styles/main/_main.styles.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      {/*Routing takes place here*/}
      <Analytics />
    </div>
  );
};

export default Dashboard;
