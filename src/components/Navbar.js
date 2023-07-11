import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import MenuBar from "./MenuBar";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex flex-row-reverse md:flex-row place-content-between items-center py-5 w-11/12 md:w-4/5 absolute m-auto left-0 right-0 ">
            <IoMenu className="md:hidden text-white text-3xl" onClick={() => setOpenMenu(true)}/>
            <MenuBar setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <Link to={"/"}><img src="./images/logo/logo-white.png" alt="logo" className="w-32 md:w-44"/></Link>
            <ul className="hidden md:flex w-3/6 md:place-content-between space-x-12 font-sora font-semibold text-base text-white">
                <li><Link to={"/Travel-Packages"}>Travel Packages</Link></li>
                <li><Link to={"/Destinations"}>Destinations</Link></li>
                <li><Link to={"/About-Us"}>About Us</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}