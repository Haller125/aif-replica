import React from 'react';
import HeadOfSegment from "@/app/components/head-of-segment";
import SwiperNews from "@/app/components/swiper-news";
import {NewsItem} from "@/utils/backend-requests/types/back-api-news-type";
import {useTranslation} from "next-i18next";

type NewsSegmentProps = {
    data: NewsItem[]
}

const NewsSegment:React.FC<NewsSegmentProps> = ({data}) => {
    const {t} = useTranslation("main-page");

    return (
        <div>
            <HeadOfSegment title={t("newsSegment.title")} buttonText={t("newsSegment.buttonText")} isButton={true} buttonLink={"/news"}/>
            <SwiperNews data={data}/>
        </div>
    );
};

export default NewsSegment;