import React from "react";

const aws=import.meta.env.VITE_AWS;
const bg = `${aws}/ArtEvent_0.webp`;
const image1 = `${aws}/ArtEvent_1.webp`;
const image2 = `${aws}/ArtEvent_2.webp`;
const image3 = `${aws}/ArtEvent_3.webp`;
const image4 = `${aws}/ArtEvent_4.webp`;
const image5 = `${aws}/ArtEvent_5.webp`;
const title = `${aws}/ArtEvent_title.webp`;
const text1 = `${aws}/textbox1.webp`;
const image7 = `${aws}/Artevent_mobile_1.webp`;
const image8 = `${aws}/Artevent_mobile_2.webp`;
const image9 = `${aws}/Artevent_mobile_3.webp`;
const image10 = `${aws}/Artevent_mobile_4.webp`;
const image11 = `${aws}/Artevent_mobile_5.webp`;
const bigtextbox = `${aws}/bigtextbox.webp`;
const tatoo = `${aws}/tatoo.webp`;
const splash = `${aws}/splash.webp`;
const contrasto = `${aws}/contrasto.webp`;
const universe = `${aws}/universe.webp`;
const eclitc = `${aws}/eclitc.webp`;
const Universe = `${aws}/art_mobile_1.webp`;
const Tatoo = `${aws}/art_mobile_2.webp`;
const Eclitc = `${aws}/art_mobile_3.webp`;
const Contrasto = `${aws}/art_mobile_4.webp`;
const Splash = `${aws}/art_mobile_5.webp`;




import Button_Component from "./Button_component";

function ArtEvents() {
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div
      className="min-h-[70vh] w-full bg-center bg-cover p-3.5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#9333EA",
      }}
    >
      {/* Title Section */}
      <div className="w-full pt-[5.3%] pb-[2.3%] flex justify-center mb-3.5">
        <img
          src={title}
          alt="Art Events"
          className="w-[80%] sm:w-[70%] md:w-[50%] lg:w-[50%]"
        />
      </div>

      {/* Desktop Layout */}
      <div className=" mx-auto hidden md:block">
        {/* Top Row */}
        <div className="flex flex-wrap gap-8 mb-4 justify-center">
          {/* Tattoo Tales */}
          <div className="w-[56.14%]">
            <div className="relative aspect-[693/537]">
              <img
                src={image1}
                alt="Tattoo Tales"
                className="absolute top-0 left-2 w-full h-full object-cover rounded-lg"
              />
              <img
                src={tatoo}
                alt="Tattoo Tales Title"
                className="absolute bottom-[13%] left-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[5%] left-[8%] w-[70%] z-10">
                <img
                  src={text1}
                  alt="Tattoo Tales Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-start justify-center px-3 md:px-4 lg:px-7 py-1">
                  <p className="text-black text-[1.2vw] font-rfabb font-bold leading-tight uppercase">
                    Let your skin become the portrait, become the canvas of
                    someone's imagination!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mystic */}
          <div className="w-[38.5%]">
            <div className="relative aspect-[480/537]">
              <img
                src={image2}
                alt="Mystic"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={eclitc}
                alt="Mystic Title"
                className="absolute bottom-[15%] left-[5%] w-[37%] object-contain z-10"
              />
              <div className="absolute bottom-[5%] left-[8%] w-[80%] z-10">
                <img
                  src={bigtextbox}
                  alt="Mystic Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-start justify-center px-3 md:px-4 lg:px-6 py-1">
                  <p className="text-black text-[1vw] font-rfabb font-bold leading-tight uppercase">
                    May the eccentricity flow, as we bring together a plethora
                    of eras and artistic styles that span the history of the
                    world. This is Eclectic!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row */}
        <div className="flex flex-wrap gap-5 mb-4 justify-center">
          {/* Splash */}
          <div className="w-[45.4%]">
            <div className="relative aspect-[562/354]">
              <img
                src={image3}
                alt="Splash"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={splash}
                alt="Splash Title"
                className="absolute top-[15%] right-[5%] w-[28%] object-contain z-10"
              />
              <div className="absolute top-[5%] right-[5%] w-[75%] z-10">
                <img
                  src={text1}
                  alt="Splash Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-start justify-center px-2 md:px-3 lg:px-6 py-1">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight uppercase">
                    Our face painting competition, let the paint splash and the
                    faces sparkle! Become both the muse and the painting!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contrasto */}
          <div className="w-[49.4%]">
            <div className="relative aspect-[611/353]">
              <img
                src={image4}
                alt="Contrasto"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={contrasto}
                alt="Contrasto Title"
                className="absolute bottom-[20%] right-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[6%] right-[8%] w-[70%] z-10">
                <img
                  src={bigtextbox}
                  alt="Contrasto Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-start justify-center px-2 md:px-3 lg:px-6 py-1">
                  <p className="text-black text-[1.1vw] font-rfabb font-bold leading-tight uppercase">
                    Let the colors collide and creativity run boundless. Engulf
                    yourself in vivid imagery where artists push the boundaries
                    of art itself!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center mb-4">
          {/* The Universe */}
          <div className="w-[43.9%]">
            <div className="relative aspect-[562/354]">
              <img
                src={image5}
                alt="The Universe"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={universe}
                alt="The Universe Title"
                className="absolute bottom-[14%] left-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[5%] left-[8%] w-[70%] z-10">
                <img
                  src={text1}
                  alt="The Universe Description"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-start justify-center px-2 md:px-3 lg:px-6 py-1">
                  <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight uppercase">
                    Artists compete with the only weapon in their arsenal: a
                    single color. A single hue in a hue-niverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        {/* Tattoo Tales */}
        <div className="w-full mb-2">
          <div className="relative aspect-[358/204]">
            <img
              src={image7}
              alt="Tattoo Tales"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={Tatoo}
              alt="Tattoo Tales Title"
              className="absolute bottom-[25%] left-[5%] w-[29%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Tattoo Tales Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0  items-start flex justify-start  px-4 py-1">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight uppercase">
                  Let your skin become the portrait, become the canvas of
                  someone's imagination!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mystic */}
        <div className="w-full mb-2">
          <div className="relative aspect-[358/204]">
            <img
              src={image8}
              alt="Mystic"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={Eclitc}
              alt="Mystic Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Mystic Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-start justify-start px-4 py-1">
                <p className="text-black text-[2.4vw] font-rfabb font-bold leading-tight uppercase">
                  May the eccentricity flow, as we bring together a plethora of
                  eras and artistic styles that span the history of the world.
                  This is Eclectic!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Splash */}
        <div className="w-full mb-2">
          <div className="relative aspect-[358/204]">
            <img
              src={image9}
              alt="Splash"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={Splash}
              alt="Splash Title"
              className="absolute bottom-[24%] left-[5%] w-[25%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Splash Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-start justify-center px-3 py-1">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight uppercase">
                  Our face painting competition, let the paint splash and the
                  faces sparkle! Become both the muse and the painting!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contrasto */}
        <div className="w-full mb-2">
          <div className="relative aspect-[358/204]">
            <img
              src={image10}
              alt="Contrasto"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={Contrasto}
              alt="Contrasto Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Contrasto Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-start justify-start px-3 py-1">
                <p className="text-black text-[2.4vw] font-rfabb font-bold leading-tight uppercase">
                  Let the colors collide and creativity run boundless. Engulf
                  yourself in vivid imagery where artists push the boundaries of
                  art itself!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Universe */}
        <div className="w-full mb-2">
          <div className="relative aspect-[358/204]">
            <img
              src={image11}
              alt="The Universe"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={Universe}
              alt="The Universe Title"
              className="absolute bottom-[25%] left-[5%] w-[25%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="The Universe Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-start justify-start px-3">
                <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight uppercase">
                  A celebration of diversity through art, where different
                  perspectives create a universe of expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="w-[100%] pb-[2%] pt-4">
        <Button_Component showRegister={true} showRulebook={false} />
      </div>
    </div>
  );
}

export default ArtEvents;
