import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import ArtistCard from "./card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Amit from "../../../assets/images/AmitTrivedi.png";
import LeftButton from "../../../assets/images/LeftButton.png";
import RightButton from "../../../assets/images/RightButton.png";

function Artist() {
  const swiperRef = useRef(null);
  const [Slide, setSlide] = useState(5);

  const SlideNum = [
    [768, 1],
    [1024, 2],
    [1280, 3],
    [1536, 4],
  ];

  const setSlideNum = () => {
    const size = window.innerWidth;

    for (let i = 0; i < SlideNum.length; i++) {
      if (size < SlideNum[i][0]) {
        setSlide(SlideNum[i][1]);
        return;
      }
    }
  };

  useEffect(() => {
    setSlideNum();
    const handleResize = () => {
      setSlideNum();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Artists = [
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
    {
      Name: "Amit Trivedi",
      Src: Amit,
    },
  ];

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={Slide}
        onSlideChange={() => console.log("Slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full md:w-3/4 lg:w-3/4 p-5"
        ref={swiperRef}
      >
        {Artists.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArtistCard artist={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={goToPrevSlide}
        className=" hidden absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-white p-4 rounded-full cursor-pointer hover:scale-105 pl-10 sm:block"
        aria-label="Previous Slide"
      >
        <img src={LeftButton} alt="Previous" />
      </button>

      <button
        onClick={goToNextSlide}
        className=" hidden absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl text-white p-4 rounded-full cursor-pointer hover:scale-105 pr-10 sm:block"
        aria-label="Next Slide"
      >
        <img src={RightButton} alt="Next" />
      </button>
    </div>
  );
}

export default Artist;
