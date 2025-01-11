import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
//import mdbacground from "../../../assets/images/mdbackground.png";
import Gif from "../../../assets/images/gif (2).png";
import AppleMusic from "../../../assets/images/AppleMusicLogo.png";
import Spotify from "../../../assets/images/SpotifyLogo.png";

function Concert() {
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
    <div
      className="relative flex justify-center items-center w-full min-h-screen md:min-h-[60vh] overflow-hidden py-8 md:py-[5%]"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: backgroundSize,
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] md:w-[88%] lg:w-[68%] h-full">
        <div className="flex flex-col items-center">
          {/* Content for mobile screens */}
          <div className="md:hidden w-full">
            <div className="w-[95%] mx-auto">
              <div className="w-full">
                {/* GIF container */}
                <div className="w-[80%] mx-auto mb-4">
                  <div className="relative w-full h-full">
                    <img
                      src={Gif}
                      alt="Concert animation"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Text and buttons container */}
                <div className="w-full">
                  <h2 className="font-bold font-rfabb text-[2rem] mb-3 text-left uppercase">
                    GET CONCERT-READY NOW!
                  </h2>
                  <p className="text-[1rem] font-semibold mb-4 font-vetosans text-left leading-normal">
                    Get a sneak peek into Vivacity's epic lineup with our{" "}
                    <span className="italic">handpicked</span> music
                    collection—crafted to set the vibe just right! So grab your
                    squad, hit play, and let the good times roll.
                  </p>
                  <div className="flex flex-row gap-3 -mt-2">
                    <button className="w-full py-2 px-2 border-2 border-green-500 rounded-full text-black text-[3.5vw] font-medium flex items-center justify-center gap-2">
                      <img
                        src={Spotify}
                        alt="Spotify logo"
                        className="w-[4.5vw] h-[4.5vw] object-contain"
                      />
                      <span>Spotify</span>
                    </button>
                    <button className="w-full py-2 px-2 border-2 border-red-500 rounded-full text-black text-[3.5vw] font-medium flex items-center justify-center gap-2">
                      <img
                        src={AppleMusic}
                        alt="Apple Music logo"
                        className="w-[4.5vw] h-[4.5vw] object-contain"
                      />
                      <span>Apple Music</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content for larger screens */}
          <div className="hidden md:flex flex-row w-full gap-[5%] items-center">
            <div className="w-[35%] flex justify-center items-center">
              <img
                src={Gif}
                alt="Concert animation"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="w-[63%] flex flex-col">
              <h2 className="font-bold font-rfabb  md:text-[2.1rem] lg:text-[2.1rem] 2xl:text-[3rem] xl:text-[2.6rem] mb-[3%] text-left">
                GET CONCERT-READY NOW!
              </h2>
              <p className="font-semibold font-vetosans md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] 2xl:text-[1.9rem]  tracking-tighter leading-relaxed mb-[5%] text-left">
                Get a sneak peek into Vivacity's epic lineup with our
                <br />
                <span className="italic">handpicked</span> music
                collection—crafted to set the vibe just right! <br />
                So grab your squad, hit play, and let the good times roll.
              </p>
              <div className="flex gap-[3%] justify-start">
                <button className="px-[2%] py-[1%] border-2 border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem] ">
                  <img src={Spotify} alt="Spotify logo" className="h-[1.5em]" />
                  <span>Spotify</span>
                </button>
                <button className="px-[2%] py-[1%] border-2 border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 lg:text-[1.5rem] md:text-[1.3rem]">
                  <img
                    src={AppleMusic}
                    alt="Apple Music logo"
                    className="h-[1.5em]"
                  />
                  <span>Apple Music</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concert;
