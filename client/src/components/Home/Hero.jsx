import React from "react";
import Image7 from "../../assets/images/viva_logo_hero.png";
import VivaMobile from "../../assets/images/Vivalogo_mobile.png";
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
      className="fixed top-0 left-0 overflow-hidden relative z-[-1]"
      style={{ opacity: scroll, transition: "opacity ease-in-out" }}
    >
      <div className="h-[100vh] w-[100vw] text-center flex items-center align-center justify-center bg-yellow-200 max-[830px]:hidden">
        <div
          className={`flex items-center align-center justify-center relative w-[100%] h-[100%] ${styles.MainBackgroundHero}`}
        >
          <img
            src={Image7}
            className="w-[35%] h-auto translate-x-[-2%] translate-y-[3%] min-[2552px]:w-[30%]"
          />
        </div>
      </div>

      <div
        className={`text-center flex items-center align-center justify-center w-[100vw] ${styles.HeroMobile} aspect-[131/284] hidden max-[830px]:block`}
        style={{ opacity: scroll, transition: "opacity ease-in-out" }}
      >
        <div
          className={`text-center w-[100%] h-[100vh] ${styles.HeroTop} flex items-center align-center justify-center relative`}
        >
          <div className="w-[100%] grid place-items-center relative">
            <img
              src={VivaMobile}
              className="w-[74%] h-auto max-w-[400px] max-[500px]:translate-y-[-20%] translate-y-[-15%]"
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
