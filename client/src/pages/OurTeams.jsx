import React, { useRef } from "react";
import TeamArea from "../components/OurTeam/TeamArea";
// import data from "./OurTeamsData";
import OurTeamIndex from "../components/OurTeam/OurTeamIndex";

const aws = import.meta.env.VITE_AWS;
import data from "./OurTeams.json";
const SpeakerL = `${aws}/SpeakerL.webp`;
const SpeakerR = `${aws}/SpeakerR.webp`;
const GuitarR = `${aws}/GuitarR.webp`;
const ThunderTL = `${aws}/ThunderTopLeft.webp`;
const ThunderTR = `${aws}/ThunderTopRight.webp`;
const ThunderBL = `${aws}/ThunderBottomLeft.webp`;
const ThunderBR = `${aws}/ThunderBottomRight.webp`;
const DvdR = `${aws}/DVD.webp`;
const StarL = `${aws}/StarPattern.webp`;
const PianoL = `${aws}/InstrumentL.webp`;
const PianoR = `${aws}/InstrumentR.webp`;
const BgPurple = `${aws}/PurpleBg.webp`;
const BgBlue = `${aws}/BlueBg.webp`;
const BgPink = `${aws}/PinkBg.webp`;
const BgGreen = `${aws}/GreenBg.webp`;
const BgViolet = `${aws}/VioletBg.webp`;
const PatternBlue = `${aws}/BlueCrissCross.webp`;
const PatternPink = `${aws}/PinkCrissCross.webp`;
const PatternViolet = `${aws}/VioletCrissCross.webp`;
const PatternGreen = `${aws}/GreenCrissCross.webp`;
const PatternDarkViolet = `${aws}/DarkVioletCrissCross.webp`;
const BlackDiscR = `${aws}/BlackDisc.webp`;
const ArrowL = `${aws}/Bow.webp`;
const BigThunderBR = `${aws}/BigThunderBR.webp`;
const ArrowBR = `${aws}/ArrowBottomRight.webp`;
const Mic = `${aws}/Mic.webp`;
const BlackDiscBL = `${aws}/BlackDiskBottomLeft.webp`;
const DvDTR = `${aws}/DvDTopRight.webp`;
const BowBR = `${aws}/BowBottomRight.webp`;
const Flower = `${aws}/Flower.webp`;
const Doghnut = `${aws}/Donut.webp`;
const OurMentors = `${aws}/OurMentors.webp`;
const OurTeamTitle = `${aws}/OurTeam.webp`;
const MentorMobile = `${aws}/OurTeamsMentorMobile.webp`;
const MentorMobileText = `${aws}/OurTeamsMentorTextMobile.webp`;
const asset = `${aws}/MentorLine.webp`;

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
                className="relative pt-[25%] sm:pt-[20%] md:pt-[10%] pb-[5%]"
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
                            <div className="w-[100%] flex justify-center items-center mt-[-2.25rem] lg:mt-[-3.25rem]"><img src={asset} className="rotate-[-4.75°] w-[100%] lg:w-[85%]"></img></div>
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
                    Pattern={PatternDarkViolet}
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
                    Pattern={PatternViolet}
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


// const x= {
//     "TitleName": "Coverage Team",
//     "CardTeam": [
//         {
//             "Name": "Krishna Manchanda",
//             "Position": "Coverage head",
//             "Image": "/Skeleton.webp",
//             "EmailLink": "krishhh.jpg@gmail.com",
//             "InstagramLink": "https://www.instagram.com/krishhh.jpg?igsh=MXRpaXNrajdrZXgy&utm_source=qr"
//         },
//         {
//             "Name": "Imagination Club",
//             "Position": "Coverage Partner",
//             "Image": "/Skeleton.webp",
//             "EmailLink": "imagination@lnmiit.ac.in",
//             "InstagramLink": "https://www.instagram.com/imagination.lnmiit?igshid=YmMyMTA2M2Y%3D"
//         }
//     ],
//     "Members": [
//         "Imagination Team"
//     ]
// },
