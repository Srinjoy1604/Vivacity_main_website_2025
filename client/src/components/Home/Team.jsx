import Background from '../../assets/images/Team.png';
import LeftBg from '../../assets/images/PurpleComp.png';
import RightBg from '../../assets/images/YellowComp.png';
import button from '../../assets/images/PinkBtn.png';
import Abg from '../../assets/images/TeamA_bg.png';
import Bbg from '../../assets/images/TeamB_bgg.png';
import Cbg from '../../assets/images/TeamC_bg.png';
import Dbg from '../../assets/images/TeamD_bg.png';
import Aimg from '../../assets/images/TeamA_img.png';
import Bimg from '../../assets/images/TeamB_img.png';
import Cimg from '../../assets/images/TeamC_img.png';
import Dimg from '../../assets/images/TeamD_img.png';
import Pin from '../../assets/images/pin.png';
import Thread from '../../assets/images/threads.png'
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";


function Team(){

  const [showPins, setShowPins] = useState(false);
  const [showThread, setShowThread] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    
    if (location.pathname === "/team") { 
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
        paddingTop: `${(780 / 1280) * 100}%`, 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: "no-repeat",
        zIndex:'3'
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
        {/* Thread */}
      <div className='top-[24.5885%] left-[24.7%]'
        style={{
          position: 'absolute',
          width: `${(292 / 583) * 100}%`,
          height: `${(221 / 520) * 100}%`,
          
          backgroundImage: `url(${Thread})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(1.38deg)',
          zIndex: '3', 
          transform: showThread
          ? "translateY(0)"
          : "translateY(-100%)", 
        opacity: showThread ? 1 : 0,
        transition: "all 0.6s ease-out",
        }}
      >
  </div>


      {/* Pin A */}
      <div className='top-[15.4%] left-[16.6%]'
        style={{
          position: 'absolute',
          width: `${(93.14 / 583) * 100}%`,
          height: `${(93.14 / 520) * 100}%`,
          backgroundImage: `url(${Pin})`,
          backgroundSize: 'cover',
          transform: 'rotate(1.38deg)',
          zIndex: '3', 
          transform: showPins
          ? "translateY(0)"
          : "translateY(-50%)", 
        opacity: showPins ? 1 : 0,
        transition: "all 0.5s ease-out",
        }}
      />

      {/* Pin B */}
      <div className='top-[11.9%] left-[54.7%]'
        style={{
          position: 'absolute',
          width: `${(79.76 / 583) * 100}%`,
          height: `${(79.76 / 520) * 100}%`,
          backgroundImage: `url(${Pin})`,
          backgroundSize: 'cover',
          transform: 'rotate(1.38deg)',
          zIndex: '3', 
          transform: showPins
          ? "translateY(0)"
          : "translateY(-50%)", 
        opacity: showPins ? 1 : 0,
        transition: "all 0.5s ease-out",
        }}
      />

        {/* Pin C */}
        <div
          style={{
            position: 'absolute',
            width: `${(86.1 / 583) * 100}%`,
            height: `${(86.1 / 520) * 100}%`,
            top: `${(269.07 / 520) * 100}%`,
            left: `${(207.21 / 583) * 100}%`,
            backgroundImage: `url(${Pin})`,
            backgroundSize: 'cover',
            transform: 'rotate(1.38deg)',
            zIndex: '3', 
            transform: showPins
            ? "translateY(0)"
            : "translateY(-50%)", 
          opacity: showPins ? 1 : 0,
          transition: "all 0.5s ease-out",
          }}
        />

        {/* Pin D */}
        <div
          style={{
            position: 'absolute',
            width: `${(85.54 / 583) * 100}%`,
            height: `${(85.54 / 520) * 100}%`,
            top: `${(241.08 / 520) * 100}%`,
            left: `${(378.9 / 583) * 100}%`,
            backgroundImage: `url(${Pin})`,
            backgroundSize: 'cover',
            transform: 'rotate(1.38deg)',
            zIndex: '3', 
            transform: showPins
            ? "translateY(0)"
            : "translateY(-50%)", 
          opacity: showPins ? 1 : 0,
          transition: "all 0.5s ease-out",
          }}
        />


      
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
            zIndex:'1'
          }}
        >

                <img
                      src={Aimg}
                      alt="Team A Member"
                      style={{
                        width: '60.24%',
                        height: '65.12%',
                        position: 'relative',
                        bottom: '10.10%',
                        left: '5.37%',
                        
                      }}
                    />
                    
                    <span
                    className="font-rfabb"
                    style={{
                      position: 'absolute',
                      color: 'green',
                      fontWeight: 'bold',
                      top: '69.92%',
                      left: '30.29%',
                      gap: '0px',
                      transform: 'rotate(4.79deg)',
                    }}
                  >
                    TEAM A
                  </span>
          </div>

      {/* Team B */}
      <div
        style={{
          position: 'absolute',
          width: '19.89%',
          height: '26.27%',
          top: '16.31%',
          left: '53.36%', 
          padding: '1.97% 1.47% 1.26% 1.18%',
          backgroundImage: `url(${Bbg})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex:'1'
        }}
      >
      
              <img
                src={Bimg}
                alt="Team B Member"
                style={{
                  width: '60.24%',
                  height: '65.12%',
                  position: 'relative',
                  bottom: '10.10%',
                  left: '5.37%',
                  
                  
                }}
              />
            <span
              className=" text-[] font-rfabb"
              style={{
                position: 'absolute',
                color: 'green',
                fontWeight: 'bold',
                top: '72.67%',
              left: '34.04%',
                gap: '0px',
                transform: 'rotate(-6.57deg)',
              }}
            >
              TEAM B
            </span>
  </div>

      {/* Team C */}
      <div
        style={{
          position: 'absolute',
          width: '20.31%',
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
          zIndex:'1'
        }}
      >

              <img
                src={Cimg}
                alt="Team C Member"
                style={{
                  width: '60.24%',
                  height: '65.12%',
                  position: 'relative',
                  bottom: '10.27%',
                  left: '5.96%',
                  
                }}
              />
              <span
              className="font-rfabb"
              style={{
                position: 'absolute',
                color: 'green',
                fontWeight: 'bold',
                top: '70.58%',
              left: '30.95%',
                gap: '0px',
                transform: 'rotate(5.46deg)',
              }}
            >
              TEAM C
            </span>
  </div>

    {/* Team D */}
    <div
      style={{
        position: 'absolute',
        width: '20.18%',
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
        zIndex:'1'
      }}
    >
 
            <img
              src={Dimg}
              alt="Team D Member"
              style={{
                width: '65.24%',
                height: '67.12%',
                position: 'relative',
                bottom: '10.10%',
                left: '4.37%',
              
              }}
            /><span
            className="font-rfabb 1280:text-[1.2rem] text-[1.15rem] 2xl-text-[1.73rem] sm-text-[1rem]  1980:text-[1.85rem] 1600:text-[1.35rem] 2100:text-[2rem]"
            style={{
              position: 'absolute',
              color: 'green',
              fontWeight: 'bold',
              top: '68.49%',
              left: '35.35%',
              gap: '0px',
              transform: 'rotate(-10.77deg)',
            }}
          >
            TEAM D
          </span>
    </div>
</div>


        {/* Yellow Div */}
    <div
      className="absolute border flex flex-col justify-center items-center box-border"
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
            className="p-2 box-border text-center 1280:text-[1.325rem] text-[1.15rem] 2xl-text-[1.5rem] sm-text-[1rem] 1500:text-[1.65rem] 1980:text-[1.85rem] 1600:text-[1.75rem] 2100:text-[2rem] font-vetosans"
            style={{
              width: `${(325 / 387) * 100}%`, 
              height: `${(297 / 505) * 100}%`, 
              top: `${(38 / 505) * 100}%`, 
              left: `${(31 / 387) * 100}%`, 
              position: "absolute",
            }}
          >
            Meet the dreamers, doers, and masterminds behind <span className='1280:text-[1.325rem] text-[0.85rem] 2xl-text-[1.5rem] sm-text-[0.6rem] 1500:text-[1.65rem] 1700:text-[1.8rem] 1980:text-[1.85rem] 1600:text-[1.75rem] 2100:text-[2rem]  font-rfabb' style={{color: 'rgba(4, 9, 29, 1)',}}>VIVACITY'25</span> From envisioning the cosmic threads of our theme to weaving it into reality, this team makes it all happen. Tap to discover the faces and stories of those who bring the multiverse to life!
          </div>
          
          <div
            style={{
              height: `${((401 - (38 + 297)) / 505) * 100}%`, 
              width: "100%",
            }}
          />
 
          <button
            className="text-black rounded   cursor-pointer border-black"
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
          <p className='text-[1.875rem] xl-text-[1.5rem] 2xl-[1.8rem] 1980:text-[1.95rem] 1600:text-[1.75rem] 1700:text-[1.8rem] 2100:text-[2rem] font-rfabb'> Meet Them!</p>
          </button>
      </div>
 </div>

     
    )
}
export default Team;