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
      className="relative w-full bg-black"
      style={{
        backgroundImage: `url(${FooterBackground})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: `calc(100vw * ${aspectRatio})`,
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4 py-8">
        {/* Logo Section */}
        <img
          src={vivacityLogo}
          alt="Vivacity Logo"
          className="w-[20vw] mb-[1.5vw] transform scale-150 sm:w-48"
        />
        <p className="text-center text-black text-sm sm:text-base">
          Developed by GDG on Campus, LNMIIT
        </p>
        <p className="text-center text-black text-sm sm:text-base mt-1">
          Designed by Vivacity. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-4 space-x-4">
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
        <div className="flex flex-wrap justify-center mt-4 space-x-6 text-sm sm:text-base">
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
        <div className="mt-4 text-center text-black text-sm sm:text-base">
          <p>For further queries:</p>
          <p>Ayush Dhanesha: +91 9998523792</p>
          <p>Shubhanshu Singhal: +91 8949024851</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
