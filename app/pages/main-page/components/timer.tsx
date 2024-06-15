'use client'
import React, {useEffect, useState} from 'react';
import { useTranslation } from 'next-i18next';

let destDate:Date = new Date(2024, 5, 13, 10)

type time = {
    days:number,
    hours:number,
    minutes:number,
    seconds:number,
}

const Timer:React.FC = () => {
    const calculateTimeRemaining:Function = ():time => {
        const currentTime = new Date().getTime();
        const timeDifference = destDate.getTime() - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState<time>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTimeRemaining(calculateTimeRemaining());
        const timer:NodeJS.Timeout = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { t } = useTranslation('main-page');

    return (
        <div className={"py-5 relative w-[650px] grid grid-cols-4 content-between items-center 4.5s:w-[600px] 2s:max-h-[100px]"}>
            <div className={"text-white flex items-end mr-5 2s:flex-col 2s:items-center 2s:mr-0"}>
                <p className={"font-bold text-timer-num uppercase text-center mr-[5px] 4.5s:leading-[40px] 4.5s:text-[48px] 2s:mb-[10px] 1s:text-[36px]"}>{timeRemaining.days}</p>
                <p className={"uppercase text-center mr-[5px] 1s:text-[12px]"}>{t('timer.days')}</p>
            </div>
            <div className={"text-white flex items-end mr-5 2s:flex-col 2s:items-center 2s:mr-0"}>
                <p className={"text-timer-num uppercase text-center mr-[5px] 4.5s:leading-[40px] 4.5s:text-[48px] 2s:mb-[10px] 1s:text-[36px]"}>{timeRemaining.hours}</p>
                <p className={"uppercase text-center mr-[5px] 1s:text-[12px]"}>{t('timer.hours')}</p>
            </div>
            <div className={"text-white flex items-end mr-5 2s:flex-col 2s:items-center 2s:mr-0"}>
                <p className={"text-timer-num uppercase text-center mr-[5px] 4.5s:leading-[40px] 4.5s:text-[48px] 2s:mb-[10px] 1s:text-[36px]"}>{timeRemaining.minutes}</p>
                <p className={"uppercase text-center mr-[5px] 1s:text-[12px]"}>{t('timer.minutes')}</p>
            </div>
            <div className={"text-white flex items-end mr-5 2s:flex-col 2s:items-center 2s:mr-0"}>
                <p className={"text-timer-num uppercase text-center mr-[5px] 4.5s:leading-[40px] 4.5s:text-[48px] 2s:mb-[10px] 1s:text-[36px]"}>{timeRemaining.seconds}</p>
                <p className={"uppercase text-center mr-[5px] 1s:text-[12px]"}>{t('timer.seconds')}</p>
            </div>
        </div>
    );
};

export default Timer;