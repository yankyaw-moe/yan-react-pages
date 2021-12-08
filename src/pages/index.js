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
        <Route path="yan-react-pages/" element={<Me />} />
        <Route path="yan-react-pages/education" element={<Education />} />
        <Route path="yan-react-pages/work" element={<Work />} />
        <Route path="yan-react-pages/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default Pages;
