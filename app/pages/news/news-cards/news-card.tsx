import React from 'react';
import Link from "next/link";
import {NewsItem} from "@/utils/backend-requests/types/back-api-news-type";
import {useTranslation} from "next-i18next";
import {Locales} from "@/utils/types/interfaces";

type NewsCardProps = {
    item: NewsItem,
}

const NewsCard:React.FC<NewsCardProps> = ({item}) => {
    const {i18n} = useTranslation("news-page");

    return (
        <div className={"max-w-[100%] overflow-hidden"}>
            <div className={"h-[290px] overflow-hidden rounded-[5px] relative w-full"}>
                <img className={"absolute h-full w-full"} src={item.image}/>
            </div>
            <p className={"mt-[15px] mb-[10px] font-normal text-[14px] text-[#a8b1c2] "}>
                {item[`publication_date_${i18n.language as keyof Locales}`]}
            </p>
            <Link href={`#`} className={`mb-[20px] transition-all line-clamp-2 font-semibold leading-[1.16] text-[24px] text-[#071c44]`}>
                {item[`name_${i18n.language as keyof Locales}`]}
            </Link>
            <div className={`text-[#071c44] line-clamp-3 leading-[1.5] !bg-transparent`} dangerouslySetInnerHTML={{ __html: item[`description_${i18n.language as keyof Locales}`] }}/>
        </div>
    );
};

export default NewsCard;