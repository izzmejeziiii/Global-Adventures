import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-footer w-full h-fit py-10">
            <div className="w-4/5 text-white flex flex-col md:flex-row md:place-content-center mx-auto gap-y-10">
                <div className="w-full md:w-3/4 md:flex md:gap-x-8 grid grid-cols-2 gap-y-5 text-center md:text-left gap-x-5">
                    <div className="md:w-10/12 w-full">
                        <ul className="font-sora">
                            <li className="uppercase font-bold pb-3"><Link to={"/Travel-Packages"}>Travel Packages</Link></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Adventure Travel Packages</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Trip Details and Inclusions</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Travel Packages</a></li>
                        </ul>
                    </div>
                    <div className="md:w-10/12 w-full">
                        <ul className="font-sora">
                            <li className="uppercase font-bold pb-3"><Link to={"/Destinations"}>Destinations</Link></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Explore Our Destinations</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Featured Destination</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Plan Your Adventure</a></li>
                        </ul>
                    </div>
                    <div className="md:w-8/12 w-full">
                        <ul className="font-sora">
                            <li className="uppercase font-bold pb-3"><Link to={"/About-Us"}>About Us</Link></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Our Story</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Our Team</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Why Choose Us</a></li>
                        </ul>
                    </div>
                    <div className="md:w-9/12 w-full">
                        <ul className="font-sora">
                            <li className="uppercase font-bold pb-3"><Link to={"/Contact"}>Contact</Link></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Contact Us</a></li>
                            <li className="pb-3 text-sm md:text-base"><a href="##">Customer Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-3/12">
                    <p className="uppercase font-sora font-bold text-center md:text-left">Travel With Us</p>
                    <div className="pt-5 relative">
                        <span class="absolute top-[22px] right-0 flex items-center pr-1">
                            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <img src="./images/footer/send.png" className="w-full" alt=""/>
                            </button>
                        </span>
                        <input className="bg-transparent border-solid border-1 border-white w-full px-3 pr-10 py-2 text-sm rounded-md focus:outline-none placeholder:font-sora" placeholder="Email Address"></input>
                    </div>
                </div>
            </div>
            <hr className="w-11/12 md:w-4/5 h-px bg-gray-300 border-0 dark:bg-gray-700 mx-auto mt-12" />
            <div className="w-4/5 p-8 my-5 mx-auto">
                <Link to={"/"}><img src="./images/logo/logo-white.png" className="w-32 md:w-44 mx-auto" alt="kdjksjhf"/></Link> 
            </div>
            <div className="flex flex-col md:flex-row md:w-4/5 w-11/12 gap-y-10 mx-auto text-white md:place-content-center items-center justify-center">
                <div className="flex space-x-3 md:space-x-4 md:w-[43%]">
                    <div>
                        <a href="##"><img src="./images/footer/fb.png" alt="kjdhfkd" className="w-[26px] md:w-[32px]"/></a>
                    </div>
                    <div>
                        <a href="##"><img src="./images/footer/twitter.png" alt="kjdhfkd" className="w-[26px] md:w-[32px]"/></a>
                    </div>
                    <div>
                        <a href="##"><img src="./images/footer/linkedin.png" alt="kjdhfkd" className="w-[26px] md:w-[32px]"/></a>
                    </div>
                    <div>
                        <a href="##"><img src="./images/footer/instagram.png" alt="kjdhfkd" className="w-[26px] md:w-[32px]"/></a>
                    </div>
                </div>
                <div className="flex place-content-between gap-x-[22%] md:gap-x-8 w-full md:w-[56%] md:place-content-center md:justify-between text-sm md:text-base">
                    <div className="text-left md:text-center font-extralight">
                        <p>All Rights Reserved.</p>
                        <p>Copyright 2023.</p>
                    </div>
                    <div className="text-right font-extralight">
                        <p>Privacy Policy |</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}