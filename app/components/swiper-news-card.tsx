import React from 'react';
import {NewsItem} from "@/utils/backend-requests/types/back-api-news-type";
import {DiagArrow} from "@/app/components/bricks/icons";
import {useTranslation} from "next-i18next";
import {Locales} from "@/utils/types/interfaces";

type NewsProps = {
    news: NewsItem
}

const SwiperNewsCard:React.FC<NewsProps> = ({news}) => {
    const {t, i18n} = useTranslation("main-page");

    return (
        <div className={"grid grid-cols-[1.8fr_1fr] h-[500px] z-[5] 4s:h-[400px] 2s:h-[350px] 2s:grid-cols-[1.5f_1f] 1s:flex 1s:h-fit 1s:flex-col-reverse"}>
            <div className={"relative w-full h-[calc(100%-20px)] 1s:overflow-hidden 1s:w-[95%] 1s:h-[200px] before:absolute before:bg-[linear-gradient(0deg,_rgba(39,_52,_75,_.33),_rgba(39,_52,_75,_.33))] before:content-[''] before:w-full before:h-full before:z-[3]"}>
                <img alt={news[`name_${i18n.language as keyof Locales}`]} src={news.image} className={"absolute h-full w-full object-cover transition-all 1s:object-center"}/>
            </div>
            <div className={"rounded-[0_5px_5px_5px] flex text-white flex-col justify-center px-[50px] bg-[linear-gradient(158deg,#036ea4_14.17%,#071c44_85.83%)] 1s:h-[250px] 1s:rounded-[0_0_5px_0] 1s:overflow-hidden 4s:px-[30px]"}>
                <p className={"line-clamp-2 text-ellipsis text-left font-semibold text-[24px] 4s:text-[20px] 3s:text-[18px]"}>
                    {news[`name_${i18n.language as keyof Locales}`]}
                </p>
                <div className={"my-[20px]"}/>
                <a className={"inline-flex justify-center items-center rounded-[5px] py-[15px] px-[30px] text-[16px] text-white whitespace-nowrap font-medium w-fit bg-color-secondary 4s:py-[10px] 4s:px-[30px] 3s:px-[20px] 1s:px-[20px] 1s:text-[14px]"}
                   href={news.external_link}
                   target={"_blank"}
                   rel={"noopener noreferrer"}
                >
                    {t("newsSegment.moreAbout")}
                    <DiagArrow/>
                </a>
            </div>
        </div>
    );
};

export default SwiperNewsCard;