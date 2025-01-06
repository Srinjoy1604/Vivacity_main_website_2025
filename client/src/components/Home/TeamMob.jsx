import Background from '../../assets/images/TeampageMob.png';
import LeftBg from '../../assets/images/PurpledivMob.png';
import RightBg from '../../assets/images/YellowComp.png';
import button from '../../assets/images/PinkBtn.png';
import Abg from '../../assets/images/TeamAmob.png';
import Bbg from '../../assets/images/TeamBmob.png';
import Cbg from '../../assets/images/TeamCmob.png';
import Dbg from '../../assets/images/TeamDmob.png';
import Aimg from '../../assets/images/TeamAImg.png';
import Bimg from '../../assets/images/TeamBImg.png';
import Cimg from '../../assets/images/TeamCImg.png';
import Dimg from '../../assets/images/TeamDImg.png';
import Pin from '../../assets/images/PinMob.png';
import Thread from '../../assets/images/ThreadsMob.png'
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

function TeamMob(){

    const [showPins, setShowPins] = useState(false);
    const [showThread, setShowThread] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
      
      if (location.pathname === "/teammob") { 
        const pinTimer = setTimeout(() => setShowPins(true), 500);
        const threadTimer = setTimeout(() => setShowThread(true), 800);
        
        return () => {
          clearTimeout(pinTimer);
          clearTimeout(threadTimer);
        };
      }
    }, [location.pathname]);
  
      return (
          //main div
          <div
  style={{
    position: 'relative',
    width: '100%',
    height: '0',
    paddingTop: `${(924 / 393) * 100}%`, 
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: "no-repeat",
    zIndex: '3',
  }}
>
    {/* Purple Div */}
<div
  style={{
    position: 'absolute',
    width: `${(306.63 / 393) * 100}%`,
    height: `${(335.05 / 924) * 100}%`,
    top: `${(133.44 / 924) * 100}%`,
    left: `${(43.6 / 393) * 100}%`,
    backgroundImage: `url(${LeftBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '1px solid black',
    transform: 'rotate(-0.88deg)',
  }}
>
    {/* Thread */}
    <div
    style={{
      position: 'absolute',
      width: `${(173 / 306.63) * 100}%`,
      height: `${(152 / 335.05) * 100}%`,
      top: `${(68 / 335.05) * 100}%`,
      left: `${(62 / 306.63) * 100}%`,
      backgroundImage: `url(${Thread})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: 'rotate(1.38deg)',
      zIndex: '3',
      transform: showThread ? "translateY(0)" : "translateY(-100%)",
      opacity: showThread ? 1 : 0,
      transition: "all 0.6s ease-out",
    }}
  />

  {/* Pin A */}
  <div
    style={{
      position: 'absolute',
      width: `${(55.35 / 306.63) * 100}%`,
      height: `${(55.35 / 335.05) * 100}%`,
      top: `${(31.33 / 335.05) * 100}%`,
      left: `${(35.04 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin B */}
  <div
    style={{
      position: 'absolute',
      width: `${(47.4 / 306.63) * 100}%`,
      height: `${(47.4 / 335.05) * 100}%`,
      top: `${(28.98 / 335.05) * 100}%`,
      left: `${(170.87 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin C */}
  <div
    style={{
      position: 'absolute',
      width: `${(51.16 / 306.63) * 100}%`,
      height: `${(51.16 / 335.05) * 100}%`,
      top: `${(176.85 / 335.05) * 100}%`,
      left: `${(83.82 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Pin D */}
  <div
    style={{
      position: 'absolute',
      width: `${(50.83 / 306.63) * 100}%`,
      height: `${(50.83 / 335.05) * 100}%`,
      top: `${(143.35 / 335.05) * 100}%`,
      left: `${(203.17 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin})`,
      backgroundSize: 'cover',
      transform: 'rotate(0.88deg)',
      zIndex: '3',
      transform: showPins ? "translateY(0)" : "translateY(-50%)",
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
    }}
  />

  {/* Team A */}
  <div className='w-[25%]'
    style={{
      position: 'absolute',
      height: `${(90.47 / 335.05) * 100}%`,
      top: `${(55.19 / 335.05) * 100}%`,
      left: `${(34.67 / 306.63) * 100}%`,
      padding: '3.22% 3.52% 2.22% 2.96%',
      backgroundImage: `url(${Abg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.04deg)',
      zIndex: '1',
    }}
  >
    <img
      src={Aimg}
      alt="Team A Member"
      style={{
        width: '60.24%',
        height: '65.12%',
        position: 'relative',
      }}
    />
  </div>

  {/* Team B */}
  <div className='w-[21%]'
    style={{
      position: 'absolute',
      height: `${(81.18 / 335.05) * 100}%`,
      top: `${(48.97 / 335.05) * 100}%`,
      left: `${(166.5 / 306.63) * 100}%`,
      padding: '2.22% 1.63% 1.00% 1.33%',
      backgroundImage: `url(${Bbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-4.32deg)',
      zIndex: '1',
    }}
  >
    <img src={Bimg} alt="Team B Member" style={{ width: '60.24%', height: '65.12%' }} />
  </div>

  {/* Team C */}
  <div className='w-[22.5%]'
    style={{
      position: 'absolute',
      height: `${(83.63 / 335.05) * 100}%`,
      top: `${(201.01 / 335.05) * 100}%`,
      left: `${(66.28 / 306.63) * 100}%`,
      padding: '2.10% 2.52% 1.03% 2.08%',
      backgroundImage: `url(${Cbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.72deg)',
      zIndex: '1',
    }}
  >
    <img src={Cimg} alt="Team C Member" style={{ width: '60.24%', height: '65.12%' }} />
  </div>

  {/* Team D */}
  <div className='w-[24%]'
    style={{
      position: 'absolute',
      height: `${(83.09 / 335.05) * 100}%`,
      top: `${(180.56 / 335.05) * 100}%`,
      left: `${(199.69 / 306.63) * 100}%`,
      padding: '2.07% 2.58% 1.50% 1.87%',
      backgroundImage: `url(${Dbg})`,
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-8.51deg)',
      zIndex: '1',
    }}
  >
    <img src={Dimg} alt="Team D Member" style={{ width: '60.24%', height: '65.12%' }} />
  </div>
</div>
{/* Yellow Div */}
<div
  className="absolute border flex flex-col justify-center items-center box-border"
  style={{
    width: `${(307 / 393) * 100}%`, 
    height: `${(351 / 924) * 100}%`, 
    top: `${(501 / 924) * 100}%`, 
    left: `${(41 / 393) * 100}%`, 
    backgroundImage: `url(${RightBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }}
>
  {/* Text Div */}
  <div
    className="p-2 box-border text-center   text-[1.25rem] xs:text-[1.2rem] xxs:text-[0.957rem] xxxs:text-[0.76rem] 270:text-[0.65rem] sm:text-[1.4rem] md:text-[1.65rem]  lg:text-[2.05rem] font-vetosans"
    style={{
      width: `${(251 / 307) * 100}%`, 
      height: `${(225 / 351) * 100}%`, 
      top: `${(23 / 351) * 100}%`, 
      left: `${(22.78 / 307) * 100}%`, 
      position: 'absolute',
    }}
  >
    Meet the dreamers, doers, and masterminds behind{' '}
    <span
      className="font-rfabb   text-[1.25rem] xs:text-[1.2rem] xxs:text-[0.957rem] xxxs:text-[0.76rem] 270:text-[0.65rem] sm:text-[1.4rem] md:text-[1.65rem]  lg:text-[2.05rem] "
      style={{ color: 'rgba(4, 9, 29, 1)' }}
    >
      VIVACITY'25
    </span>{' '}
    From envisioning the cosmic threads of our theme to weaving it into reality,
    this team makes it all happen. Tap to discover the faces and stories of
    those who bring the multiverse to life!
  </div>

  <div  
    style={{
      height: `${((351 - (23 + 225)) / 351) * 100}%`, 
      width: '100%',
    }}
  />

  {/* Button Div */}
  <button
    className="text-black rounded cursor-pointer border-black"
    style={{
      backgroundImage: `url(${button})`,
      width: `${(203 / 307) * 100}%`, 
      height: `${(54.72 / 351) * 100}%`, 
      top: `${(272 / 351) * 100}%`,
      left: `${(20.78 / 307) * 100}%`, 
      borderWidth: '6px',
      position: 'absolute',
    }}
  >
    <p className="xs:text-[1.5rem] text-[1.25rem]  xxs:text-[1.357rem] xxxs:text-[1.16rem] 270:text-[0.95rem] sm:text-[1.4rem] md:text-[1.65rem]  lg:text-[2.05rem] font-rfabb">
      Meet Them!
    </p>
  </button>
</div>

</div>

      )
}

export default TeamMob;