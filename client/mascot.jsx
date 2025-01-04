import React from "react";
import mascotBg from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/mascotBackground.png";
import NetraImg from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/NetraImg.png";
import NetraBg from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/NetraBg.png";
import Netra from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/Netra.png";
import ChroniclesBg from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/chronivlesBg.png";
import Chronicles from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/chronicles.png";
import NetraImgMobile from "/Users/aishwaryawadhwani/Desktop/vivaproject2/Vivacity_main_website_2025/client/src/assets/images/NetraImgMobile.png";
const Mascot = () => {
  return (
    <>
      <div className="w-screen min-h-[150vh] md:max-h-screen md:min-h-0 bg-red-50 relative">
        {/* Background Image */}
        <img
          className="w-full min-h-[150vh] h-full md:min-h-0 object-cover"
          src={mascotBg}
          alt="Background"
        />

        {/* Parent Div for Horizontal Alignment */}
        <div className="flex flex-row w-full min-h-screen md:h-full md:min-h-0 p-8 space-x-8 absolute top-0 left-0 px-10 py-20">
          {/* Overlay Group 1 */}
          <div className="flex flex-col items-center space-y-4 w-[80vh] md:w-[41.41vw] h-full relative">
            {/* Overlay Div 1 */}
            <div className="bg-red-400 w-full flex-grow box-border relative h-[20vh] md:h-auto">
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src={NetraBg} // Replace with your image path
                alt=""
              />
              <img
                className="absolute w-3/4 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Adjust w-1/2 for sizing
                src={Netra} // Replace with your new image path
                alt="Description"
              />
            </div>
            {/*div3*/}
            <div className="md:hidden lg:hidden w-full flex-grow box-border relative">
              <img className="w-full h-full" src={NetraImgMobile} alt="" />
            </div>
            {/* Overlay Div 2 */}
            <div className="bg-blue-400 w-full flex-grow box-border relative flex flex-col items-start pl-12 h-[20vh] md:h-auto">
              {" "}
              {/* Add left padding to the parent div */}
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src={ChroniclesBg} // Replace with your image path
                alt=""
              />
              {/* Heading */}
              {/* Chronicles Image */}
              <div className="absolute flex flex-col items-start gap-y-10  bottom-[2vh]">
                {" "}
                {/* Use flex container with gap */}
                <h2 className="font-bold font-rfabb text-white lg:text-4xl md:text-2xl sm:text-xl lg:top-1/4 w-11/12 relative lg:-translate-y-4">
                  {" "}
                  {/* Slightly raise h2 on large screens */}
                  WANT TO KNOW THE ORIGIN STORY OF NETRA?
                </h2>
                <img className=" h-[3.5vh]" src={Chronicles} alt="" />
              </div>
            </div>
          </div>

          {/* Overlay Group 2 */}
          <div className="hidden md:flex flex-col items-center space-y-4 w-[47.69vw]">
            {/* Overlay Div 3 */}
            <div className="bg-transparent w-full box-border relative overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={NetraImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mascot;
