import React from "react";

export default function Header(props) {
    return (
        <div>
            <div className="text-center py-12 w-4/5 md:w-3/5 mx-auto">
                <h2 className="text-2xl md:text-3xl font-sora font-bold">{props.title1} <span className="text-primary">{props.span}</span> {props.title2}</h2>
                <p className="font-sans pt-4 text-base md:text-lg">{props.subheadline}</p>
            </div>
        </div>
    )
}