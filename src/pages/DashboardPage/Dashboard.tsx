import React from "react";
import Header from "../../components/Header/Header.component";
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
