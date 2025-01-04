import React from "react";
import vivacityLogo from "../assets/images/Vivalogo_mobile.png";
import FacebookIcon from "../assets/images/facebookLogo.png";
import InstagramIcon from "../assets/images/instagramLogo.png";
import TwitterIcon from "../assets/images/twitterLogo.png";
import FooterBackground from "../assets/images/Footer_mobile.png";

function Footer() {
    const aspectRatio = 396 / 512; 

  return (
    <div
      className="relative w-full"
      style={{
        backgroundColor: "black",
        height: `calc(100vw * ${aspectRatio})`, 
        backgroundPosition: "top",
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
          className="absolute  inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${FooterBackground})`,
            backgroundPosition:"top"
          }}
        />
<div className="relative w-[80%] h-[72.48%] flex flex-col items-center justify-center top-[28.29%] ">
  {/* Parent Div */}
    
    {/* Top Part */}
    <div className="flex flex-col items-center h-[56.58%] ">
      {/* Logo Section */}
      <img
        src={vivacityLogo}
        alt="Vivacity Logo"
        className="w-[25vw] top-[] transform scale-[1.75] mb-[1.5vw]  "
      />
      <p className="text-center text-black text-sm sm:text-base">
        Developed by GDG on Campus, LNMIIT
      </p>
      <p className="text-center text-black text-sm sm:text-base mt-1">
        Designed by Vivacity. All rights reserved.
      </p>
    </div>
    
    {/* Bottom Part */}
    <div className="flex flex-col items-center  h-[35.81%] ">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-2">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TwitterIcon}
            alt="Twitter"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base ">
        <a href="#" className="text-black hover:underline">
          Home
        </a>
        <a href="#" className="text-black hover:underline">
          Sponsors
        </a>
        <a href="#" className="text-black hover:underline">
          Events
        </a>
        <a href="#" className="text-black hover:underline">
          The Team
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-center text-black text-sm sm:text-base h-[63.09%]">
        <p>For further queries:</p>
        <p>Ayush Dhanesha: +91 9998523792</p>
        <p>Shubhanshu Singhal: +91 8949024851</p>
      </div>
    </div>
  </div>

       
        
    </div>
    </div>
  );
}

export default Footer;
