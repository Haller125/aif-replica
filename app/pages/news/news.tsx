import React from 'react';
import BreadScrum from "@/app/components/bread-scrum";
import {breadScrumNews} from "@/public/static/data/news/bread-scrum-news";
import {useTranslation} from "next-i18next";
import TabsNews from "@/app/pages/news/tabs-news/tabs-news";
import {INews} from "@/utils/backend-requests/types/back-api-news-type";
import NewsCards from "@/app/pages/news/news-cards/news-cards";

type NewsProps = {
    newsRequest: INews
}

const News:React.FC<NewsProps> = ({newsRequest}) => {
    const {i18n, t} = useTranslation("news-page");

    return (
        <main style={{background: "url(https://astanainternationalforum.org/_next/static/media/Vector.8d43a1ed.png) 100% no-repeat, url(https://astanainternationalforum.org/_next/static/media/Vector.8d43a1ed.png) 0 no-repeat"}}>
            <div className={"pt-[15px] h-[85px]"}/>
            <div className={"container"}>
                <BreadScrum items={breadScrumNews[i18n.language]}/>
                <TabsNews/>
                <h1 className={"text-center mb-[40px] text-color-primary leading-[1] font-semibold text-[64px] 4s:text-[20px]"}>
                    {t("news")}
                </h1>
                <NewsCards NewsCardsProps={newsRequest}/>
            </div>

        </main>
    );
};

export default News;