import React from "react";

export default function SliderCards(props) {
    return (
        <div className="pr-2 md:px-4">
            <div className="relative">
                <div className="w-full h-fit bg-black opacity-70 absolute p-3 md:p-5 inset-x-0 bottom-0 rounded-b-lg">
                    <h3 className="font-sora font-semibold text-white text-lg md:text-xl">{props.title}</h3>
                    <p className="font-sans text-sm md:text-base text-white md:pt-2">{props.package}</p>
                </div>
                <img src={`./images/home-page/${props.image}`} className="w-full h-full object-contain rounded-lg" alt="jhsd" />
            </div>
        </div>
    )
}