import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";
import HeroPage from "../components/HeroPage";
import ChooseAdventure from "../sections/travel-section/Choose";
import TripDetails from "../sections/travel-section/TripDetails";
import TripReviews from "../sections/travel-section/TripReviews";
import Footer from "../components/Footer";

export default function TravelPackage() {
    return (
        <div>
            <WhiteNavbar />
            <HeroPage 
                img="travel-packages/travel-hero.jpg"
                headline="Travel Packages"
            />
            <ChooseAdventure />
            <TripDetails />
            <TripReviews />
            <Footer />
        </div>
    )
}