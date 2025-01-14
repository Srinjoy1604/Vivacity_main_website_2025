import React from "react";
import bg from "../../assets/images/photography_event_0.png";
import image1 from "../../assets/images/photography_event_1.png";
import image2 from "../../assets/images/photography_event_2.png";
import image3 from "../../assets/images/photography_event_3.png";
import image4 from "../../assets/images/photography_event_4.png";
import image5 from "../../assets/images/photography_event_5.png";
import image6 from "../../assets/images/photography_event_6.png";
import title from "../../assets/images/photography_title.png";

import text1 from "../../assets/images/textbox1.png";
import imageHunt from "../../assets/images/imageHunt.png";
import kalakriti from "../../assets/images/kalakriti.png";
import flimmakingcompetiton from "../../assets/images/flimmakingcompetiton.png";
import pixels from "../../assets/images/pixels.png";
import photoBooth from "../../assets/images/photoBooth.png";
import Perspective from "../../assets/images/Perspective.png";
import bigtextbox from "../../assets/images/bigtextbox.png";

import image7 from "../../assets/images/photographyevent_mobile_1.png";
import image8 from "../../assets/images/photographyevent_mobile_2.png";
import image9 from "../../assets/images/photographyevent_mobile_3.png";
import image10 from "../../assets/images/photographyevent_mobile_4.png";
import image11 from "../../assets/images/photographyevent_mobile_5.png";
import image12 from "../../assets/images/photographyevent_mobile_6.png";

import pixel from "../../assets/images/Event Name_1.png";
import photo from "../../assets/images/Event Name_2.png";
import flimmaking from "../../assets/images/Event Name_3.png";
import hunt from "../../assets/images/Event Name_4.png";
import kala from "../../assets/images/Event Name_5.png";
import perspective from "../../assets/images/Event Name_6.png";
import Button_component from "./Button_component";

function PhotographyEvents() {
  return (
    <div
      className="min-h-[70vh] w-full bg-center bg-cover p-4  "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Title Section */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={title}
          alt="Photography Events"
          className="w-[60%] max-w-5xl"
        />
      </div>

      {/* Desktop Layout */}
      <div>
        <div className="max-w-[1880px] mx-auto hidden md:block ">
          {/* Top Row */}
          <div className="flex flex-wrap gap-7 mb-4">
            {/* Image Hunt */}
            <div className="w-[54.14%]">
              <div className="relative aspect-[693/537]">
                <img
                  src={image1}
                  alt="Image Hunt"
                  className="absolute top-0 left-2 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={imageHunt}
                  alt="Image Hunt Title"
                  className="absolute bottom-[12%] left-[5%] w-[28%] object-contain z-10"
                />
                <div className="absolute bottom-[4%] left-[7%] w-[70%] z-10">
                  <img
                    src={text1}
                    alt="Image Hunt Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[1vw] font-rfabb font-medium leading-tight">
                      Solve clues, recreate frames, and immortalize moments in
                      this campus-wide photography adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Photobooth */}
            <div className="w-[37.5%]">
              <div className="relative aspect-[480/537]">
                <img
                  src={image2}
                  alt="Photobooth"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={photoBooth}
                  alt="Photobooth Title"
                  className="absolute bottom-[13%] left-[5%] w-[39%] object-contain z-10"
                />
                <div className="absolute bottom-[3%] left-[8%] w-[89%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Photobooth Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black  text-[0.9vw] font-rfabb font-medium leading-tight">
                      A PHOTOBOOTH TO MAKE THESE DAYS MORE MEMORABLE. CAUTION: THE
                      NOSTALGIA INDUCED BY THESE PICTURES IS BOUND TO BE PAINFUL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-wrap gap-7">
            {/* Film Making */}
            <div className="w-[43.9%]">
              <div className="relative aspect-[562/354]">
                <img
                  src={image3}
                  alt="Film Making Competition"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={flimmakingcompetiton}
                  alt="Film Making Title"
                  className="absolute top-[15%] right-[5%] w-[50%] object-contain z-10"
                />
                <div className="absolute top-[5%] right-[5%] w-[75%] z-10">
                  <img
                    src={text1}
                    alt="Film Making Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb  font-medium leading-tight">
                      FLIM MAKING COMPETITION: SRIPT ,SHOOT, AND EDIT YOUR WAY TO
                      MAKE YOUR STORY THE MOST MEMORABLE OF ALL!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Perspective */}
            <div className="w-[47.7%]">
              <div className="relative aspect-[611/353]">
                <img
                  src={image4}
                  alt="Perspective"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={Perspective}
                  alt="Perspective Title"
                  className="absolute bottom-[20%] right-[5%] w-[30%] object-contain z-10"
                />
                <div className="absolute bottom-[5%] right-[8%] w-[70%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Perspective Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-medium leading-tight">
                      A SUMMIT OF POPULAR CONTENT CREATORS THAT PROVIDE US WITH
                      OUR FAVOURITE CONTENT. THAT ,AND A PLETHORA OF DIFFERENT
                      PERSPECTIVES IN PERSPECTIVE!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Kalakriti */}
            <div className="w-[49.3%]">
              <div className="relative aspect-[631/354]">
                <img
                  src={image5}
                  alt="Kalakriti"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={kalakriti}
                  alt="Kalakriti Title"
                  className="absolute bottom-[15%] left-[5%] w-[30%] object-contain z-10"
                />
                <div className="absolute bottom-[6%] left-[8%] w-[70%] z-10">
                  <img
                    src={text1}
                    alt="Kalakriti Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black text-[0.9vw] font-rfabb font-medium leading-tight">
                      THE BEST CLICKS FROM THE BEST! A SHOWCASE OF IMAGINATION BY
                      OUR PHOTOGRAPHY CLUB: IMAGINATION.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pixels */}
            <div className="w-[42.3%]">
              <div className="relative aspect-[542/354]">
                <img
                  src={image6}
                  alt="Pixels"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                <img
                  src={pixels}
                  alt="Pixels Title"
                  className="absolute bottom-[18%] left-[5%] w-[25%] object-contain z-10"
                />
                <div className="absolute bottom-[5%] left-[8%] w-[70%] z-10">
                  <img
                    src={bigtextbox}
                    alt="Pixels Description"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6 lg:px-8">
                    <p className="text-black font-rfabb text-[0.9vw]  font-medium leading-tight">
                      PRE-DEFINED THEMES AND YOUR LENSES AGAINST THE BEAUTIFUL
                      CANVAS OF THE WORLD. LET YOUR CREATIVITY SHOW IN THIS BATTLE
                      OF PICTURES!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile design */}
      <div className="md:hidden w-full">
        {/* Image Hunt */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image7}
              alt="Image Hunt"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={hunt}
              alt="Image Hunt Title"
              className="absolute bottom-[25%] left-[5%] w-[29%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Image Hunt Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.6vw] font-rfabb font-medium leading-tight">
                  Solve clues, recreate frames, and immortalize moments in this
                  campus-wide photography adventure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photobooth */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image8}
              alt="Photobooth"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={photo}
              alt="Photobooth Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Photobooth Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black font-rfabb text-[2.5vw] font-medium leading-tight">
                  A PHOTOBOOTH TO MAKE THESE DAYS MORE MEMORABLE. CAUTION: THE
                  NOSTALGIA INDUCED BY THESE PICTURES IS BOUND TO BE PAINFUL.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Film Making Competition */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image9}
              alt="Film Making Competition"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={flimmaking}
              alt="Film Making Competition Title"
              className="absolute bottom-[21%] left-[5%] w-[50%] object-contain z-10"
            />
            <div className="absolute bottom-[6%] left-[8%] w-[85%] z-10">
              <img
                src={text1}
                alt="Film Making Competition Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.2vw] font-rfabb font-medium leading-tight">
                  FLIM MAKING COMPETITION: SRIPT ,SHOOT, AND EDIT YOUR WAY TO
                  MAKE YOUR STORY THE MOST MEMORABLE OF ALL!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perspective */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image10}
              alt="Perspective"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={perspective}
              alt="Perspective Title"
              className="absolute bottom-[25%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Perspective Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.5vw] font-rfabb font-medium leading-tight">
                  A SUMMIT OF POPULAR CONTENT CREATORS THAT PROVIDE US WITH OUR
                  FAVOURITE CONTENT. THAT ,AND A PLETHORA OF DIFFERENT
                  PERSPECTIVES IN PERSPECTIVE!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kalakriti */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image11}
              alt="Kalakriti"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={kala}
              alt="Kalakriti Title"
              className="absolute bottom-[20%] left-[5%] w-[30%] object-contain z-10"
            />
            <div className="absolute bottom-[5%] left-[8%] w-[85%] z-10">
              <img
                src={text1}
                alt="Kalakriti Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.4vw] font-rfabb font-medium leading-tight">
                  THE BEST CLICKS FROM THE BEST! A SHOWCASE OF IMAGINATION BY
                  OUR PHOTOGRAPHY CLUB: IMAGINATION.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pixels */}
        <div className="w-full mb-4">
          <div className="relative aspect-[358/204]">
            <img
              src={image12}
              alt="Pixels"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
            <img
              src={pixel}
              alt="Pixels Title"
              className="absolute bottom-[25%] left-[5%] w-[25%] object-contain z-10"
            />
            <div className="absolute bottom-[4%] left-[8%] w-[85%] z-10">
              <img
                src={bigtextbox}
                alt="Pixels Description Box"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <p className="text-black text-[2.6vw] font-rfabb font-medium leading-tight">
                  PRE-DEFINED THEMES AND YOUR LENSES AGAINST THE BEAUTIFUL
                  CANVAS OF THE WORLD. LET YOUR CREATIVITY SHOW IN THIS BATTLE
                  OF PICTURES!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons Section */}
      <Button_component showRulebook={true} showRegister={true} />
    </div>
  );
}

export default PhotographyEvents;
