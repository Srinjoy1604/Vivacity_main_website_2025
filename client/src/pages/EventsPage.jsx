import React from "react";
import DanceEvents from "../components/Events/DanceEvents";
import SpeakingArts from "../components/Events/SpeakingArtsEvents";
import DramaEvents from "../components/Events/DramaEvents";
import MusicEvents from "../components/Events/MusicEvents";
import PhotographyEvents from "../components/Events/PhotographyEvents";
import ArtEvents from "../components/Events/ArtEvents";
import QuizzingaEvents from "../components/Events/QuizzingaEvents";
import FashionEvents from "../components/Events/FashionEvents";
import Sahyog from "../components/Events/SocialEvents";
import Exciting from "../components/Events/ExcitingEvents";
function EventsPage() {
    return(
        <div>
            <DanceEvents />
            <SpeakingArts />
            <DramaEvents />
            <MusicEvents />
            <PhotographyEvents />
            <ArtEvents />
            <QuizzingaEvents />
            <FashionEvents />
            <Sahyog />
            <Exciting />
        </div>
    );
}

export default EventsPage;