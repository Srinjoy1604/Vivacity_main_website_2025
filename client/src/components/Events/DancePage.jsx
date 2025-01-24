import Navbar from "../Navbar";

const aws = import.meta.env.VITE_AWS;

const Background = `${aws}/MacBook Air - 1.webp`;
const Title2 = `${aws}/DanceTitle2.webp`;
const Insignia = `${aws}/Insignia.pdf`;
const Topleft = `${aws}/TopLeftimg.webp`;
const Topright = `${aws}/TopRightimg.webp`;
const MiddleLeft = `${aws}/MiddleLeftimg.webp`;
const MiddleRight = `${aws}/MiddleRightimg.webp`;
const BottomLeft = `${aws}/BottomLeftimg.webp`;
const BottomRight = `${aws}/BottomRightimg.webp`;
const Topleftdiv = `${aws}/Topleftdiv.webp`;
const TopRightdiv = `${aws}/TopRight.webp`;
//const Streetdance = `${aws}/Streetdance.webp`;
// const TalNarang = `${aws}/TalTarang.webp`;
//const Razzmataaz = `${aws}/Razzmaatazz.webp`;
const Middleleftdiv = `${aws}/MiddleLeftdiv.webp`;
const Middlerightdiv = `${aws}/MiddleRightDiv.webp`;
const Bottomleftdiv = `${aws}/BottomleftDiv.webp`;
const BottomRightdiv = `${aws}/Bottomrightdiv.webp`;
//const PumpItUp = `${aws}/PumpItUp.webp`;
//const Letstangle = `${aws}/LetsTangle.webp`;
//const mudra = `${aws}/Mudra.webp`;

import Streetdance from "../../assets/videos/StreetDance.svg"
import TalNarang from "../../assets/videos/TalTarang.svg"
import Razzmataaz from "../../assets/videos/Razzmatazz.svg"
import PumpItUp from "../../assets/videos/PumpItUp.svg"
import Letstangle from "../../assets/videos/LetsTangle.svg"
import mudra from "../../assets/videos/Mudra.svg"

const Background1 = `${aws}/iPhone 14 & 15 Pro - 2.webp`;

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
//const PumpItUp1 = `${aws}/Text-7.webp`;
// const Letstangle1 = `${aws}/Event Name-2.webp`;
// const mudra1 = `${aws}/Event Name-6.webp`;
// const Streetdance1 = `${aws}/Event Name.webp`;
// const TalNarang1 = `${aws}/Event Name-3.webp`;
// const Razzmataaz1 = `${aws}/Event Name-5.webp`;

import Streetdance1 from "../../assets/videos/StreetDance1.svg"
import TalNarang1 from "../../assets/videos/TalTarang1.svg"
import Razzmataaz1 from "../../assets/videos/Razzmatazz1.svg"
import PumpItUp1 from "../../assets/videos/PumpItUp1.svg"
import Letstangle1 from "../../assets/videos/LetsTangle1.svg"
import mudra1 from "../../assets/videos/Mudra1.svg"

import Button_Component from "./Button_component";

function DancePage() {
  return (
    <div>
      <div className="min-[768px]:block hidden">
        {" "}
        <Navbar />
      </div>
      <div>
        <div className=" md:block hidden">
          <div
            className="bg-cover bg-center flex flex-col items-center pt-[3%]  max-[802px]:pt-[10rem] "
            style={{
              backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/MacBook%20Air%20-%201.webp")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              position: "relative",
            }}
          >
            {" "}
            {/* Content Div */}
            <div className="flex flex-col w-[100%] items-center mt-[2%]">
              {/* Title */}
              <div
                style={{
                  position: "relative",
                  width: "48.71%",
                  aspectRatio: "621 / 178",
                  backgroundImage: `url(${Title2})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              />
              {/* images rows main div */}
              <div
                className="flex flex-col items-center mt-[3%] w-[100%]"
                style={{
                  backgroundSize: "cover",
                  zIndex: "1",
                }}
              >
                {/* row 1 */}
                <div className="flex flex-row w-[100%]  justify-between px-[3.1%]">
                  {/* row 1 left */}
                  <div className=" relative w-[46.6%] h-auto">
                    <img
                      src={Topleft}
                      alt="streetdance"
                      className="w-[100%] h-[100%]"
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: "37.43%",
                        aspectRatio: "209 /54.75",
                        left: "3.40%",
                        top: "64.12%",
                        backgroundImage: `url(${Streetdance})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    ></div>
                    {/* SubTitle  topleft*/}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "79.39%",
                        aspectRatio: "443 /56.2",
                        left: "3%",
                        top: "76.4%",
                        backgroundImage: `url(${Topleftdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight align-middle 1280:text-[1.05vw] lg:text-[1.05vw] md:text-[1vw]  1400:text-[1.05vw] 1500:text-[1.05vw] 1600:text-[1.05vw] 1980:text-[1.05vw] text-start mt-[1%]  font-bold ">
                        Let the streets bear witness to electrifying
                        performances and exhilarating beats. Let your spirits
                        soar with street dance!
                      </p>
                    </div>
                  </div>
                  {/* row 1  right*/}
                  <div className="relative w-[51.6%] h-auto">
                    <img
                      src={Topright}
                      alt="talnarang"
                      className="w-[100%] h-[100%]"
                    />
                    {/* Title topright */}
                    <div
                      style={{
                        position: "absolute",
                        width: "37.43%",
                        aspectRatio: "565/131",
                        left: "60%",
                        top: "68.36%",
                        backgroundImage: `url(${TalNarang})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    >
                      {" "}
                    </div>
                    {/* SubTitle topright */}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "75.71%",
                        aspectRatio: "465 /46",
                        left: "19%",
                        top: "80.3%",
                        backgroundImage: `url(${TopRightdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight text-[1.2vw] font-bold pt-[1%] ">
                        Duet with a partner as your symphonies collide against
                        each other in this competition of melodies.
                      </p>
                    </div>
                  </div>
                </div>
                {/* row 2 */}
                <div className="flex flex-row w-[100%] mt-[2%] justify-between px-[3.1%]">
                  {/* row 2  left*/}
                  <div className=" relative w-[52.53%] h-auto">
                    <img
                      src={MiddleLeft}
                      alt="streetdance"
                      className="w-[100%] h-[100%] "
                    />
                    {/* Title midleft */}
                    <div
                      style={{
                        position: "absolute",
                        width: "37.43%",
                        aspectRatio: "209 /54.75",
                        left: "3.40%",
                        top: "57.12%",
                        backgroundImage: `url(${Razzmataaz})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    >
                      {" "}
                    </div>
                    {/* SubTitle middleleft */}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "75.71%",
                        aspectRatio: "465 /46",
                        left: "6%",
                        top: "70.3%",
                        backgroundImage: `url(${Middleleftdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight text-[1.2vw] font-bold ">
                        Set the stage on fire as you unleash the rhythm and
                        showcase your choreography in this dance battle.
                      </p>
                    </div>
                  </div>
                  <div className="relative w-[45.12%] h-auto">
                    <img
                      src={MiddleRight}
                      alt="streetdance"
                      className="w-[100%] h-[100%]"
                    />
                    {/* Title middleright */}
                    <div
                      style={{
                        position: "absolute",
                        width: "37.43%",
                        aspectRatio: "209 /54.75",
                        left: "3.40%",
                        top: "62.12%",
                        backgroundImage: `url(${PumpItUp})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    >
                      {" "}
                    </div>
                    {/* SubTitle middleright */}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "82.71%",
                        aspectRatio: "446 /60",
                        left: "7%",
                        top: "76.3%",
                        backgroundImage: `url(${Middlerightdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight text-[1.1vw] font-bold  ">
                        {" "}
                        Let the beats flow and your body move! Engage
                        <br /> yourself in solo western performances where
                        rhythm
                        <br /> is everything.
                      </p>
                    </div>
                  </div>
                </div>
                {/* row 3 */}
                <div className="flex flex-row w-[100%] mt-[2%] justify-between px-[3.1%]">
                  <div className=" relative w-[46.79%] h-auto">
                    <img
                      src={BottomLeft}
                      alt="streetdance"
                      className="w-[100%] h-[100%] "
                    />
                    {/* Title bottomleft */}
                    <div
                      style={{
                        position: "absolute",
                        width: "37.11%",
                        aspectRatio: "209 /55.75",
                        left: "58.89%",
                        top: "16.12%",
                        backgroundImage: `url(${Letstangle})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    />
                    {/* SubTitle bottomleft */}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "82.71%",
                        aspectRatio: "464 /43",
                        left: "12%",
                        top: "5%",
                        backgroundImage: `url(${Bottomleftdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight text-[1.2vw] font-bold ">
                        {" "}
                        Duet with a partner as your symphonies collide against
                        <br /> each other in this competition of melodies.
                      </p>
                    </div>
                  </div>
                  <div className=" relative w-[50.8%] h-auto">
                    <img
                      src={BottomRight}
                      alt="streetdance"
                      className="w-[100%] h-[100%]"
                    />
                    {/* Title bottomright */}
                    <div
                      style={{
                        position: "absolute",
                        width: "22.91%",
                        aspectRatio: "140 /52.75",
                        left: "4%",
                        top: "62.55%",
                        backgroundImage: `url(${mudra})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                      }}
                    />
                    {/* SubTitle bottomright */}
                    <div
                      className="px-4"
                      style={{
                        position: "absolute",
                        width: "72.99%",
                        aspectRatio: "446 /60",
                        left: "8%",
                        top: "75%",
                        backgroundImage: `url(${BottomRightdiv})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "2",
                        overflow: "hidden",
                      }}
                    >
                      <p className="font-rfabb leading-tight text-[1.1vw] font-bold  ">
                        Explore the allure of the classical arts! Let light
                        descend onto the stage as you enamor yourself in elegant
                        styles and witness the roots of dance itself!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Buttons */}

              <div className="w-[100%] p-[2%] mb-[3%]">
                <Button_Component
                  section={Insignia}
                  showRegister={true}
                  showRulebook={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE VERSION */}
        <div className="md:hidden block">
          <div
            className="bg-cover bg-center flex flex-col items-center pt-[8%] "
            style={{
              backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/iPhone 14 & 15 Pro - 2.webp")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Content Div */}

            <div className="flex flex-col w-[100%] items-center ">
              {/* Title Div */}
              <div
                style={{
                  position: "relative",
                  width: "77.6%",
                  aspectRatio: "305 / 87",
                  backgroundImage: `url(${Title2})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  zIndex: "1",
                }}
              />
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
                      Let the streets bear witness to electrifying performances
                      and exhilarating beats. Let your spirits soar with street
                      dance!
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
                    Duet with a partner as your symphonies collide against
                    <br /> each other in this competition of melodies.
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
                      // backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/Event Name-3.webp")`,
                      backgroundImage:`url(${TalNarang1})`,
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
                      Duet with a partner as your symphonies collide against
                      <br></br> each other in this competition of melodies.
                    </p>
                  </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                  <img
                    className="w-[100%] h-[100%]"
                    src={MiddleRight1}
                    alt=""
                  />
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
                      backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/Cash Prize-2.webp")`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      zIndex: "2",
                      overflow: "hidden",
                    }}
                  >
                    <p className=" font-rfabb leading-tight text-[2.3vw] font-bold  px-[2%] ">
                      Let the beats flow and your body move! Engage yourself in
                      solo western performances where rhythm is everything.
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
                      Set the stage on fire as you unleash the rhythm and
                      showcase your choreography in this dance battle.
                    </p>
                  </div>
                </div>
                <div className="relative w-[100%] h-auto  mt-[2%]">
                  <img
                    className="w-[100%] h-[100%]"
                    src={BottomRight1}
                    alt=""
                  />
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
                      <br /> elegant styles and witness the roots of dance
                      itself!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] relative bottom-0 p-[5%]">
              <Button_Component
                section={Insignia}
                showRegister={true}
                showRulebook={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DancePage;
