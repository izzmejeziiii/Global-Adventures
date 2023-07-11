import React from "react";

export default function ContactForm() {
    return (
        <div className="w-full h-fit bg-gray p-5 md:p-10 rounded-lg space-y-7">
            <div className="flex space-x-2 md:space-x-5">
                <div className="w-1/2">
                    <label className="font-sans font-light text-sm md:text-base">First Name</label>
                    <input type="text" className="p-3 w-full rounded-md border-1 border-gray-500 mt-2 font-sans"></input>
                </div>
                <div className="w-1/2">
                    <label className="font-sans font-light text-sm md:text-base">Last Name</label>
                    <input type="text" className="p-3 w-full rounded-md border-1 border-gray-500 mt-2 font-sans"></input>
                </div>
            </div>
            <div className="flex space-x-2 md:space-x-5">
                <div className="w-1/2">
                    <label className="font-sans font-light text-sm md:text-base">Email</label>
                    <input type="text" className="p-3 w-full rounded-md border-1 border-gray-500 mt-2 font-sans"></input>
                </div>
                <div className="w-1/2">
                    <label className="font-sans font-light text-sm md:text-base">Phone Number</label>
                    <input type="text" className="p-3 w-full rounded-md border-1 border-gray-500 mt-2 font-sans"></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <label className="font-sans font-light text-sm md:text-base">Message</label>
                    <textarea rows={6} className="w-full mt-2 rounded-md border-1 border-gray-500 p-3"></textarea>
                </div>
            </div>
            <div className="text-center">
                <button className="px-9 py-3.5 bg-secondary text-white font-semibold font-sora rounded-b-lg rounded-t-lg text-sm md:text-base">Submit</button>
            </div>
        </div>
    )
}