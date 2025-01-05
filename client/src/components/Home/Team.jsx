import Background from '../../assets/images/Team.png';
import LeftBg from '../../assets/images/PurpleComp.png';
import RightBg from '../../assets/images/YellowComp.png';
import button from '../../assets/images/PinkBtn.png';
import Abg from '../../assets/images/TeamA_bg.png';
import Bbg from '../../assets/images/TeamB_bg.png';
import Cbg from '../../assets/images/TeamC_bg.png';
import Dbg from '../../assets/images/TeamD_bg.png';
import Aimg from '../../assets/images/TeamA_img.png';
import Bimg from '../../assets/images/TeamB_img.png';
import Cimg from '../../assets/images/TeamC_img.png';
import Dimg from '../../assets/images/TeamD_img.png';

import React, { useState } from "react";
function Team(){
    return (
        //main div
 <div
      style={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingTop: `${(780 / 1280) * 100}%`, 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Purple Div */}
      <div
        style={{
          position: 'absolute',
          width: `${(583 / 1280) * 100}%`,
          height: `${(520 / 780) * 100}%`,
          top: `${(211 / 780) * 100}%`,
          left: `${(93 / 1280) * 100}%`,
          backgroundImage: `url(${LeftBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid black',
        }}
      >
      
  {/* Team A */}
  <div
    style={{
      position: 'absolute',
      width: '20.89%',
      height: '29.28%',
      top: '20.00%',
      left: '15.39%',
      padding: '3.22% 3.13% 2.58% 2.53%',
      backgroundImage: `url(${Abg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      src={Aimg}
      alt="Team A Member"
      style={{
        width: '75.24%',
        height: '70.12%',
        position: 'relative',
        top: '3.44%',
        left: '4.46%',
        border: '1px solid transparent',
      }}
    />
    <span style={{ color: 'green', fontWeight: 'bold' }}>TEAM A</span>
  </div>

  {/* Team B */}
  <div
    style={{
      position: 'absolute',
      width: '63.63%',
      height: '59.72%', 
      top: '10.85%', 
      left: '15.19%', 
      padding: '1.97% 1.47% 1.26% 1.18%',
      backgroundImage: `url(${Bbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex:'3'
    }}
  >
    <img
      src={Bimg}
      alt="Team B Member"
      style={{
        width: '25.24%',
        height: '25.12%',
        position: 'relative',
        bottom: '17.10%',
        left: '28.37%',
        border: '1px solid transparent',
        zIndex:'2'
      }}
    />
    {/* <span style={{ color: 'green', fontWeight: 'bold' }}>TEAM B</span> */}
  </div>

  {/* Team C */}
  <div
    style={{
      position: 'absolute',
      width: '19.31%',
      height: '27.06%',
      top: '60.23%',
      left: '30.83%',
      padding: '2.08% 2.23% 1.31% 1.84%',
      backgroundImage: `url(${Cbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex:'0'
    }}
  >
    <img
      src={Cimg}
      alt="Team C Member"
      style={{
        width: '75.24%',
        height: '67.12%',
        position: 'relative',
        top: '2.27%',
        left: '3.96%',
        border: '1px solid transparent',
      }}
    />
    <span style={{ color: 'green', fontWeight: 'bold' }}>TEAM C</span>
  </div>

  {/* Team D */}
  <div
    style={{
      position: 'absolute',
      width: '19.18%',
      height: '26.89%',
      top: '58.44%',
      left: '64.39%',
      padding: '2.06% 2.29% 1.82% 1.66%',
      backgroundImage: `url(${Dbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex:'0'
    }}
  >
    <img
      src={Dimg}
      alt="Team D Member"
      style={{
        width: '75.24%',
        height: '67.12%',
        position: 'relative',
        top: '5.70%',
        left: '1.97%',
        border: '1px solid transparent',
      }}
    />
    <span style={{ color: 'green', fontWeight: 'bold' }}>TEAM D</span>
  </div>

      </div>

     {/* Yellow Div */}
<div
  className="absolute border flex flex-col justify-between items-center box-border"
  style={{
    width: `${(387 / 1280) * 100}%`,
    height: `${(505 / 780) * 100}%`,
    top: `${(214 / 780) * 100}%`,
    left: `${(755 / 1280) * 100}%`,
    backgroundImage: `url(${RightBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }}
>
  {/* Text Div */}
  <div
    className="p-2 box-border text-center text-[1.5rem] font-vetosans"
    style={{
      width: `${(325 / 387) * 100}%`, 
      height: `${(297 / 505) * 100}%`, 
      top: `${(38 / 505) * 100}%`, 
      left: `${(31 / 387) * 100}%`, 
      position: "absolute",
    }}
  >
    Meet the dreamers, doers, and masterminds behind <span className='text-[1.5rem] font-rfabb' style={{color: 'rgba(4, 9, 29, 1)',}}>VIVACITY'25</span> From envisioning the cosmic threads of our theme to weaving it into reality, this team makes it all happen. Tap to discover the faces and stories of those who bring the multiverse to life!
  </div>
  
  <div
    style={{
      height: `${((401 - (38 + 297)) / 505) * 100}%`, 
      width: "100%",
    }}
  />
 
  <button
    className="text-black rounded text-[1.5rem] cursor-pointer border-black"
    style={{
      backgroundImage: `url(${button})`,
      width: `${(259 / 387) * 100}%`, 
      height: `${(70 / 505) * 100}%`, 
      top: `${(401 / 505) * 100}%`,
      left: `${(19 / 387) * 100}%`, 
      borderWidth: '6px',
      position: "absolute",
    }}
  >
    Meet Them!
  </button>
</div>

    </div>

     
    )
}
export default Team;