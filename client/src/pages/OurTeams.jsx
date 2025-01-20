import React, { useRef, useEffect } from "react";
import TeamArea from "../components/OurTeam/TeamArea";
import data from "./OurTeams.json";
import SpeakerL from "../assets/images/SpeakerL.png";
import SpeakerR from "../assets/images/SpeakerR.png";
import GuitarR from "../assets/images/GuitarR.png";
import ThunderTL from "../assets/images/ThunderTopLeft.png";
import ThunderTR from "../assets/images/ThunderTopRight.png";
import ThunderBL from "../assets/images/ThunderBottomLeft.png";
import ThunderBR from "../assets/images/ThunderBottomRight.png";
import DvdR from "../assets/images/DVD.png";
import StarL from "../assets/images/StarPattern.png";
import PianoL from "../assets/images/InstrumentL.png";
import PianoR from "../assets/images/InstrumentR.png";
import BgPurple from "../assets/images/PurpleBg.png";
import BgBlue from "../assets/images/BlueBg.png";
import BgPink from "../assets/images/PinkBg.png";
import BgGreen from "../assets/images/GreenBg.png";
import BgViolet from "../assets/images/VioletBg.png";
import PatternBlue from "../assets/images/BlueCrissCross.png";
import PatternPink from "../assets/images/PinkCrissCross.png";
import PatternViolet from "../assets/images/VioletCrissCross.png";
import PatternGreen from "../assets/images/GreenCrissCross.png";
import PatternDarkViolet from "../assets/images/DarkVioletCrissCross.png";
import BlackDiscR from "../assets/images/BlackDisc.png";
import ArrowL from "../assets/images/Bow.png";
import BigThunderBR from "../assets/images/BigThunderBR.png";
import ArrowBR from "../assets/images/ArrowBottomRight.png";
import Mic from "../assets/images/Mic.png";
import BlackDiscBL from "../assets/images/BlackDiskBottomLeft.png";
import DvDTR from "../assets/images/DvDTopRight.png";
import BowBR from "../assets/images/BowBottomRight.png";
import Flower from "../assets/images/Flower.png";
import Doghnut from "../assets/images/Donut.png";
import OurMentors from "../assets/images/OurMentors.png";
import OurTeamIndex from "../components/OurTeam/OurTeamIndex";
import OurTeamTitle from "../assets/images/OurTeam.png";
function OurTeams() {
    return (
        <div className="overflow-hidden">
            <div className="relative"
                style={{
                    backgroundImage: `url(${BgGreen})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <img
                    src={PianoL}
                    style={{ top: `38%`, left: 0 }}
                    className="absolute hidden lg:block"
                />
                <img
                    src={PianoR}
                    style={{ top: `30%`, right: 0 }}
                    className="absolute hidden lg:block"
                />
                <h1 className="w-[100%] text-center font-ttr lg:text-[6.25rem] font-[600] text-[4.5rem] p-[1.5%]">Our Mentors</h1>

                <div className="grid place-items-center w-[100%]"><img src={OurMentors} className="p-[2%] pl-[8%]"></img></div>
                <div className="w-[100%] flex items-center text-center flex-wrap justify-center p-[2%]">
                    <h3 className="font-vetosans font-[600] text-[1.375rem] w-[64%]">
                        Our Mentors:{" "}
                        {[
                            "Ajay Raj",
                            "Prathmesh",
                            "Manas",
                            "Vansh",
                            "Harsh",
                            "Mridul",
                            "Vipul",
                            "Vuuren",
                            "Aviral",
                            "Nehal",
                            "Pushpak",
                            "Shaambhavi",
                        ].join(", ")}
                    </h3>
                </div>
                <div className="md:hidden grid place-items-center p-[1%]"><img src={OurTeamTitle}></img></div>
                <div className="md:hidden block">
                    <OurTeamIndex />
                </div>

            </div>
            <TeamArea SectionTitle={data[0].TitleName} CardTeam={data[0].CardTeam} Members={data[0].Members} BgColor={BgPurple} Pattern={PatternGreen} RightOne={SpeakerL} LeftOne={SpeakerR} PositionArr={["48", "48", "0", "0"]} />
            <TeamArea SectionTitle={data[1].TitleName} CardTeam={data[1].CardTeam} Members={data[1].Members} BgColor={BgBlue} Pattern={PatternViolet} RightOne={PianoL} LeftOne={GuitarR} PositionArr={["30", "30", "0", "0"]} />
            <TeamArea SectionTitle={data[2].TitleName} CardTeam={data[2].CardTeam} Members={data[2].Members} BgColor={BgPink} Pattern={PatternBlue} RightOne={ThunderTR} RightTwo={ThunderBR} LeftOne={ThunderTL} LeftTwo={ThunderBL} PositionArr={["10", "10", "10", "10"]} />
            <TeamArea SectionTitle={data[3].TitleName} CardTeam={data[3].CardTeam} Members={data[3].Members} BgColor={BgGreen} Pattern={PatternPink} RightOne={StarL} LeftOne={DvdR} PositionArr={["49", "55", "0", "0"]} />
            <TeamArea SectionTitle={data[4].TitleName} CardTeam={data[4].CardTeam} Members={data[4].Members} BgColor={BgPink} Pattern={PatternGreen} RightOne={ThunderTR} RightTwo={BigThunderBR} LeftOne={BlackDiscR} LeftTwo={ArrowL} PositionArr={["10", "16", "18", "29"]} />
            <TeamArea SectionTitle={data[5].TitleName} CardTeam={data[5].CardTeam} Members={data[5].Members} BgColor={BgViolet} Pattern={PatternPink} RightOne={Flower} LeftOne={PianoR} LeftTwo={Mic} RightTwo={ArrowBR} PositionArr={["17", "30", "11", "15"]} />
            <TeamArea SectionTitle={data[6].TitleName} CardTeam={data[6].CardTeam} Members={data[6].Members} BgColor={BgBlue} Pattern={PatternDarkViolet} RightOne={Doghnut} LeftOne={DvDTR} LeftTwo={BlackDiscBL} RightTwo={BowBR} PositionArr={["17", "35", "11", "13"]} />
            <TeamArea SectionTitle={data[7].TitleName} CardTeam={data[7].CardTeam} Members={data[7].Members} BgColor={BgViolet} Pattern={PatternBlue} RightOne={Flower} LeftOne={PianoR} LeftTwo={Mic} RightTwo={ArrowBR} PositionArr={["17", "30", "11", "15"]} />

        </div>
    )
}

export default OurTeams;