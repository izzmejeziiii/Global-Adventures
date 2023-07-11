import React from "react";
import WhiteNavbar from "../components/WhiteNavbar";
import ContactUs from "../sections/contact-section/contact";
import FAQs from "../sections/contact-section/Faqs";
import Footer from "../components/Footer";
// import MenuBar from "../components/MenuBar";

export default function Contact() {
    return (
        <div>
            <WhiteNavbar />
            <h2 className="text-3xl md:text-4xl font-sora font-bold py-14 text-center"><span className="text-primary">Contact</span> Us</h2>
            <ContactUs />
            <FAQs />
            <Footer />
            {/* <MenuBar /> */}
        </div>
    )
}