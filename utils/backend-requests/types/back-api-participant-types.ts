import {IBasicResponse} from "@/utils/backend-requests/types/back-api-basic-types";

export interface Participants extends IBasicResponse {
    data: Participant[]
}

type Role = {
    id: number;
    title_kk: string;
    title_ru: string;
    title_en: string;
};

export type Participant = {
    id: number;
    image: string;
    position: number;
    name_en: string;
    last_name_en: string;
    middle_name_en: string;
    name_kk: string;
    last_name_kk: string;
    middle_name_kk: string;
    name_ru: string;
    last_name_ru: string;
    middle_name_ru: string;
    description_en: string;
    description_kk: string;
    description_ru: string;
    role: Role;
};
