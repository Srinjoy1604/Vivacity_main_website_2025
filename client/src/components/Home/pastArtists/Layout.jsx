import React from "react";
import BackGround from "../../../assets/images/YellowBg.png";
import Title from "./Title";
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
        <Title text="PAST ARTIST"/>
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




