import React from "react";

export default function DestinationCarouselCards(props) {
    return (
        <div className="w-full flex flex-col-reverse md:flex-row mx-auto md:space-x-10">
            <div className="w-full md:h-fit md:w-1/2 md:pt-0 pt-5 md:my-auto md:space-y-5">
                <h3 className="font-sora font-semibold text-xl md:text-2xl uppercase w-full">{props.destination}</h3>
                <p className="font-sans py-5 md:p-0">{props.description}</p>
                <p className="font-sans"><span className="font-sora font-semibold">Highlights: </span>{props.highlights}</p>
                <div className="pt-10 md:pt-5 text-left">
                    <button className="px-9 py-3.5 bg-primary text-white text-sm md:text-base font-semibold font-sora rounded-b-lg rounded-t-lg">Learn More</button>
                </div>
            </div>
            <div className="w-full md:w-1/2 md:h-fit h-fit">
                <img src={`./images/destinations/${props.img}`} className="w-full object-cover object-center" alt="jhsd" />
            </div>
        </div>
    )
}