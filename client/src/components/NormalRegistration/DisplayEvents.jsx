import Form from './Form';
import { CircularProgress } from '@mui/material';
import NormalButton from './NormalButton';

const DisplayEvents = ({ events, submit, isLoading }) => {
    return (
        <Form>
            <h1 className=" w-5/6 mx-auto mt-4 text-[#57E8E8]  text-[2.5rem] font-[400] font-rfabb leading-none p-[2%] tracking-wider text-center">
                Events Added
            </h1>
            <div className="w-[50%] mx-auto mt-2 mb-4 flex-wrap flex flex-row  gap-4 text-center items-center justify-center align-middle ">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className="bg-[#7A0A9B]  flex items-center text-white py-1 px-4 md:py-2 md:px-4 rounded-[8px] border  border-[#4A3FAD]"
                    >
                        {event.eventName}
                    </div>
                ))}
            </div>
            {/*<p className="text-white px-4">
                <span className=" text-red-400">*</span> Add all the events you
                wish to register for Vivacity 2k25 before submitting.{' '}
            </p>*/}
            {isLoading ? (
                <CircularProgress />
            ) : (
                <div className='w-[100%] grid place-items-center'>
                    <NormalButton text="Submit" name="submit" handler={submit} green={true}/>
                </div>
            )}
        </Form>
    );
};

export default DisplayEvents;
