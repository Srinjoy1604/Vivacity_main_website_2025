import React, { useState } from "react";
import Legacybackground from "../../assets/images/LegacyBg.png";
import VideoGrid from "./Videogrid";
import Title from "../../assets/images/LegacyTitle.png";

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
      <div className="w-full flex justify-center items-center">
        {/* legacy text component goes here */}
        <img
          src={Title}
          alt="Legacy"
          className="w-[80%] sm:w-[37%]  my-[2%] sm:mb-[3%] mb-[5%] "
        ></img>
      </div>
      <VideoGrid />
    </div>
    // Bottom image goes here
  );
};

export default Legacy;
