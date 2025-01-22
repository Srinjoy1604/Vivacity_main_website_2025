import React, { useRef } from "react";
import TeamArea from "../components/OurTeam/TeamArea";
import data from "./OurTeams.json";
import SpeakerL from "../assets/images/SpeakerL.webp";
import SpeakerR from "../assets/images/SpeakerR.webp";
import GuitarR from "../assets/images/GuitarR.webp";
import ThunderTL from "../assets/images/ThunderTopLeft.webp";
import ThunderTR from "../assets/images/ThunderTopRight.webp";
import ThunderBL from "../assets/images/ThunderBottomLeft.webp";
import ThunderBR from "../assets/images/ThunderBottomRight.webp";
import DvdR from "../assets/images/DVD.webp";
import StarL from "../assets/images/StarPattern.webp";
import PianoL from "../assets/images/InstrumentL.webp";
import PianoR from "../assets/images/InstrumentR.webp";
import BgPurple from "../assets/images/PurpleBg.webp";
import BgBlue from "../assets/images/BlueBg.webp";
import BgPink from "../assets/images/PinkBg.webp";
import BgGreen from "../assets/images/GreenBg.webp";
import BgViolet from "../assets/images/VioletBg.webp";
import PatternBlue from "../assets/images/BlueCrissCross.webp";
import PatternPink from "../assets/images/PinkCrissCross.webp";
import PatternViolet from "../assets/images/VioletCrissCross.webp";
import PatternGreen from "../assets/images/GreenCrissCross.webp";
import PatternDarkViolet from "../assets/images/DarkVioletCrissCross.webp";
import BlackDiscR from "../assets/images/BlackDisc.webp";
import ArrowL from "../assets/images/Bow.webp";
import BigThunderBR from "../assets/images/BigThunderBR.webp";
import ArrowBR from "../assets/images/ArrowBottomRight.webp";
import Mic from "../assets/images/Mic.webp";
import BlackDiscBL from "../assets/images/BlackDiskBottomLeft.webp";
import DvDTR from "../assets/images/DvDTopRight.webp";
import BowBR from "../assets/images/BowBottomRight.webp";
import Flower from "../assets/images/Flower.webp";
import Doghnut from "../assets/images/Donut.webp";
import OurMentors from "../assets/images/OurMentors.webp";
import OurTeamIndex from "../components/OurTeam/OurTeamIndex";
import OurTeamTitle from "../assets/images/OurTeam.webp";
import MentorMobile from "../assets/images/OurTeamsMentorMobile.png";
import MentorMobileText from "../assets/images/OurTeamsMentorTextMobile.png";
import asset from "../assets/images/MentorLine.webp";

function OurTeams() {
    const festHeadsRef = useRef(null);
    const councilRef = useRef(null);
    const creativeRef = useRef(null);
    const devRef = useRef(null);
    const sponsorshipRef = useRef(null);
    const eventsRef = useRef(null);
    const logisticsRef = useRef(null);
    const curationRef = useRef(null);

    const scrollToSection = (section) => {
        const refs = {
            festHeads: festHeadsRef,
            council: councilRef,
            creative: creativeRef,
            dev: devRef,
            sponsorship: sponsorshipRef,
            events: eventsRef,
            logistics: logisticsRef,
            curation: curationRef,
        };

        refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="overflow-hidden">
            <div
                className="relative sm:pt-[20%] pt-[25%] md:pt-[9%]"
                style={{
                    backgroundImage: `url(${BgGreen})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <img
                    src={PianoL}
                    style={{ top: "45%", left: 0 }}
                    className="absolute hidden lg:block"
                />
                <img
                    src={PianoR}
                    style={{ top: "40%", right: 0 }}
                    className="absolute hidden lg:block"
                />
                <div className="w-[100%] text-center font-ttr lg:text-[6.25rem] font-[600] text-[4.5rem] lg:mt-[0%] mt-[15%] flex justify-center items-center">
                        <div className="w-fit">
                            Our Mentors
                            <div className="w-[100%] flex justify-center items-center mt-[-3.25rem]"><img src={asset} className="rotate-[-4.75°] w-[90%]"></img></div>
                        </div>
                    </div>

                <div className="grid place-items-center w-[100%]">
                    <img src={OurMentors} className="p-[2%] pl-[8%] hidden md:block" />
                    <img src={MentorMobile} className="block md:hidden px-[7%] w-[100%]" />
                    <img src={MentorMobileText} className="block md:hidden px-[5%] w-[100%] h-[100%]"/>
                </div>
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
                <div className="md:hidden grid place-items-center p-[1%]">
                    <img src={OurTeamTitle} />
                </div>
                <div className="md:hidden block">
                    <OurTeamIndex scrollToSection={scrollToSection} />
                </div>
            </div>
            <div ref={festHeadsRef}>
                <TeamArea
                    SectionTitle={data[0].TitleName}
                    CardTeam={data[0].CardTeam}
                    Members={data[0].Members}
                    BgColor={BgPurple}
                    Pattern={PatternGreen}
                    RightOne={SpeakerL}
                    LeftOne={SpeakerR}
                    PositionArr={["48", "48", "0", "0"]}
                />
            </div>
            <div ref={councilRef}>
                <TeamArea
                    SectionTitle={data[1].TitleName}
                    CardTeam={data[1].CardTeam}
                    Members={data[1].Members}
                    BgColor={BgBlue}
                    Pattern={PatternViolet}
                    RightOne={PianoL}
                    LeftOne={GuitarR}
                    PositionArr={["30", "30", "0", "0"]}
                />
            </div>
            <div  ref={devRef}>
                <TeamArea
                    SectionTitle={data[2].TitleName}
                    CardTeam={data[2].CardTeam}
                    Members={data[2].Members}
                    BgColor={BgPink}
                    Pattern={PatternBlue}
                    RightOne={ThunderTR}
                    RightTwo={ThunderBR}
                    LeftOne={ThunderTL}
                    LeftTwo={ThunderBL}
                    PositionArr={["10", "10", "10", "10"]}
                />
            </div>
            <div ref={creativeRef}>
                <TeamArea
                    SectionTitle={data[3].TitleName}
                    CardTeam={data[3].CardTeam}
                    Members={data[3].Members}
                    BgColor={BgGreen}
                    Pattern={PatternPink}
                    RightOne={StarL}
                    LeftOne={DvdR}
                    PositionArr={["49", "55", "0", "0"]}
                />
            </div>
            <div ref={sponsorshipRef}>
                <TeamArea
                    SectionTitle={data[4].TitleName}
                    CardTeam={data[4].CardTeam}
                    Members={data[4].Members}
                    BgColor={BgPink}
                    Pattern={PatternGreen}
                    RightOne={ThunderTR}
                    RightTwo={BigThunderBR}
                    LeftOne={BlackDiscR}
                    LeftTwo={ArrowL}
                    PositionArr={["10", "16", "18", "29"]}
                />
            </div>
            <div ref={eventsRef}>
                <TeamArea
                    SectionTitle={data[5].TitleName}
                    CardTeam={data[5].CardTeam}
                    Members={data[5].Members}
                    BgColor={BgViolet}
                    Pattern={PatternPink}
                    RightOne={Flower}
                    LeftOne={PianoR}
                    LeftTwo={Mic}
                    RightTwo={ArrowBR}
                    PositionArr={["17", "30", "11", "15"]}
                />
            </div>
            <div ref={logisticsRef}>
                <TeamArea
                    SectionTitle={data[6].TitleName}
                    CardTeam={data[6].CardTeam}
                    Members={data[6].Members}
                    BgColor={BgBlue}
                    Pattern={PatternDarkViolet}
                    RightOne={Doghnut}
                    LeftOne={DvDTR}
                    LeftTwo={BlackDiscBL}
                    RightTwo={BowBR}
                    PositionArr={["17", "35", "11", "13"]}
                />
            </div>
            <div ref={curationRef}>
                <TeamArea
                    SectionTitle={data[7].TitleName}
                    CardTeam={data[7].CardTeam}
                    Members={data[7].Members}
                    BgColor={BgViolet}
                    Pattern={PatternBlue}
                    RightOne={Flower}
                    LeftOne={PianoR}
                    LeftTwo={Mic}
                    RightTwo={ArrowBR}
                    PositionArr={["17", "30", "11", "15"]}
                />
            </div>
        </div>
    );
}

export default OurTeams;
