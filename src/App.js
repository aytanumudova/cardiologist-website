import React from "react";
import "./main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/homePage";
import Contact from "./pages/contact";
import AboutMe from "./pages/aboutMe";
import DiseasesPage from "./pages/diseasesPage";
import AboutDisease from "./pages/aboutDisease";
import ServicesPage from "./pages/servicesPage";
import AtMediaPage from "./pages/atMediaPage";
import OneVideoPage from "./pages/oneVideoPage";
import ScrollToTop from "./components/srcrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/diseasesPage" element={<DiseasesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dis/:slug" element={<AboutDisease />} />
        <Route path="/vid/:slug" element={<OneVideoPage />} />
        <Route path="/servicesPage" element={<ServicesPage />} />
        <Route path="/atMediaPage" element={<AtMediaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
