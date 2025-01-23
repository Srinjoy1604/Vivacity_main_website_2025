import React, { useEffect, useRef, useState } from "react";
import styles from "../Home/Mascot.module.css";

import { useNavigate } from "react-router-dom";
const aws = import.meta.env.VITE_AWS;

const NetraLarge = `${aws}/NetraImg.webp`;
const NetraText = `${aws}/NETRAText.webp`;
const NetraMobile = `${aws}/NetraMobile.webp`;
const netra_black_textbox = `${aws}/netra_black_textbox.webp`;
const NetraYellowBox = `${aws}/NetraYellowBox.webp`;


function Mascot() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() =>{
      setIsClicked(false);
      navigate("/Netra");
    } , 600);
  };
  return (
    <div
      className={`w-[100%] h-[100%] flex items-center align-middle justify-center ${styles.MascotBackground} max-[800px]:h-fit pt-[5%] pl-[2%] pr-[2%] pb-[6%]`}
    >
      <div className="w-[100%] grid grid-cols-2 place-items-center max-[800px]:grid-cols-1">
        <div className="w-[100%] lg:h-[100%]">
          <div
            className={`${styles.NetraDiv} p-[6%] mb-[1%] pb-[10%] w-[100%] sm:h-[49.5%]`}
          >
            <h1 className="text-center m-[1%] mt-0 text-[#FFFFFF] font-rfabb text-[400] text-[2rem] max-[800px]:text-[1.5rem]">
              MEET OUR MASCOT
            </h1>
            <div className="w-[100%] grid place-items-center">
              <img
                src={NetraText}
                className="w-[70%] h-auto max-[800px]:w-[50%]"
              ></img>
            </div>
          </div>
          <div
            className={`${styles.NetraMobile} grid place-items-center w-[100%] h-[100%] pl-[1.2%] pr-[1.2%] pb-[2.5%] hidden max-[800px]:block`}
          >
            <img src={NetraMobile} className={`w-[100%] h-auto`}></img>
          </div>
          <div className={`${styles.NetraOriginDiv} p-[5%] w-[100%] sm:h-[49.5%]`}>
            <h1 className="text-white text-[2rem] font-rfabb m-[2%] mb-[6%] max-[800px]:text-[1.5rem]">
              want to know the origin story of netra?
            </h1>
            <div className="w-[100%] h-[100%] pl-[2%]">
              <div className="relative w-fit">
                <button
                  onClick={handleClick}
                  className="relative group focus:outline-none cursor-pointer"
                >
                  <div className="absolute -left-1 -bottom-1 w-full h-full">
                    <img
                      src={netra_black_textbox}
                      alt="button shadow"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div
                    className={`relative duration-300 ${
                      isClicked ? "scale-95 -translate-x-2 translate-y-1" : ""
                    }`}
                  >
                    <img
                      src={NetraYellowBox}
                      alt="yellow button"
                      className={`w-full h-full object-contain transition-transform ${
                        isClicked ? "brightness-110" : ""
                      }`}
                    />
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-rfabb font-medium text-xl sm:text-2xl whitespace-nowrap">
                      CHRONICLES OF NETRA
                    </p>
                    <div
                      className={`absolute inset-0 bg-white transition-opacity duration-300 rounded-lg ${
                        isClicked ? "opacity-10" : "opacity-0"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] max-[800px]:hidden">
          <div
            className={`${styles.Mascot} grid place-items-center h-full w-[100%]`}
          >
            <img src={NetraLarge} className="w-[100%] h-[100%]"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mascot;
