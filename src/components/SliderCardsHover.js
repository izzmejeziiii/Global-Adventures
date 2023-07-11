import React from "react";

export default function SliderCardsHover(props) {
    return (
        <div className="px-4">
            <div className="relative">
                <div className="w-full h-full bg-black opacity-50 absolute p-5 inset-x-0 bottom-0 rounded-lg"></div>
                <div className="absolute p-10">
                    <h3 className="font-sora font-semibold text-white text-xl pt-8">Rocky Mountain Adventure</h3>
                    <p className="font-sans text-white pt-7 pb-20">Experience the beauty of the Rocky Mountains on this thrilling hiking and camping trip.</p>
                    <a href="##" className="text-white font-semibold underline decoration-1">View Packages</a>
                </div>
                <img src="./images/home-page/hover-package1.jpg" className="w-full h-full object-contain rounded-lg" alt="jhsd" />
            </div>
        </div>
    )
}