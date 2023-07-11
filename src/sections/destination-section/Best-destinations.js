import React from "react";
import Header from "../../components/Header-section";
import DestinationCarousel from "../../components/Carousel3";

export default function BestDestinations() {
    return (
        <div>
            <Header 
                title1="Discover the"
                span="Best Destinations"
                title2="for Your Next Adventure"
                subheadline="From the mountains to the coast, Global Adventures has a variety of exciting destinations for all types of travelers."
            />
            <DestinationCarousel />
        </div>
    )
}