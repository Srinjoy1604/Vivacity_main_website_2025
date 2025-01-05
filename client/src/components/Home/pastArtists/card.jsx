import React from "react";
import BackGround from "../../../assets/images/Group 60.png"
function ArtistCard({ artist }) {
  return (
    <div className="p-6  text-pink-500 min-h-[40vh] w-[50vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] xl:w-[15vw] flex justify-center items-center flex-col" 
    
    style={{
      backgroundImage: `url(${BackGround})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
               }}
    >
      <div className="p-6 sm:p-2">
      <img src={artist.Src} alt={artist.Name} className="" style={{minWidth:"12vw"}}/>
      </div>
      <h3
        className=" text-xs font-bold font-ricks p-1 sm:text-base lg:text-xl xl:text-2xl"
        style={{
          textShadow: "2px 0px 1px blue, -2px 0px 1px 1px green",
        }}
      >
        {artist.Name}
      </h3>
    </div>
  );
}
export default ArtistCard;