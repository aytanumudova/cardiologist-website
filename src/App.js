import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/homePage";
import Contact from "./pages/contact";
import AboutMe from "./pages/aboutMe";
import DiseasesPage from "./pages/diseasesPage";
import AboutDisease from "./pages/aboutDisease";
import ServicesPage from "./pages/servicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/diseasesPage" element={<DiseasesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutDisease/:slug" element={<AboutDisease />} />
        <Route path="/servicesPage" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
