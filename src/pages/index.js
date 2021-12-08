import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Me from "./Me";
import Projects from "./Projects";
import Work from "./Work";
import Education from "./Education";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Pages;
