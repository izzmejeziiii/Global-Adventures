import React from "react";

export default function TripDetailsCard() {
    return (
        <div className="w-11/12 md:w-4/5 md:flex mx-auto md:space-x-10 pb-12">
            <img src="./images/travel-packages/included-adventure.jpg" alt="djlfhkshd" className="hidden md:w-1/2"/>
            <div className="md:w-1/2 w-full space-y-4">
                <div className="space-y-6">
                    <div className="flex gap-x-5">
                        <p className="font-sora font-semibold w-5/12">Accommodation:</p>
                        <p className="font-sans w-8/12">Stay in comfortable and convenient lodgings throughout your trip.</p>
                    </div>
                    <div className="flex gap-x-5">
                        <p className="font-sora font-semibold w-5/12">Meals:</p>
                        <p className="font-sans w-8/12">Enjoy delicious and healthy meals prepared by our expert chefs.</p>
                    </div>
                    <div className="flex gap-x-5">
                        <p className="font-sora font-semibold w-5/12">Activities:</p>
                        <p className="font-sans w-8/12">Experience the best outdoor activities in each destination, with equipment and guides provided.</p>
                    </div>
                    <div className="flex gap-x-5">
                        <p className="font-sora font-semibold w-5/12">Transportation:</p>
                        <p className="font-sans w-8/12">We'll take care of all transportation throughout your trip, including flights and ground transport.</p>
                    </div>
                </div>
                <div className="text-center">
                    <button className="px-9 py-3.5 bg-primary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-sm md:text-base">Book Your Adventure</button>
                </div>
            </div>
        </div>
    )
}