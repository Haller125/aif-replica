import React from 'react';
import News from "@/app/pages/news/news";
import {GetServerSideProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getNews} from "@/utils/backend-requests/back-api-requests";
import {NewsCardsProps} from "@/utils/types/component-types";
import WrapperDark from "@/app/components/wrappper-dark";

const NewsPage:React.FC<NewsCardsProps> = ({newsRequest}) => {
    return (
        <>
            <WrapperDark>
                <News newsRequest={newsRequest}/>
            </WrapperDark>
        </>
    );
};

export default NewsPage;

export const getServerSideProps:GetServerSideProps = async ({ locale }) => {
    try {
        const news = await getNews(1, 9);

        return {
            props: {
                newsRequest: news.data,
                ...(await serverSideTranslations(locale || 'en', ['page-wrapper', 'news-page']))
            }
        }
    }
    catch (e:any) {
        console.log(e);
        return e;
    }
}