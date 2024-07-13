import React, {useEffect} from 'react';
import {Trans, useTranslation} from "next-i18next";

const Bigtext:React.FC = () => {
    const { t } = useTranslation('main-page');


    return (
        <div className={"relative h-[700px] pt-[250px] text-center 2s:text-30px 3s:pt-[175px] 3.5s:h-550px 3.5s:pt-[200px] 4.5s:h-[600px] 4.5s:pt-[220px] 4.5s:mb-[50px]"}>
            <div
                className={"absolute -z-[1] top-0 w-full h-[700px] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:bg-video-cover"}>
                <video src={"https://astanainternationalforum.org/assets/video/main-page-video.mp4"} autoPlay={true}
                       loop={true} muted={true} className={"w-full h-full object-cover"}></video>
            </div>
            <div className={"container"}>
                <div>
                    <h1 className="font-extralight text-white text-7xl 4.5s:text-[64px] 4s:text-[50px] 3.5s:text-[40px] 3s:text-[36px] 2s:text-[30px]">
                        {t('title1')}
                    </h1>
                    <h1 className="text-white text-7xl 4.5s:text-[64px] 4s:text-[50px] 3.5s:text-[40px] 3s:text-[36px] 2s:text-[30px]">
                        {t('title2')}
                    </h1>
                </div>
                <p className={"mx-auto px-[40px] text-center flex flex-col my-8 text-3xl text-white font-bold 4.5s:text-[26px] "}>
                    <Trans i18nKey={"date"} t={t}>
                        13-14 June 2024
                        <span className={"leading-none font-extralight"}>
                        Astana, Kazakhstan
                    </span>
                    </Trans>
                </p>
                <a className={"m-4 bg-color-secondary font-medium inline-flex px-8 py-4 rounded text-white 1s:m-[10px] 4s:py-[10px] 4s:px-[30px] 3s:px-[20px]"}
                   href={'https://aif-24-bucket.s3.eu-north-1.amazonaws.com/page-file/2tHSsUQ81rDilalrU3PiBjAKKSZSDzrNY3d0x66P.pdf'}
                   target={"_blank"}>
                    {t("booklet")}
                </a>
                <a className={"m-4 bg-color-secondary font-medium inline-flex px-8 py-4 rounded text-white 1s:m-[10px] 4s:py-[10px] 4s:px-[30px] 3s:px-[20px]"}
                   href={'https://aif-24-bucket.s3.eu-north-1.amazonaws.com/page-file/E97N4UtHNzB6L6huqJq6cQCidvGXKGlUmuivhL0q.pdf'}
                   target={"_blank"}>
                    {t("programme")}
                </a>
            </div>
        </div>
    );
};

export default Bigtext;