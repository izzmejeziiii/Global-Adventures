import React from "react";

export default function DestinationIconCards(props) {
    return (
        <div className="w-full md:w-2/12 h-fit text-center md:px-6 md:py-10 flex flex-col flex-auto mx-auto">
            <img src={`./images/destinations/${props.image}`} alt={props.alt} className="w-16 md:w-24 mx-auto"/>
            <h3 className="py-6 font-sora font-semibold text-lg md:text-xl">{props.title}</h3>
            <p className="font-sans">{props.description}</p>
        </div>
    )
}