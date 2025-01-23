import Button_Component from "./Button_component";
const aws = import.meta.env.VITE_AWS;

const Background = `${aws}/Danceevents2bg.webp`;
const Topleft = `${aws}/Group 96-2.webp`;
const Topright = `${aws}/Subtext.webp`;
const MiddleLeft = `${aws}/Subtext-2.webp`;
const MiddleRight = `${aws}/Subtext-3.webp`;
const BottomLeft = `${aws}/Subtext-4.webp`;
const BottomRight = `${aws}/Subtext-5.webp`;
const Topleftdiv = `${aws}/Duologue.webp`;
const TopRightdiv = `${aws}/Family Feud.webp`;
const Middleleftdiv = `${aws}/Spotlight.webp`;
const Middlerightdiv = `${aws}/Afreen.webp`;
const Bottomleftdiv = `${aws}/Potpourii.webp`;
const BottomRightdiv = `${aws}/Dare to Spell.webp`;
const Duologue = `${aws}/duologuee.webp`;
const FamilyFeud = `${aws}/FamilyFeud.webp`;
const Spotlight = `${aws}/Spotlightt.webp`;
const Afreen = `${aws}/Afreenn.webp`;
const Potpouri = `${aws}/Potpouri.webp`;
const DareToSpell = `${aws}/DareToSpell.webp`;
const Background1 = `${aws}/iPhone 14 & 15 Pro - 3.webp`;
const Topleft1 = `${aws}/Duologue-2.webp`;
const Topright1 = `${aws}/Family Feud-2.webp`;
const MiddleLeft1 = `${aws}/Spotlight-2.webp`;
const MiddleRight1 = `${aws}/Afreen-2.webp`;
const BottomLeft1 = `${aws}/Potpourii-2.webp`;
const BottomRight1 = `${aws}/Dare to Spell-2.webp`;
const Topleftdiv1 = `${aws}/Subtext-19.webp`;
const TopRightdiv1 = `${aws}/Subtext-20.webp`;
const Middleleftdiv1 = `${aws}/Subtext-21.webp`;
const Middlerightdiv1 = `${aws}/Cash Prize-2.webp`;
const Bottomleftdiv1 = `${aws}/Subtext-22.webp`;
const BottomRightdiv1 = `${aws}/Subtext-23.webp`;
const Duologue1 = `${aws}/Event Name-7.webp`;
const FamilyFeud1 = `${aws}/Event Name-8.webp`;
const Spotlight1 = `${aws}/Event Name-9.webp`;
const Afreen1 = `${aws}/Event Name-10.webp`;
const Potpouri1 = `${aws}/Event Name-11.webp`;
const DareToSpell1 = `${aws}/Event Name-12.webp`;
const SpeakingTitle = `${aws}/SpeakingArtsTitle.webp`;
const MediaCell = `${aws}/MediaCell.pdf`;

function Speaking() {
  return (
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
          <div className="flex flex-col w-[100%] items-center mt-[5%]">
            {/*Title*/}
            <div
              style={{
                position: "relative",
                width: "48.71%",
                aspectRatio: "621 / 178",
                backgroundImage: `url(${SpeakingTitle})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            ></div>
            {/*Content*/}
            <div
              className="flex flex-col items-center mt-[3%] w-[100%]"
              style={{
                backgroundSize: "cover",
                zIndex: "1",
              }}
            >
              {/*Row 1*/}
              <div className="flex flex-row w-[100%] mt-[2%]  justify-between px-[3.1%]">
                {/* row 1 left */}
                <div className="w-[52.57%] h-auto relative">
                  <img
                    src={Topleftdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                  <img
                    src={TopRightdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                      The classic Steve Harvey show! Come and be a witness to
                      the recreation of one of the most popular reality shows of
                      all time, at Family Feud: the game show!
                    </p>
                  </div>
                </div>
              </div>
              {/*Row 2*/}
              <div className="flex flex-row w-[100%] mt-[2%]  justify-between px-[3.1%]">
                {/* row 2  left*/}
                <div className="w-[46.75%] h-auto relative">
                  <img
                    src={Middleleftdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                      Poetry, storytelling, music, or stand-ups! A little
                      something for everyone as you step into the spotlight in
                      Spotlight!
                    </p>
                  </div>
                </div>
                {/* row 2  right*/}
                <div className="w-[50.57%] h-auto relative">
                  <img
                    src={Middlerightdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                      Explore the allure of the classical arts! Let light
                      descend onto the stage as you enamor yourself in elegant
                      styles and witness the roots of dance itself!
                    </p>
                  </div>
                </div>
              </div>
              {/*Row 3*/}
              <div className="flex flex-row w-[100%] mt-[2%] justify-between px-[3.1%]">
                {/* row 3  left*/}
                <div className="w-[52.57%] h-auto relative">
                  <img
                    src={Bottomleftdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                      Let the puns flow and laughter rumble! A battle of puns,
                      and a prize reserved only for the emperor!
                    </p>
                  </div>
                </div>
                {/* row 3  right*/}
                <div className="w-[45.57%] h-auto relative">
                  <img
                    src={BottomRightdiv}
                    alt="streetdance"
                    className="w-[100%] h-[100%]"
                  />
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
                      spellings. Arm yourself with vocabulary and fight your way
                      to the top. Do you dare?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] p-[2%] mb-[3%]">
              <Button_Component
                section={MediaCell}
                showRegister={true}
                showRulebook={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <div
          className="bg-cover bg-center flex flex-col items-center pt-[8%] "
          style={{
            backgroundImage: `url("https://d2tfnz5m7k1weq.cloudfront.net/iPhone 14 & 15 Pro - 3.webp")`,
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
                backgroundImage: `url(${SpeakingTitle})`,
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
                    recreation of one of the most popular reality shows of all
                    time, at Family Feud: the game show!
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
                    Explore the allure of the classical arts! Let light descend
                    onto the stage as you enamor yourself in elegant styles and
                    witness the roots of dance itself!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-[5%]">
            <Button_Component
              section={MediaCell}
              showRegister={true}
              showRulebook={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speaking;
