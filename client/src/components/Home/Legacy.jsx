// import React, { useState } from "react";
// import Legacybackground from "../../assets/images/LegacyBg.png";
// import TextBg from "../../assets/images/TitleText.png";
// //import BottomImage from "../../assets/images/LegacyBottom.png"; 

// //Video player comp-
// const VideoGrid = () => {
//   const [activeVideo, setActiveVideo] = useState(null);
//   const videos = [
//     {
//       id: 1,
//       title: "A Whimsical Odyssey",
//       thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
//       videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
//     },
//     {
//       id: 2,
//       title: "Wabi-Sabi",
//       thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
//       videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
//     },
//     {
//       id: 3,
//       title: "Chromatic Chimera",
//       thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
//       videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
//     },
//     {
//       id: 4,
//       title: "Sinister Spectacle",
//       thumbnail: `https://img.youtube.com/vi/E64TKUqgi_4/hqdefault.jpg`,
//       videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
//     },
//   ];

//   const handlePlayVideo = (videoId) => {
//     setActiveVideo(videoId);
//   };

//   return (
//     <div className="grid grid-cols-2 gap-8  w-full max-w-4xl mx-auto"
//     style={{
//         aspectRatio:"1006/600"
//     }}>
//       {videos.map((video) => (
//         <div
//         key={video.id}
//         className="relative bg-white border-4 border-black  overflow-hidden transition-transform transform hover:scale-105 hover:shadow-3xl hover:opacity-90  rounded-lg"
//         style={{
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.1)", 
//         gap:"2rem",
            
//         }}
//         >
       
//           {activeVideo === video.id ? (
//             <iframe
//               className="w-full h-full"
//               src={`${video.videoUrl}?autoplay=1`}
//               allow="autoplay; encrypted-media"
//               title={video.title}
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <img
//               className="w-full h-full object-cover
//               " 
//               src={video.thumbnail}
//               alt={video.title}
//             />
//           )}

         
//           <button
//             className="absolute bottom-4 left-4 px-3 py-1 bg-yellow-400 border-2 border-black text-black font-bold uppercase transform transition-transform hover:scale-105"
//             onClick={() => handlePlayVideo(video.id)}
//           >
//             {video.title}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };




// const Legacy = () => {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex flex-col items-center px-4 py-8"
//       style={{
//         backgroundImage: `url(${Legacybackground})`,
//         backgroundSize: "cover",
//         maxWidth: "128rem",
//         margin: "0 auto",
//         aspectRatio: "1280 / 868",
//       }}
//     >
      
//       <div
//         className="w-full max-w-4xl text-center bg-cover bg-center py-8 mb-12 rounded-lg"
//         style={{
//           backgroundImage: `url(${TextBg})`,
//           maxWidth: "32.81rem",
//           margin: "2rem auto 4rem", 
//           aspectRatio: "525 / 94",
//         }}
//       >
//         <h1 className="text-4xl font-bold text-white">The Legacy</h1>
//       </div>
//       <VideoGrid />

//       {/* Bottom Image Section */}
//       {/* <div
//         className="w-full mt-12"
//         style={{
//           backgroundImage: `url(${BottomImage})`,
//           height: "89px",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           width:"2032px"
//         }}
//       ></div> */}
//     </div>
//   );
// };

// export default Legacy;
import React from "react";

function Legacy() {

  return (
    <div>
        <h1>The legacy</h1>
    </div>
  )
}

export default Legacy;