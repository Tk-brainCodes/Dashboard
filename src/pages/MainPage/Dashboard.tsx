import React from "react";
import Analytics from "../Analytic/Analytic.component";
import Sidenav from "../../components/Sidenav/Sidenav.component";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      {/*Routing takes place here*/}
      <Sidenav />
      <Analytics />
    </div>
  );
};

export default Dashboard;
