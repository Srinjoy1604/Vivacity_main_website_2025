import React from "react";
import vivacityLogo from "../assets/images/VivacityLogo.png";
import FacebookIcon from "../assets/images/facebookLogo.png";
import InstagramIcon from "../assets/images/instagramLogo.png";
import TwitterIcon from "../assets/images/twitterLogo.png";
import FooterBackground from "../assets/images/FooterBackground.png";
import Backbg from "../assets/images/Team.png"
function Footer() {
  const aspectRatio = 415 / 1280; 

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage:`url(${Backbg})`,
        height: `calc(100vw * ${aspectRatio})`, 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="relative mx-auto overflow-hidden flex flex-col justify-center items-center"
        style={{
          width: "100%", 
          height: "100%",
          
        }}
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${FooterBackground})`,
            backgroundPosition:"top"
          }}
        />

       
        <div
          className="relative z-10 h-full flex justify-center items-center px-[3vw] m" 
          style={{
            gap: "30vw",
           }} 
          
        >
         
          <div className="flex flex-col items-start">
            <img
              src={vivacityLogo}
              alt="Vivacity Logo"
              className="w-[20vw] mb-[1.5vw] transform scale-150 "
            />
            <p className="text-black text-[1.5vw] font-vetosans">
              Developed by GDG on Campus, LNMIIT
            </p>
            <p className="text-black text-[1.5vw] font-vetosans">
              Designed by Vivacity. All rights reserved.
            </p>
          </div>

          
          <div className="flex flex-col items-end">
            <div className="flex space-x-[2vw] mb-[1vw]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-[2vw] h-[2vw] object-contain"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="w-[2vw] h-[2vw] object-contain"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-[2vw] h-[2vw] object-contain"
                />
              </a>
            </div>

            <div className="flex flex-wrap space-x-[1.5vw] mb-[1vw]">
              <a
                href="#"
                className="text-black text-[1.5vw] font-vetosans  fontsize: hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black text-[1.5vw] font-vetosans hover:underline"
              >
                Sponsors
              </a>
              <a
                href="#"
                className="text-black text-[1.5vw] font-vetosans hover:underline"
              >
                Events
              </a>
              <a
                href="#"
                className="text-black text-[1.5vw] font-vetosans hover:underline"
              >
                The Team
              </a>
            </div>

            <div className="flex flex-col items-end space-y-[0.5vw]">
              <p className="text-black text-[1.5vw] font-vetosans">
                For further queries,
              </p>
              <p className="text-black text-[1.5vw] font-vetosans">
                Ayush Dhanesha: +91 9998523792
              </p>
              <p className="text-black text-[1.5vw] font-vetosans">
                Shubhanshu Singhal: +91 8949024851
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
