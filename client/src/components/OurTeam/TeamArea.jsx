import React, { useRef, useEffect } from "react";
import TeamCard from "./TeamCard";
import MentorLine from "../../assets/images/MentorLine.webp";
function TeamArea({ SectionTitle, BgColor, Pattern, RightOne, RightTwo, LeftOne, LeftTwo, CardTeam, Members, PositionArr = ["0", "0", "0", "0"] }) {
    
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


                    <div className="w-[100%] text-center font-ttr lg:text-[6.25rem] font-[600] text-[4.5rem] lg:mt-[0%] mt-[15%]">{SectionTitle}</div>
                    <div className="w-full flex justify-center mt-[-3.25rem]"><img src={MentorLine} className="rotate-[-4.75°]"></img></div>
                    <div className="grid place-items-center grid-cols-1 mx-32">
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