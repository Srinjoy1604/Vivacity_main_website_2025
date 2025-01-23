
import Button_Component from "./Button_component";
const aws = import.meta.env.VITE_AWS;

const Background = `${aws}/Danceevents2bg.webp`;
const Title2 = `${aws}/Title2.webp`;
const SpeakingTitle = `${aws}/SpeakingArtsTitle.webp`;
const subtitle2 = `${aws}/Subheading.webp`;
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
const Title1 = `${aws}/Name-4.webp`;
const subtitle1 = `${aws}/Cash Prize.webp`;
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

function SpeakingArts() {
  return (
    <>
      <div className="md:block hidden">
        <div
          className="min-h-screen bg-cover bg-center flex flex-col items-center "
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            aspectRatio: "1280/1648",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "51.89%",
              aspectRatio: "653/140",
              left: "22.63%",
              top: "5%",
              backgroundImage: `url(${SpeakingTitle})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          >
            {/* SubTitle*/}
          </div>
          <div
            className=" items-center"
            style={{
              position: "absolute",
              height: "67.8%",
              width: "93.82%",
              top: "17.62%",
              left: "3.12%",
            }}
          >
            {/* Row1 left */}
            <div
              style={{
                position: "absolute",
                width: "52.46%",
                aspectRatio: "632 /354",
                top: "0%",
                backgroundImage: `url(${Topleftdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
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

            {/* Row1 right */}
            <div
              style={{
                position: "absolute",
                width: "45.46%",
                aspectRatio: "541 /353",
                top: "0%",
                left: "54.95%",
                backgroundImage: `url(${TopRightdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {/* Title topleft */}
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

            {/* Row2 left */}
            <div
              style={{
                position: "absolute",
                width: "47.46%",
                aspectRatio: "562 /354",
                top: "34.16%",
                backgroundImage: `url(${Middleleftdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {/* Title topleft */}
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
            {/* Row2 right */}
            <div
              style={{
                position: "absolute",
                width: "50.96%",
                aspectRatio: "612 /353",
                top: "34.3%",
                left: "49.95%",
                backgroundImage: `url(${Middlerightdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
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
            {/* Row3 left */}
            <div
              style={{
                position: "absolute",
                width: "52.46%",
                aspectRatio: "632 /354",
                top: "68.36%",
                backgroundImage: `url(${Bottomleftdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
              {/* Title topleft */}
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

            {/* Row3 right */}
            <div
              style={{
                position: "absolute",
                width: "45.96%",
                aspectRatio: "542 /353",
                top: "68.2%",
                left: "54.95%",
                backgroundImage: `url(${BottomRightdiv})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                zIndex: "1",
              }}
            >
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
          <div className="w-[100%] absolute bottom-0 pb-[7%]">
            <Button_Component showRegister={true} showRulebook={true} />
          </div>
        </div>
      </div>

      <div className="md:hidden block">
        <div
          className="min-h-screen bg-cover bg-center flex flex-col items-center"
          style={{
            backgroundImage: `url(${Background1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            aspectRatio: "393/ 1617",
            position: "relative",
          }}
        >
          {/* Title */}
          <div
            style={{
              position: "absolute",
              width: "77.71%",
              aspectRatio: "305/ 68.68",
              left: "11.23%",
              top: "2.35%",
              backgroundImage: `url(${SpeakingTitle})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              zIndex: "1",
            }}
          ></div>
          {/* SubTitle */}

          {/*FIRST*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${Topleft1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "9%",
            }}
          >
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

          {/*SECOND*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${Topright1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "23.2%",
            }}
          >
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

          {/*THIRD*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${MiddleLeft1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "37.4%",
            }}
          >
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

          {/*FOURTH*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${MiddleRight1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "51.8%",
            }}
          >
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

          {/*FIFTH*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${BottomLeft1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "66%",
            }}
          >
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

          {/*SIXTH*/}
          <div
            className=" "
            style={{
              position: "absolute",
              backgroundImage: `url(${BottomRight1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "93.45%",
              aspectRatio: "358.07/204.46",
              top: "80.24%",
            }}
          >
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
          <div className="w-[100%] absolute bottom-0 p-[5%]">
            <Button_Component showRegister={true} showRulebook={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakingArts;
