import React from "react";
import Image1 from "../../assets/images/left1.png";
import Image2 from "../../assets/images/top1.png";
import Image3 from "../../assets/images/top2.png";
import Image4 from "../../assets/images/right1.png";
import Image5 from "../../assets/images/bottom1.png";
import Image6 from "../../assets/images/bottom2.png";
import Image7 from "../../assets/images/viva_logo_hero.png";
import styles from "./Herox.module.css";
import VivaMobile from "../../assets/images/Vivalogo_mobile.png";
function Herox() {
    return (
        <div>
            <div className="aspect-[20/13] text-center flex items-center align-center justify-center bg-yellow-200 max-[636px]:hidden">
                <div className="flex items-center align-center justify-center relative w-[100%] h-[100%] ">
                    {/*
            
                    <div className="absolute left-1"><img src={Image1}></img></div>
                    <div className="absolute left-1 top-0"><img src={Image2}></img></div>
            
                    */}
                    <img src={Image7} className="w-[40%] h-auto translate-x-[-2%] translate-y-[3%]"></img>
                    {/* fixed images*/}
            
                    <div className="absolute top-[1%] left-[0%] w-[30%] h-auto">
                        <img src={Image1} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                    <div className="absolute top-[0%] left-[1%] w-[57%] h-auto">
                        <img src={Image2} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                    <div className="absolute top-[0%] right-[0%] w-[50%] h-auto">
                        <img src={Image3} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                    <div className="absolute top-[2.5%] right-[0%] w-[30%] h-auto">
                        <img src={Image4} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                    <div className="absolute bottom-[0%] left-[-1%] w-[66%] h-auto">
                        <img src={Image5} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                    <div className="absolute bottom-[0%] right-[0%] w-[37%] h-auto">
                        <img src={Image6} alt="" className={`w-full h-full object-cover rounded-lg ${styles.ImageParts}`} />
                    </div>
                </div>
            </div>
            <div className={`text-center flex items-center align-center justify-center w-[100vw]  ${styles.HeroMobile} aspect-[131/284] hidden max-[636px]:block`}>
                <div className={`text-center w-[100%] h-[100%] ${styles.HeroTop} flex items-center align-center justify-center relative`}>
                    <div className="w-[100%] grid place-items-center relative"><img src={VivaMobile} className="w-[74%] h-auto translate-y-[-25%] "></img></div>
                    <div className={`absolute bottom-[28.5%]  w-[100%] h-[12.5%] ${styles.RegisterStrip} flex items-center align-center justify-center font-rfabb text-[1.25rem]`}><button className={`${styles.StripButton} pt-[2.5%] pb-[2.5%] pr-[1.5%] pl-[1.5%] text-center w-[60%] h-auto max-w-[200px]`}>{`Register Now ->`}</button></div>
                </div>
            </div>
        </div>
    );
}

export default Herox;