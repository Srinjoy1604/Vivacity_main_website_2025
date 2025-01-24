import { useNavigate } from 'react-router-dom';
import NormalButton from './NormalButton';
import "../../pages/normalregistration.css";
const RegistrationSuccessful = () => {
    const navigate = useNavigate();
    return (
        <div className='reg_suc m-[2%]  p-[2%] w-[40%] rounded-md mx-auto mb-8'>
            <h1 className="w-full px-[8%] mt-8 mb-4 text-center font-grobold text-white  tracking-wider leading-none  font-rfabb text-[2.25rem] font-[700]">
                Congratulations !
                <br />
                You have successfully registered for
                Vivacity 2025
            </h1>
            <p className="w-[45%] text-white mx-auto text-center font-vetosans font-[400] text-[1.25rem]">
            You will shortly receive the payment details on your registered email address
            </p>
            <div className='w-[100%] grid place-items-center'>
                <NormalButton text="Home"
                handler={ (e) => {
                    navigate("/");
                }}/>
            </div>
        </div>
    );
};

export default RegistrationSuccessful;
