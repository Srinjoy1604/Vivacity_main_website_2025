import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import vivacityLogo from "../assets/images/VivacityLogo.webp";
import FacebookIcon from "../assets/images/facebookLogo.webp";
import InstagramIcon from "../assets/images/instagramLogo.webp";
import TwitterIcon from "../assets/images/twitterLogo.webp";
import FooterBackground from "../assets/images/FooterBackground.webp";
import Backbg from "../assets/images/Team.webp";
import Backbg1 from "../assets/images/ExcitingBg.webp";
import Backbg2 from "../assets/images/VioletBg.webp";
import { Link, NavLink } from "react-router-dom";
import GDG from "../assets/images/gdglogo.webp";
import "../App.css";

function Footer() {
  const aspectRatio = 415 / 1480;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className="relative w-full "
      style={{
        backgroundImage: `url(${
          location.pathname === "/"
            ? Backbg
            : location.pathname === "/events"
            ? Backbg1
            : location.pathname === "/OurTeam"
            ? Backbg2
            : Backbg
        })`,
        height: `calc(100vw * ${aspectRatio})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: location.pathname === "/NormalRegistration" ? "none" : "block",
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
            backgroundPosition: "top",
          }}
        />

        <div
          className="relative z-10 h-full flex justify-center items-center px-[3vw] mt-[4%]"
          style={{
            gap: "34vw",
          }}
        >
          <div className="flex flex-col items-start mr-8 ">
            <img
              src={vivacityLogo}
              alt="Vivacity Logo"
              className="w-[21vw] mb-[1.5vw]  transform scale-150  origin-left "
            />
            <p className="flex items-center justify-center text-black text-[1.4vw] font-semibold tracking-wide font-vetosans">
              <span className="font-medium">Developed by </span><a href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"><span className="xtext-gradient font-black flex items-center justify-center"><img src={GDG} className="w-8 h-auto ml-1.5 mr-0.5"></img>GDG on Campus, LNMIIT</span></a>
            </p>
            <p className="text-black text-[1.4vw] font-semibold  leading-normal tracking-wide font-vetosans mt-[1.5%]">
            <span className="font-medium">Designed by</span> Vivacity. All rights reserved.
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
              <a href="" target="_blank" rel="noopener noreferrer">
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

            <div className="flex flex-wrap space-x-[1.5vw] mb-[1vw] tracking-wide">
              <Link
                to="/"
                className="text-black text-[1.5vw] font-vetosans font-bold fontsize: hover:underline tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/Sponsors"
                className="text-black text-[1.5vw] font-bold  font-vetosans hover:underline tracking-wide"
              >
                Sponsors
              </Link>
              <Link
                to="/events"
                className="text-black text-[1.5vw] font-bold font-vetosans hover:underline tracking-wide"
              >
                Events
              </Link>
              <Link
                to="/OurTeam"
                className="text-black text-[1.5vw] font-semibold font-vetosans hover:underline tracking-wide"
              >
                The Team
              </Link>
            </div>

            <div className="flex flex-col items-end space-y-[0.5vw]">
              <p className="text-black text-[1.5vw] font-medium font-vetosans tracking-wide">
                For further queries,
              </p>
              <p className="text-black text-[1.5vw] font-bold font-vetosans tracking-wide">
                Ayush Dhanesha: +91 9998523792
              </p>
              <p className="text-black text-[1.5vw] font-bold font-vetosans tracking-wide mt-[1.2%]">
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
