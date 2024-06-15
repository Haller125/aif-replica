import React from 'react';
import {useTranslation} from "next-i18next";

const AboutAif:React.FC = () => {
    const {t} = useTranslation('main-page');

    return (
        <div className={"container"}>
            <div className={"grid grid-cols-[1fr_1.4fr] my-[100px] mx-auto gap-[92px] 3.5s:items-center 3.5s:gap-[40px] 4s:gap-[60px] 3s:gap-[30px 3s:my-[60px] 2s:grid-cols-1"}>
                <div className={"h-[550px] rounded-[5px] w-full relative overflow-hidden 3.5s:h-[450px] 3s:h-[400px]"}>
                    <img className={"object-contain absolute transition-all h-full w-full "} src={"https://astanainternationalforum.org/assets/images/about-aif2.png"} alt={"photo"}/>
                </div>
                <div className={"pt-[70px] 3.5s:pt-0"}>
                    <h5 className={"text-[64px] font-light 3.5s:text-[56px] 3s:text-[46px] "}>
                        {t("aboutAif.title") + " "}
                        <span className={"font-extrabold"}>
                            {t("aboutAif.boldTitle")}
                        </span>
                    </h5>
                    <p className={"mb-[30px] leading-[30px] text-justify text-xl 3.5s:text-[18px] 3s:text-[20px] 3s:leading-[1.4]"}>
                        {t("aboutAif.paragraph1")}
                    </p>
                    <p className={"mb-[30px] leading-[30px] text-justify text-xl 3.5s:text-[18px] 3s:text-[20px] 3s:leading-[1.4]"}>
                        {t("aboutAif.paragraph2")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutAif;