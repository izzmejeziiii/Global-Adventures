import React from "react";

export default function ContactInformation() {
    return (
        <div className="my-auto">
            <h3 className="font-sora font-semibold text-xl"><span className="text-primary">Get in Touch</span> with Global Adventures</h3>
            <p className="font-sans py-5">Have a question or need help planning your adventure? We're here to help.</p>
            <p className="font-sora font-bold">Address:</p>
            <p className="font-sans py-5">Global Adventures Inc., 123 Main Street, Suite 456, Anytown, USA</p>
            <p className="font-sora font-bold">Phone:</p>
            <p className="font-sans py-5">555-123-4567</p>
            <p className="font-sora font-bold pb-5">Email:</p>
            <a href="##" className="font-sans text-light-blue underline decoration-1">info@globaladventures.com</a>
        </div>
    )
}