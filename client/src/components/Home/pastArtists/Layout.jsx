import React from "react";

import Artist from "./ArtistCarosuel";
import Concert from "./ConcertReady";
const aws = import.meta.env.VITE_AWS;

const BackGround = `${aws}/YellowBg.webp`;
const Title = `${aws}/PastArtistsTitle.webp`;

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
