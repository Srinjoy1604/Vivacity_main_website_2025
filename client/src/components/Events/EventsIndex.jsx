// import Title from '../../assets/images/EventsIndex.webp'
// import Background from '../../assets/images/EventsIndexBg.webp'
// import {useNavigate} from 'react-router-dom'
// import DanceDiv from '../../assets/images/Dance.webp';
// import MusicDiv from '../../assets/images/Music.webp';
// import DramaDiv from '../../assets/images/Drama.webp';
// import SpeakingArtsDiv from '../../assets/images/Speaking Arts.webp';
// import PhotographyDiv from '../../assets/images/Photography.webp';
// import ArtDiv from '../../assets/images/Art.webp';
// import QuizzingaDiv from '../../assets/images/Quizzing.webp';
// import ManyMore from '../../assets/images/Many More.webp';
// import FashionDiv from '../../assets/images/Fashion.webp';
// import SocialDiv from '../../assets/images/Social.webp';

// const IndexEvents = () => {
//     const navigate = useNavigate();
//   const Events = [
//     { id: 1, picture: DanceDiv, title: 'Dance', aspect: '176/190',route: '/dance' },
//     { id: 2, picture: MusicDiv, title: 'Music', aspect: '174/188',route: '/music' },
//     { id: 3, picture: DramaDiv, title: 'Drama', aspect: '172/194' ,route: '/drama'},
//     { id: 4, picture: SpeakingArtsDiv, title: 'SpeakingArts', aspect: '179/238',route: '/speakingarts' },
//     { id: 5, picture: PhotographyDiv, title: 'Photography', aspect: '191/198',route: '/photography' },
//     { id: 6, picture: ArtDiv, title: 'Arts', aspect: '188/158',route: '/art'  },
//     { id: 7, picture: QuizzingaDiv, title: 'Quizzinga', aspect: '/quizzinga' },
//     { id: 8, picture: FashionDiv, title: 'Fashion', aspect: '174/187',route: '/fashion'  },
//     { id: 9, picture: SocialDiv, title: 'Social', aspect: '183/238',route: '/social'  },
//     { id: 10, picture: ManyMore, title: 'Many More', aspect: '174/225',route: '/manymore'  },
//   ];

//   return (
//     <div
//       className="relative"
//       style={{
//         backgroundImage:`url(${Background})`,
//         width: '100%',
//         aspectRatio: '393 / 1359',
//       }}
//     >
//       {/* Events Title */}
//       <div
//         className="absolute w-[77.6%] h-[5.7%] left-[11.2%] top-[9.6%]"
//         style={{
//           backgroundImage: `url(${Title})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       ></div>

//       {/* Grid Container */}
//       <div
//         className="absolute w-[98%] h-[77.77%] left-[1%] top-[17.59%] grid gap-x-[2.6%] gap-y-[4%] sm:grid-cols-2 "
//         style={{
//           gridTemplateColumns: 'repeat(2, 1fr)',
//           alignItems:'start'
//         }}
//       >
//         {Events.map((item) => (
//           <div
//             key={item.id}
//             className="relative overflow-hidden"
//             onClick={() => navigate(item.route)}
//           >
//             <img
//               src={item.picture}
//               alt={item.title}
//               className="w-full h-full object-contain "
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IndexEvents;

import { useRef } from "react";


import Navbar from "../Navbar";
const aws = import.meta.env.VITE_AWS;

const DanceDiv = `${aws}/Dance.webp`;
const MusicDiv = `${aws}/Music.webp`;
const DramaDiv = `${aws}/Drama.webp`;
const SpeakingArtsDiv = `${aws}/Speaking Arts.webp`;
const PhotographyDiv = `${aws}/Photography.webp`;
const ArtDiv = `${aws}/Art.webp`;
const QuizzingaDiv = `${aws}/Quizzing.webp`;
const ManyMore = `${aws}/Many More.webp`;
const FashionDiv = `${aws}/Fashion.webp`;
const SocialDiv = `${aws}/Social.webp`;

const Title = `${aws}/EventsIndex.webp`;
const Background = `${aws}/EventsIndexBg.webp`;


const IndexEvents = ({ scrollToSection }) => {
  return (
    <div>
      <div className="min-[768px]:hidden block">
        {" "}
        <Navbar />
      </div>

      <div
        className="relative min-[768px]:hidden"
        style={{
          backgroundImage: `url(${Background})`,
          width: "100%",
          aspectRatio: "393 / 1250",
        }}
      >
        <div
          className="absolute w-[77.6%] h-[5.2%] left-[11.2%] top-[6.6%]"
          style={{
            backgroundImage: `url(${Title})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="absolute w-[98%] h-[85.77%] left-[1%] top-[12.0%] grid gap-x-[2.6%] gap-y-[4%] sm:grid-cols-2"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            alignItems: "start",
          }}
        >
          <div
            className="relative overflow-hidden top-[10%]"
            onClick={() => scrollToSection("dance")}
          >
            <img
              src={DanceDiv}
              alt="Dance"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[16%]"
            onClick={() => scrollToSection("music")}
          >
            <img
              src={MusicDiv}
              alt="Music"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[-6%]"
            onClick={() => scrollToSection("drama")}
          >
            <img
              src={DramaDiv}
              alt="Drama"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[6%]"
            onClick={() => scrollToSection("speakingArts")}
          >
            <img
              src={SpeakingArtsDiv}
              alt="Speaking Arts"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[-13%]"
            onClick={() => scrollToSection("photography")}
          >
            <img
              src={PhotographyDiv}
              alt="Photography"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[13%]"
            onClick={() => scrollToSection("art")}
          >
            <img
              src={ArtDiv}
              alt="Arts"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[-26%]"
            onClick={() => scrollToSection("quizzinga")}
          >
            <img
              src={QuizzingaDiv}
              alt="Quizzinga"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden top-[-19%]"
            onClick={() => scrollToSection("fashion")}
          >
            <img
              src={FashionDiv}
              alt="Fashion"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden bottom-[40%]"
            onClick={() => scrollToSection("social")}
          >
            <img
              src={SocialDiv}
              alt="Social"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="relative overflow-hidden bottom-[23%]"
            onClick={() => scrollToSection("manymore")}
          >
            <img
              src={ManyMore}
              alt="Many More"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexEvents;
