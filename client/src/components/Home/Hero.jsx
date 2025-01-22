import React from "react";
import TimerBkg from "../../assets/images/TimerBkg.png";
import TimerBkgMob from "../../assets/images/TimerBkgMob.png";
import styles from "./Herox.module.css";
import { useEffect, useState } from "react";
import Timer from "../../assets/images/timer.png";
import Timer2 from "../../assets/images/Timer2.png"
import abovecountdown from "../../assets/images/above_countdown.png";
import abovecountdown2 from "../../assets/images/above_countdown2.png";
import CountDownTimer from "./CountDownTimer";

function Hero() {
  const [scroll, setScroll] = useState(1);

  const handleScroll = () => {
    const threshold = window.innerHeight * 1.25;
    const currentScroll = window.scrollY;

    if (currentScroll <= threshold) {
      setScroll(1);
    } else {
      setScroll(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0  z-[-1]"
      style={{ opacity: scroll, transition: "opacity ease-in-out" }}
    >
      <div className="h-[100vh] w-[100vw] text-center flex items-center align-center justify-center bg-yellow-200 max-[768px]:hidden">
        <div
          className={`flex items-center  align-center justify-center relative w-[100%] h-[100%] ${styles.MainBackgroundHero}`}
        >

          <div className="md:w-[65%] lg:w-[46%]  mb-[10%] "
            style={{
              backgroundImage: `url(${Timer})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex justify-center items-center pt-[7%] pb-[2%]">
              <img src={abovecountdown} className="w-[71%]" alt="" />
            </div>
            
            <CountDownTimer/>
          </div>
        </div>
      </div>

      <div
        className={`text-center flex items-center align-center justify-center w-[100vw] ${styles.HeroMobile} aspect-[131/284] hidden max-[768px]:block`}
        style={{ opacity: scroll, transition: "opacity ease-in-out" }}
      >
        <div
          className={`text-center w-[100%] h-[100vh] flex items-center align-center justify-center relative`}
        >
           <div className="w-[80%] mb-[35%] "
            style={{
              backgroundImage: `url(${Timer2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
          <div className=" flex justify-center items-center pt-[15%] pb-[3%]">
              <img src={abovecountdown2} className="w-[71%]" alt="" />
          </div>
          <CountDownTimer/>
          </div>
          

          <div
            className={`absolute bottom-[28.5%]  w-[100%] h-[12.5%] ${styles.RegisterStrip} flex items-center align-center justify-center font-rfabb text-[1.25rem]`}
          >
            <button
              onClick={() => (window.location.href = "/NormalRegistration")}
              className={`${styles.StripButton} pt-[2.5%] pb-[2.5%] pr-[1.5%] pl-[1.5%] text-center w-[60%] h-auto max-w-[200px]`}
            >
              {"Register Now ->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
