import React from "react";
import vivacityLogo from "../assets/images/Vivalogo_mobile.png";
import FacebookIcon from "../assets/images/facebookLogo.png";
import InstagramIcon from "../assets/images/instagramLogo.png";
import TwitterIcon from "../assets/images/twitterLogo.png";
import FooterBackground from "../assets/images/Footer_mobile.png";

function Footer1() {
    const aspectRatio = 512 / 512; 

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
<div className="relative w-[80%] flex flex-col items-center justify-center top-[10.5%] ">
  
    
    
    <div className="flex flex-col items-center top-[0%] h-[54.55%] ">
      
      <img
        src={vivacityLogo}
        alt="Vivacity Logo"
        className="h-[71.80%]   "
      />
       <div style={{ height: "1.43%" }}/>
      <p className="text-center xxxs:text-[3.3vw]  270:text-[0.65rem] xs:text-[3.3vw] xxs:text-[3.3vw] font-bold   font-vetosans text-[1rem] text-black"
     >
        Developed by GDG on Campus, LNMIIT
      </p>
      <p className="text-center  xxxs:text-[3.3vw]  270:text-[0.65rem] xs:text-[3.3vw] xxs:text-[3.3vw]  font-bold  font-vetosans text-[1rem] text-black ">
        Designed by Vivacity. All rights reserved.
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
        <p className="text-[3vw] xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw] font-bold font-vetosans">For further queries:</p>
        <p className="xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw] font-bold font-vetosans">Ayush Dhanesha: +91 9998523792</p>
        <p className="xxxs:text-[3.3vw] 270:text-[3.3vw] xs:text-[3.3vw] xxs:text-[3.3vw] font-bold font-vetosans">Shubhanshu Singhal: +91 8949024851</p>
      </div>
    </div>
  </div>

       
        
    </div>
    </div>
  );
}

export default Footer1;
