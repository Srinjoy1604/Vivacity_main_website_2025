import React, { useState, useEffect, useCallback } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const aws = import.meta.env.VITE_AWS;

const Event_logo = `${aws}/Event_logo.webp`;
const Event_button = `${aws}/Pinkbtn_front.webp`;
const Halftone = `${aws}/Halftone.webp`;
const BackGround = `${aws}/YellowBg.webp`;
const Pinkbtn_black = `${aws}/Pinkbtn_black.webp`;
const Music = `${aws}/Picture1.webp`;
const Photography = `${aws}/Picture2.webp`;
const Art = `${aws}/Picture3.webp`;
const Quizzing = `${aws}/Picture4.webp`;
const Drama = `${aws}/Picture5.webp`;
const Blind = `${aws}/Picture6.webp`;
const Fashion = `${aws}/Picture7.webp`;
const social = `${aws}/Picture8.webp`;
const Fun = `${aws}/Picture9.webp`;

const Events = () => {
  const navigate = useNavigate();
  const eventData = [
    {
      id: 1,
      title: "Fashion Events",
      items: ["Vogue", "Mr and Mrs viva"],
      prizeWorth: "1.75 Lakh+",
      image: Fashion,
      link: "#fashion",
    },
    {
      id: 2,
      title: "Music Events",
      items: ["Battle of Bands", "Gully War", "Malhaar", "Aaroh", "Bandish"],
      prizeWorth: "2.3 Lakh+",
      image: Music,
      link: "#music",
    },
    {
      id: 3,
      title: "Drama Events",
      items: ["Rangshala", "Hunkaar", "paddhati", "Mukhauta "],
      prizeWorth: "2.4 Lakh+",
      image: Drama,
      link: "#drama",
    },
    {
      id: 4,
      title: "Art Events",
      items: [
        "Tattoo Tales ",
        "Splash",
        "Eclectic",
        "Hue-Universe",
        "Contrasto",
      ],
      prizeWorth: "1.0 Lakh+",
      image: Art,
      link: "#art",
    },
    {
      id: 5,
      title: "Dance Events",
      items: [
        "Razzmatazz",
        "Street Dance",
        "Let's Tangle",
        "Pump It Up",
        "Mudra",
        "Taal Tarang",
      ],
      prizeWorth: "2.5 Lakh+",
      image: Fun,
      link: "#dance",
    },
    {
      id: 6,
      title: "Speaking Arts",
      items: [
        " Spotlight",
        "Family Feud",
        "Potpourit",
        "Dare to spell",
        "Duologue",
        "Afreen",
        "Open Discussion",
      ],
      prizeWorth: "2.5 Lakh+",
      image: Fun,
      link: "#speakingArts",
    },
    {
      id: 7,
      title: "Photography Events",
      items: [
        "FMC",
        "Photobooth",
        "Image Hunt",
        "Pixels",
        "Perspective",
        "Kalakriti",
      ],
      prizeWorth: "",
      image: Photography,
      link: "#photography",
    },

    {
      id: 8,
      title: "Quizzing Events",
      items: ["Bamboozled", "Movie Auction"],
      prizeWorth: "20 K+",
      image: Quizzing,
      link: "#quizzinga",
    },

    {
      id: 9,
      title: "Social Events",
      items: ["Sahyog"],
      prizeWorth: "",
      image: social,
      link: "#social",
    },

    {
      id: 10,
      title: "Exciting Pursuits",
      items: ["Prom Night", "silent disco", "jam night", "stage spectrum"],
      prizeWorth: "",
      image: Fun,
      link: "#manymore",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventData[currentEventIndex];
  const [isClicked, setIsClicked] = useState(false);
  const handleNext = useCallback(() => {
    setCurrentEventIndex((prev) => (prev + 1) % eventData.length);
  }, [eventData.length]);

  const handlePrevious = useCallback(() => {
    setCurrentEventIndex((prev) =>
      prev === 0 ? eventData.length - 1 : prev - 1
    );
  }, [eventData.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleKnowMore = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      if (currentEvent.link) {
        navigate(`/events${currentEvent.link}`);
      } else {
        navigate("/events");
      }
    }, 300);
  }, [currentEvent, navigate]);

  return (
    <div
      className="min-h-[60vh] flex flex-col justify-center items-center md:pb-[0%] xs:pb-[4%] xxs:pb-[7%] pb-[10%]"
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title section */}
      <div className="w-[53%] md:w-[24%] sm:mb-[3%] mb-[3.4%] mt-[1%] ">
        <img
          src={Event_logo}
          alt="Event Logo"
          className="w-full h-full object-contain  pointer-events-none"
        />
      </div>

      {/* Main content container */}
      <div className="sm:w-[78%] w-[80%] h-auto relative mx-auto mb-[6%]">
        {/* Black shadow */}
        <div className="absolute -left-2 -bottom-2 w-full h-full bg-black"></div>

        {/* Desktop Layout  */}
        <div className="relative w-full h-[390px] md:h-[460px] lg:h-[470px] xl:h-[550px] 2xl:h-[600px] 1980:h-[900px] md:min-h-[50vh] xl:min-h-[70vh]  bg-black hidden sm:block p-2">
          <div className="relative w-full h-full bg-black">
            <div className="relative h-full">
              {/* Desktop Left panel */}
              <div
                className="absolute top-0 left-0 h-full w-[53%] bg-[#53B08E] z-30 flex flex-col"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                {/* Title section */}
                <div className="h-[23%] bg-[#003E68] flex justify-start items-center">
                  <h2 className="text-white tracking-wide text-[6vw] font-ttr font-semibold ml-[8%]">
                    {currentEvent.title}
                  </h2>
                </div>

                {/* Content section with flex layout */}
                <div className="flex flex-col justify-between h-[77%] py-4 relative">
                  {/* List items */}
                  <div className="w-[90%] px-[2%] ml-[2%] flex-grow flex ">
                    <ul className="w-full flex flex-col justify-start space-y-[2.8%]">
                      {currentEvent.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-start text-[1.25rem] md:text-[1.8rem] xl:text-[2.5vw] 2xl:text-[2vw] 1980:text-[2.7vw] 2600:text-[2vw] leading-none text-white font-vetosans font-medium"
                        >
                          <span className="w-2 h-2 xl:w-3 xl:h-3 bg-white rounded-full mr-[2%] flex-shrink-0"></span>
                          <span className="line-clamp-2 sm:line-clamp-1">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-[60%] px-[4.5%] relative z-50 py-[1%]">
                    <button
                      onClick={handleKnowMore}
                      className="w-full group relative focus:outline-none cursor-pointer"
                    >
                      <div className="absolute -left-1 -bottom-1 w-full h-full">
                        <img
                          src={Pinkbtn_black}
                          alt="button shadow"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div
                        className={`relative duration-300 ${
                          isClicked
                            ? "scale-95 -translate-x-2 translate-y-2"
                            : ""
                        }`}
                      >
                        <img
                          src={Event_button}
                          alt="Know More"
                          className={`w-full h-full object-contain transition-transform ${
                            isClicked ? "brightness-110" : ""
                          }`}
                        />
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-rfabb font-medium text-[2.3vw] whitespace-nowrap">
                          Know More
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

              {/* Desktop Right panel */}
              <div
                className="absolute top-0 right-0 h-full w-[60%] z-20"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover  pointer-events-none"
                />

                <div className="absolute bottom-0 right-0 w-[50%] h-[28%]">
                  <div
                    className="bg-[#53B08E] h-full"
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center px-1">
                      <p className="text-white w-[88%] 2xl:text-[2.1vw] lg:text-[2.6vw] sm:text-[2.5vw] font-rfabb text-center lg:mt-2 lg:ml-4 sm:ml-2">
                        PRIZES WORTH
                      </p>
                      <p className="text-[#E5FF00] w-[88%] text-[5vw] lg:text-[4.5vw] sm:text-[4.5vw] font-semibold font-ttr text-center leading-tight sm:ml-2">
                        {currentEvent.prizeWorth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div
                className="absolute top-0 right-0 z-30 w-[18.49%] h-[12.91%]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
                }}
              >
                <div className="bg-[#53B08E] flex h-full p-1">
                  <button className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-5 relative z-20 ">
                    <FaRegArrowAltCircleLeft
                      className="w-auto h-[85%] hover:scale-110"
                      onClick={handlePrevious}
                    />
                  </button>
                  <button className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-3 relative z-20 ">
                    <FaRegArrowAltCircleRight
                      className="w-auto h-[85%] hover:scale-110"
                      onClick={handleNext}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 z-40 mix-blend-soft-light opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url(${Halftone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Mobile Layout */}
        <div className="relative w-full h-full bg-black sm:hidden p-1">
          <div
            className="absolute inset-0 z-10 mix-blend-soft-light opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url(${Halftone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="relative w-full h-full aspect-[8/16]  bg-[#53B08E] overflow-hidden">
            <div
              className="w-full h-[60%] bg-green-400 relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 84%)",
              }}
            >
              <div
                className="w-full h-[25%] bg-[#003E68] flex justify-start items-center overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
              >
                <h2 className="text-white tracking-wide text-[9.9vw] xxxs:text-[10vw] 380:text-[10.6vw] font-semibold p-6 -mt-3 font-ttr">
                  {currentEvent.title}
                </h2>
              </div>

              <div className="w-full h-[83%] overflow-hidden -mt-[7%]">
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover  pointer-events-none -mt-[5%]"
                />
              </div>
            </div>

            <div className="absolute top-[45%] right-0 w-[58%] h-[20%]">
              <div
                className="bg-[#003E68] h-full"
                style={{
                  clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <div className="h-full flex flex-col justify-center text-center items-center">
                  <p className="text-white text-[4.5vw] font-rfabb font-semibold tracking-wide ml-[20%] -mt-[25%]">
                    PRIZES WORTH
                  </p>
                  <p className="text-[#E5FF00] text-[13vw] font-semibold font-ttr text-center leading-tight ml-[12%] -mb-[8%]">
                    {currentEvent.prizeWorth}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full bg-[#53B08E] p-2 -mt-1.8 ml-2 h-[25%] flex items-center">
              <ul className="w-full flex flex-col justify-center space-y-1">
                {currentEvent.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-black font-vetosans font-black max-[380px]:text-[5.2vw] text-[5.5vw] leading-none"
                  >
                    <span className="380:w-2 380:h-2 w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between p-1 ml-[3%] relative z-20">
              <button
                onClick={handleKnowMore}
                className="w-[55%] group relative focus:outline-none cursor-pointer"
              >
                <div className="absolute -left-1 -bottom-1 w-full h-full">
                  <img
                    src={Pinkbtn_black}
                    alt="button shadow"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className={`relative duration-300 ${
                    isClicked ? "scale-95 -translate-x-1 translate-y-1" : ""
                  }`}
                >
                  <img
                    src={Event_button}
                    alt="Know More"
                    className={`w-full h-full object-contain transition-transform ${
                      isClicked ? "brightness-110" : ""
                    }`}
                  />
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-rfabb font-medium text-[5.3vw] whitespace-nowrap">
                    Know More
                  </p>
                  <div
                    className={`absolute inset-0 bg-white transition-opacity duration-300 rounded-lg ${
                      isClicked ? "opacity-10" : "opacity-0"
                    }`}
                  />
                </div>
              </button>

              <div className="flex  mr-[3%] w-[40%]">
                <button className="bg-transparent p-1 rounded-full text-black hover:bg-[#47997C] active:bg-[#47997C] transition-colors relative z-20 w-1/2 aspect-square flex items-center justify-center">
                  <FaRegArrowAltCircleLeft
                    className="w-full h-full max-w-[45px]"
                    onClick={handlePrevious}
                  />
                </button>
                <button className="bg-transparent p-1 rounded-full text-black hover:bg-[#47997C] active:bg-[#47997C] transition-colors relative z-20 w-1/2 aspect-square flex items-center justify-center">
                  <FaRegArrowAltCircleRight
                    className="w-full h-full max-w-[45px]"
                    onClick={handleNext}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
