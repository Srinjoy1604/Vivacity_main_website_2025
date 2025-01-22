import React from "react";
import textbox from "../../assets/images/DownloadRulebook.webp";
import {useNavigate} from 'react-router-dom'
const Button_Component = ({ showRulebook = true, showRegister = true,section }) => {
  const handleRulebookClick = () => {
    console.log("Rulebook clicked");
  };

  const handleRegisterClick = () => {
    navigate("/NormalRegistration")
    console.log("Register clicked");
  };

const navigate=useNavigate();
  return (
    <div className="flex justify-center items-center  md:gap-4 lg:gap-8 mt-4 lg:mt-8 max-sm:flex-col">
      {showRulebook && (
         <a  href={section} target="_blank" rel="noopener noreferrer">
        <button
          onClick={handleRulebookClick}
          className="transform hover:scale-105 transition-transform relative 
            w-64 sm:w-72 md:w-80 lg:w-96 
            max-sm:mb-4"
        >
          <img
            src={textbox}
            alt="Download Rulebook"
            className="w-full h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-rfabb font-medium leading-tight">
              DOWNLOAD RULEBOOK
            </p>
          </div>
        </button>
        </a>
      )}

      {showRegister && (
        
        <button
          onClick={handleRegisterClick}
          className="transform hover:scale-105 transition-transform relative 
            w-64 sm:w-72 md:w-80 lg:w-96"
        >
          <img
            src={textbox}
            alt="Register"
            className="w-full h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-rfabb font-medium leading-tight">
              REGISTER
            </p>
          </div>
        </button>
      )}
    </div>
  );
};

export default Button_Component; 
