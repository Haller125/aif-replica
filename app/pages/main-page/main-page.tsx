import React from 'react';
import Bigtext from "@/app/pages/main-page/components/bigtext";
import Registration from "@/app/pages/main-page/components/registration";
import AboutAif from "@/app/pages/main-page/components/about-aif";
import Participants from "@/app/pages/main-page/components/participants";
import Partners from "@/app/pages/main-page/components/partners";
import ForumTopics from "@/app/pages/main-page/components/forum-topics";
import NewsSegment from "@/app/pages/main-page/components/newsSegment";
import CongressCenter from "@/app/pages/main-page/components/congress-center";
import {forumTopicsData} from "@/public/static/data/forum-topics-data";
import {MainPageProps} from "@/utils/types/component-types";


const MainPage:React.FC<MainPageProps> = ({participants, news}) => {
    return (
        <main className={"pb-[100px] 3s:pb-[50px]"}>
            <Bigtext/>
            <Registration/>
            <AboutAif/>
            <Participants participants={participants}/>
            <Partners/>
            <NewsSegment data={news}/>
            <ForumTopics topics={forumTopicsData}/>
            <CongressCenter/>
        </main>
    );
};

export default MainPage;