import React from "react";
const aws = import.meta.env.VITE_AWS;

const vivacityLogo = `${aws}/Vivalogo_mobile.webp`;
const FacebookIcon = `${aws}/facebookLogo.webp`;
const InstagramIcon = `${aws}/instagramLogo.webp`;
const TwitterIcon = `${aws}/twitterLogo.webp`;
const FooterBackground = `${aws}/Footer_mobile.webp`;
const Backbg = `${aws}/Team.webp`;
const Backbg1 = `${aws}/ExcitingBg.webp`;
const Backbg2 = `${aws}/VioletBg.webp`;
const GDG = `${aws}/gdglogo.webp`;


function Footer1() {
  const aspectRatio = 512 / 512;
  const is404 = !["/","/events","/OurTeam"].includes(location.pathname);

  return (
    <div
      className="relative "
      style={{
        backgroundImage: `url(${location.pathname === "/" ? Backbg :location.pathname === "/events"? Backbg1:location.pathname === "/OurTeam"? Backbg2:Backbg})`,
        height: `calc(100vw * ${aspectRatio})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: is404 ? "none" : "block",
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
            backgroundPosition: "top",
          }}
        />
        <div className="relative w-[80%] flex flex-col items-center justify-center top-[10.5%] ">
          <div className="flex flex-col items-center top-[0%] h-[54.55%] ">
            <img
              src={vivacityLogo}
              alt="Vivacity Logo"
              className="h-[71.80%]   "
            />
            <div style={{ height: "1.43%" }} />
            <p className="flex justify-center items-center text-center xxxs:text-[3.3vw]  270:text-[0.65rem] xs:text-[3.3vw] xxs:text-[3.3vw] font-semibold  font-vetosans text-[0.5rem] text-black">
            <span className="font-medium">Developed by</span><a href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"><span className="xtext-gradient font-black flex items-center justify-center"><img src={GDG} className="w-8 h-auto ml-1.5 mr-0.5"></img> GDG on Campus, LNMIIT</span></a>
            </p>
            <p className="text-center  xxxs:text-[3.3vw]  270:text-[0.65rem] xs:text-[3.3vw] xxs:text-[3.3vw]  font-semibold font-vetosans text-[0.5rem] text-black mt-[1%]">
            <span className="font-medium">Designed by</span> Vivacity. All rights reserved.
            </p>
          </div>

          <div style={{ height: "7.58%" }} />

          <div className="flex flex-col gap-[18%] items-center bottom-[0%] h-[35.87%] ">
            <div className="flex justify-center gap-[25%]  h-[17.34%] w-[66.27%]">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="h-[100%] w-auto "
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="h-[100%] w-auto "
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-[100%]  w-auto"
                />
              </a>
            </div>

            <div className="text-center text-black  h-[63.09%] mb-[3%]">
              <p className="text-[3vw] xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw]  font-vetosans">
                For further queries:
              </p>
              <p className="xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw] font-semibold font-vetosans">
                Ayush Dhanesha: +91 9998523792
              </p>
              <p className="xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw] font-semibold font-vetosans mt-[1.2%]">
                Shubhanshu Singhal: +91 8949024851
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
