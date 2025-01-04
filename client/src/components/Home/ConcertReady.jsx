import React, { useState, useEffect } from "react";
import BackGround from "../../../assets/images/Section6Background2.png";
import Gif from "../../../assets/images/gif (2).png";
import AppleMusic from "../../../assets/images/AppleMusicLogo.png"
import Spotify from "../../../assets/images/SpotifyLogo.png"

function Concert() {
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    setBackgroundSize(
      window.innerWidth / window.innerHeight < 3 / 2 ? "cover" : "contain"
    );
  }, []); 

  return (
    <div
      className="flex justify-center items-center w-screen overflow-hidden my-10"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: backgroundSize, 
        backgroundPosition: "center",
        height: "60vh", 
        width: "99vw",
      }}
    >
      <div className="flex justify-center items-center ">
        <div className="w-[75vw] m-5 ">
          <div className="grid grid-cols-4 grid-rows-1 ">
            <div className="col-span-1 row-span-1 ">
              <div className=" ">
                <img src={Gif} alt="" className="h-[20vh] lg:h-full" />
              </div>
            </div>

            <div className="flex flex-col justify-center p-5 gap-5  col-span-3 row-span-1">
              <div className="text-base font-bold sm:text-sm md:text-lg lg:text2xl xl:text-3xl">GET CONCERT-READY NOW!</div>
              <div className="text-xs sm:text-base md:text-sm lg:text-lg xl:text-xl">
                Get a sneak peek into Vivacity’s epic lineup with our handpicked
                music collection—crafted to set the vibe just right! So grab
                your squad, hit play, and let the good times roll.
              </div>
              <div className="flex gap-2 text-xs flex-row">
                <button className="p-2 border-2 border-green-500 rounded-3xl text-black font-bold flex justify-center items-center max-w-20">
                  <img src={Spotify} alt="" className="h-6" />
                  Spotify
                </button>
                <button className="p-2 border-2 border-red-500 rounded-3xl text-black font-bold flex justify-center items-center max-w-20">
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
