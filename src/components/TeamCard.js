import React from "react";

export default function TeamId(props) {
    return (
        <div className="w-fit">
            <img src={`./images/about-us/${props.img}`} alt="dhgf" className="w-36 h-36 md:w-44 md:h-44 shadow rounded-full object-cover align-middle border-none mx-auto"/>
            <div className="text-center">
                <h3 className="font-sora font-bold text-lg md:text-xl uppercase text-primary pt-5">{props.name}</h3>
                <p className="font-sans">{props.position}</p>
            </div>
        </div>
    )
}