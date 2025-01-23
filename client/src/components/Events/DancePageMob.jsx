
import Button_Component from "./Button_component";

const aws = import.meta.env.VITE_AWS;

const Background1 = `${aws}/iPhone 14 & 15 Pro - 2.webp`;
const Title21 = `${aws}/Name.webp`;
const subtitle2 = `${aws}/Cash Prize.webp`;
const Topleft1 = `${aws}/TopLeftimg.webp`;
const Topright1 = `${aws}/Mobdancediv.webp`;
const MiddleLeft1 = `${aws}/TopRightimg.webp`;
const MiddleRight1 = `${aws}/Pump It Up.webp`;
const BottomLeft1 = `${aws}/MiddleLeftimg.webp`;
const BottomRight1 = `${aws}/BottomRightimg.webp`;
const Topleftdiv1 = `${aws}/Subtext-19.webp`;
const TopRightdiv1 = `${aws}/Subtext-20.webp`;
const Middleleftdiv1 = `${aws}/Subtext-21.webp`;
const Middlerightdiv1 = `${aws}/Cash Prize-2.webp`;
const Bottomleftdiv1 = `${aws}/Subtext-22.webp`;
const BottomRightdiv1 = `${aws}/Subtext-23.webp`;
const PumpItUp1 = `${aws}/Text-7.webp`;
const Letstangle1 = `${aws}/Event Name-2.webp`;
const mudra1 = `${aws}/Event Name-6.webp`;
const Streetdance1 = `${aws}/Event Name.webp`;
const TalNarang1 = `${aws}/Event Name-3.webp`;
const Razzmataaz1 = `${aws}/Event Name-5.webp`;
const Title2 = `${aws}/DanceTitle2.webp`;


function Pagess(){
    return(
        <div>
            <div className="bg-cover bg-center flex flex-col items-center pt-[8%] "
          style={{
            backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/iPhone 14 & 15 Pro - 2.webp")`,
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