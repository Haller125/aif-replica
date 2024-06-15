import {IBasicResponse} from "@/utils/backend-requests/types/back-api-basic-types";

export interface INews extends IBasicResponse {
    data: NewsItem[]
}

export type NewsItem = {
    id: number;
    slug: string | null;
    user: string;
    name_kk: string;
    name_ru: string;
    name_en: string;
    description_kk: string;
    description_ru: string;
    description_en: string;
    image: string;
    publication_date_kk: string;
    publication_date_ru: string;
    publication_date_en: string;
    external_link: string;
    article_author: string;
    title_seo_kk: string | null;
    title_seo_ru: string | null;
    title_seo_en: string | null;
    description_seo_kk: string | null;
    description_seo_ru: string | null;
    description_seo_en: string | null;
    keywords_seo_kk: string | null;
    keywords_seo_ru: string | null;
    keywords_seo_en: string | null;
    images: any[] | null;
};