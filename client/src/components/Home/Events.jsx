import React, { useState, useEffect, useCallback } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import Event_logo from "../../assets/images/Event_logo.png";
import Event_button from "../../assets/images/Event_know_button.png";
import Halftone from "../../assets/images/Halftone.png";
import BackGround from "../../assets/images/YellowBg.png";
import DanceEvents from "../../assets/images/Razzmatazz.png";

const Events = () => {
  const eventData = [
    {
      id: 1,
      title: "Dance Events",
      items: [
        "Razzmatazz (Group dance)",
        "Street dance",
        "Classical group dance",
        "Duet dance",
        "Solo dance",
        "Individual western dance",
      ],
      prizeWorth: "2.5 Lakh+",
      image: DanceEvents,
      link: "/dance-events",
    },
    {
      id: 2,
      title: "Music Events",
      items: [
        "Solo Singing",
        "Group Singing",
        "Battle of Bands",
        "Classical Vocals",
        "Rap Battle",
        "Instrumental Solo",
      ],
      prizeWorth: "1.8 Lakh+",
      image: "https://picsum.photos/200/300",
      link: "/music-events",
    },
    {
      id: 3,
      title: "Drama Events",
      items: [
        "Street Play",
        "One Act Play",
        "Mime Show",
        "Monologue",
        "Skit Performance",
        "Stand-up Comedy",
      ],
      prizeWorth: "1.5 Lakh+",
      image: "https://picsum.photos/200/300",
      link: "/drama-events",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventData[currentEventIndex];

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
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handleKnowMore = useCallback(() => {
    window.location.href = currentEvent.link;
  }, [currentEvent.link]);
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${BackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo section */}
      <div className="w-[55%] md:w-[24%] mt-1 sm:mb-6 mb-4">
        <img
          src={Event_logo}
          alt="Event Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main content container */}
      <div className="sm:w-[70%] w-[80%] sm:h-[71.65vh] h-[70%] relative mx-auto">
        {/* Black shadow */}
        <div className="absolute -left-2 -bottom-2 w-full h-full bg-black "></div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="relative w-full h-full bg-black hidden sm:block p-2">
          <div
            className="absolute inset-0 z-10 mix-blend-soft-light opacity-20"
            style={{
              backgroundImage: `url(${Halftone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="relative w-full h-full bg-black">
            {/* Desktop Navigation */}
            <div
              className="absolute top-0 right-0 z-20 w-[18.49%] h-[12.91%]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 16% 100%)",
              }}
            >
              <div className="bg-[#53B08E] flex h-full p-1">
                <button
                  onClick={handlePrevious}
                  className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-4 relative z-20"
                >
                  <FaRegArrowAltCircleLeft className="w-[85%] h-[85%]" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[#53B08E] w-[90.68%] h-[90.69%] flex items-center justify-center ml-4 relative z-20"
                >
                  <FaRegArrowAltCircleRight className="w-[85%] h-[85%]" />
                </button>
              </div>
            </div>

            <div className="relative h-full">
              {/* Desktop Left panel */}
              <div
                className="absolute top-0 left-0 h-full w-[53%] bg-[#53B08E] z-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                }}
              >
                <div className="h-[23%] bg-[#003E68] flex justify-start items-center">
                  <h2 className="text-white tracking-wide text-[6vw] font-ttr font-semibold ml-10">
                    {currentEvent.title}
                  </h2>
                </div>

                <div className="w-[90%] md:h-[48.61%] sm:h-[56%] mt-[3%] px-[2%] py-[2%] ml-[2%]">
                  <ul className="lg:space-y-[2%] md:space-y-[4%] sm:space-y-[5%] text-white font-vetosans font-medium">
                    {currentEvent.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-start text-[1.25rem] md:text-[1.8rem] leading-none"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-[2%] flex-shrink-0"></span>
                        <span className="line-clamp-2 sm:line-clamp-1">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-[4%] left-[4.5%] md:w-[60%] md:h-[14.52%] sm:w-[73%] sm:h-[20.52%]">
                  <button
                    onClick={handleKnowMore}
                    className="w-full h-full transition-transform hover:scale-105 focus:outline-none"
                  >
                    <img
                      src={Event_button}
                      alt="Know More"
                      className="w-full h-full object-contain"
                    />
                  </button>
                </div>
              </div>

              {/* Desktop Right panel */}
              <div
                className="absolute top-0 right-0 h-full w-[60%]"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 right-0 w-[50%] h-[28%]">
                  <div
                    className="bg-[#53B08E] h-full"
                    style={{
                      clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  >
                    <div className="h-full flex flex-col justify-center items-center px-1">
                      <p className="text-white w-[88%] 2xl:text-[2.1vw] lg:text-[2.6vw] sm:text-[2.5vw] font-rfabb text-center  lg:mt-2 lg:ml-4 sm:ml-2">
                        PRIZES WORTH
                      </p>
                      <p className="text-[#E5FF00] w-[88%] text-[5vw] lg:text-[4.5vw] sm:text-[4.5vw] font-semibold font-ttr text-center leading-tight sm:ml-2">
                        {currentEvent.prizeWorth}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Layout - Hidden on desktop */}
        <div className="relative w-full h-full bg-black sm:hidden p-1">
          <div
            className="absolute inset-0 z-10 mix-blend-soft-light opacity-20"
            style={{
              backgroundImage: `url(${Halftone})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="relative w-full h-full aspect-[8/16] max-h-[80vh] bg-[#53B08E] overflow-hidden">
            <div
              className="w-full h-[60%] bg-green-400 relative"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 84%)",
              }}
            >
              <div
                className="w-full h-[17%] bg-[#003E68] flex justify-start items-center overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
              >
                <h2 className="text-white tracking-wide text-[10vw] font-semibold p-3 font-ttr">
                  {currentEvent.title}
                </h2>
              </div>

              <div className="w-full h-[87%] overflow-hidden -mt-4">
                <img
                  src={currentEvent.image}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[45%] right-0 w-[45%] h-[20%]">
              <div
                className="bg-[#003E68] h-full"
                style={{
                  clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <div className="h-full flex flex-col justify-center text-center items-center">
                  <p className="text-white text-[3.8vw] font-rfabb font-semibold tracking-wide ml-4 -mt-5">
                    PRIZES WORTH
                  </p>
                  <p className="text-[#E5FF00] text-[7vw] font-semibold font-ttr text-center leading-tight ml-2">
                    {currentEvent.prizeWorth}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full bg-[#53B08E] p-2 -mt-2 ml-2">
              <ul className="space-y-1 mb-4">
                {currentEvent.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-black font-vetosans font-bold max-[350px]:text-[1rem] text-[1.25rem] leading-none"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-1  relative z-20">
                <button
                  onClick={handleKnowMore}
                  className="w-[56%] transition-transform hover:scale-105 focus:outline-none"
                >
                  <img
                    src={Event_button}
                    alt="Know More"
                    className="w-full h-full object-contain"
                  />
                </button>

                <div className="flex gap-2 mr-2">
                  <button
                    onClick={handlePrevious}
                    className="bg-transparent p-2 rounded-full text-black hover:bg-[#47997C] active:bg-[#47997C] transition-colors relative z-20"
                  >
                    <FaRegArrowAltCircleLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-transparent p-2 rounded-full text-black hover:bg-[#47997C] active:bg-[#47997C] transition-colors relative z-20"
                  >
                    <FaRegArrowAltCircleRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
