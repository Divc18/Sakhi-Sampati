import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DomainSelection from "./components/DomainSelection";
import MentorLogin from "./components/MentorLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DomainSelection />} />
        <Route path="/mentor-login" element={<MentorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
