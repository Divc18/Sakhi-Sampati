import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DomainSelection.css";  // Move styles to a separate CSS file

const DomainSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to Sakhi Sampatti</h1>
      <p>Please select your domain to log in:</p>
      <div className="domain-selection">
        <button onClick={() => navigate("/user-login")}>User Login</button>
        <button onClick={() => navigate("/mentor-login")}>Mentor Login</button>
        <button onClick={() => navigate("/admin-login")}>Admin Login</button>
      </div>
    </div>
  );
};

export default DomainSelection;
