import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";
import HeroPage from "../components/HeroPage";
import BestDestinations from "../sections/destination-section/Best-destinations";
import FeaturedDestination from "../sections/destination-section/Featured-section";
import PlanYourAdventure from "../sections/destination-section/Planning";
import Footer from "../components/Footer";

export default function Destinations() {
    return (
        <div>
            <WhiteNavbar />
            <HeroPage 
                img="destinations/hero.jpg"
                headline="Choose Your Destination"
            />
            <BestDestinations />
            <FeaturedDestination />
            <PlanYourAdventure />
            <Footer />
        </div>
    )
}