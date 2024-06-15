import {Participant} from "@/utils/backend-requests/types/back-api-participant-types";
import {INews, NewsItem} from "@/utils/backend-requests/types/back-api-news-type";

export type MainPageProps = {
    participants: Participant[],
    news: NewsItem[],
}

export type NewsCardsProps = {
    newsRequest: INews,
}