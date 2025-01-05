import React from "react";
import Glitch from "../../../assets/images/Glitch.png";
function Title({ text }) {
  return (
    <div>
      <div
        className="bg-center p-10 flex justify-center items-center text-blue-950 font-black text-xl mt-10 sm:text-2xl md:text-3xl xl:text-4xl"
        style={{
          backgroundImage: `url(${Glitch})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          textShadow: "2px 0px 1px red, -2px 0px 1px green",
        }}
      >
        {text}
      </div>
    </div>
  );
}
export default Title;