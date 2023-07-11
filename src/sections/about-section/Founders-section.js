import React from "react";
import FoundersData from "../../datas/foundersData";
import Founders from "../../components/Founders";

export default function FoundersSection() {
    const founders = FoundersData.map( founder => {
        return (
            <Founders 
                img={founder.img}
                name={founder.name}
                position={founder.position}
                description={founder.description}
            />
        )
    })
    return (
        <div className="w-4/5 mx-auto py-14">
            <h3 className="pb-10 font-sora font-bold text-xl">Founders</h3>
            <div className="space-y-10">
                {founders}
            </div>
        </div>
    )
}