import React from "react";
import "../styles/MentorLogin.css";// Move styles to a separate CSS file

const MentorLogin = () => {
  return (
    <div className="container">
      <h1>Mentor Login</h1>
      <form action="/photo_upload">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="mentor-id">Mentor ID</label>
        <input type="text" id="mentor-id" name="mentor-id" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default MentorLogin;
