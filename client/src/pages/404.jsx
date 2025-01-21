import React, { useRef, useState, useEffect } from "react";
import Image404 from "../assets/images/Error404.png";
function Page404()
{
    return(
        <div className="w-[100vw] h-[100vh]">
            <img src={Image404} className="w-[100%] h-[100%]"></img>
        </div>
    )
}

export default Page404;