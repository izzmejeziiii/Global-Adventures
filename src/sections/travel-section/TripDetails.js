import React from "react";
import Header from "../../components/Header-section";
import TripDetailsCard from "../../components/TripDetails";

export default function TripDetails() {
    return (
        <div className="bg-light-gray w-full h-fit">
            <Header 
                span="What's Included"
                title2="in Your Adventure?"
                subheadline="We take care of all the details so you can focus on the adventure."
            />
            <TripDetailsCard />
        </div>
    )
}