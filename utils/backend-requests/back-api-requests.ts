import {axiosInstanceBackAPI} from "@/utils/backend-requests/back-api-instance";
import {AxiosResponse} from "axios";
import {Participants} from "@/utils/backend-requests/types/back-api-participant-types";
import {INews} from "@/utils/backend-requests/types/back-api-news-type";
export const getParticipants = (page:number, perPage:number):Promise<AxiosResponse<Participants>> => {
    return axiosInstanceBackAPI.get<Participants>(`/speakers-2024?per_page=${perPage}&page=${page}`);
}

export const getNews = (page:number, perPage:number):Promise<AxiosResponse<INews>> => {
    return axiosInstanceBackAPI.get<INews>(`/news?per_page=${perPage}&page=${page}`);
}