import React from "react";

import Button_Component from "./Button_component";
import Footer from "../Footer";
import Footer1 from "../Mobile_footer";

const aws = import.meta.env.VITE_AWS;

const Background = `${aws}/ExcitingBg.webp`;
const title = `${aws}/Title3.webp`;
const promNight = `${aws}/Prom Night.webp`;
const silentDisco = `${aws}/Silent Disco.webp`;
const jammingNight = `${aws}/Jamming Night.webp`;
const stageSpectrum = `${aws}/Stage Spectrum.webp`;
const promNight_text = `${aws}/TopLeft.webp`;
const silentDisco_text = `${aws}/TopRightText.webp`;
const stageSpectrum_text = `${aws}/BottomLeftt.webp`;
const jammingNight_text = `${aws}/BottomRightt.webp`;
const text1 = `${aws}/textbox1.webp`;
const bigtextbox = `${aws}/bigtextbox.webp`;
const EventsB = `${aws}/EventBrochure.pdf`;
const PromNight_mobile = `${aws}/Prom Night-2.webp`;
const SilentDisco_mobile = `${aws}/Silent Disco-2.webp`;
const JammingNight_mobile = `${aws}/Image Box.webp`;
const StageSpectrum_mobile = `${aws}/Stage Spectrum-2.webp`;
const PromNight_text_mobile = `${aws}/Event Name-4.webp`;
const SilentDisco_text_mobile = `${aws}/Text-2.webp`;
const StageSpectrum_text_mobile = `${aws}/Text-3.webp`;
const JammingNight_text_mobile = `${aws}/Text-4.webp`;


function Exciting() {
  return (
    <div>
      <div
        className="w-full bg-center px-3.5   pt-4 md:pb-16  bg-cover "
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {/* Title Section */}
        <div className="w-full pt-[4.7%] pb-[4%] flex justify-center mb-1">
          <img
            src={title}
            alt="Exciting Pursuits"
            className="w-[97%]  md:w-[63%] md:min-w-[600px]  sm:min-w-[500px]  object-contain"
          />
        </div>

        {/* Desktop Layout */}
        <div className="w-full mx-auto  hidden md:block">
          {/* Top Row */}
          <div className="flex flex-wrap gap-5 mb-4 justify-center">
            {/* Prom Night */}
            <div className="w-[52%]">
              <div className="relative" style={{ aspectRatio: "632/354" }}>
                <img
                  src={promNight}
                  alt="Prom Night"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={promNight_text}
                  alt="Prom Night Title"
                  className="absolute bottom-[22%] left-[5%] w-[30%] object-contain z-10"
                />
                <div className="absolute bottom-[6%] left-[8%] w-[70%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Prom Night Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-start px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                      STEP ON TO YOUR OWN DANCE FLOOR AND SWAY AS YOU SWAY TO
                      MUSIC WITH YOUR SPECIAL SOMEONE AT OUR MAGICAL PROM NIGHT!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Silent Disco */}
            <div className="w-[44.5%]">
              <div className="relative" style={{ aspectRatio: "541/353" }}>
                <img
                  src={silentDisco}
                  alt="Silent Disco"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={silentDisco_text}
                  alt="Silent Disco Title"
                  className="absolute bottom-[18%] left-[5%] w-[35%] object-contain z-10"
                />
                <div className="absolute bottom-[5%] left-[8%] w-[70%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Silent Disco Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-start px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                      LET THE BEATS FLOW DIRECTLY INTO YOUR YEARS AND VIBE TO
                      THE SYNCHRONOUSLY ASYNCHRONOUS EXPERIENCE OF A SILENT
                      DISCO!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-wrap gap-5 justify-center">
            {/* Stage Spectrum */}
            <div className="w-[46.3%]">
              <div className="relative" style={{ aspectRatio: "562/354" }}>
                <img
                  src={stageSpectrum}
                  alt="Stage Spectrum"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={stageSpectrum_text}
                  alt="Stage Spectrum Title"
                  className="absolute bottom-[15%] left-[4%] w-[35%] object-contain z-10"
                />
                <div className="absolute bottom-[6%] left-[7%] w-[70%] z-10">
                  <img
                    src={text1}
                    alt="Stage Spectrum Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-start px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                      A KALEIDOSCOPE OF INFINITE POSSIBILITIES SHOW THE WORLD
                      WHAT YOU CAN DO AT OUR OPEN MIC!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jamming Night */}
            <div className="w-[50%]">
              <div className="relative" style={{ aspectRatio: "612/354" }}>
                <img
                  src={jammingNight}
                  alt="Jamming Night"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={jammingNight_text}
                  alt="Jamming Night Title"
                  className="absolute bottom-[20%] left-[4%] w-[35%] object-contain z-10"
                />
                <div className="absolute bottom-[5%] left-[7%] w-[70%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Jamming Night Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-start px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-bold leading-tight">
                      A NIGHT OF MUSIC AND CAMARADERIE! JOIN US, AS WE SING OUR
                      HEARTS OUT, MAKE NEW FRIENDS, HAVE FUN, AND CREATE
                      MEMORIES THAT WILL REMAIN ETCHED IN OUR HEARTS!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden pb-6 w-full">
          {/* Prom Night Mobile */}
          <div className="w-full mb-2">
            <div className="relative" style={{ aspectRatio: "358/204" }}>
              <img
                src={PromNight_mobile}
                alt="Prom Night"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={PromNight_text_mobile}
                alt="Prom Night Title"
                className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
                <img
                  src={bigtextbox}
                  alt="Prom Night Description Box"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-start px-2">
                  <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight">
                    STEP ON TO YOUR OWN DANCE FLOOR AND SWAY AS YOU SWAY TO
                    MUSIC WITH YOUR SPECIAL SOMEONE AT OUR MAGICAL PROM NIGHT!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Silent Disco Mobile */}
          <div className="w-full mb-2">
            <div className="relative" style={{ aspectRatio: "358/204" }}>
              <img
                src={SilentDisco_mobile}
                alt="Silent Disco"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={SilentDisco_text_mobile}
                alt="Silent Disco Title"
                className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
              />
              <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
                <img
                  src={bigtextbox}
                  alt="Silent Disco Description Box"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-start px-2">
                  <p className="text-black text-[2.6vw] font-rfabb font-bold leading-tight">
                    LET THE BEATS FLOW DIRECTLY INTO YOUR YEARS AND VIBE TO THE
                    SYNCHRONOUSLY ASYNCHRONOUS EXPERIENCE OF A SILENT DISCO!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stage Spectrum Mobile */}
          <div className="w-full mb-2">
            <div className="relative" style={{ aspectRatio: "358/204" }}>
              <img
                src={StageSpectrum_mobile}
                alt="Stage Spectrum"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={StageSpectrum_text_mobile}
                alt="Stage Spectrum Title"
                className="absolute bottom-[19%] left-[3%] w-[37%] object-contain z-10"
              />
              <div className="absolute bottom-[4%] left-[6%] w-[88%] z-10">
                <img
                  src={text1}
                  alt="Stage Spectrum Description Box"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-start px-2">
                  <p className="text-black text-[2.5vw] font-rfabb font-bold leading-tight">
                    A KALEIDOSCOPE OF INFINITE POSSIBILITIES SHOW THE WORLD WHAT
                    YOU CAN DO AT OUR OPEN MIC!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jamming Night Mobile */}
          <div className="w-full mb-0">
            <div className="relative" style={{ aspectRatio: "358/204" }}>
              <img
                src={JammingNight_mobile}
                alt="Jamming Night"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
              <img
                src={JammingNight_text_mobile}
                alt="Jamming Night Title"
                className="absolute bottom-[19%] left-[3%] w-[35%] object-contain z-10"
              />
              <div className="absolute bottom-[4%] left-[6%] w-[90%] z-10">
                <img
                  src={text1}
                  alt="Jamming Night Description Box"
                  className="w-full object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-start px-2">
                  <p className="text-black text-[1.9vw]  font-rfabb font-bold leading-tight">
                    A NIGHT OF MUSIC AND CAMARADERIE! JOIN US, AS WE SING OUR
                    HEARTS OUT, MAKE NEW FRIENDS, HAVE FUN, AND CREATE MEMORIES
                    THAT WILL REMAIN ETCHED IN OUR HEARTS!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]  pb-6">
          <Button_Component
            section={EventsB}
            showRegister={true}
            showRulebook={true}
          />
        </div>
      </div>
      {/* <div className="block sm:hidden">
        <Footer1 />
      </div> */}
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}

export default Exciting;
