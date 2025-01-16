import React from "react";
import Infinite from "../subPages/Infinite";
import Image1 from "../../assets/images/AboutBkg.png";
import Image2 from "../../assets/images/Halftone.png";
import Image3 from "../../assets/images/Name_Tag_unit.png";
import Image4 from "../../assets/images/CTA.png";
import Image5 from "../../assets/images/blue_arrow.png";
import Image6 from "../../assets/images/red_arrow.png";
import Oval from "../../assets/images/Oval.png";
import { NavLink } from "react-router-dom";

function About() {
  const textContent =
    "\u00A0\u00A0\u00A0\u00A0\u00A0KEEP\u00A0\u00A0SCROLLING!\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <>
      <div
        className="relative w-full h-[1000px] min-[830px]:h-[100%] px-[2rem] flex items-center justify-center overflow-hidden min-[830px]:aspect-[20/17] mt-[-17%]"
      >
        <div className="hidden min-[830px]:block absolute bottom-0 w-full">
          <img src={Image1} className="w-[100vw] min-[830px]:h-[100%]" />
        </div>
        <div className="min-[830px]:hidden absolute bottom-0 w-full">
          <img src={Oval} className="w-[100vw] h-[1000px] min-[830px]:h-[100%]" />
        </div>
        <div className="min-[830px]:hidden relative flex">
          <div className="absolute z-10 top-[97%] w-full">
            <NavLink to="/">
              <img
                src={Image4}
                alt=""
                className="max-w-[50%] mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="absolute z-20 top-[-8%] w-full">
            <NavLink to="/">
              <img
                src={Image3}
                alt="Name Tag Unit"
                className="max-w-[60%] mx-auto transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="absolute h-52 w-52 top-[-20%] right-[-30%]">
            <img src={Image5} alt="" />
          </div>
          <div className="absolute h-52 w-52 z-40 bottom-[-40%] left-[-35%]">
            <img src={Image6} alt="" />
          </div>

          <div className="p-3 sm:p-6 md:p-8 max-w-[26rem] h-[100%] bg-[#F8B931] grid place-items-center">
            <div className="flex justify-center w-full">
              <div className="relative bg-gray-300 border-black border-2 mt-5 sm:mt-2 mb-4 rounded-md w-[83%] h-[16rem]">
                <img src="" alt="" />
              </div>
            </div>

            <h2 className="font-bold text-[1.5rem] px-4 sm:px-8 font-rfabb">
              ABOUT VIVACITY
            </h2>
            <p className="text-base text-[1rem] leading-5 px-4 sm:px-8 font-vetosans mb-6 font-light">
              Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant
              spirit of Gen Z and Millennials, presenting an enticing mix of
              music, dance, art, and numerous engaging activities. With
              exhilarating performances and insightful exhibitions, Vivacity
              captures the true essence of a lively and memorable cultural
              celebration.
            </p>
          </div>
        </div>

        <div
          className="hidden min-[830px]:flex relative gap-20 bg-[#F8B931] shadow-lg max-w-[70%] aspect-[2.5] items-center mt-[15%]"
          style={{
            transform: "rotate(3deg)",
          }}
        >
          <div className="absolute h-52 w-52 z-40 min-[1400px]:top-[-30%] right-[-10%] top-[-50%]">
            <img src={Image5} alt="" />
          </div>

          <div className="absolute h-52 w-52 z-40 min-[1400px]:bottom-[-55%] left-[-10%] bottom-[-100%]">
            <img src={Image6} alt="" />
          </div>

          <div className="absolute z-40 top-[-14%] left-[-8%] rotate-[-16.58deg]">
            <NavLink to="/">
              <img
                src={Image3}
                alt="Name Tag Unit"
                className="w-[15vw] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="absolute z-40 bottom-[-5%] right-[-5%] rotate-[-16.58deg]">
            <NavLink to="/">
              <img
                src={Image4}
                alt="Name Tag Unit"
                className="w-[16vw] transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          ></div>

          <div className="relative z-10 flex items-center w-full h-full">
            <div className="leftDiv w-[30%] h-[80%] rounded-lg bg-gray-600 border-[3px] border-black ml-12">
              <img src="" alt="" />
            </div>

            <div className="relative flex-1 transform -skew-x-6 p-12 mr-4 min-[1100px]:mr-12 1300:mr-20">
              <div className="transform skew-x-6">
                <h1 className="text-[1rem] lg:text-[1.5rem] 1300:text-[2rem] 1600:text-[2.75rem] font-extrabold mb-2 font-rfabb">
                  ABOUT VIVACITY
                </h1>
                <p className="text-[0.8rem] lg:text-[1rem] 1300:text-[1.25rem] 1600:text-[1.625rem] font-vetosans font-light">
                  Vivacity, the annual cultural fest of LNMIIT, embodies the
                  vibrant spirit of Gen Z and Millennials, presenting an
                  enticing mix of music, dance, and numerous engaging
                  activities. With exhilarating performances and insightful
                  exhibitions, Vivacity captures the true essence of a lively
                  and memorable cultural celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infinite text={textContent} />
    </>
  );
}

export default About;

