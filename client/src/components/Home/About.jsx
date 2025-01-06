import React from "react";
import Infinite from "../subPages/Infinite";
import Image1 from "../../assets/images/Grid.png";
import Image2 from "../../assets/images/Halftone.png";
import Image3 from "../../assets/images/Name_Tag_unit.png";
import Image4 from "../../assets/images/CTA.png";
import Image5 from "../../assets/images/blue_arrow.png";
import Image6 from "../../assets/images/red_arrow.png";
import "./forAbout.css"
import { NavLink } from "react-router-dom"


function About() {
  const textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0KEEP\u00A0\u00A0SCROLLING!\u00A0\u00A0\u00A0\u00A0\u00A0";

  return (
    <>
      <div
        className="relative w-full h-[100vh] bg-gray-900 p-8 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="block lg:hidden relative">

        <div
            className="smImg4 absolute h-[35vh] w-[25vw] sm:h-[30vh] sm:w-[20vw]  md:h-[25vh] md:w-[15vw] z-50"
            style={{
              top: "97%",
              left: "34%", 
              transform: "rotate(8deg)" ,
            }}
          >
            <NavLink to="/">
              <img
                src={Image4}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="smImg3 imagee3 absolute h-[42vh] w-[34vw] sm:h-[37vh] sm:w-[32vw]  md:h-[32vh] md:w-[22vw] z-50"
            style={{
              top: "-13%",
              left: "26%",
              transform: "rotate(15deg)" ,
            }}
          >
            <NavLink to="/">
              <img
                src={Image3}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div className="bg-yellow-400 p-3 sm:p-6 md:p-8 rounded-2xl max-w-md h-[83vh] sm:max-w-[60vw] md:max-w-[50vw] md:h-[80vh]">
            <div className="flex justify-center">
              <div className="bg-gray-300 border-black border-2 mt-5 sm:mt-2 w-64 sm:w-3/4 md:w-2/3 aspect-square mb-4 rounded-md">
                <img src="" alt="" />
              </div>
            </div>

            <h2 className="font-bold text-2xl text-center mb-4">ABOUT VIVACITY</h2>
            <p className="text-center text-base">
              Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of
              Gen Z and Millennials, presenting an enticing mix of music, dance, art, and
              numerous engaging activities. With exhilarating performances and
              insightful exhibitions, Vivacity captures the true essence of a lively and
              memorable cultural celebration.
            </p>
          </div>
        </div>


        <div className="hidden lg:flex relative gap-20  bg-yellow-400 p-8 shadow-lg max-w-[70vw] aspect-[2.5] items-center"
          style={{
            transform: "rotate(3deg)",
          }}
        >

          <div className="blueArr absolute h-52 w-52 z-50 "
            style={{
              top: "-30%",
              right: "-10%",
            }}
          >
            <img src={Image5} alt="" />
          </div>

          <div className="redArr imagee6 absolute h-52 w-52 z-50 "
            style={{
              bottom: "-55%",
              left: "-10%",
            }}
          >
            <img src={Image6} alt="" />
          </div>

          <div
            className="imagee3 absolute h-[25vh] w-[18vw] z-50"
            style={{
              top: "-14%",
              left: "-8%",
            }}
          >
            <NavLink to="/">
              <img
                src={Image3}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="imagee4 absolute h-[25vh] w-[15vw] z-50"
            style={{
              top: "90%",
              left: "86%",
            }}
          >
            <NavLink to="/">
              <img
                src={Image4}
                alt="Name Tag Unit"
                className="transform transition-transform duration-300 hover:scale-110 active:scale-105 cursor-pointer"
              />
            </NavLink>
          </div>

          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
            style={{
              backgroundImage: `url(${Image2})`,
            }}
          ></div>

          <div className="relative z-10 flex gap-[4vw] items-center w-full">
            <div className="leftDiv w-[26%] aspect-square rounded-lg bg-gray-600 border-[3px] border-black ml-[4vw]">

              <img src="" alt="" />

            </div>

            <div className="relative flex-1 transform -skew-x-6 p-[2vw] mr-[4vw]">
              <div className="transform skew-x-6">
                <h1 className="head lg:pt-4 xl:pt-0 text-3xl font-extrabold mb-[3vh]">ABOUT VIVACITY</h1>
                <p className="para text-base">
                  Vivacity, the annual cultural fest of LNMIIT, embodies the vibrant spirit of Gen Z and
                  Millennials, presenting an enticing mix of music, dance, and numerous engaging
                  activities. With exhilarating performances and insightful exhibitions, Vivacity captures
                  the true essence of a lively and memorable cultural celebration.
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




