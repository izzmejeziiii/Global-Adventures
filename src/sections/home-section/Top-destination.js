import React from "react";
import Header from "../../components/Header-section";
import Cards from "../../components/CardDestination";
import data from "../../datas/data";

export default function TopDestination() {
    const cards = data.map(card => { 
        return (
            <Cards 
                img={card.img} 
                destination={card.destination} 
                title={card.title} 
                description={card.description}
            />
        )
    })
    return (
        <div className="bg-light-gray w-full h-fit">
            <Header 
                title1="Discover Our"
                span="Top Destinations"
                subheadline="From the majestic mountains of Colorado to the wilds of Africa, we've got you covered."
            />
            <div className="flex flex-wrap w-4/5 gap-y-5 md:gap-x-4 mx-auto">
                {cards}
            </div>
            <div className="py-12 md:py-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-white text-sm md:text-base font-semibold font-sora rounded-b-lg rounded-t-lg">Explore More Destinations</button>
            </div>
        </div>
    )
}