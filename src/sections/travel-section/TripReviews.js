import React from "react";
import Header from "../../components/Header-section";
import CarouselReview from "../../components/Carousel2";

export default function TripReviews() {
    return (
        <div>
            <Header 
                span="Trip Reviews:"
                title2="Hear From Our Adventurers"
                subheadline="Our past travelers rave about their experiences with Global Adventures."
            />
            <CarouselReview />
            <div className="py-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-sm md:text-base">Book Your Adventure</button>
            </div>
        </div>
    )
}