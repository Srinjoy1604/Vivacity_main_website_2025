import React, { useState } from "react";
import thumbnail1 from "../../assets/images/Top_left.png"; 
import thumbnail2 from "../../assets/images/Top_right.png"; 
import thumbnail3 from "../../assets/images/Bottom_left.png"; 
import thumbnail4 from "../../assets/images/Bottom_right.png"; 
import button1 from "../../assets/images/Legacy_btn.png"; 
import button2 from "../../assets/images/Legacybtn_topright.png"; 

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
    "bottom-left": "absolute top-[73.6%] left-[37.2%]",
    "bottom-right": "absolute top-[73.6%] left-[37.2%]",
    "top-left": "absolute top-[73.2%] left-[3.9%]",
    "top-right": "absolute   top-[73.2%] left-[3.9%]",
    "center": "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className="flex justify-center items-center top-[19.6%]">
      <div className="grid gap-4 w-full  grid-cols-1 sm:grid-cols-2 xl:grid-cols-2  ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative 1280:w-[485px] 1280:h-[273px] max-w-full bg-white border-2 border-black overflow-hidden  1400:w-[550px] 1400:h-[300px] 1500:w-[590px] 1500:h-[340px] 1600:w-[650px] 1600:h-[370px] 1980:w-[800px] 1980:h-[450px] 2100:w-[900px] 2100:h-[500px]"  
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
                className="w-full h-full object-cover"
                src={video.thumbnail}
                alt={video.title}
              />
            )}
      
                 
            <button
              className={`absolute border-0 max-h-[3.5rem] transition-transform transform hover:scale-105 ${
                buttonPositionStyles[video.buttonPosition] || buttonPositionStyles["bottom-left"]
              }` }
              style={{
                width: video.buttonPosition === "top-right" ? "35.8%" : "59.8%",
                height:"21.6%",
                backgroundImage: `url(${video.buttonImage})`,
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              
              onClick={() => handlePlayVideo(video.id)} 
            >
              <div className=" text-[1rem]   2xl:text-[1.5rem] font-rfabb" >{video.title}</div>
            </button>
                  </div>
          
          
        ))}
        <div className="bottom-[0%] left-0">
                <h2 className=" text-[1.25rem]  2xl:text-[1.75rem] font-rfabb">NOTE-CLICK TO KNOW MORE</h2>
                </div>
      </div>
    </div>
  );
};

export default VideoGrid;
