import React from "react";
import BackGround from "../../../assets/images/Group 60.webp";

const ArtistCard = ({ artist }) => {
  return (
    <div
      className="relative w-[280px] md:w-[300px] lg:w-[350px] aspect-[312/451] mb-[5%]"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-[75%] overflow-hidden p-[8%]">
        <img
          src={artist.ArtistImage}
          alt={artist.Name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Name Container */}
      <div className="w-full h-[14%] flex items-center justify-center">
        <img src={artist.NameImage} className="w-auto h-full" />
      </div>
    </div>
  );
};

export default ArtistCard;

