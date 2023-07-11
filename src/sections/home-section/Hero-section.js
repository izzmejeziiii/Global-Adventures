import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-b from-slate-800 to-transparent h-screen w-full relative">
            <img src="./images/home-page/hero-img.png" alt="" className="w-full h-full object-cover absolute mix-blend-overlay"/>
            <Hero />
            <Navbar />
        </div>
    )
}