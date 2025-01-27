import React from "react";
import "../styles/PhotoUpload.css";  // If you want to use a separate CSS file

const PhotoUpload = () => {
  return (
    <div className="container">
      <h1>Photo Upload</h1>
      <form>
        <label htmlFor="photo">Upload Photo</label>
        <input type="file" id="photo" name="photo" accept="image/*" required />

        <label htmlFor="login-time">Login Time</label>
        <input type="datetime-local" id="login-time" name="login-time" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PhotoUpload;
