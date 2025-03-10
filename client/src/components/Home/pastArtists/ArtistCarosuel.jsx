import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import ArtistCard from "./card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Amit from "../../../assets/images/AmitTrivedi.webp";
import AmitName from "../../../assets/images/Amit.webp";
import Jublin from "../../../assets/images/Jubin.webp";
import JublinName from "../../../assets/images/JublinName.webp";
import Harrdy from "../../../assets/images/Hardy.webp";
import HarrdyName from "../../../assets/images/HardyName.webp";
import Darshan from "../../../assets/images/Darshan.webp";
import DarshanName from "../../../assets/images/DarshanName.webp";
import Mohit from "../../../assets/images/MohitChauhan.webp";
import MohitName from "../../../assets/images/MohitName.webp";
import Asees from "../../../assets/images/Asees.webp";
import AseesName from "../../../assets/images/AssesName.webp";
import Kullu from "../../../assets/images/Kullu.webp";
import KulluName from "../../../assets/images/KulluName.webp";
import Ritviz from "../../../assets/images/Ritviz.webp";
import RitvizName from "../../../assets/images/RitvizName.webp";
import ManyMore from "../../../assets/images/ManyMore.webp";
import ManyMoreName from "../../../assets/images/ManyMoreName.webp";
// import Neha from "../../../assets/images/Neha.webp";  // Example new artist image
// import Arijit from "../../../assets/images/Arijit.webp";  // Example new artist image
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

function Artist() {
  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setSlidesPerView(1);
    } else if (width < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  const Artists = [
    {
      Name: "Amit Trivedi",
      ArtistImage: Amit,
      NameImage: AmitName,
    },
    {
      Name: "Jublin Nautiyal",
      ArtistImage: Jublin,
      NameImage: JublinName,
    },
    {
      Name: "Harrdy Sandhu",
      ArtistImage: Harrdy,
      NameImage: HarrdyName,
    },
    {
      Name: "Darshan Rawal",
      ArtistImage: Darshan,
      NameImage: DarshanName,
    },
    {
      Name: "Mohit Chauchan",
      ArtistImage: Mohit,
      NameImage: MohitName,
    },
    {
      Name: "Asees Kaur",
      ArtistImage: Asees,
      NameImage: AseesName,
    },
    {
      Name: "Kullu",
      ArtistImage: Kullu,
      NameImage: KulluName,
    },
    {
      Name: "Ritviz",
      ArtistImage: Ritviz,
      NameImage: RitvizName,
    },
    {
      Name: "Many More",
      ArtistImage: ManyMore,
      NameImage: ManyMoreName,
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
    <div className="relative w-full xl:min-h-[620px] md:min-h-[500px] xs:min-h-[400px]">
      <div className="relative w-full flex items-center justify-center px-12">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={40}
          slidesPerView={slidesPerView}
          className="w-[90%] relative py-[3%] [&_.swiper-slide]:flex [&_.swiper-slide]:items-center [&_.swiper-slide]:justify-center"
          ref={swiperRef}
          initialSlide={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {Artists.map((item, index) => (
            <SwiperSlide key={index}>
              <ArtistCard artist={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black p-[2%] rounded-full cursor-pointer hover:scale-110 transition-transform z-10"
          aria-label="Previous Slide"
        >
          <FaRegArrowAltCircleLeft className="md:w-[3vw] md:h-[3vw] min-w-[35px] min-h-[35px]" />
        </button>

        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black p-[2%] rounded-full cursor-pointer hover:scale-110 transition-transform z-10"
          aria-label="Next Slide"
        >
          <FaRegArrowAltCircleRight className="md:w-[3vw] md:h-[3vw] min-w-[35px] min-h-[35px]" />
        </button>
      </div>
    </div>
  );
}

export default Artist;

