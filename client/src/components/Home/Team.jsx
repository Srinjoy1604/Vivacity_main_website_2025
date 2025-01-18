import Background from '../../assets/images/Team.png';
import LeftBg from '../../assets/images/PurpleComp.png';
import RightBg from '../../assets/images/YellowdivFront.png';
import YellowBack from '../../assets/images/YellowDivback.png';
import button from '../../assets/images/Pinkbtn_front.png';
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
import React, { useState,useEffect,useRef } from "react";
import { useLocation } from "react-router-dom";
import buttonback from '../../assets/images/Pinkbtn_black.png'
import Background1 from '../../assets/images/TeampageMob.png';
import LeftBg1 from '../../assets/images/PurpledivMob.png';
import RightBg1 from '../../assets/images/YellowFrontMob.png';
import button1 from '../../assets/images/Pinkbtn_1.png';
import Abg1 from '../../assets/images/TeamAmob.png';
import Bbg1 from '../../assets/images/TeamBmob.png';
import Cbg1 from '../../assets/images/TeamCmob.png';
import Dbg1 from '../../assets/images/TeamDmob.png';
import Aimg1 from '../../assets/images/TeamAImg.png';
import Bimg1 from '../../assets/images/TeamBImg.png';
import Cimg1 from '../../assets/images/TeamCImg.png';
import Dimg1 from '../../assets/images/TeamDImg.png';
import Pin1 from '../../assets/images/PinMob.png';
import YellowBack1 from '../../assets/images/YellowbkMob.png';
import Thread1 from '../../assets/images/ThreadsMob.png';
import buttonback1 from '../../assets/images/Pinkbtn_back1.png';
import Title from '../../assets/images/TeamTitle.png';

function Team(){

  const [showPins, setShowPins] = useState(false);
  const [showThread, setShowThread] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const elementRef = useRef(null);
  const elementRef1 = useRef(null)
  
  useEffect(() => {
    const element = elementRef.current;
    const element1 = elementRef1.current;
    let pinTimer, threadTimer, imageTimer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start timers when the element enters the viewport
          pinTimer = setTimeout(() => setShowPins(true), 800);
          threadTimer = setTimeout(() => setShowThread(true), 1100);
          imageTimer = setTimeout(() => setShowImg(true), 500);
        }
      },
      { threshold: 0.1 } // Adjust threshold for when the element is considered "in view"
    );

    if (element) {
      observer.observe(element);
    }
    if (element1) {
      observer.observe(element1);
    }

    return () => {
      // Cleanup timers and observer
      clearTimeout(pinTimer);
      clearTimeout(threadTimer);
      clearTimeout(imageTimer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

    return (
      <>
 <div className='md:block hidden  '
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
      <div className='w-[100%] absolute top-0 p-[5%] grid place-items-center'><img src={Title} className='w-[40%]'></img></div>

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
      <div className='top-[24.5885%] left-[24.7%] '
        style={{
          position: 'absolute',
          width: `${(292 / 583) * 100}%`,
          height: `${(221 / 520) * 100}%`,
          
          backgroundImage: `url(${Thread})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `rotate(1.38deg) ${showPins ? "translateY(0)" : "translateY(-100%)"}`,
          zIndex: '3',
        opacity: showThread ? 1 : 0,
        transition: "all 0.6s ease-out",
        }}
      >
  </div>


      {/* Pin A */}
      <div className='top-[15.2%] left-[16.9%]'
        style={{
          position: 'absolute',
          width: `${(93.14 / 583) * 100}%`,
          height: `${(93.14 / 520) * 100}%`,
          backgroundImage: `url(${Pin})`,
          backgroundSize: 'cover',
          transform: `rotate(1.38deg) ${showPins ? "translateY(0)" : "translateY(-50%)"}`,
          zIndex: '3',
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
          transform: `rotate(1.38deg) ${showPins ? "translateY(0)" : "translateY(-50%)"}`,
          zIndex: '3', 
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
            top: `${(268.07 / 520) * 100}%`,
            left: `${(209.21 / 583) * 100}%`,
            backgroundImage: `url(${Pin})`,
            backgroundSize: 'cover',
            transform: `rotate(1.38deg) ${showPins ? "translateY(0)" : "translateY(-50%)"}`,
            zIndex: '3',
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
            top: `${(248.08 / 520) * 100}%`,
            left: `${(378.9 / 583) * 100}%`,
            backgroundImage: `url(${Pin})`,
            backgroundSize: 'cover',
            transform: `rotate(1.38deg) ${showPins ? "translateY(0)" : "translateY(-50%)"}`,
            zIndex: '3', 
          opacity: showPins ? 1 : 0,
          transition: "all 0.5s ease-out",
          }}
        />


      
<div
  ref={elementRef}
  style={{
    position: 'absolute',
    width: '20.89%',
    height: '29.28%',
    top: '20.00%',
    left: '15.39%',
    padding: '3.22% 3.13% 2.58% 2.53%',
    backgroundImage:`url(${Abg})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
  }}
>
  <img
    src={Aimg}
    alt="Team A Member"
    style={{
      width: '70%',
      height: '60%',
      position: 'absolute',
      top: '10%',
      left: '15%',
      transform: showImg ? "translateY(0)" : "translateY(-100%)",
      opacity: showImg ? 1 : 0,
      transition: "all 0.2s ease-out",
    }}
  />

  <span
    className="absolute text-green-700 font-bold top-[70%] text-[1.15rem] 2xl-text-[1.73rem] sm-text-[1rem]  1980:text-[1.85rem] 1600:text-[1.35rem] 2100:text-[2rem]   lg:text-[1.02rem] font-rfabb md:text-[0.8rem] md:left-[19%] "
    style={{
      transform: 'translateX(-50%)', 
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
                  width: '70%', 
                  height: '60%', 
                  position: 'absolute',
                  top: '10%', 
                  left: '15%',
                  transform: showImg ? "translateY(0)" : "translateY(-100%)",
                  opacity: showImg ? 1 : 0,
                  transition: "all 0.2s ease-out",
                  
                }}
              />
            <span
              className=" text-[1.15rem] 2xl-text-[1.73rem] sm-text-[1rem]  1980:text-[1.85rem] 1600:text-[1.35rem] 2100:text-[2rem] md:text-[0.8rem] md:left-[29%] lg:text-[1.02rem] font-rfabb top-[70%] 1980:right-[15%]  1280:right-[25%]  1600:right-[20%]"
              style={{
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
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
                  width: '70%', 
                  objectFit: 'contain',
                  height: '60%', 
                  position: 'absolute',
                  top: '10%', 
                  left: '15%',
                  transform: showImg ? "translateY(0)" : "translateY(-100%)",
                        opacity: showImg ? 1 : 0,
                        transition: "all 0.2s ease-out",
                  
                }}
              />
              <span
              className="font-rfabb text-[1.05rem] 2xl-text-[1.73rem] sm-text-[1rem]  1980:text-[1.85rem] 1600:text-[1.35rem] 2100:text-[2rem] md:text-[0.8rem]  lg:text-[1.02rem] top-[70%] right-[30%] 1500:right-[35%] "
              style={{
                
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
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
                        width: '70%', 
                        height: '60%', 
                        position: 'absolute',
                        objectFit: 'contain',
                        top: '10%', 
                        left: '15%',
                        transform: showImg ? "translateY(0)" : "translateY(-100%)",
                        opacity: showImg ? 1 : 0,
                        transition: "all 0.2s ease-out",
              
              }}
            />
            <span
            className="font-rfabb 1280:text-[1.2rem] text-[1.15rem] top-[68%] left-[33%]  2xl-text-[1.73rem]  sm-text-[1rem]  1980:text-[1.85rem] 1600:text-[1.35rem] 2100:text-[2rem]  md:text-[0.8rem] md:left-[29%] lg:text-[1.02rem] 1500:left-[37%]"
            style={{
              
              position: 'absolute', 
              color: 'green',
              fontWeight: 'bold',
              transform: 'rotate(-10.77deg)',   
            }}
          >
            TEAM D
          </span>
    </div>
</div>


        {/* Yellow Div  back*/}
        <div
  style={{
    position: "absolute",
    width: `${(387 / 1280) * 100}%`, 
    height: `${(505 / 780) * 100}%`, 
    top: `${(214 / 780) * 100}%`, 
    left: `${(755 / 1280) * 100}%`, 
    gap: "0px",
    backgroundImage: `url(${YellowBack})`,  
    zIndex: 2,
    backgroundSize: "cover",
    backgroundPosition: "top", 
  }}
></div>

{/*  Yellow Div */}
<div
  className="absolute border flex flex-col justify-center items-center box-border"
  style={{
    width: `${(387 / 1280) * 100}%`,
    height: `${(505 / 780) * 100}%`,
    top: `${(205 / 780) * 100}%`,
    left: `${(763 / 1280) * 100}%`,
    backgroundImage: `url(${RightBg})`,
    backgroundSize: "contain",
    
    zIndex: 3, 
  }}
>
          {/* Text Div */}
          <div
            className="p-2 box-border text-start 1280:text-[1.7vw] 1400:text-[1.7vw] sm-text-[1rem] 1500:text-[1.7vw] 1980:text-[1.7vw] 1600:text-[1.7VW] 1700:text-[1.7vw] 2100:text-[1.7vw] lg:text-[1.7vw] md:text-[1.7vw] text-[2vw] font-bold font-vetosans"
            style={{
              width: `${(325 / 387) * 100}%`, 
              height: `${(297 / 505) * 100}%`, 
              top: `${(38 / 505) * 100}%`, 
              left: `${(31 / 387) * 100}%`, 
              position: "absolute",
            }}
          >
             Meet the dreamers, doers, and<br></br> masterminds behind<br></br>{' '}<span className='1280:text-[1.325rem] 1400:text-[1.7vw] sm-text-[0.6rem] 1500:text-[1.7vw] 1700:text-[1.7vw] 1980:text-[1.7vw] 1600:text-[1.7vw] 2100:text-[1.7vw]  text-[2vw] lg:text-[1.7vw] md:text-[1.7vw] font-bold font-rfabb' style={{color: 'rgba(144,0,0,1)',}}>VIVACITY'25</span>  From envisioning <br></br>the cosmic threads of our<br></br> theme to weaving it into <br></br>reality,
              this team makes it all<br></br> happen. Tap to discover the <br></br>faces and stories of
              those who <br></br>bring the multiverse to life!
          </div>
          
          <div
            style={{
              height: `${((401 - (38 + 297)) / 505) * 100}%`, 
              width: "100%",
            }}
          />
        <div 
        style={{
          backgroundImage: `url(${buttonback})`,
          width: `${(256.74 / 387) * 100}%`, 
          height: `${(66.06 / 505) * 100}%`, 
          top: `${(412.75 / 505) * 100}%`,
          left: `${(19 / 387) * 100}%`, 
          borderWidth: '6px',
          position: "absolute",
          zIndex:'3',
          backgroundSize: "cover",
           backgroundPosition: "top",
           border:'black'
        }}></div>
          <button
            className="text-black     transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${button})`,
              width: `${(257.49 / 387) * 100}%`, 
              height: `${(66.06 / 505) * 100}%`, 
              top: `${(409 / 505) * 100}%`,
              left: `${(20.5 / 387) * 100}%`, 
              borderWidth: '6px',
              position: "absolute",
              zIndex:'4',
              backgroundSize: "cover",
    backgroundPosition: "top",
    border:'black'
            }}
          >
          <p className='text-[2.05vw] font-bold xl-text-[2.05vw] 1500-[2.05vw] 1980:text-[2.05vw] 1600:text-[2.05vw] 1700:text-[2.05vw] 2100:text-[2.05vw] lg:text-[2.05vw] md:text-[2vw] font-rfabb'> Meet Them!</p>
          </button>
          
      </div>
     { /* mobile responsive*/ }
 </div>
 <div className='md:hidden block'
  style={{
    position: 'relative',
    width: '100%',
    height: '0',
    paddingTop: `${(924 / 393) * 100}%`, 
    backgroundImage: `url(${Background1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: "no-repeat",
    zIndex: '3',
  }}
>
<div className='w-[100%] absolute top-[2%] p-[5%] grid place-items-center'><img src={Title} className='w-[80%]'></img></div>    
{/* Purple Div */}
    <div
  style={{
    position: 'absolute',
    width: `${(306.63 / 393) * 100}%`,
    height: `${(335.05 / 924) * 100}%`,
    top: `${(133.44 / 924) * 100}%`,
    left: `${(43.6 / 393) * 100}%`,
    transform: 'rotate(0deg)', 
  }}
>
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${LeftBg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      transform: 'rotate(0.88deg)', 
    }}
  >
    {/* Thread */}
    <div
    style={{
      position: 'absolute',
      width: `${(173 / 306.63) * 100}%`,
      height: `${(152 / 335.05) * 100}%`,
      top: `${(69 / 335.05) * 100}%`,
      left: `${(62 / 306.63) * 100}%`,
      backgroundImage: `url(${Thread1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transform: `rotate(1.38deg) ${showThread ? 'translateY(0)' : 'translateY(-100%)'}`,
      zIndex: '3',
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
      left: `${(37.04 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: `rotate(0.88deg) ${showPins ? 'translateY(0)' : 'translateY(-50%)'}`,      zIndex: '3',
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
      top: `${(31.98 / 335.05) * 100}%`,
      left: `${(170.87 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: `rotate(0.88deg) ${showPins ? 'translateY(0)' : 'translateY(-50%)'}`,
      zIndex: '3',
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
      top: `${(173.85 / 335.05) * 100}%`,
      left: `${(83.82 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: `rotate(0.88deg) ${showPins ? 'translateY(0)' : 'translateY(-50%)'}`,
      zIndex: '3',
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
      top: `${(144.35 / 335.05) * 100}%`,
      left: `${(201.17 / 306.63) * 100}%`,
      backgroundImage: `url(${Pin1})`,
      backgroundSize: 'cover',
      transform: `rotate(0.88deg) ${showPins ? 'translateY(0)' : 'translateY(-50%)'}`,
      zIndex: '3',
      opacity: showPins ? 1 : 0,
      transition: "all 0.5s ease-out",
      
    }}
  />

  {/* Team A */}
  <div 
  ref={elementRef1}
  style={{
    position: 'absolute',
    width: `${(72.38 / 306.63) * 100}%`,
    height: `${(90.47 / 335.05) * 100}%`,
    top: `${(55.19 / 335.05) * 100}%`,
    left: `${(34.67 / 306.63) * 100}%`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
    transform: 'rotate(0deg)', 
  }}>
  <div 
    style={{
      width: '100%',
      height: '100%',
      backgroundImage: `url(${Abg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.04deg)',
    }}
  >
    <img
      src={Aimg1}
      alt="Team A Member"
      style={{
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
      }}
    />

<span
    className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem]  "
    style={{
      position: 'absolute', 
      color: 'green',
      fontWeight: 'bold',  
      transform: 'rotate(4.79deg)', 
    }}
  >
    TEAM A
  </span>

  </div>
</div>
  {/* Team B */}
  <div 
    style={{
      position: 'absolute',
      width: `${(61.98 / 306.63) * 100}%`,
      height: `${(81.18 / 335.05) * 100}%`,
      top: `${(48.97 / 335.05) * 100}%`,
      left: `${(166.5 / 306.63) * 100}%`,
      padding: '2.22% 1.63% 1.00% 1.33%',
      backgroundImage: `url(${Bbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-4.32deg)',
      zIndex: '1',
    }}
  >
    <img src={Bimg1} 
    alt="Team B Member" 
    style={{ 
      width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
       transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
       }}
        />

<span
              className=" text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem] "
              style={{
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
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
      width: `${(66.9 / 306.63) * 100}%`,
      height: `${(83.63 / 335.05) * 100}%`,
      top: `${(201.01 / 335.05) * 100}%`,
      left: `${(66.28 / 306.63) * 100}%`,
      padding: '2.10% 2.52% 1.03% 2.08%',
      backgroundImage: `url(${Cbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(7.72deg)',
      zIndex: '1',
    }}
  >
    <img src={Cimg1} alt="Team C Member" style=
    {{ 
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
    }} />
    <span
              className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem]  "
              style={{
                
                position: 'absolute', 
                color: 'green',
                fontWeight: 'bold',
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
      width: `${(66.47 / 306.63) * 100}%`,
      height: `${(83.09 / 335.05) * 100}%`,
      top: `${(180.56 / 335.05) * 100}%`,
      left: `${(199.69 / 306.63) * 100}%`,
      padding: '2.07% 2.58% 1.50% 1.87%',
      backgroundImage: `url(${Dbg1})`,
      backgroundSize: 'contain',
      backgroundRepeat: "no-repeat",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'rotate(-8.51deg)',
      zIndex: '1',
    }}
  >
    <img src={Dimg1} alt="Team D Member" 
    style={{
        width: '70%', 
        height: '60%', 
        position: 'absolute',
        top: '10%', 
        left: '15%',
        transform: showImg ? "translateY(0)" : "translateY(-100%)",
        opacity: showImg ? 1 : 0,
        transition: "all 0.2s ease-out",
  }} />

<span
            className="text-[1.15rem] top-[70%] sm-text-[1.4rem]   font-rfabb md:text-[1.6rem] xs:text-[1.2rem]  xs:top-[65%] xss:text-[1.2rem]  xxs:top-[65%] xxxs:text-[0.7rem]  xxxs:top-[65%] 270:text-[0.5rem] "
            style={{
              
              position: 'absolute', 
              color: 'green',
              fontWeight: 'bold',
              transform: 'rotate(-10.77deg)',   
            }}
          >
            TEAM D
          </span>
  </div>
</div>
</div>
{/* Yellow Div  back*/}
<div
  style={{
    position: "absolute",
    width: `${(300.78 / 393) * 100}%`, 
    height: `${(344.85 / 924) * 100}%`, 
    top: `${(507.15 / 924) * 100}%`, 
    left: `${(41/ 393) * 100}%`, 
    gap: "0px",
    backgroundImage: `url(${YellowBack1})`,  
    zIndex: 2,
    backgroundSize: "cover",
    backgroundPosition: "top", 
  }}
></div>

{/* Yellow Div */}
<div
  className="absolute border flex flex-col justify-center items-center box-border"
  style={{
    width: `${(300.78 / 393) * 100}%`, 
    height: `${(344.85 / 924) * 100}%`, 
    top: `${(501 / 924) * 100}%`, 
    left: `${(47.22/ 393) * 100}%`, 
    backgroundImage: `url(${RightBg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  }}
>
  {/* Text Div */}
  <div
    className="p-2 box-border text-start font-bold  text-[1.25rem] xs:text-[3.3vw] xxs:text-[3.3vw] xxxs:text-[3.3vw] 270:text-[3.3vw] sm:text-[3.3vw] md:text-[1.75rem]  lg:text-[2.05rem] font-vetosans"
    style={{
      width: `${(255 / 307) * 100}%`, 
      height: `${(225 / 351) * 100}%`, 
      top: `${(23 / 351) * 100}%`, 
      left: `${(22.78 / 307) * 100}%`, 
      position: 'absolute',
      
    }}
  >
    Meet the dreamers, doers, and<br></br> masterminds behind<br></br>{' '}
    <span
      className="font-rfabb font-bold  text-[1.25rem] xs:text-[3.3vw] xxs:text-[3.3vw] xxxs:text-[3.3vw] 270:text-[3.3vw] sm:text-[3.3vw] md:text-[1.65rem]  lg:text-[2.05rem] "
      style={{ color: 'rgba(144,0,0,1)' }}
    >
      VIVACITY'25
    </span>{' '}
    From envisioning <br></br>the cosmic threads of our<br></br> theme to weaving it into <br></br>reality,
    this team makes it all<br></br> happen. Tap to discover the <br></br>faces and stories of
    those who <br></br>bring the multiverse to life!
  </div>

  <div  
    style={{
      height: `${((351 - (23 + 225)) / 351) * 100}%`, 
      width: '100%',
    }}
  />
<div 
        style={{
          backgroundImage: `url(${buttonback1})`,
          width: `${(201.23 / 307) * 100}%`, 
          height: `${(51.78 / 351) * 100}%`, 
          top: `${(274.94 / 351) * 100}%`,
          left: `${(20.78 / 307) * 100}%`, 
          borderWidth: '6px',
          position: "absolute",
          zIndex:'3',
          backgroundSize: "cover",
           backgroundPosition: "top",
           border:'black'
        }}></div>
  {/* Button Div */}
  <button
    className="text-black  border-black "
    style={{
      backgroundImage: `url(${button1})`,
      width: `${(201.82 / 307) * 100}%`, 
      height: `${(51.78 / 351) * 100}%`, 
      top: `${(272 / 351) * 100}%`,
      left: `${(21.96 / 307) * 100}%`, 
      
      position: 'absolute',
      zIndex:'4',
      backgroundSize: "cover",
           backgroundPosition: "top",
    }}
  >
    <p className="xs:text-[5vw] text-[5vw] xxs:text-[5vw] xxxs:text-[5vw] 270:text-[5vw] sm:text-[5vw]    font-bold font-rfabb">
      Meet Them!
    </p>
  </button>
</div>

</div>

    </>

     
    )
}
export default Team;