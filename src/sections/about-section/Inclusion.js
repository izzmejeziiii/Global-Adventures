import React from "react";
import Features from "../../components/Features";

export default function Inclusion() {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl font-sora font-bold pt-12 text-center">Why <span className="text-primary">Choose Us</span></h2>
            <Features />
            <div className="pb-14 text-center">
                <button className="px-9 py-3.5 bg-primary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-sm md:text-base">Book Your Adventure</button>
            </div>
        </div>
    )
}