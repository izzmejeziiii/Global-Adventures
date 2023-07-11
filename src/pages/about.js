import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";
import HeroPage from "../components/HeroPage";
import History from "../sections/about-section/History";
import FoundersSection from "../sections/about-section/Founders-section";
import MeetTheTeam from "../sections/about-section/Team-section";
import Inclusion from "../sections/about-section/Inclusion";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <WhiteNavbar />
            <HeroPage 
                img="about-us/hero-page.jpg"
                headline="About Us"
            />
            <History />
            <FoundersSection />
            <MeetTheTeam />
            <Inclusion />
            <Footer />
        </div>
    )
}