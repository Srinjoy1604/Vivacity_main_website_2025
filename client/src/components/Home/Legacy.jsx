import React, { useState } from "react";
import Legacybackground from "../../assets/images/LegacyBg.png";
import Title from "./pastArtists/Title";

import VideoGrid from "./Videogrid";



const Legacy = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center px-4 py-8"
      style={{
        backgroundImage: `url(${Legacybackground})`,
        backgroundSize: "cover",
        margin: "0 auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div
        className="w-full text-center m-[1%]"
        >
          {/* legacy text component goes here */}
          <Title text="THE LEGACY" />
      </div>
      <VideoGrid />
    </div>
    // Bottom image goes here
  );
};

 export default Legacy;
