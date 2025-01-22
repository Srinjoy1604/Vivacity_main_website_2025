import React from "react";
import TimerBkg from "../../assets/images/TimerBkg.png";
import TimerBkgMob from "../../assets/images/TimerBkgMob.png";
import styles from "./Herox.module.css";
import { useEffect, useState } from "react";

function Hero() {
  const [scroll, setScroll] = useState(1);

  const handleScroll = () => {
    const threshold = window.innerHeight * 1.25; // 125vh
    const currentScroll = window.scrollY;

    // Set opacity based on scroll position
    if (currentScroll <= threshold) {
      setScroll(1); // Fully visible
    } else {
      setScroll(0); // Fully transparent
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
      className="fixed top-0 left-0 overflow-hidden z-[-1]"
      style={{ opacity: scroll, transition: "opacity ease-in-out" }}
    >
      <div className="h-[100vh] w-[100vw] text-center flex items-center align-center justify-center bg-yellow-200 max-[830px]:hidden">
        <div
          className={`flex items-center align-center justify-center relative w-[100%] h-[100%] ${styles.MainBackgroundHero}`}
        >
        <div className="w-[58%] mt-[0%] 1300:mt-[-20%] 1400:mt-[-15%] 1500:mt-[-10%] 1600:mt-[-5%] min-[1700px]:mt-[0%] 1980:mt-[5%]">
          <img
            src={TimerBkg}
            className="w-[100%] h-auto hidden min-[830px]:block"
          />
        </div>
        </div>
      </div>

      <div
        className={`text-center flex items-center align-center justify-center w-[100vw] ${styles.HeroMobile} aspect-[131/284] hidden max-[830px]:block`}
        style={{ opacity: scroll, transition: "opacity ease-in-out" }}
      >
        <div
          className={`text-center w-[100%] h-[100vh] flex items-center align-center justify-center relative`}
        >
          <div className="w-[100%] max-w-[333px] mt-[-70%] min-[325px]:mt-[-60%] 380:mt-[-50%] min-[450px]:mt-[-40%] min-[550px]:mt-[-30%] sm:mt-[-10%]">
            <img
              src={TimerBkgMob}
              className="w-[100%] h-auto block min-[640px]:hidden"
            />
            <img
            src={TimerBkg}
            className="w-[100%] h-auto hidden min-[640px]:block min-[830px]:hidden"
          />
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
