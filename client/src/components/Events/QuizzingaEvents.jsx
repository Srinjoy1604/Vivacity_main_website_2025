import React from "react";
import Styles from "../Events/DramaEvents.module.css";
import QuizzingaTitle from "../../assets/images/QuizzingaTitle.webp";
import BamboozledText from "../../assets/images/BamboozledText.webp";
import MovieAuctionText from "../../assets/images/MovieAuctionText.webp";
import BamboozledBg from "../../assets/images/BamboozledBg.webp";
import MovieAuctionBg from "../../assets/images/MovieAuctionBg.webp";
import Button_Component from "./Button_component";
function QuizzingaEvents() {
  return (
    <div
      className={`${Styles.QuizzingaBg} w-full h-[100%] p-[2%] pb-[3.5%] flex flex-col`}
    >
      <div
        className={`grid place-items-center pt-[3.5%]`}
      >
        <img src={QuizzingaTitle} className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[50%]" alt="" />
      </div>

      <div className="space-y-[2%] flex flex-col justify-center   mx-auto w-full h-full px-[0.5%] pt-[8%] md:pt-[6%] ">
        <div className="flex flex-col items-center  md:flex-row   justify-center  h-[100%] w-[100%] space-y-[5%] md:space-y-[0%] space-x-[2%] ">
          <div className="relative  w-[91.11%] h-[29%]  md:w-[59.2%] md:h-[42.5%] ">
            <img className="w-[100%] h-[100%]" src={BamboozledBg} alt="" />
            <div className="">
              <img
                className="absolute w-[32.1%] bottom-[21%] left-[2%] "
                src={BamboozledText}
                alt=""
              />

              <div
                className={`${Styles.DramaTextBox} w-[62%] aspect-[384/58] overflow-hidden  h-[19%] p-[1%] absolute bottom-[6%] left-[5%]`}
              >
                <p
                  className={` text-start text-[1.9vw] md:text-[1vw] pl-[3px] font-bold leading-tight font-rfabb  text-black `}
                >
                  Form trios and compete for a spot in the movie auction! Become
                  a conqueror in this elusive quiz of cinematography.
                </p>
              </div>
            </div>
          </div>
          <div className="relative  w-[91.11%] h-[29%]  md:w-[50.4%]  md:h-[42.5%] ">
            <img className=" h-[100%] w-[100%]" src={MovieAuctionBg} alt="" />
            <img
              className="absolute bottom-[20.5%] left-[4%] w-[39.1%] "
              src={MovieAuctionText}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[0%] bottom-[6%] aspect-[446/47] overflow-hidden w-[80%] ml-[6%] h-[18%] p-[1%] pl-[2%]`}
            >
              <p
                className={`text-start font-bold leading-tight text-[1.9vw] md:text-[1vw]  font-rfabb text-black pt-1 `}
              >
                The TOP 8 teams of BAMBOOZLED engage in a bidding war for their
                chance to shine in the cinematic spotlight.
              </p>
            </div>

          </div>
          
        </div>
        <div className="w-[100%] pb-4">
            <Button_Component showRegister={true} showRulebook={false} />
        </div>
      </div>
    </div>
  );
}

export default QuizzingaEvents;
