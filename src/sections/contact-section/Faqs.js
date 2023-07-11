import React from "react";
import FaqAccordion from "../../components/Accordion";

export default function FAQs() {
    return (
        <div className="py-14 w-4/5 mx-auto">
            <h2 className="text-xl md:text-3xl font-sora font-bold text-center md:text-left"><span className="text-primary">Frequently Asked Questions</span> (FAQs)</h2>
            <p className="font-sans py-4 text-base md:text-lg">Find the Information You Need for Your Unforgettable Journey!</p>
            <div className="w-full mx-auto">
                <ul className="flex flex-col">
                    <FaqAccordion />
                </ul>
            </div>
        </div>
    )
}