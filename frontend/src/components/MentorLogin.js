import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MentorLogin.css";  // Import the styles

const MentorLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mentorId, setMentorId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add validation or authentication logic
    // After successful login, navigate to the photo upload page
    navigate("/photo-upload");
  };

  return (
    <div className="container">
      <h1>Mentor Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="mentor-id">Mentor ID</label>
        <input
          type="text"
          id="mentor-id"
          name="mentor-id"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default MentorLogin;
