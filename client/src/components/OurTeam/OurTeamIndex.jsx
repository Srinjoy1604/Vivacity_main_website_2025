import React from "react";
import FestHeads from "../../assets/images/FestHeads.png";
import Council from "../../assets/images/council.png";
import Creative from "../../assets/images/creative.png";
import Dev from "../../assets/images/Dev.png";
import Sponsorship from "../../assets/images/Sponsorship.png";
import Events from "../../assets/images/Events.png";
import Logistics from "../../assets/images/Logistics.png";
import Curation from "../../assets/images/Curation.png";

function OurTeamIndex({ scrollToSection }) {
    return (
        <div className="grid place-items-center">
            <div className="grid max-[400px]:place-items-center grid-cols-2 gap-2 w-[100%]">
                <div onClick={() => scrollToSection("festHeads")}>
                    <img src={FestHeads} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("council")}>
                    <img src={Council} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("creative")}>
                    <img src={Creative} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("dev")}>
                    <img src={Dev} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("sponsorship")}>
                    <img src={Sponsorship} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("events")}>
                    <img src={Events} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("logistics")}>
                    <img src={Logistics} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
                <div onClick={() => scrollToSection("curation")}>
                    <img src={Curation} className="w-[100%] h-[100%] min-[400px]:p-[2%]" />
                </div>
            </div>
        </div>
    );
}

export default OurTeamIndex;
