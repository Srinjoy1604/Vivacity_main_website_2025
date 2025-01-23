import React, { useRef, useState, useEffect } from "react";
const aws = import.meta.env.VITE_AWS;

const Error404 = `${aws}/Error404desktop.webp`;
const Error404Mob = `${aws}/Error404Mobile.webp`;
const RIPGIF = `${aws}/RIPDesktop.gif`;
const RIPGIFMob = `${aws}/RIPMobile.gif`;

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