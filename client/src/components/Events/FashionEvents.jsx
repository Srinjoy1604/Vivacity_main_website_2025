import React from "react";
import Styles from "../Events/DramaEvents.module.css";
import FashionTitle from "../../assets/images/FashionTitle.png";
import VivaText from "../../assets/images/vivaText.png";
import VougeText from "../../assets/images/VougeText.png";
import VivaBg from "../../assets/images/VivaBg.png";
import VogueBg from "../../assets/images/VogueBg.png";
import Button_Component from "./Button_component";

function FashionEvents() {
  return (
    <div
      className={`${Styles.FashionBg} w-screen h-[100%] p-[2%] flex flex-col overflow-hidden`}
    >
      <div
        className={` pt-[3%] w-[100%] h-[10%] mx-auto  grid place-items-center`}
      >
        <img className="w-[40%]" src={FashionTitle} alt="" />
      </div>

      <div className=" space-y-[2%]  flex flex-row md:flex-col justify-center   mx-auto w-full h-full px-[0.5%] pt-[10%] md:pt-[6%] ">
        <div className="flex items-center flex-col md:flex-row   justify-center  h-[100%] w-[100%] space-y-[4%] md:space-y-[0%]  md:space-x-[2%] ">
          <div className="relative w-[91.11%] h-[29%] md:w-[43.5%] md:h-[42.5%] ">
            <img className="w-[100%] h-[100%]" src={VivaBg} alt="" />
            <div className="">
              <img
                className="absolute w-[37.4%] bottom-[19%] left-[3%]"
                src={VivaText}
                alt=""
              />

              <div
                className={`${Styles.DramaTextBox} w-[69%] aspect-[437/55] overflow-hidden h-[17%] p-[1%] absolute bottom-[5%] left-[5%]`}
              >
                <p
                  className={` text-start font-medium text-[1.9vw] md:text-[1vw]  leading-tight  font-rfabb pl-[5px] pt-1  text-black `}
                >
                  a thrilling personality and talent competition celebrating
                  confidence, charisma, and creativity!
                </p>
              </div>
            </div>
          </div>
          <div className="relative  w-[91.11%] h-[40%]  md:w-[48.04%]  md:h-[42.5%] ">
            <img className=" h-[100%] w-[100%]" src={VogueBg} alt="" />
            <img
              className="absolute bottom-[24%] left-[3%] md:right-[3%] w-[18.1%] "
              src={VougeText}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[0%] md:right-[5%] bottom-[5%] aspect-[527/77] overflow-hidden  w-[90%]  ml-[4%] h-[23.5%] `}
            >
              <p
                className={`text-start font-rfabb text-black font-medium leading-tight  text-[1.9vw] md:text-[1vw] pt-[1%] pl-[2%]`}
              >
                Strut your style and steal the runway in this show of fashion
                and glamour. Dazzle the audience in elegant outfits, or show
                your eccentricity to the world. Let the stage be the canvas to
                your wildest imaginations. It's time to get your vogue out
                there!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
            <Button_Component showRegister={true} showRulebook={false} />
          </div>
    </div>
  );
}

export default FashionEvents;
