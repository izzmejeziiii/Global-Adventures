import React from "react";

export default function PackageCards(props) {
    return (
        <div className="w-full md:w-3/12 h-fit shadow-xl rounded-md flex flex-col flex-auto mx-auto relative">
            <div className="relative">
                <img src={`./images/travel-packages/${props.img}`} className="w-full object-cover rounded-t-md" alt="hskgfjdhg"/>
                <div className="bg-gradient-to-t from-gray-700 to-transparent h-full w-full p-4 absolute flex flex-col justify-end top-0">
                    <div className="absolute top-0 py-4">
                        <p className="font-sora font-semibold">{props.package}</p>
                    </div>
                    <h3 className="font-sora font-semibold text-white text-xl">{props.title}</h3>
                </div>
            </div>
            <div className="p-4">
                <div className="flex md:space-x-12 space-x-5">
                    <div className="flex md:space-x-5 space-x-3">
                        <p className="font-sora font-semibold">Duration:</p>
                        <p className="font-sans">{props.duration}</p>
                    </div>
                    <div className="flex md:space-x-5 space-x-3">
                        <p className="font-sora font-semibold">Price:</p>
                        <p className="font-sans">{props.price}</p>
                    </div>
                </div>
                <p className="font-sans py-5">{props.description}</p>
                <p className="font-sora font-semibold">Highlights:</p>
                <p className="font-sans pt-5">{props.highlights}</p>
            </div>
            <div className="py-4 text-center">
                <button className="px-9 py-3.5 bg-primary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-xs md:text-base">Book Now</button>
            </div>
        </div>
    )
}