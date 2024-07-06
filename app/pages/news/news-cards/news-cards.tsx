import React, {useEffect} from 'react';
import {INews} from "@/utils/backend-requests/types/back-api-news-type";
import NewsCard from "@/app/pages/news/news-cards/news-card";
import NewsCardsPaginator from "@/app/pages/news/news-cards/news-cards-paginator";
import {getNews} from "@/utils/backend-requests/back-api-requests";
import newsCards from "@/app/pages/news/news-cards/news-cards";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import the CSS

type NewsCardsProps = {
    NewsCardsProps: INews
}

const  NewsCards:React.FC<NewsCardsProps> = ({NewsCardsProps}) => {
    const [news, setNews] = React.useState<INews>({...NewsCardsProps});
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const [currentPage, setCurrentPage] = React.useState<number>(NewsCardsProps.meta.current_page);

    useEffect(() => {
        NProgress.start(); // Start the spinner
        setIsLoading(true);
        getNews(currentPage, news.meta.per_page).then((res) => {
            setNews(res.data);
            setIsLoading(false);
            NProgress.done(); // Stop the spinner
        });
    }, [currentPage]);


    return (
        <>
            <div className={"mb-[50px] grid grid-cols-3 gap-[30px] 3.5s:grid-cols-2 2s:grid-cols-1"}>
                {news.data.map((item, index) => {
                    return <NewsCard item={item} key={index}/>
                })}
            </div>
            <div className={"flex justify-center w-full my-[40px]"}>
                <NewsCardsPaginator meta={news.meta} setCurrentPage={setCurrentPage}/>
            </div>
        </>
    );
};

export default NewsCards;