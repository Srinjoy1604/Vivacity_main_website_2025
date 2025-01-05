import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
import Gif from "../../../assets/images/gif (2).png";
import AppleMusic from "../../../assets/images/AppleMusicLogo.png"
import Spotify from "../../../assets/images/SpotifyLogo.png"

function Concert() {
  const [backgroundSize, setBackgroundSize] = useState("cover");
  const [height, setHeight] = useState("60vh");

  useEffect(() => {
    const updateStyles = () => {
      // Update background size based on aspect ratio
      setBackgroundSize(
        window.innerWidth / window.innerHeight < 3 / 2 ? "cover" : "contain"
      );

      // Update height based on screen width
      if (window.innerWidth < 576) {
        setHeight("125vh");
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setHeight("100vh");
      } else {
        setHeight("60vh");
      }
    };

    // Call on component mount and whenever the window resizes
    updateStyles();
    window.addEventListener("resize", updateStyles);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, []); 

  return (
    <div
      className="flex justify-center items-center w-screen overflow-hidden "
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: backgroundSize,
        backgroundPosition: "center",
        height: height, 
      }}
    >
      <div className="flex justify-center items-center ">
        <div className="w-[80%] m-5 flex items-center justify-center align-center">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1">
            <div className="col-span-1 row-span-1 ">
              <div className="h-full w-full flex justify-center items-center">
                <img src={Gif} alt="" className="h-[25vh] lg:h-full" />
              </div>
            </div>

            <div className="p-5 md:col-span-3 row-span-1">
              <div className="font-rfabb font-bold text-[2rem] lg:text-[2.625rem] text-center md:text-left mb-1.25">GET CONCERT-READY NOW!</div>
              <div className="font-vetosans font-normal text-[1.25rem] lg:text-[1.25rem] text-center md:text-left tracking-tighter leading-7 mb-8 pr-10">
                Get a sneak peek into Vivacity's epic lineup with our <span className="italic">handpicked </span> 
                music collection—crafted to set the vibe just right! So grab
                your squad, hit play, and let the good times roll.
              </div>
              <div className="flex gap-2 text-xs flex-row items-center md:items-start justify-center md:justify-start">
                <button className="p-2 border-2 border-green-500 rounded-3xl text-black font-bold flex justify-center items-center max-w-40">
                  <img src={Spotify} alt="" className="h-6" />
                  Spotify
                </button>
                <button className="p-2 border-2 border-red-500 rounded-3xl text-black font-bold flex justify-center items-center max-w-40">
                  <img src={AppleMusic} alt="" className="h-6" />
                  Apple Music
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
