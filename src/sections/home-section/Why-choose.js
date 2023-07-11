import React from "react";
import Header from "../../components/Header-section";
import IconCards from "../../components/IconCards";
import iconData from "../../datas/iconData";

export default function WhyChoose() {
    const icons = iconData.map (icon => {
        return (
            <IconCards 
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
                title1="Why"
                span="Choose"
                title2="Global Adventures"
                subheadline="We're the adventure travel experts, with years of experience and a passion for the great outdoors."
            />
            <div className="grid grid-cols-2 md:flex md:flex-wrap w-4/5 gap-y-4 gap-x-4 md:gap-x-8 mx-auto items-center justify-center">
                {icons}
            </div>
            <div className="py-12 md:py-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-sm md:text-base text-white font-semibold font-sora rounded-b-lg rounded-t-lg">Book Your Adventure</button>
            </div>
        </div>
    )
}