import React from "react";
import ComingSoon from "../assets/images/ComingSoonDesktop.webp";
import ComingSoonMob from "../assets/images/ComingSoonMobile.webp";
import SkateGIF from "../assets/videos/skatepink.gif";
import SkateGIFMob from "../assets/videos/skatepinkMobile.gif";
function Sponsors() {
    return (
        <div className="w-full h-[100%]">
            {/* Desktop View */}
            <div
                className="w-full  min-h-[100vh] lg:flex hidden items-center justify-center"
                style={{
                    backgroundImage: `url(${ComingSoon})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                
                <img src={SkateGIF} className="w-[40%] h-auto pb-[15%]" alt="Skate GIF" />
            </div>

            {/* Mobile View */}
            <div
                className="w-full h-[100%] lg:hidden flex min-h-[100vh] items-center justify-center"
                style={{
                    backgroundImage: `url(${ComingSoonMob})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <img src={SkateGIFMob} className="w-[80%] sm:w-[50%] h-auto pb-[20%]" alt="Skate GIF" />
            </div>
        </div>
    );
}

export default Sponsors;
