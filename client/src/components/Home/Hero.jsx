import React from "react";
import Image1 from "../../assets/images/left1.png";
import Image2 from "../../assets/images/top1.png";
import Image3 from "../../assets/images/top2.png";
import Image4 from "../../assets/images/right1.png";
import Image5 from "../../assets/images/bottom1.png";
import Image6 from "../../assets/images/bottom2.png";
import Image7 from "../../assets/images/viva_logo_hero.png";
import "./forHero.css";
// import styles from "./Hero.module.css";
import MainImage from "../../assets/images/HeroSectionMainImage.png"
import VivaMobile from "../../assets/images/Vivalogo_mobile.png";
import styles from "./Herox.module.css";
function Hero() {
    return (
        <div className="overflow-hidden">
            <div className="h-[100vh] w-[100vw]  text-center flex items-center align-center justify-center bg-yellow-200 max-[830px]:hidden">
                <div className={`flex items-center align-center justify-center relative w-[100%] h-[100%] ${styles.MainBackgroundHero}`}>
                    {/*
            
                    <div className="absolute left-1"><img src={Image1}></img></div>
                    <div className="absolute left-1 top-0"><img src={Image2}></img></div>
            
                    */}
                    <img src={Image7} className="w-[35%] h-auto translate-x-[-2%] translate-y-[3%] min-[2552px]:w-[30%] "></img>
                    {/* fixed images*/}
                    
                    
                </div>
            </div>
            <div className={`text-center flex items-center align-center justify-center w-[100vw]  ${styles.HeroMobile} aspect-[131/284] hidden max-[830px]:block`}>
                <div className={`text-center w-[100%] h-[100%] ${styles.HeroTop} flex items-center align-center justify-center relative`}>
                    <div className="w-[100%] grid place-items-center relative"><img src={VivaMobile} className="w-[74%] h-auto translate-y-[-25%] "></img></div>
                    <div className={`absolute bottom-[28.5%]  w-[100%] h-[12.5%] ${styles.RegisterStrip} flex items-center align-center justify-center font-rfabb text-[1.25rem]`}><button className={`${styles.StripButton} pt-[2.5%] pb-[2.5%] pr-[1.5%] pl-[1.5%] text-center w-[60%] h-auto max-w-[200px]`}>{`Register Now ->`}</button></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

