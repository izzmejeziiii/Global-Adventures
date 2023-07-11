import React from "react";

export default function HeroPage(props) {
    return (
        <div className="w-full h-96 relative bg-gradient-to-b from-gray-700 to-gray-700">
            <img src={`./images/${props.img}`} alt="hero" className="w-full h-full object-cover object-top absolute mix-blend-overlay"/>
            <div className="text-center w-4/5 right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8">
                <h2 className="font-sora font-bold text-3xl md:text-4xl text-white">{props.headline}</h2>
            </div>
        </div>
    )
}