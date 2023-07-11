import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import TravelPackage from "./pages/travelPackages";
import Destinations from "./pages/destinations";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Travel-Packages" element={<TravelPackage />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
}


