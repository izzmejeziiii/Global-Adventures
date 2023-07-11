import React from "react";

export default function Founders(props) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-fit mx-auto">
                <img src={`./images/about-us/${props.img}`} alt="dhgf" className="w-44 h-44 md:w-52 md:h-52 shadow rounded-full object-cover align-middle border-none"/>
            </div>
            <div className="w-full md:w-10/12 md:pl-12">
                <h3 className="font-sora font-bold text-xl md:text-2xl uppercase text-primary pt-3 text-center md:text-left">{props.name}</h3>
                <p className="font-sora font-semibold text-center md:text-left">{props.position}</p>
                <p className="font-sans pt-8">{props.description}</p>
            </div>
        </div>
    )
}