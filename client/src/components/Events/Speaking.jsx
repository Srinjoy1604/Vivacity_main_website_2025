import Background from "../../assets/images/Danceevents2bg.png";
import Title2 from "../../assets/images/Title2.png";
import SpeakingTitle from "../../assets/images/SpeakingArtsTitle.png";
import subtitle2 from "../../assets/images/Subheading.png";
import Topleft from "../../assets/images/Group 96-2.png";
import Topright from "../../assets/images/Subtext.png";
import MiddleLeft from "../../assets/images/Subtext-2.png";
import MiddleRight from "../../assets/images/Subtext-3.png";
import BottomLeft from "../../assets/images/Subtext-4.png";
import BottomRight from "../../assets/images/Subtext-5.png";
import Topleftdiv from "../../assets/images/Duologue.png";
import TopRightdiv from "../../assets/images/Family Feud.png";
import Middleleftdiv from "../../assets/images/Spotlight.png";
import Middlerightdiv from "../../assets/images/Afreen.png";
import Bottomleftdiv from "../../assets/images/Potpourii.png";
import BottomRightdiv from "../../assets/images/Dare to Spell.png";
import Duologue from "../../assets/images/duologuee.png";
import FamilyFeud from "../../assets/images/FamilyFeud.png";
import Spotlight from "../../assets/images/Spotlightt.png";
import Afreen from "../../assets/images/Afreenn.png";
import Potpouri from "../../assets/images/Potpouri.png";
import DareToSpell from "../../assets/images/DareToSpell.png";
import Button_Component from "./Button_component";

function Speaking(){
    return(
        <div>
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
                  width: "82.59%",
                  aspectRatio: "446 /60",
                  left: "10.78%",
                  top: "77.5%",
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
                  width: "70.99%",
                  aspectRatio: "446/43",
                  left: "24.78%",
                  top: "81.5%",
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
    )
}

export default Speaking;