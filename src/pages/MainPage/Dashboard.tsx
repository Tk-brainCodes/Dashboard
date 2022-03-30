import React from "react";
import Header from "../Analytic/Analytic.component";
import Sidenav from "../../components/Sidenav/Sidenav.component";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidenav />
      <Header />
    </div>
  );
};

export default Dashboard;
