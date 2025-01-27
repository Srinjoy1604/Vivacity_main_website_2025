import React from "react";
import Styles from "../Events/DramaEvents.module.css";

import Button_Component from "./Button_component";
const aws = import.meta.env.VITE_AWS;

const FashionTitle = `${aws}/FashionTitle.webp`;
// const VivaText = `${aws}/vivaText.webp`;
// const VougeText = `${aws}/VougeText.webp`;
const VivaBg = `${aws}/VivaBg.webp`;
const VogueBg = `${aws}/VogueBg.webp`;
const Eminence = `${aws}/Eminence.pdf`;

const VougeText = `${aws}/VougeText.svg`;
const VivaText = `${aws}/vivaText.svg`;


function FashionEvents() {
  return (
    <div
      className={`${Styles.FashionBg} w-full h-[100%] p-[3%] flex flex-col overflow-hidden`}
    >
      <div
        className={` pt-[3.4%] w-[100%] h-[10%] mx-auto  grid place-items-center`}
      >
        <img className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[50%]" src={FashionTitle} alt="" />
      </div>

      <div className=" space-y-[2%]  flex flex-row md:flex-col justify-center   mx-auto w-full h-full px-[0.5%] pt-[6.33%] ">
        <div className="flex items-center flex-col md:flex-row   justify-center  h-[100%] w-[100%] space-y-[3%] md:space-y-[0%]  md:space-x-[2%] ">
          <div className="relative w-[98.11%] h-[29%] md:w-[49.5%] md:h-[42.5%] ">
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
                  className={` text-start font-bold text-[1.9vw] md:text-[1vw]  leading-tight  font-rfabb pl-[5px] pt-1  text-black `}
                >
                  a thrilling personality and talent competition celebrating
                  confidence, charisma, and creativity!
                </p>
              </div>
            </div>
          </div>
          <div className="relative  w-[98.11%] h-[40%]  md:w-[55%]  md:h-[42.5%] ">
            <img className=" h-[100%] w-[100%]" src={VogueBg} alt="" />
            <img
              className="absolute bottom-[24%] left-[3%] md:right-[3%] w-[18.1%] "
              src={VougeText}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[0%] md:right-[5%] bottom-[5%] aspect-[527/77] overflow-hidden  w-[89%]  ml-[4%] h-[22.3%] `}
            >
              <p
                className={`text-start font-rfabb text-black font-bold leading-tight  text-[1.9vw] md:text-[1vw] pt-[1%] pl-[2%]`}
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
      <div className="w-[100%] mt-4 mb-2">
            <Button_Component section={Eminence} showRegister={true} showRulebook={true} />
      </div>
    </div>
  );
}

export default FashionEvents;
