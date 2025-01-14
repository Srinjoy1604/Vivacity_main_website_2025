import React from "react";
import textbox from "../../assets/images/DownloadRulebook.png";

const Button_Component = ({ showRulebook = true, showRegister = true }) => {
  const handleRulebookClick = () => {
    console.log("Rulebook clicked");
  };

  const handleRegisterClick = () => {
    console.log("Register clicked");
  };

  return (
    <div className="flex justify-center items-center gap-[2%] md:gap-[5%] mt-[2%] max-sm:flex-col">
      {showRulebook && (
        <button
          onClick={handleRulebookClick}
          className="transform hover:scale-105 transition-transform relative md:mr-[5%] w-[31.8%] md:w-[31.8%] m-[1%] max-sm:w-[40%]"
        >
          <img
            src={textbox}
            alt="Download Rulebook"
            className="w-full h-[5.1vw] object-contain max-sm:h-[100%]"
          />
          <div className="absolute inset-0 flex items-center justify-center px-[2%]">
            <p className="text-black text-[2.4vw] md:text-[2.3vw] font-rfabb font-medium leading-tight">
              DOWNLOAD RULEBOOK
            </p>
          </div>
        </button>
      )}

      {showRegister && (
        <button
          onClick={handleRegisterClick}
          className="transform hover:scale-105 transition-transform relative w-[31.8%] md:w-[31.8%] m-[1%] max-sm:w-[40%]"
        >
          <img
            src={textbox}
            alt="Register"
            className="w-full h-[5.1vw] object-contain max-sm:h-[100%]"
          />
          <div className="absolute inset-0 flex items-center justify-center px-[2%]">
            <p className="text-black text-[2.4vw] md:text-[2.3vw] font-rfabb font-medium leading-tight">
              REGISTER
            </p>
          </div>
        </button>
      )}
    </div>
  );
};

export default Button_Component;
