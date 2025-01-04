import React from "react";
import mascotBg from "../../assets/images/mascotBackground.png";
import NetraImg from "../../assets/images/NetraImg.png";
import NetraBg from "../../assets/images/NetraBg.png";
import Netra from "../../assets/images/Netra.png";
import ChroniclesBg from "../../assets/images/chroniclesBg.png";
import Chronicles from "../../assets/images/chronicles.png";
import NetraImgMobile from "../../assets/images/NetraImgMobile.png";
import { Link } from "react-router-dom"
const Mascot = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={mascotBg}
                alt="Background"
            />

            {/* Main Content Container */}
            <div className="relative w-full h-full flex flex-col md:flex-row px-4 md:px-8 py-8 md:py-16 gap-6 md:gap-8">
                {/* Left Column */}
                <div className="w-full md:w-5/12 flex flex-col gap-6">
                    {/* Netra Container */}
                    <div className="relative w-full aspect-video bg-transparent rounded-lg overflow-hidden">
                        <img
                            className="absolute w-full h-full object-cover"
                            src={NetraBg}
                            alt="Netra Background"
                        />
                        <img
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-3/4 h-auto"
                            src={Netra}
                            alt="Netra"
                        />
                    </div>

                    {/* Mobile Only Netra Image */}
                    <div className="md:hidden w-full">
                        <img
                            className="w-full h-auto"
                            src={NetraImgMobile}
                            alt="Netra Mobile"
                        />
                    </div>

                    {/* Chronicles Section */}
                    <div className="relative w-full aspect-video bg-transparent rounded-lg overflow-hidden">
                        <img
                            className="absolute w-full h-full object-cover"
                            src={ChroniclesBg}
                            alt="Chronicles Background"
                        />
                        <div className="relative p-6 md:p-8 flex flex-col justify-between h-full">
                            <h2 className="font-rfabb text-white text-lg sm:text-3xl md:text-lg lg:text-3xl font-bold max-w-[90%]">
                                WANT TO KNOW THE ORIGIN STORY OF NETRA?
                            </h2>
                            <Link to="/">
                                <img
                                    className="h-20 md:h-8 lg:h-12 w-auto object-contain"
                                    src={Chronicles}
                                    alt="Chronicles"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column - Desktop Only */}
                <div className="hidden md:block w-7/12">
                    <div className="w-full h-full">
                        <img
                            className="w-full h-full object-contain"
                            src={NetraImg}
                            alt="Netra Full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Mascot;