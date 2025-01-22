import React, { useEffect, useState } from 'react';

const CountDownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-02-08T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex w-full items-center justify-center gap-[5.5%] text-black bg-inherit p-4 pb-[15%] md:pb-[10%]">
            <div className="text-center">
                <div className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] font-medium font-rfabb">Days</div>
                <div className="max-[640px]:text-[4rem] sm:text-[5vw] md:text-[3vw] font-medium font-rfabb">{timeLeft.days}</div>
            </div>
            <div className="text-[2rem] md:text-[3vw] mt-[6%] font-bold">:</div>
            <div className="text-center">
                <div className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] font-medium font-rfabb">Hours</div>
                <div className="max-[640px]:text-[4rem] sm:text-[5vw] md:text-[3vw] font-medium font-rfabb">{timeLeft.hours.toString().padStart(2, '0')}</div>
            </div>
            <div className="text-[3vw] md:block hidden mt-[6%] font-bold">:</div>
            <div className="text-center hidden md:block">
                <div className="text-[4.5vw] md:text-[3vw] lg:text-[2vw] font-medium font-rfabb">Mins</div>
                <div className="text-[3vw] font-medium font-rfabb">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            </div>
        </div>
    );
};

export default CountDownTimer;
