import React from "react";
import Header from "../../components/Header-section";
import PackageCards from "../../components/PackageCards";
import packageData from "../../datas/packageData";

export default function ChooseAdventure() {
    const cards = packageData.map(card => {
        return (
            <PackageCards 
                img={card.img}
                package={card.package}
                title={card.title}
                duration={card.duration}
                price={card.price}
                description={card.description}
                highlights={card.highlights}
            />
        )
    })
    return (
        <div>
            <Header 
                span="Choose"
                title2="Your Adventure"
                subheadline="From hiking to surfing to wildlife watching, we've got the perfect outdoor adventure for you."
            />
            <div className="flex flex-col md:flex-row w-4/5 md:gap-x-4 gap-y-5 mx-auto pb-12">
                {cards}
            </div>
        </div>
    )
}