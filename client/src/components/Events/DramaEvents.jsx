import React from "react";
import Styles from "../Events/DramaEvents.module.css";

import Button_Component from "./Button_component";
const aws = import.meta.env.VITE_AWS;

const DramaTitle = `${aws}/DramaTitle.webp`;
// const RangshalaText = `${aws}/RangshalaText.webp`;
// const PadhatiText = `${aws}/PadhatiText.webp`;
// const MukhautaText = `${aws}/MukhautaText.webp`;
// const HunkaarText = `${aws}/HunkaarText.webp`;
const PaddhatiBg = `${aws}/PaddhatiBg.webp`;
const MukhautaBg = `${aws}/MukhautaBg.webp`;
const RangshalaBg = `${aws}/RangshalaBg.webp`;
const HunkaarBg = `${aws}/HunkaarBg.webp`;
// const RangshalaTextMobile = `${aws}/RangshalaTextMobile.webp`;
// const PaddhatiTextMobile = `${aws}/PaddhatiTextMobile.webp`;
// const MukhautaTextMobile = `${aws}/MukhautaTextMobile.webp`;
// const HunkaarTextMobile = `${aws}/HunkaarTextMobile.webp`;
const PaddhatiBgMobile = `${aws}/PaddhatiBgMobile.webp`;
const MukhautaBgMobile = `${aws}/MukhautaBgMobile.webp`;
const RangshalaBgMobile = `${aws}/RangshalaBgMobile.webp`;
const HunkaarBgMobile = `${aws}/HunkaarBgMobile.webp`;
const Rendition = `${aws}/Rendition.pdf`;

import RangshalaText from '../../assets/videos/Rangshala.svg';
import RangshalaTextMobile from '../../assets/videos/Rangshala1.svg';
import PadhatiText from '../../assets/videos/Paddhati.svg';
import PaddhatiTextMobile from '../../assets/videos/Paddhati1.svg';
import MukhautaText from '../../assets/videos/Mukhauta.svg';
import MukhautaTextMobile from '../../assets/videos/Mukhauta1.svg';
import HunkaarText from '../../assets/videos/Hunkaar.svg';
import HunkaarTextMobile from '../../assets/videos/Hunkaar1.svg';

function DramaEvents() {
  return (
    <div
      className={`${Styles.DramaBg} w-full h-[100%]  p-[2%] overflow-hidden flex flex-col`}
    >
      <div className={`grid pt-[6%] md:pt-[3.5%]  place-items-center`}>
        <img
          src={DramaTitle}
          className="w-[80%] sm:w-[70%] md:w-[55%] lg:w-[51%] aspect-653/178.16 "
          alt=""
        />
      </div>

      <div className="space-y-[2%] flex flex-col justify-center  items-center w-full h-full md:px-[0.5%] pt-[6.33%] md:pt-[3.5%] ">
        <div className="flex flex-col items-center md:flex-row  justify-center  h-[100%] md:w-[100%] w-[95%] space-y-[2%]  md:space-y-[0%] md:space-x-[2%]">
          <div className="relative w-[100%] md:w-[57.1%] h-[76.9%] ">
            <img
              className="hidden md:block w-[100%] h-[100%]"
              src={PaddhatiBg}
              alt=""
            />
            <img
              className="block md:hidden w-[100%] h-[100%]"
              src={PaddhatiBgMobile}
              alt=""
            />
            <div className="">
              <img
                className="hidden md:block absolute w-[26%] bottom-[18%] left-[3%]"
                src={PadhatiText}
                alt=""
              />
              <img
                className="block md:hidden absolute w-[26%] bottom-[20.5%] left-[2%]"
                src={PaddhatiTextMobile}
                alt=""
              />

              <div
                className={`${Styles.DramaTextBox} w-[87%] md:w-[75%] aspect-[329/45] md:aspect-[446/59] overflow-hidden h-[15%] pl-[2%] pb-[9%] p-[1%] absolute bottom-[5%] left-[3%] md:left-[4%]`}
              >
                <p
                  className={`font-bold text-start font-rfabb text-black leading-tight text-[1.95vw] md:text-[1.1vw]`}
                >
                  You and your character against the world! Let your theatrics
                  run wild in this solo-act-only competition where the only one
                  in the limelight is you!
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[100%] md:w-[40%]  h-[.9%] ">
            <img
              className="hidden md:block h-[100%] w-[100%]"
              src={MukhautaBg}
              alt=""
            />
            <img
              className="block md:hidden h-[100%] w-[100%]"
              src={MukhautaBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute bottom-[14%] left-[3%] w-[32.5%] "
              src={MukhautaText}
              alt=""
            />
            <img
              className="block md:hidden absolute bottom-[19%] left-[1%] w-[30.5%] "
              src={MukhautaTextMobile}
              alt=""
            />
            <div
              className={`absolute ${Styles.DramaTextBox} left-[0%] md:left-[1%] bottom-[5.5%] aspect-[329/38] md:aspect-[387/55] overflow-hidden  w-[80%]  ml-[3.5%] h-auto p-[1%] pl-[2%]`}
            >
              <p
                className={`text-start font-bold font-rfabb text-black leading-tight text-[1.9vw] md:text-[1vw] pt-1`}
              >
                A show devoid of words! Let the expressions speak louder than
                words in Mukhauta: the show of mimes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row  justify-center  items-center h-[100%] md:w-[100%] w-[95%] space-y-[2%]  md:space-y-[0%]  md:space-x-[2%] ">
          <div className="relative w-[100%] md:w-[49.40%] h-[50%] ">
            <img
              className="hidden md:block w-[100%] h-[100%]"
              src={RangshalaBg}
              alt=""
            />
            <img
              className="block md:hidden  w-[100%] h-[100%]"
              src={RangshalaBgMobile}
              alt=""
            />
            <img
              className="hidden md:block absolute w-[37.7%] top-[18%] right-[2%]"
              src={RangshalaText}
              alt=""
            />
            <img
              className="block md:hidden absolute w-[30.7%] bottom-[19%] left-[1%]"
              src={RangshalaTextMobile}
              alt=""
            />

            <div
              className={`${Styles.DramaTextBox} hidden md:block w-[75%]  aspect-[465/60] overflow-hidden  h-[14.5%] p-[.8%] absolute  md:top-[5%] md:right-[3%]`}
            >
              <p
                className={`text-start font-rfabb text-black font-bold leading-tight text-[1.9vw] md:text-[1vw] pl-2 `}
              >
                Write, perform, and present acts that captivate the audience in
                this showcase of talent and cinematography.
              </p>
            </div>
            <div
              className={`${Styles.DramaTextBox} block md:hidden w-[75%] aspect-[329/45]  overflow-hidden  h-[17%] pl-[9px] absolute  bottom-[4%] left-[4%]`}
            >
              <p
                className={`text-start font-rfabb font-bold leading-tight text-[2vw] text-black pt-1 `}
              >
                Write, perform, and present acts that captivate the audience in
                this showcase of talent and cinematography.
              </p>
            </div>
          </div>
          <div className="relative w-[100%] md:w-[53.3%] h-[50%] ">
            <img
              className="hidden md:block h-[100%] w-[100%]"
              src={HunkaarBg}
              alt=""
            />
            <img
              className="block md:hidden h-[100%] w-[100%]"
              src={HunkaarBgMobile}
              alt=""
            />
            <img
              className="hidden md:block  absolute bottom-[18%] right-[2%] w-[30.5%]  "
              src={HunkaarText}
              alt=""
            />
            <img
              className="block md:hidden absolute bottom-[20%] left-[1%] w-[28.5%]  "
              src={HunkaarTextMobile}
              alt=""
            />
            <div
              className={`hidden md:block absolute ${Styles.DramaTextBox} right-[2.5%] bottom-[6.5%] aspect-[465/42] overflown-hidden  w-[82%]  ml-[6%] h-[15%] p-[1%] `}
            >
              <p
                className={`text-start font-bold leading-tight font-rfabb text-black text-[1.9vw] md:text-[1vw] pl-2 `}
              >
                From daily struggles to global issues, this is your stage. Shine
                in our official street play competition: Hunkaar!
              </p>
            </div>
            <div
              className={`block md:hidden  absolute ${Styles.DramaTextBox} left-[-2%] bottom-[6%] aspect-[292/34] overflown-hidden w-[76%]  ml-[6%] h-[16%] pl-[2%] p-[1%] `}
            >
              <p
                className={`text-left font-rfabb text-black font-bold leading-tight text-[2vw]`}
              >
                From daily struggles to global issues, this is your stage. Shine
                in our official street play competition: Hunkaar!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-[4%]">
        <Button_Component section={Rendition} showRegister={true} showRulebook={true} />
      </div>
    </div>
  );
}

export default DramaEvents;
