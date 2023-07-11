import React from "react";

export default function IconCards(props) {
    return (
        <div className="w-full md:w-3/12 h-fit text-center py-3 md:py-6 flex flex-col flex-auto mx-auto">
            <img src={`./images/home-page/${props.image}`} alt={props.alt} className="w-16 md:w-24 mx-auto"/>
            <h3 className="py-6 font-sora font-semibold text-lg md:text-xl">{props.title}</h3>
            <p className="font-sans">{props.description}</p>
        </div>
    )
}