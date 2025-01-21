import Background1 from "../../assets/images/iPhone 14 & 15 Pro - 2.png";
import Title21 from "../../assets/images/Name.png";
import subtitle2 from "../../assets/images/Cash Prize.png";
import Topleft1 from "../../assets/images/TopLeftimg.png";
import Topright1 from "../../assets/images/Mobdancediv.png";
import MiddleLeft1 from "../../assets/images/TopRightimg.png";
import MiddleRight1 from "../../assets/images/Pump It Up.png";
import BottomLeft1 from "../../assets/images/MiddleLeftimg.png";
import BottomRight1 from "../../assets/images/BottomRightimg.png";
import Topleftdiv1 from "../../assets/images/Subtext-19.png";
import TopRightdiv1 from "../../assets/images/Subtext-20.png";
import Middleleftdiv1 from "../../assets/images/Subtext-21.png";
import Middlerightdiv1 from "../../assets/images/Cash Prize-2.png";
import Bottomleftdiv1 from "../../assets/images/Subtext-22.png";
import BottomRightdiv1 from "../../assets/images/Subtext-23.png";
import PumpItUp1 from "../../assets/images/Text-7.png";
import Letstangle1 from "../../assets/images/Event Name-2.png";
import mudra1 from "../../assets/images/Event Name-6.png";
import Streetdance1 from "../../assets/images/Event Name.png";
import TalNarang1 from "../../assets/images/Event Name-3.png";
import Razzmataaz1 from "../../assets/images/Event Name-5.png";
import Button_Component from "./Button_component";
import Title2 from "../../assets/images/DanceTitle2.png";

function Pagess(){
    return(
        <div>
            <div className="bg-cover bg-center flex flex-col items-center pt-[8%] "
          style={{
            backgroundImage: `url(${Background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            position: "relative",
          }}>
                 {/* Content Div */}

                 <div className="flex flex-col w-[100%] items-center ">
                     {/* Title Div */}
                 <div  style={{
                position: "relative",
                width: "77.6%",
                aspectRatio: "305 / 87",
                backgroundImage: `url(${Title2})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}/>
                     {/* coloumn elememts Div */}
              <div className="flex flex-col w-[91%] mt-[6%] justify justify-between">
                <div className="relative w-[100%] h-auto ">
                        <img className="w-[100%] h-[100%]" src={Topleft1} alt="" />
                        {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "146/33.52",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${Streetdance1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
            <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "300/27",
                left: "3.53%",
                top: "77.5%",
                backgroundImage: `url(${Topleftdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.2vw] px-[2%]  font-bold  ">
                Let the streets bear witness to electrifying performances and
                exhilarating beats. Let your spirits soar with street dance!
              </p>
            </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                         <img className="w-[100%] h-[100%]" src={Topright1} alt="" />
                         {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "146/33.52",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${Letstangle1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
            <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "76.5%",
                backgroundImage: `url(${TopRightdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.1vw] px-[2%] font-bold ">
                The classic Steve Harvey show! Come and be a witness to the
                recreation of one of the most popular reality shows of all time,
                at Family Feud: the game show!
              </p>
            </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                             <img className="w-[100%] h-[100%]" src={MiddleLeft1} alt="" />
                             {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "146/33.52",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${TalNarang1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
             <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "77.5%",
                backgroundImage: `url(${Middleleftdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.5vw] px-[2%] font-bold ">
                Duet with a partner as your symphonies collide against<br></br>{" "}
                each other in this competition of melodies.
              </p>
            </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                            <img className="w-[100%] h-[100%]" src={MiddleRight1} alt="" />
                            {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "146/33.56",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${PumpItUp1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
             <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "81.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "77.5%",
                backgroundImage: `url(${Middlerightdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className=" font-rfabb leading-tight text-[2.3vw] font-bold  px-[2%] ">
                Let the beats flow and your body move! Engage yourself in solo
                western performances where rhythm is everything.
              </p>
            </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                            <img className="w-[100%] h-[100%]" src={BottomLeft1} alt="" />
                            {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "146/33.56",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${Razzmataaz1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
             <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/28",
                left: "3.53%",
                top: "78.5%",
                backgroundImage: `url(${Bottomleftdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.3vw] font-bold  px-[2%]">
                Set the stage on fire as you unleash the rhythm and showcase
                your choreography in this dance battle.
              </p>
            </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                            <img className="w-[100%] h-[100%]" src={BottomRight1} alt="" />
                             {/* Title  */}
            <div
              style={{
                position: "absolute",
                width: "40.43%",
                aspectRatio: "105/33.53",
                top: "50.12%",
                left: "2%",
                backgroundImage: `url(${mudra1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
            <div
              className="px-4 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "69.5%",
                backgroundImage: `url(${BottomRightdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.2vw] font-bold px-[2%] ">
                Explore the allure of the classical arts! Let light <br />
                descend onto the stage as you enamor yourself in
                <br /> elegant styles and witness the roots of dance itself!
              </p>
            </div>
                </div>

              </div>
                 </div>
                
                 <div className="w-[100%] relative bottom-0 p-[5%]">
            <Button_Component showRegister={true} showRulebook={true} />
          </div>
            </div>
            
        </div>
    )
}

export default Pagess;