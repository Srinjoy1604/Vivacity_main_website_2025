import React from "react";
import BackGround from "../../../assets/images/Group 60.png";
import Amit from "../../../assets/images/Amit.png";
const ArtistCard = ({ artist }) => {
  // Calculate base dimensions for 1320x1320 viewport
  // Card size should be 302x451 at 1320px viewport width
  // Converting to percentages: (302/1320)*100 ≈ 22.87% for width

  return (
    <div
      className="relative w-[22.87%] min-w-[350px] aspect-[312/451] m-2"
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
          src={artist.Src}
          alt={artist.Name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Name Container */}
      <div className="w-full h-[14%] flex items-center justify-center">
        <img src={Amit} />
      </div>
    </div>
  );
};

export default ArtistCard;
