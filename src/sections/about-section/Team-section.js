import React from "react";
import Header from "../../components/Header-section";
import TeamId from "../../components/TeamCard";
import TeamData from "../../datas/teamData";

export default function MeetTheTeam() {
    const teamid = TeamData.map( teams => {
        return (
            <TeamId 
                img={teams.img}
                name={teams.name}
                position={teams.position}
            />
        )
    })
    return (
        <div className="w-full bg-light-gray h-fit">
            <Header 
                title1="Meet Our"
                span="Expert Team"
                subheadline="Our team of experienced travel professionals are passionate about helping you plan the adventure of a lifetime."
            />
            <div className="w-4/5 mx-auto pb-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-10">
                    {teamid.slice(0, 8).map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        {item}
                    </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center items-center p-6 md:pt-12 space-x-4 md:space-x-8">
                    {teamid.slice(8).map((item, index) => (
                    <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}