import Background from "../../assets/images/Danceevents2bg.webp";
// import Title2 from "../../assets/images/Title2.webp";
// import subtitle2 from "../../assets/images/Subheading.webp";
import Topleft from "../../assets/images/Group 96-2.webp";
import Topright from "../../assets/images/Subtext.webp";
import MiddleLeft from "../../assets/images/Subtext-2.webp";
import MiddleRight from "../../assets/images/Subtext-3.webp";
import BottomLeft from "../../assets/images/Subtext-4.webp";
import BottomRight from "../../assets/images/Subtext-5.webp";
import Topleftdiv from "../../assets/images/Duologue.webp";
import TopRightdiv from "../../assets/images/Family Feud.webp";
import Middleleftdiv from "../../assets/images/Spotlight.webp";
import Middlerightdiv from "../../assets/images/Afreen.webp";
import Bottomleftdiv from "../../assets/images/Potpourii.webp";
import BottomRightdiv from "../../assets/images/Dare to Spell.webp";
import Duologue from "../../assets/images/duologuee.webp";
import FamilyFeud from "../../assets/images/FamilyFeud.webp";
import Spotlight from "../../assets/images/Spotlightt.webp";
import Afreen from "../../assets/images/Afreenn.webp";
import Potpouri from "../../assets/images/Potpouri.webp";
import DareToSpell from "../../assets/images/DareToSpell.webp";
import Background1 from "../../assets/images/iPhone 14 & 15 Pro - 3.webp";
// import Title1 from "../../assets/images/Name-4.webp";
// import subtitle1 from "../../assets/images/Cash Prize.webp";
import Topleft1 from "../../assets/images/Duologue-2.webp";
import Topright1 from "../../assets/images/Family Feud-2.webp";
import MiddleLeft1 from "../../assets/images/Spotlight-2.webp";
import MiddleRight1 from "../../assets/images/Afreen-2.webp";
import BottomLeft1 from "../../assets/images/Potpourii-2.webp";
import BottomRight1 from "../../assets/images/Dare to Spell-2.webp";
import Topleftdiv1 from "../../assets/images/Subtext-19.webp";
import TopRightdiv1 from "../../assets/images/Subtext-20.webp";
import Middleleftdiv1 from "../../assets/images/Subtext-21.webp";
import Middlerightdiv1 from "../../assets/images/Cash Prize-2.webp";
import Bottomleftdiv1 from "../../assets/images/Subtext-22.webp";
import BottomRightdiv1 from "../../assets/images/Subtext-23.webp";
import Duologue1 from "../../assets/images/Event Name-7.webp";
import FamilyFeud1 from "../../assets/images/Event Name-8.webp";
import Spotlight1 from "../../assets/images/Event Name-9.webp";
import Afreen1 from "../../assets/images/Event Name-10.webp";
import Potpouri1 from "../../assets/images/Event Name-11.webp";
import DareToSpell1 from "../../assets/images/Event Name-12.webp";
import Button_Component from "./Button_component";
import SpeakingTitle from "../../assets/images/SpeakingArtsTitle.webp";

function Speaking(){
    return(
        <div>
          <div className="md:block hidden">
            <div 
          className=" bg-cover bg-center flex flex-col items-center  "
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            position: "relative",
          }}
        >
            <div  className="flex flex-col w-[100%] items-center mt-[5%]">
                {/*Title*/}
                <div style={{
                position: "relative",
                width: "48.71%",
                aspectRatio: "621 / 178",
                backgroundImage: `url(${SpeakingTitle})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}>
                </div>
                {/*Content*/}
                <div className="flex flex-col items-center mt-[3%] w-[100%]" 
                 style={{
                    backgroundSize: "cover",
                    zIndex: "1",
                  }}>
                    {/*Row 1*/}
                    <div className="flex flex-row w-[100%] mt-[2%]  justify-between px-[3.1%]">
                        {/* row 1 left */}
                        <div className="w-[52.57%] h-auto relative">
                        <img  src={Topleftdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        {/* Title topleft */}
              <div
                style={{
                  position: "absolute",
                  width: "24.43%",
                  aspectRatio: "152/54.75",
                  left: "3%",
                  top: "68.12%",
                  backgroundImage: `url(${Duologue})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              >
                {" "}
              </div>
              {/* SubTitle  topleft*/}
              <div
                className="px-4 py-1"
                style={{
                  position: "absolute",
                  width: "70.59%",
                  aspectRatio: "446 /43",
                  left: "4.78%",
                  top: "80.5%",
                  backgroundImage: `url(${Topleft})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold  ">
                  Let the verses flow as you engage in blindfolded
                  <br /> conversations that journey beyond the superficial!
                </p>
              </div>
                        </div>
                         {/* row 1  right*/}
                        <div className="relative w-[45%] h-auto">
                        <img  src={TopRightdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        <div
                style={{
                  position: "absolute",
                  width: "38.6%",
                  aspectRatio: "209/54.75",
                  left: "58.2%",
                  top: "64.12%",
                  backgroundImage: `url(${FamilyFeud})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              />
              
              <div
                className="px-4  py-1"
                style={{
                  position: "absolute",
                  width: "90.59%",
                  aspectRatio: "446 /60",
                  left: "7.78%",
                  top: "76.5%",
                  backgroundImage: `url(${Topright})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold ">
                  The classic Steve Harvey show! Come and be a witness to the
                  recreation of one of the most popular reality shows of all
                  time, at Family Feud: the game show!
                </p>
              </div>
            
            </div>
                    </div>
                    {/*Row 2*/}
                    <div  className="flex flex-row w-[100%] mt-[2%]  justify-between px-[3.1%]">
                        {/* row 2  left*/}
                        <div  className="w-[46.75%] h-auto relative">
                        <img  src={Middleleftdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        <div
                style={{
                  position: "absolute",
                  width: "27.43%",
                  aspectRatio: "154/54.75",
                  left: "3%",
                  top: "63.12%",
                  backgroundImage: `url(${Spotlight})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              >
                {" "}
              </div>
              {/* SubTitle  topleft*/}
              <div
                className="px-4  py-1"
                style={{
                  position: "absolute",
                  width: "67.59%",
                  aspectRatio: "381 /60",
                  left: "5.78%",
                  top: "76.5%",
                  backgroundImage: `url(${MiddleLeft})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold ">
                  Poetry, storytelling, music, or stand-ups! A little something
                  for everyone as you step into the spotlight in Spotlight!
                </p>
              </div>
                        </div>
                        {/* row 2  right*/}
                        <div  className="w-[50.57%] h-auto relative">
                        <img  src={Middlerightdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        {/* Title topleft */}
              <div
                style={{
                  position: "absolute",
                  width: "25.6%",
                  aspectRatio: "156/54.75",
                  left: "73.2%",
                  top: "63.12%",
                  backgroundImage: `url(${Afreen})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              >
                {" "}
              </div>
              {/* SubTitle  topleft*/}
              <div
                className="px-4  py-1"
                style={{
                  position: "absolute",
                  width: "72.59%",
                  aspectRatio: "446 /60.3",
                  left: "22.78%",
                  top: "76.5%",
                  backgroundImage: `url(${MiddleRight})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold ">
                  Explore the allure of the classical arts! Let light descend
                  onto the stage as you enamor yourself in elegant styles and
                  witness the roots of dance itself!
                </p>
              </div>
                        </div>
                    </div>
                    {/*Row 3*/}
                    <div className="flex flex-row w-[100%] mt-[2%] justify-between px-[3.1%]">
                        {/* row 3  left*/}
                        <div className="w-[52.57%] h-auto relative">
                        <img  src={Bottomleftdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        <div
                style={{
                  position: "absolute",
                  width: "24.43%",
                  aspectRatio: "155/51",
                  left: "72.46%",
                  top: "68.12%",
                  backgroundImage: `url(${Potpouri})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              >
                {" "}
              </div>
              {/* SubTitle  topleft*/}
              <div
                className="px-4  py-1"
                style={{
                  position: "absolute",
                  width: "79.99%",
                  aspectRatio: "446/43",
                  left: "15.78%",
                  top: "79.5%",
                  backgroundImage: `url(${BottomLeft})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold">
                  Let the puns flow and laughter rumble! A battle of puns, and a
                  prize reserved only for the emperor!
                </p>
              </div>
                        </div>
                        {/* row 3  right*/}
                        <div className="w-[45.57%] h-auto relative">
                        <img  src={BottomRightdiv} alt="streetdance"  className="w-[100%] h-[100%]" />
                        {/* Title topleft */}
              <div
                style={{
                  position: "absolute",
                  width: "38.92%",
                  aspectRatio: "211/51.35",
                  left: "57.56%",
                  top: "64.12%",
                  backgroundImage: `url(${DareToSpell})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              >
                {" "}
              </div>
              {/* SubTitle  topleft*/}
              <div
                className="px-4  py-1"
                style={{
                  position: "absolute",
                  width: "82.59%",
                  aspectRatio: "446 /60",
                  left: "11.78%",
                  top: "76.5%",
                  backgroundImage: `url(${BottomRight})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  zIndex: "2",
                  overflow: "hidden",
                }}
              >
                <p className="font-rfabb leading-tight text-[1vw] font-bold">
                  Show your linguistic prowess in this celestial conquest of
                  spellings. Arm yourself with vocabulary and fight your way to
                  the top. Do you dare?
                </p>
              </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] p-[2%] mb-[3%]">
            <Button_Component showRegister={true} showRulebook={true} />
          </div>
            </div>
            </div>
            </div>

            <div className="md:hidden block">
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
                backgroundImage: `url(${SpeakingTitle})`,
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
                aspectRatio: "123/33.52",
                top: "64.12%",
                left: "2%",
                backgroundImage: `url(${Duologue1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

            <div
              className="px-4  py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/27",
                left: "3.53%",
                top: "79.5%",
                backgroundImage: `url(${Topleftdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2vw] font-bold">
                Let the verses flow as you engage in blindfolded
                <br /> conversations that journey beyond the superficial!{" "}
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
                backgroundImage: `url(${FamilyFeud1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

            <div
              className="px-4  py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "77.5%",
                backgroundImage: `url(${TopRightdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.3vw] font-bold ">
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
                aspectRatio: "121/33.52",
                top: "60.12%",
                left: "2%",
                backgroundImage: `url(${Spotlight1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

            <div
              className="px-4  py-2"
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
              <p className="font-rfabb leading-tight text-[2.6vw] font-bold ">
                Duet with a partner as your symphonies collide <br />
                against each other in this competition of melodies.
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
                aspectRatio: "103/33.52",
                top: "58.12%",
                left: "2%",
                backgroundImage: `url(${Afreen1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

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
              <p className=" font-rfabb leading-tight text-[2.3vw] font-bold">
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
                aspectRatio: "111/34",
                top: "59.12%",
                left: "2%",
                backgroundImage: `url(${Potpouri1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

            <div
              className="px-2 py-1"
              style={{
                position: "absolute",
                width: "92.39%",
                aspectRatio: "329/28",
                left: "3.53%",
                top: "76.5%",
                backgroundImage: `url(${Bottomleftdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.3vw] font-bold ">
                Set the stage on fire as you unleash the rhythm and
                <br /> showcase your choreography in this dance battle.
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
                aspectRatio: "146/33.53",
                top: "62.12%",
                left: "2%",
                backgroundImage: `url(${DareToSpell1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {" "}
            </div>

            <div
              className="px-4 py-1"
              style={{
                position: "absolute",
                width: "91.39%",
                aspectRatio: "329/39",
                left: "3.53%",
                top: "76.5%",
                backgroundImage: `url(${BottomRightdiv1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "2",
                overflow: "hidden",
              }}
            >
              <p className="font-rfabb leading-tight text-[2.3vw] font-bold">
                Explore the allure of the classical arts! Let light descend onto
                the stage as you enamor yourself in elegant styles and witness
                the roots of dance itself!
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
        </div>
    )
}

export default Speaking;
