import React, { useRef, useEffect } from "react";
const aws = import.meta.env.VITE_AWS;

// const YellowLower = `${aws}/CardYellowBellowPattern.webp`;
const YellowTop = `${aws}/CardYellowTopPattern.webp`;
const mail = `${aws}/mail_heart_svgrepo.webp`;
const Insta = `${aws}/vimeo_social_logo.webp`;
const YellowLower = `${aws}/CardYellowBellowPattern.webp`;

function TeamCard({ CardData }) {
    return (
        <div className="relative aspect-[100/133] lg:w-[21.6vw] sm:w-[60vw] w-[85vw] max-w-[400px] "
            style={{
                backgroundImage: `url(${CardData.Image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                
            }}
        >
            <div className="w-[100%] absolute bottom-0 h-[30%] text-center "
                style={{
                    backgroundImage: `url(${YellowLower})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    
                }}
            >
                <div className="grid grid-flow-row place-items-center  w-[100%] pt-[1%] mt-[10%]">
                    <h2 className="w-[100%] text-center font-vetosansbold font-[900] text-[1.4rem] min-[285px]:text-[1.6rem] xl:text-[1.75rem] lg:text-[1.5rem] min-sm:text-[1.4rem] ">{CardData.Name}</h2>
                    <h3 className="w-[100%] text-center font-rfabb font-[400] text-[1.2rem] xl:text-[1.2rem] lg:text-[1.2rem] min-sm:text-[1rem] ">{CardData.Position}</h3>
                </div>
            </div>
            <div className="w-[30%] h-[11%] absolute top-0  right-0 text-center"
                style={{
                    backgroundImage: `url(${YellowTop})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="flex justify-evenly items-center h-[100%] w-[100%] ml-[5%]">
                    <a href={`mailto:${CardData.EmailLink}`}><img  className="cursor-pointer w-[100%] h-auto" src={mail}></img></a>
                    <a href={`${CardData.InstagramLink}`} target="_blank"><img src={Insta} className="cursor-pointer w-[100%] h-auto"></img></a>
                </div>
            </div>
        </div>
    )
}

export default TeamCard;