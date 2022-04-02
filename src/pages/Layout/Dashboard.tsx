import React from "react";
import Analytics from "../Analytic/Analytic.component";
import "../../styles/main/_main.styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="Dashboard">
      <Router>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/Analytics" element={<></>} />
          <Route path="/admin" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Dashboard;
