import React from "react";

export default function Features() {
    return (
        <div className="w-4/5 flex flex-col md:flex-row mx-auto md:space-x-5 py-10">
            <img src="./images/about-us/choose-us.jpg" alt="djlfhkshd" className="w-full md:w-1/2"/>
            <div className="w-full md:w-1/2">
                <h3 className="font-sora font-bold text-xl pt-5 md:pt-0 text-center md:text-left">The <span className="text-primary">Global Adventures</span> Difference</h3>
                <p className="font-sans py-5">With so many travel companies out there, why choose Global Adventures for your next adventure? Here are just a few reasons:</p>
                <p className="font-sora font-bold">Features:</p>
                <ul className="list-disc pl-5 md:pl-20 pt-5">
                    <li className="font-sans"><span className="font-sora font-semibold">Expert Guides:</span> Our experienced and knowledgeable guides are passionate about the destinations they lead you through.</li>
                    <li className="font-sans"><span className="font-sora font-semibold">Customized Itineraries:</span> We work with you to design a trip that meets your unique needs and interests.</li>
                    <li className="font-sans"><span className="font-sora font-semibold">Sustainable Travel:</span> We believe in responsible travel practices that minimize our impact on the environment and support local communities.</li>
                    <li className="font-sans"><span className="font-sora font-semibold">Exceptional Service: </span> Our customer service team is available to assist you before, during, and after your trip.</li>
                </ul>
            </div>
        </div>
    )
}