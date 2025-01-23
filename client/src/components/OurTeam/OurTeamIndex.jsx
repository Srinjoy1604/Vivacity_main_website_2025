import React from "react";
const aws = import.meta.env.VITE_AWS;

const FestHeads = `${aws}/FestHeads.webp`;
const Council = `${aws}/council.webp`;
const Creative = `${aws}/creative.webp`;
const Dev = `${aws}/Dev.webp`;
const Sponsorship = `${aws}/Sponsorship.webp`;
const Events = `${aws}/Events.webp`;
const Logistics = `${aws}/Logistics.webp`;
const Curation = `${aws}/Curation.webp`;


function OurTeamIndex({ scrollToSection }) {
    return (
        <div className="grid place-items-center">
            <div className="grid max-[400px]:place-items-center grid-cols-2 gap-2 w-[100%] pb-[10%]">
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
