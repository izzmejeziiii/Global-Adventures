import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="text-center right-0 absolute top-[30%] md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/8 w-4/5 md:w-full">
            <h1 className="font-sora font-semibold text-white text-3xl md:text-5xl">Adventure Awaits. Are You Ready?</h1>
            <p className="font-sans font-normal text-white text-base md:text-lg py-5">Experience the thrill of the great outdoors with Global Adventures.</p>
            <Link to={"/Travel-Packages"}><button className="px-9 py-3.5 bg-secondary text-white text-sm md:text-base font-semibold font-sora rounded-b-lg rounded-t-lg mt-16 md:mt-28">Explore Our Packages</button></Link>
        </div>
    )
}