import React from "react";
import BackGround from "../../../assets/images/YellowBg.png";
import Title from "../../../assets/images/PastArtistsTitle.png";
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
        <img src={Title} alt="Past Artists" className="sm:w-[55%] w-[100%] h-auto my-10"></img>
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




