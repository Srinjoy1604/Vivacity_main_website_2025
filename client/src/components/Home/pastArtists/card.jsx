import React from "react";
import BackGround from "../../../assets/images/Group 60.png";

const ArtistCard = ({ artist }) => {
  // Calculate base dimensions for 1320x1320 viewport
  // Card size should be 302x451 at 1320px viewport width
  // Converting to percentages: (302/1320)*100 ≈ 22.87% for width

  return (
    <div
      className="relative w-[22.87%] min-w-[250px] aspect-[310/451] m-2"
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
      <div className="w-full h-[25%] flex items-center justify-center">
        <h3
          className="font-bold text-center"
          style={{
            // Responsive font size using clamp
            fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
            color: "#FF1493", // Pink color
            textShadow: "2px 0px 1px blue, -2px 0px 1px green",
          }}
        >
          {artist.Name}
        </h3>
      </div>
    </div>
  );
};

export default ArtistCard;
