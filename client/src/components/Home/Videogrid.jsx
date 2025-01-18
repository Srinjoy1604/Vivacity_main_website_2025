import React, { useState } from "react";
import thumbnail1 from "../../assets/images/Top_left.png"; 
import thumbnail2 from "../../assets/images/Top_right.png"; 
import thumbnail3 from "../../assets/images/Bottom_left.png"; 
import thumbnail4 from "../../assets/images/Bottom_right.png"; 
import button1 from "../../assets/images/Btn_front1.png"; 
import button2 from "../../assets/images/Btn_front2.png"; 
const VideoGrid = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "A Whimsical Odyssey",
      thumbnail: thumbnail1,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonPosition: "top-left",
    },
    {
      id: 2,
      title: "Wabi-Sabi",
      thumbnail: thumbnail2,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button2,
      buttonPosition: "top-right",
    },
    {
      id: 3,
      title: "Chromatic Chimera",
      thumbnail: thumbnail3,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonPosition: "bottom-left",
    },
    {
      id: 4,
      title: "Sinister Spectacle",
      thumbnail: thumbnail4,
      videoUrl: "https://www.youtube.com/embed/E64TKUqgi_4",
      buttonImage: button1,
      buttonPosition: "bottom-right",
    },
  ];

  const handlePlayVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const buttonPositionStyles = {
    "bottom-left": "absolute bottom-[4%] right-[5%]",
    "bottom-right": "absolute bottom-[4%] right-[5%]",
    "top-left": "absolute bottom-[4%] left-[4.5%]",
    "top-right": "absolute bottom-[4%] left-[4.9%]",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };


  return (
    <div>

    <div className="flex justify-center items-center  top-[19.6%]">
      <div className="grid gap-x-[1.5%] gap-y-[2.2%] w-[78vw] max-w-[1850px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 place-items-center">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative w-full h-full bg-white border-2 border-black overflow-hidden max-w-[900px] max-h-[500px]"  
          >
            {activeVideo === video.id ? (
              <iframe
                className="w-full h-full"
                src={`${video.videoUrl}?autoplay=1`}
                allow="autoplay; encrypted-media"
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                className="w-full h-full"
                src={video.thumbnail}
                alt={video.title}
              />
            )}
      
            <button
              className={`absolute transition-transform transform hover:scale-105 ${
                buttonPositionStyles[video.buttonPosition] || buttonPositionStyles["bottom-left"]
              }` }
              style={{
                backgroundImage: `url(${video.buttonImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                zIndex:'3'
              }}
              
              onClick={() => handlePlayVideo(video.id)} 
            >
              <div className="text-[1.25rem] max-[930px]:text-[0.8rem] font-rfabb px-6 py-3" >{video.title}</div>
            </button>
                  </div>
          
          
        ))}
        
      </div>
    </div>
    <div className="bottom-[0%] left-0">
      <h2 className=" text-[1.25rem] py-[1%] 2xl:text-[1.75rem] font-rfabb">NOTE-CLICK TO KNOW MORE</h2>
      </div>
    </div>
  );
};

export default VideoGrid;
