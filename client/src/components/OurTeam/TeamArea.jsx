import React, { useRef, useEffect } from "react";
import TeamCard from "./TeamCard";
const aws = import.meta.env.VITE_AWS;

const CurvyLine = `${aws}/MentorLine.webp`;
const CurvyLine2 = `${aws}/line2.webp`;
const CurveLine = `${aws}/line.webp`;

function TeamArea({ SectionTitle, BgColor, Pattern, RightOne, RightTwo, LeftOne, LeftTwo, CardTeam, Members, PositionArr = ["0", "0", "0", "0"] }) {
    let asset;
    let rotang;
    let w;
    let mt;
    let mt1;
    let mt2;
    if (SectionTitle === "Fest Heads") {
        asset = CurvyLine;
        rotang = "-4.75°";
        w = "100";
        mt = "-3.25rem";
        mt1 = "-2.5rem";
        mt2 = "-1.25rem";
      } else if (SectionTitle === "Cultural Council") {
        asset = CurvyLine2;
        rotang = "-4.75°";
        w = "100";
        mt = "-3rem";
        mt1 = "-2rem";
        mt2 = "-1rem";
      } else if (SectionTitle === "Development Team") {
        asset = CurveLine;
        rotang = "0°";
        w = "95";
        mt = "-2.25rem";
        mt1 = "-1.3rem";
        mt2 = "-0.5rem";
      } else if (SectionTitle === "Creative Team") {
        asset = CurvyLine;
        rotang = "-4.75°";
        w = "90";
        mt = "-3.5rem";
        mt1 = "-2rem";
        mt2 = "-1rem";
      } else if (SectionTitle === "Sponsorship Team") {
        asset = CurveLine;
        rotang = "0°";
        w = "95";
        mt = "-2.25rem";
        mt1 = "-1.3rem";
        mt2 = "-0.5rem";
      } else if (SectionTitle === "PR & Events Team") {
        asset = CurvyLine2;
        rotang = "-2.25°";
        w = "100";
        mt = "-2.75rem";
        mt1 = "-1.5rem";
        mt2 = "-0.8rem";
      } else if (SectionTitle === "Artist and Operations Team") {
        asset = CurvyLine2;
        rotang = "-2.25°";
        w = "69";
        mt = "-3.25rem";
        mt1 = "-1.25rem";
        mt2 = "-0.7rem";
      } else if (SectionTitle === "Curation Team") {
        asset = CurvyLine2;
        rotang = "-2.25°";
        w = "100";
        mt = "-2.75rem";
        mt1 = "-1.75rem";
        mt2 = "-0.8rem";
      }
    return (
        <div className="relative flex justify-center py-[5%]"
            style={{
                backgroundImage: `url(${BgColor})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}

        >
            <div className="w-[100%]">
                <img src={Pattern} className="w-[100%] absolute top-0 lg:h-[5%] h-[2%]"></img>
                <div className="w-[100%] h-[100%] p-[2%] relative ">
                    {RightOne ? (
                        <img
                            src={RightOne}
                            style={{ top: `${PositionArr[0]}%`, left: 0 }}
                            className="absolute hidden lg:block"
                        />
                    ) : (
                        <div></div>
                    )}
                    {RightTwo ? (
                        <img
                            src={RightTwo}
                            style={{ bottom: `${PositionArr[2]}%`, right: 0 }}
                            className="absolute hidden lg:block"
                        />
                    ) : (
                        <div></div>
                    )}
                    {LeftOne ? (
                        <img
                            src={LeftOne}
                            style={{ top: `${PositionArr[1]}%`, right: 0 }}
                            className="absolute hidden lg:block"
                        />
                    ) : (
                        <div></div>
                    )}
                    {LeftTwo ? (
                        <img
                            src={LeftTwo}
                            style={{ bottom: `${PositionArr[3]}%`, left: 0 }}
                            className="absolute hidden lg:block"
                        />
                    ) : (
                        <div></div>
                    )}


                    <div className="w-[100%] text-center font-ttr lg:text-[6.25rem] font-[600] text-[17.5vw] lg:mt-[0%] mt-[15%] flex justify-center items-center">
                        <div className={`w-fit ${rotang === "0°" ? "mb-[3%]" : "mb-0"}  leading-none lg:leading-normal`}>
                            {SectionTitle}
                            <div className={`w-full justify-center items-center hidden lg:flex`} style={{marginTop:mt}}><img src={asset} className={`rotate-[${rotang}] w-[${w}%]`}></img></div>
                            <div className={`w-full justify-center items-center sm:flex hidden lg:hidden`} style={{marginTop:mt1}}><img src={asset} className={`rotate-[${rotang}] w-[${w}%]`}></img></div>
                            <div className={`w-full justify-center items-center flex sm:hidden`} style={{marginTop:mt2}}><img src={asset} className={`rotate-[${rotang}] w-[${w}%]`}></img></div>
                        </div>
                    </div>
                    <div className="grid place-items-center grid-cols-1">
                        <div className="hidden lg:flex items-center gap-6 my-[1%]">
                            {CardTeam.map((Person, index) =>
                                index < 3 ? (
                                    <TeamCard key={index} CardData={Person} />
                                ) : (
                                    <div key={index} className="hidden"></div>
                                )
                            )}
                        </div>
                        <div className={`${CardTeam.length > 3 ? "lg:block" : "lg:hidden"} hidden lg:flex items-center gap-6 my-[1%]`}>
                            {CardTeam.map((Person, index) =>
                                index >= 3 ? (
                                    <TeamCard key={index} CardData={Person} />
                                ) : (
                                    <div key={index} className="hidden"></div>
                                )
                            )}
                        </div>
                        <div className="flex lg:hidden flex-col items-center gap-6 my-[1%]">
                            {CardTeam.map((Person, index) =>

                                <TeamCard key={index} CardData={Person} />



                            )}
                        </div>
                    </div>
                    {Members && <div className="w-[100%] flex items-center text-center flex-wrap justify-center p-[2%]">
                        <h3 className="font-vetosans font-[600] text-[1.375rem] sm:w-[64%] leading-none">Team Members:
                            {Members.map((Member, index) => (
                                <span>{`${(index > 0 ? "," : "")} ${Member}`}</span>
                            ))}
                        </h3>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default TeamArea;