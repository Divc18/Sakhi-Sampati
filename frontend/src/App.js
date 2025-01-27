import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DomainSelection from "./components/DomainSelection";
import MentorLogin from "./components/MentorLogin";
import PhotoUpload from "./components/PhotoUpload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DomainSelection />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
        <Route path="/photo-upload" element={<PhotoUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
