import './normalbutton.css';
const NormalButton = ({ text, handler, name,green=false }) => {
    return (
        <button
            className={`${(green)?"bg-[#018D34] hover:bg-[#57d083]":"bg-[#7A0A9B] hover:bg-[#bb61d6]" } normal-button font-rfabb rounded-[89.15px] py-2 px-[3%] my-5 md:text-xl md:py-2   font-grobold text-xl tracking-wider leading-none text-white font-[400] text-[1.759rem] `}
            name={name}
            onClick={handler}
        >
            {text}
        </button>
    );
};

export default NormalButton;
