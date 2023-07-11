import React from "react";
import HeroSection from "../sections/home-section/Hero-section";
import Featured from "../sections/home-section/Featured-travel";
import WhyChoose from "../sections/home-section/Why-choose";
import Footer from "../components/Footer";
import TopDestination from "../sections/home-section/Top-destination";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <Featured />
      <TopDestination />
      <WhyChoose />
      <Footer />
    </div>
  );
}


