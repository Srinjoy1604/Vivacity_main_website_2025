import Background from "../../assets/images/MacBook Air - 1.webp";
import Title2 from "../../assets/images/DanceTitle2.webp";

import Topleft from "../../assets/images/TopLeftimg.webp";
import Topright from "../../assets/images/TopRightimg.webp";
import MiddleLeft from "../../assets/images/MiddleLeftimg.webp";
import MiddleRight from "../../assets/images/MiddleRightimg.webp";
import BottomLeft from "../../assets/images/BottomLeftimg.webp";
import BottomRight from "../../assets/images/BottomRightimg.webp";
import Topleftdiv from "../../assets/images/Topleftdiv.webp";
import TopRightdiv from "../../assets/images/TopRight.webp";
import Streetdance from "../../assets/images/Streetdance.webp";
import TalNarang from "../../assets/images/TalTarang.webp";
import Razzmataaz from "../../assets/images/Razzmaatazz.webp";
import Middleleftdiv from "../../assets/images/MiddleLeftdiv.webp";
import Middlerightdiv from "../../assets/images/MiddleRightDiv.webp";
import Bottomleftdiv from "../../assets/images/BottomleftDiv.webp";
import BottomRightdiv from "../../assets/images/Bottomrightdiv.webp";
import PumpItUp from "../../assets/images/PumpItUp.webp";
import Letstangle from "../../assets/images/LetsTangle.webp";
import mudra from "../../assets/images/Mudra.webp";
import Button_Component from "./Button_component";
function Dance() {
  return (
    <div>
      <div
        className="bg-cover bg-center flex flex-col items-center pt-[12%]  max-[802px]:pt-[10rem] "
        style={{
          backgroundImage: `url(${Background})`,
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
                    Let the streets bear witness to electrifying performances
                    and exhilarating beats. Let your spirits soar with street
                    dance!
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
                    aspectRatio: "209/ 54.74",
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
                    Duet with a partner as your symphonies collide against each
                    other in this competition of melodies.
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
                    Set the stage on fire as you unleash the rhythm and showcase
                    your choreography in this dance battle.
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
                    <br /> yourself in solo western performances where rhythm
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
                    Explore the allure of the classical arts! Let light descend
                    onto the stage as you enamor yourself in elegant styles and
                    witness the roots of dance itself!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}

          <div className="w-[100%] p-[2%] mb-[3%]">
            <Button_Component showRegister={true} showRulebook={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dance;
