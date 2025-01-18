import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
import mdbackground from "../../../assets/images/mdbackground.png";
import Gif from "../../../assets/images/cd_glitch.gif";
import AppleMusic from "../../../assets/images/AppleMusicLogo.png";
import Spotify from "../../../assets/images/SpotifyLogo.png";

const Concert = () => {
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const updateStyles = () => {
      setBackgroundSize(
        window.innerWidth / window.innerHeight < 3 / 2 ? "cover" : "contain"
      );
    };
    updateStyles();
    window.addEventListener("resize", updateStyles);
    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, []);

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden  flex flex-col w-full h-full">
        <div
          className=" w-full h-[100%]  grid place-items-center"
          style={{
            backgroundImage: `url(${mdbackground})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center pt-40 xxs:pt-48 pb-24">
            <div className=" flex flex-col justify-center w-[100%] items-center">
              {/* GIF container - made responsive */}
              <div className="w-[60%] xs:w-[53%] mb-[2%]  ">
                <img
                  src={Gif}
                  alt="Concert animation"
                  className="xs:w-[90%] xs:mt-8 w-full h-full object-contain "
                />
              </div>

              <div className="flex flex-col space-y-[1vh] w-[60%] xs:w-[52%]">
                <h2 className="font-bold font-rfabb text-[6.5vw] 380:text-[8vw] xs:text-[5.3vw] leading-tight">
                  GET CONCERT READY NOW!
                </h2>

                <div className="relative">
                  <p className="font-semibold font-vetosans text-[4vw] 380:text-[4vw]  xs:text-[3.1vw] tracking-wide leading-relaxed">
                    Get a sneak peek into Vivacity's epic lineup with our
                    <span className="italic"> handpicked</span> music
                    collection—crafted to set the vibe just right! So grab your
                    squad, hit play, and let the good times roll.
                  </p>

                  {/* Buttons container - made responsive */}
                  <div className="flex gap-[3%] justify-start">
                    <button className="px-[1%] py-[1%] border border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 xs:text-[3.3vw] text-[3.4vw]">
                      <img
                        src={Spotify}
                        alt="Spotify logo"
                        className="h-[50%] 380:h-[70%] xs:h-[67%]"
                      />
                      <span className="font-vetosans-500">Spotify</span>
                    </button>
                    <button className="px-[1%] py-[1%] border border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 xs:text-[3.3vw] text-[3.4vw]">
                      <img
                        src={AppleMusic}
                        alt="Apple Music logo"
                        className="h-[50%] 380:h-[70%] xs:h-[67%]"
                      />
                      <span className="font-vetosans-500">Apple Music</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Layout */}
      <div
        className="hidden md:flex relative justify-center items-center w-full min-h-screen md:min-h-[60vh] overflow-hidden py-8 md:py-[5%]"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: backgroundSize,
          backgroundPosition: "center",
        }}
      >
        <div className="w-[90%] md:w-[88%] lg:w-[68%] h-full">
          <div className="flex flex-col items-center py-[4%]">
            <div className="flex flex-row w-full gap-[5%] items-center">
              <div className="w-[28%] flex justify-center items-center">
                <img
                  src={Gif}
                  alt="Concert animation"
                  className="w-[90%] h-auto max-h-[50%] object-contain"
                />
              </div>
              <div className="w-[63%] flex flex-col">
                <h2 className="font-bold font-rfabb md:text-[2.1rem] lg:text-[2.1rem] 2xl:text-[2.8rem] mt-[2%] xl:text-[2.6rem] mb-[1%] text-left">
                  GET CONCERT-READY NOW!
                </h2>
                <p className="font-semibold font-vetosans md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.7rem] tracking-normal  leading-relaxed mb-[5%] text-left">
                  Get a sneak peek into Vivacity's epic lineup with our <br />
                  <span className="italic">handpicked</span> music
                  collection—crafted to set the vibe just right! <br />
                  So grab your squad, hit play, and let the good times roll.
                </p>
                <div className="flex gap-[3%] justify-start">
                  <button className="px-[1%] py-[1%] border border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]">
                    <img
                      src={Spotify}
                      alt="Spotify logo"
                      className="h-[1.5em]"
                    />
                    <span className="font-vetosans-500">Spotify</span>
                  </button>
                  <button className="px-[1%] py-[1%] border border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]">
                    <img
                      src={AppleMusic}
                      alt="Apple Music logo"
                      className="h-[1.5em]"
                    />
                    <span className="font-vetosans-500">Apple Music</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concert;
