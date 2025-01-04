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
      className="relative "
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
<div className="relative w-[80%] h-[72.48%] flex flex-col items-center justify-center top-[10.5%] ">
  
    
    
    <div className="flex flex-col items-center top-[0%] h-[56.55%] ">
      
      <img
        src={vivacityLogo}
        alt="Vivacity Logo"
        className="h-[73.80%]   "
      />
       <div style={{ height: "1.43%" }}/>
      <p className="text-center  font-vetosans text-[1rem] text-black sm:text-[0.875rem] xs:text-[0.65rem] xxs:text-[0.60rem] xxxs:text-[0.55rem]"
     >
        Developed by GDG on Campus, LNMIIT
      </p>
      <p className="text-center font-vetosans text-[1rem] text-black sm:text-[0.875rem] xs:text-[0.65rem] xxs:text-[0.60rem] xxxs:text-[0.55rem] ">
        Designed by Vivacity. All rights reserved.
      </p>
    </div>
    
    <div style={{ height: "7.58%" }} />
    
    <div className="flex flex-col gap-[18%] items-center bottom-[0%] h-[35.87%] ">
      
      <div className="flex justify-center gap-[25%]  h-[17.34%] w-[36.27%]  ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="h-[100%]"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={TwitterIcon}
            alt="Twitter"
            className="h-[100%]"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="h-[100%]"
          />
        </a>
      </div>

    

      
      <div className="text-center text-black  h-[63.09%] bottom-[0%]">
        <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.0625rem] xxs:text-[0.60rem] xxxs:text-[0.55rem] font-vetosans">For further queries:</p>
        <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.0625rem] xxs:text-[0.60rem] xxxs:text-[0.55rem] font-vetosans">Ayush Dhanesha: +91 9998523792</p>
        <p className="text-[0.875rem] sm:text-[1rem] md:text-[1.0625rem] xxs:text-[0.60rem] xxxs:text-[0.55rem] font-vetosans">Shubhanshu Singhal: +91 8949024851</p>
      </div>
    </div>
  </div>

       
        
    </div>
    </div>
  );
}

export default Footer;
