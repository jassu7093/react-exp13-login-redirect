import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>📊 Dashboard</h2>
      <p>Welcome, Admin! You have successfully logged in.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        🔙 Logout
      </Link>
    </div>
  );
};

export default Dashboard;
