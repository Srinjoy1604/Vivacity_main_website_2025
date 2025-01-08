import React, { useEffect, useRef } from "react";
import styles from "../Home/Mascot.module.css";
import NetraLarge from "../../assets/images/NetraImg.png";
import NetraText from "../../assets/images/NETRAText.png";
import NetraMobile from "../../assets/images/NetraMobile.png";
function Mascot()
{
    return(
        <div className={`w-[100%] h-[100%] flex items-center align-middle justify-center ${styles.MascotBackground} max-[800px]:h-fit p-[2%]`}>
            <div className="w-[100%] grid grid-cols-2 place-items-center max-[800px]:grid-cols-1">
                <div className="w-[100%] py-[2%] ">
                    <div className={`${styles.NetraDiv} p-[6%] mb-[1%] pb-[10%] w-[100%] `}>
                        <h1 className="text-center m-[1%] mt-0 text-[#FFFFFF] font-rfabb text-[400] text-[2rem] max-[800px]:text-[1.5rem]">MEET OUR MASCOT</h1>
                        <div className="w-[100% grid place-items-center"><img src={NetraText} className="w-[70%] h-auto max-[800px]:w-[50%]"></img></div>
                    </div>
                    <div className={`${styles.NetraMobile} grid place-items-center w-[100%] h-[100%] p-[2.5%] hidden max-[800px]:block`}>
                        <img src={NetraMobile} className={`w-[100%] h-[100%]`}></img>
                    </div>
                    <div className={`${styles.NetraOriginDiv} p-[5%] w-[100%]`}>
                        <h1 className="text-white text-[2rem] font-rfabb m-[2%] mb-[6%] max-[800px]:text-[1.5rem]">want to know the origin story of netra?</h1>
                        <div className="w-[100%] h-[100%] pl-[2%] "><button className={`${styles.NetraButton} p-[2.5%] pl-[5%] pr-[5%] w-fit text-black text-[400]  text-[2rem] font-rfabb text-center max-[800px]:text-[1.25rem] `}>CHRONICLES OF NETRA</button></div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] max-[800px]:hidden">
                    <div className={`${styles.Mascot} grid place-items-center h-full w-[100%] p-[2%] pr-[5%]`}><img src={NetraLarge} className="w-[100%] h-[100%]"></img></div>
                </div>
            </div>
        </div>
    )
}




export default Mascot;