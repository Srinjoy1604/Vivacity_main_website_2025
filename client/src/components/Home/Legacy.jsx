import React, { useState } from "react";
import Legacybackground from "../../assets/images/LegacyBg.png";
//import TextBg from "../../assets/images/TitleText.png";

import VideoGrid from "./Test";



const Legacy = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-8"
      style={{
        backgroundImage: `url(${Legacybackground})`,
        backgroundSize: "cover",
        margin: "0 auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div
        className="w-full max-w-4xl text-center bg-cover bg-center absolute top-[4%] py-8 mb-12 rounded-lg"
        >
          {/* legacy text component goes here */}
      </div>
      <VideoGrid />
    </div>
    // Bottom image goes here
  );
};

 export default Legacy;
