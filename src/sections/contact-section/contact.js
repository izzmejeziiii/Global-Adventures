import React from "react";
import ContactForm from "../../components/Contact";
import ContactInformation from "../../components/ContactInfo";

export default function ContactUs() {
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex flex-col md:flex-row space-y-10 md:space-x-5">
                <ContactInformation />
                <div className="md:w-2/3">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}