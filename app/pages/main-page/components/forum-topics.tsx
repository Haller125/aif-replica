import React from 'react';
import {forumTopic, forumTopicsData} from "@/public/static/data/forum-topics-data";
import ForumTopicCard from "@/app/components/forum-topic-card";
import {useTranslation} from "next-i18next";

type ForumTopicsProps = {
    topics: forumTopicsData
}

const ForumTopics:React.FC<ForumTopicsProps> = ({topics}) => {
    const {t, i18n} = useTranslation("main-page");

    return (
        <div>
            <div className={"py-[40px] bg-color-secondary text-white"}>
                <div className={"container flex items-center justify-between 3s:flex-wrap 3s:justify-center"}>
                    <h2 className={"mr-[10%] whitespace-nowrap 3s:mb-[20px] font-semibold text-[64px] 4s:text-[50px] 3s:text-[40px]"}>
                        {t("forumTopics")}
                    </h2>
                </div>
            </div>
            <div className={"relative pt-[20px] h-[600px] 4s:h-[530px] 3s:h-[930px] 2s:top-[-20px] 2s:h-[1040px] 1s:h-[2005px] 2s:pt-[40px] before:content-[''] before:absolute before:-z-[5] before:bottom-[12px] before:bg-color-secondary before:h-[14px] before:w-[60%] before:left-0 3s:before:h-[10px] 3s:before:bottom-[19px] 2s:before:bottom-[31px] 1s:before:bottom-[50px]"}>
                <div className={"w-full -z-[3] h-[600px] -top-[10px] absolute 4s:h-[530px] 3s:h-[930px] 2s:top-[-20px] 2s:h-[1040px] 1s:h-[2005px]"}>
                    <img alt={"picture"}
                         className={"absolute h-full w-full bg-transparent top-0 bottom-0 left-0 right-0 "} src={"https://astanainternationalforum.org/assets/images/hero_sub_bg.png"}/>
                </div>
                <div className={"container py-[40px] z-[1] grid grid-cols-4 gap-[30px] 3.5s:gap-[20px] 3s:grid-cols-2 1s:grid-cols-1 "}>
                    {topics[i18n.language].map((topic, index) =>
                        <ForumTopicCard key={index} forumTopic={topic}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForumTopics;
