import React, { useRef, useState, useEffect } from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Portal from "../components/Home/Portal";
import Infinite from "../components/subPages/Infinite";
import PastArtists from "../components/Home/PastArtists";
import Events from "../components/Home/Events";
import Legacy from "../components/Home/Legacy";
import Strip from "../components/Home/strip";
import Mascot from "../components/Home/Mascot";
import Team from "../components/Home/Team";
import Navbar from "../components/Navbar";

function Home() {
  const textContent =
    "\u00A0\u00A0\u00A0\u00A0\u00A0YOU'RE ON THE OTHER SIDE OF PORTAL...\u00A0\u00A0WELCOME TO THE MULTIVERSE!!!\u00A0\u00A0\u00A0\u00A0\u00A0";

  const section1 = useRef();
  const section2 = useRef();
  const heroRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const heroHeight = heroRef.current ? heroRef.current.offsetHeight : "100vh";

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleScroll = () => {
    if (section1.current && section2.current) {
      const portalBottom = section1.current.getBoundingClientRect().bottom;
      const portalHeight = section1.current.offsetHeight;

      // When scrolling past the Portal section
      if (portalBottom <= portalHeight) {
        scrollTo(section2);
      } else if (section2.current.getBoundingClientRect().top >= window.innerHeight) {
        // Reverse scroll when scrolling up past Infinite section
        scrollTo(section1);
      }
    }
  };

  useEffect(() => {
    if (section1.current) {
      section1.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (section1.current) {
        section1.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const smoothScrollTo = (target, duration = 300) => {
    const start = window.pageYOffset;
    const end = target.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;

      window.scrollTo(0, start + change * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, end); // Ensure the final position is accurate
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const onAnimationComplete = () => {
    smoothScrollTo(section2.current, 40); // Fast smooth scroll to the next section
  };


  return (
    <div>
      <div
        ref={heroRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: heroHeight,
          zIndex: -1,
        }}
      >
        {isHeroVisible && 
        <>
        <Navbar />
        <Hero />
        </>
        }
      </div>

      {/* Parallax About Section */}
      <div
        style={{
          marginTop: heroHeight, // Ensure About section starts after Hero
        }}
      >
          <About />
      </div>
      <div ref={section1}>
        <Portal onAnimationComplete={onAnimationComplete} />
      </div>

      <div ref={section2}>
        <Infinite text={textContent} />
        <PastArtists />
      </div>
      <Events />
      <Strip />
      <Legacy />
      <Strip />
      <Mascot />
      <Team />
    </div>
  );
}

export default Home;
