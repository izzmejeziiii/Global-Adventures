import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenu } from "react-icons/io5"
import MenuBar from "./MenuBar"

export default function WhiteNavbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="w-full py-5 shadow-md shadow-slate-500 top-0 bottom-0 bg-white">
            <nav className="flex flex-row-reverse md:flex-row place-content-between items-center w-11/12 md:w-4/5 m-auto left-0 right-0">
                <IoMenu className="md:hidden text-black text-3xl" onClick={() => setOpenMenu(true)}/>
                <MenuBar setOpenMenu={setOpenMenu} openMenu={openMenu} />
                <Link to={"/"}><img src="./images/logo/logo-black.png" alt="logo" className="w-32 md:w-44"/></Link>
                <ul className="hidden md:flex w-3/6 md:place-content-between space-x-12 font-sora font-semibold text-base text-black">
                    <li><Link to={"/Travel-Packages"}>Travel Packages</Link></li>
                    <li><Link to={"/Destinations"}>Destinations</Link></li>
                    <li><Link to={"/About-Us"}>About Us</Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}