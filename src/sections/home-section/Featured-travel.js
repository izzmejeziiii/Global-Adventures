import React from "react";
import Header from "../../components/Header-section";
import Carousel from "../../components/Slider1";

export default function Featured() {
    return (
        <div>
            <Header 
                title1="Our"
                span="Featured Travel"
                title2="Packages"
                subheadline="Discover the world's most exciting outdoor destinations with Global Adventures."
            />
            <Carousel />
            <div className="py-12 md:py-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-white text-sm md:text-base font-semibold font-sora rounded-b-lg rounded-t-lg">View All Packages</button>
            </div>
        </div>
    )
}