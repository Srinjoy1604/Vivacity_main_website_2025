import React, { useRef, useState, useEffect } from "react";
import Error404 from "../assets/images/Error404desktop.webp";
import Error404Mob from "../assets/images/Error404Mobile.webp";
import RIPGIF from "../assets/videos/RIPDesktop.gif";
import RIPGIFMob from "../assets/videos/RIPMobile.gif";
function Page404() {
    return (
        <div className="w-full h-[100%]">
            {/* Desktop View */}
            <div
                className="w-full  min-h-[100vh] lg:flex hidden items-center justify-center"
                style={{
                    backgroundImage: `url(${Error404})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >

                <img src={RIPGIF} className="w-[40%] h-auto pb-[15%]" alt="Skate GIF" />
            </div>

            {/* Mobile View */}
            <div
                className="w-full h-[100%] lg:hidden flex min-h-[100vh] items-center justify-center"
                style={{
                    backgroundImage: `url(${Error404Mob})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <img src={RIPGIFMob} className="w-[100%] sm:w-[50%] h-auto pb-[20%]" alt="Skate GIF" />
            </div>
        </div>
    )
}

export default Page404;