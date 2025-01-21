import React from "react";
import BackGround from "../../../assets/images/YellowBg.webp";
import Title from "../../../assets/images/PastArtistsTitle.webp";
import Artist from "./ArtistCarosuel";
import Concert from "./ConcertReady";

function Sec() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center py-6">
        <img
          src={Title}
          alt="Past Artists"
          className="w-[85%] xs:w-[68%] md:w-[65%] lg:w-[35%] my-[2%] mb-[2%]"
        ></img>
      </div>

      <div>
        <Artist />
      </div>

      <div>
        <Concert />
      </div>
    </div>
  );
}

export default Sec;
