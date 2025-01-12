import React from "react";
import Styles from "../Events/DramaEvents.module.css";
import DramaTitle from "../../assets/images/MusicTitle.png";
import BattleOfBandsText from "../../assets/images/BattleOfBandsText.png";
import BobTextMobile from "../../assets/images/BobTextMobile.png";
import BandishText from "../../assets/images/BandishText.png";
import BandishTextMobile from "../../assets/images/BandishTextMobile.png";
import AarohText from "../../assets/images/AarohText.png";
import AarohTextMobile from "../../assets/images/AarohTextMobile.png";
import MalhaarText from "../../assets/images/MalhaarText.png";
import MalhaarTextMobile from "../../assets/images/MalhaarTextMobile.png";
import GullyWarText from "../../assets/images/GullyWarText.png";
import GullyWarTextMobile from "../../assets/images/GullyWarTextMobile.png";
import BattleOfBandsBg from "../../assets/images/BattleOfBandsBg.png";
import BandishBg from "../../assets/images/BandishBg.png";
import GullyWarBg from "../../assets/images/GullyWarBg.png";
import MalhaarBg from "../../assets/images/MalhaarBg.png";
import AarohBg from "../../assets/images/AarohBg.png";
import BobBgMobile from "../../assets/images/BobBgMobile.png";
import BandishBgMobile from "../../assets/images/BandishBgMobile.png";
import GullyWarBgMobile from "../../assets/images/GullyWarBgMobile.png";
import MalhaarBgMobile from "../../assets/images/MalhaarBgMobile.png";
import AarohBgMobile from "../../assets/images/AarohBgMobile.png";

function MusicEvents() {
  return (
    <div
      className={`${Styles.MusicBg} w-screen h-[100%] min-h-[100vh]  flex flex-col`}
    >
      <div
        className={` pt-[3%] w-[60%] h-[10%] mx-auto max-w-[755px] grid place-items-center`}
      >
        <img src={DramaTitle} alt="" />
      </div>

      <div className="md:space-y-[2%] flex flex-col justify-center  max-w-[1280px] mx-auto w-full h-full px-[0.5%] pt-[3%] ">
        <div className="space-y-[4%] mb-[4%] md:mb-[0%] md:space-y-[0%] flex flex-col md:flex-row items-center justify-center  h-[100%] w-[100%] space-x-[2%] ">
          <div className="relative w-[91%] md:w-[44.1%] md:h-[24.3%] ">
            <img
              className="hidden md:block w-[100%] h-[100%]"
              src={BattleOfBandsBg}
              alt=""
            />
            <img
              className="block md:hidden w-[100%] h-[100%]"
              src={BobBgMobile}
              alt=""
            />
            <div className="">
              <img
                className="hidden md:block absolute w-[43.5%]  bottom-[18%] left-[3%]"
                src={BattleOfBandsText}
                alt=""
              />
              <img
                className="block md:hidden  absolute w-[43.5%] bottom-[20%] left-[3%]"
                src={BobTextMobile}
                alt=""
              />

              <div
                className={`${Styles.DramaTextBox} w-[82.3%] aspect-[469/50] overflow-hidden h-auto p-[1%] pl-[2%] pb-[2%] absolute bottom-[6%] left-[6%]`}
              >
                <p
                  className={`${Styles.textbox} text-start font-rfabb  text-black `}
                >
                  Energized beats and flowing verses: bands stand apart and
                  battle for the crown; need we say more?
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[91%] md:w-[46.4%]  md:h-[22.9%] ">
            <img
              className="hidden md:block h-[100%] w-[100%]"
              src={BandishBg}
              alt=""
            />
            <img
              className=" block md:hidden h-[100%] w-[100%]"
              src={BandishBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute bottom-[22%] right-[3%] w-[23.02%] "
              src={BandishText}
              alt=""
            />
            <img
              className=" block md:hidden absolute bottom-[24%] left-[3%] w-[33.02%] "
              src={BandishTextMobile}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[0%] md:right-[4%] bottom-[6%] aspect-[387/55] overflow-hidden   w-[80%]  ml-[6%]  h-auto pl-[2%] pt-[0.5%]`}
            >
              <p
                className={`text-left font-rfabb  text-black ${Styles.textbox} `}
              >
                Let your harmonies roar through the halls in this solo singing
                contest. Will you stand out, or crumble underneath the sea of
                voices that are vying to be heard?
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-[4%]  md:space-y-[0%]  flex md:flex-row flex-col items-center justify-center  h-[100%] w-[100%] space-x-[2%] ">
          <div className="relative w-[91%] h-[14.61%] md:w-[29.8%] md:h-[36.9%] ">
            <img
              className="hidden md:block w-[100%] h-[100%]"
              src={MalhaarBg}
              alt=""
            />
            <img
              className="block md:hidden w-[100%] h-[100%]"
              src={MalhaarBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute w-[35.2%] bottom-[14%] left-[2%]"
              src={MalhaarText}
              alt=""
            />
            <img
              className="block md:hidden absolute w-[30%] md:w-[35.2%] bottom-[14%] left-[2%]"
              src={MalhaarTextMobile}
              alt=""
            />

            <div
              className={`${Styles.DramaTextBox} w-[85.6%] aspect-[329/30]  md:aspect-[328.78/65] overflow-hidden  h-auto pl-[2%] pt-[0.5%] absolute bottom-[3%] left-[5%]`}
            >
              <p
                className={`text-start font-rfabb  text-black ${Styles.textbox} `}
              >
                Duet with a partner as your symphonies collide against each
                other in this competition of melodies
              </p>
            </div>
          </div>
          <div className="relative w-[91%] md:w-[29.8%] md:h-[36.9%] ">
            <img
              className="hidden md:block h-[100%] w-[100%]"
              src={AarohBg}
              alt=""
            />
            <img
              className="block md:hidden h-[100%] w-[100%]"
              src={AarohBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute bottom-[15%] left-[5%] w-[31.8%]  "
              src={AarohText}
              alt=""
            />{" "}
            <img
              className="block md:hidden  absolute bottom-[15%] left-[5%] w-[20%]  "
              src={AarohTextMobile}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[1%] bottom-[3%] aspect-[329/31] md:aspect-[308.56/60] overflown-hidden  w-[82.6%]  ml-[6%] h-auto p-[1%] pl-[2%] pb-[2%]`}
            >
              <p
                className={`text-left font-rfabb text-[0.9rem] text-black ${Styles.textbox}`}
              >
                Let the voices be deafened and the instruments roar! A
                competition only for the beats and the tunes!
              </p>
            </div>
          </div>
          <div className="relative w-[91%] md:w-[29.8%] md:h-[36.9%] ">
            <img
              className="hidden md:block w-[100%] h-[100%]"
              src={GullyWarBg}
              alt=""
            />
            <img
              className="block md:hidden w-[100%] h-[100%]"
              src={GullyWarBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute w-[39%] bottom-[16%] right-[1%]"
              src={GullyWarText}
              alt=""
            />
            <img
              className="block md:hidden absolute w-[35%] bottom-[19%] left-[2%]"
              src={GullyWarTextMobile}
              alt=""
            />

            <div
              className={`${Styles.DramaTextBox} w-[86%] aspect-[329/40] md:aspect-[321.73/71] overflow-hidden  h-auto p-[.8%] absolute bottom-[3%] left-[3%] md:right-[5%]`}
            >
              <p
                className={`text-center font-rfabb  text-black ${Styles.textbox} `}
              >
                Let the beats drop and the voices soar. Be a witness to the
                battlefield as rappers try to out-rap each other in this all out
                war!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicEvents;
