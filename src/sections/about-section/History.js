import React from "react";
import Header from "../../components/Header-section";
import HistoryAndMission from "../../components/History";

export default function History() {
    return (
        <div>
            <Header 
                span="Our Passion"
                title2="for Adventure"
                subheadline="Global Adventures was founded by a group of passionate adventurers with a shared love for exploring new places and challenging themselves in the great outdoors."
            />
            <HistoryAndMission />
        </div>
    )
}