import React from "react";
import Header from "../../components/Header-section";
import PlanningIcons from "../../datas/planningIcon";
import DestinationIconCards from "../../components/DestinationIcon";

export default function PlanYourAdventure() {
    const icons = PlanningIcons.map (icon => {
        return (
            <DestinationIconCards 
                image={icon.image}
                alt={icon.alt}
                title={icon.title}
                description={icon.description}
            />
        )
    })
    return (
        <div>
            <Header 
                title1="Let Us Help You"
                span="Plan the Perfect Trip"
                subheadline="Our expert travel planners can help you design a custom itinerary for your dream adventure."
            />
            <div className="grid grid-cols-2 w-11/12 gap-y-10 gap-x-4 md:flex md:flex-wrap md:w-4/5 md:gap-x-4 mx-auto items-center justify-center">
                {icons}
            </div>
            <div className="py-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-sm md:text-base">Contact Us</button>
            </div>
        </div>
    )
}