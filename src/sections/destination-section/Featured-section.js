import React from "react";

export default function FeaturedDestination() {
    return (
        <div className="w-full h-fit relative bg-gradient-to-r from-black to-transparent">
            <img src="./images/destinations/macchu-picchu.jpg" alt="khdgfjhsdg" className="w-full h-full object-cover object-center absolute mix-blend-overlay"/>
            <div className="w-full px-6 py-10 md:w-3/6 md:py-16 md:pl-36 space-y-3 relative">
                <h3 className="font-sora font-semibold text-sm md:text-lg text-secondary uppercase">Featured Destination</h3>
                <h2 className="font-sora font-bold text-2xl md:text-3xl text-white">Experience the Ultimate Adventure in Peru</h2>
                <p className="font-sans text-white text-base md:text-lg">Join us on an unforgettable journey to one of the most fascinating countries in South America.</p>
                <div className="pt-5 text-left">
                    <button className="px-9 py-3.5 bg-secondary text-white text-sm md:text-base font-semibold font-sora rounded-b-lg rounded-t-lg">Learn More</button>
                </div>
            </div>
        </div>
    )
}