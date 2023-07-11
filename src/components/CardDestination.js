import React from "react";

export default function Cards(props) {
    return (
        <div className="w-full md:w-3/12 h-fit shadow-xl rounded-md flex flex-col flex-auto mx-auto relative">
            <div className="relative">
                <img src={`./images/home-page/${props.img}`} className="w-full rounded-t-md" alt="hskgfjdhg"/>
                <div className="bg-gradient-to-t from-slate-700 to-transparent h-full w-full p-4 absolute flex flex-col justify-end top-0">
                    <h3 className="font-sora font-semibold text-white text-xl">{props.destination}</h3>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-sora font-semibold text-xl">{props.title}</h3>
                <p className="font-sans py-5">{props.description}</p>
                <a href="##" className="font-sora text-sm md:text-base text-secondary font-semibold underline decoration-2">View Destination</a>
            </div>
        </div>
    )
}