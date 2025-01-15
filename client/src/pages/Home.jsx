import React from "react";
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
function Home() {
  const textContent =
    "\u00A0\u00A0\u00A0\u00A0\u00A0YOU'RE ON THE OTHER SIDE OF PORTAL...\u00A0\u00A0WELCOME TO THE MULTIVERSE!!!\u00A0\u00A0\u00A0\u00A0\u00A0";
  return (
    <div>
      <Hero />
      <About />
      <Portal />
      <Infinite text={textContent} />
      <PastArtists />
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
