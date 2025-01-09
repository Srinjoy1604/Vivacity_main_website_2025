import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
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
      className="relative flex justify-center items-center w-full min-h-[100vh] md:min-h-[60vh] overflow-hidden py-[5%]"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: backgroundSize,
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] md:w-[85%] lg:w-[70%] h-full">
        <div className="flex flex-col md:flex-row w-full gap-[5%] items-center">
          {/* GIF Container */}
          <div className="w-full md:w-[30%] flex justify-center items-center mb-[5%] md:mb-0">
            <img
              src={Gif}
              alt="Concert animation"
              className="w-[80%] md:w-full h-auto object-contain"
            />
          </div>

          {/* Text and Buttons Container */}
          <div className="w-full md:w-[65%] flex flex-col">
            <h2 className="font-rfabb font-bold text-[6vw] md:text-[3vw] lg:text-[2.5vw] mb-[3%] text-center md:text-left">
              GET CONCERT-READY NOW!
            </h2>
            <p className="font-vetosans font-normal text-[4vw] md:text-[1.8vw] lg:text-[1.2vw] tracking-tighter leading-relaxed mb-[5%] text-center md:text-left">
              Get a sneak peek into Vivacity's epic lineup with our{" "}
              <span className="italic">handpicked </span>
              music collection—crafted to set the vibe just right! So grab your
              squad, hit play, and let the good times roll.
            </p>
            <div className="flex gap-[3%] justify-center md:justify-start flex-wrap">
              <button className="px-[4%] py-[2%] border-2 border-green-500 rounded-3xl text-black font-bold flex items-center gap-2 mb-[2%] text-[3vw] md:text-[1.2vw]">
                <img src={Spotify} alt="Spotify logo" className="h-[1.5em]" />
                <span>Spotify</span>
              </button>
              <button className="px-[4%] py-[2%] border-2 border-red-500 rounded-3xl text-black font-bold flex items-center gap-2 mb-[2%] text-[3vw] md:text-[1.2vw]">
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
  );
}

export default Concert;
