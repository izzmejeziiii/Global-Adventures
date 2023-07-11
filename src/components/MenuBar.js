import React from "react";
import { Link } from "react-router-dom";


export default function MenuBar(props) {
    const { openMenu, setOpenMenu } = props;

    return (
        <div className={`fixed md:hidden w-[80%] h-[100vh] bg-footer p-5 space-y-10 transition-all duration-300 ease-in-out right-0 top-0 bottom-0 z-30 ${openMenu ? "translate-x-0" : "translate-x-[100vw]"}`}>
            <button type="button" className="inline-flex text-gray-300 hover:text-gray-500 focus:outline-none text-right" onClick={() => setOpenMenu(false)}>
              <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="w-4/5 mx-auto">
                <ul className="text-white text-center space-y-10 font-sora font-semibold">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/Travel-Packages"}>Travel Packages</Link></li>
                    <li><Link to={"/Destinations"}>Destinations</Link></li>
                    <li><Link to={"/About-Us"}>About Us</Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                </ul>
            </nav>
            <footer className="text-center font-sans font-light text-sm text-white absolute bottom-0 pb-5 left-0 right-0 mx-auto">
                <p>All Rights Reserved.</p>
                <p>Copyright 2023</p>
            </footer>
        </div>
    )
}