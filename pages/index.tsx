import WrapperLight from "@/app/components/wrapper-light";
import MainPage from "@/app/pages/main-page/main-page";
import React from "react";
import {GetServerSideProps} from "next";
import {getNews, getParticipants} from "@/utils/backend-requests/back-api-requests";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {MainPageProps} from "@/utils/types/component-types";



const Home:React.FC<MainPageProps> = ({participants, news}) => {

  return (
    <>
        <WrapperLight className={"text-white"}>
            <MainPage participants={participants} news={news}/>
        </WrapperLight>
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    try {
        const participants = await getParticipants(1, 21);
        const news = await getNews(1, 9);
        return {
            props: {
                participants: participants.data.data,
                news: news.data.data,
                ...(await serverSideTranslations(locale || 'en', ['main-page', 'page-wrapper']))
            }
        }
    }
    catch (e:any) {
        console.log(e);
        return {
            props: {
                error: e.message
            }
        };
    }
}

