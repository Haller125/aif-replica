import {IListLinks} from "@/public/static/data/list-links";

export interface IPartnersType extends IListLinks{
    imgSrc: string;
}

export type PartnersType = {
    [key: string]: IPartnersType[];
}

export const partners:PartnersType = {
    "en": [
            {
                name: "Strategic Partner",
                imgSrc: "https://astanainternationalforum.org/assets/images/partner_unitednation.png",
                link: "https://www.un.org/en/"
            },
            {
                name: "Strategic Media Partner",
                imgSrc: "https://astanainternationalforum.org/assets/images/partner_cnn.png",
                link: "https://edition.cnn.com/"
            }
        ],
    "ru": [
            {
                name: "Стратегический партнер",
                imgSrc: "https://astanainternationalforum.org/assets/images/partner_unitednation.png",
                link: "https://www.un.org/en/"
            },
            {
                name: "Стратегический медиа-партнер",
                imgSrc: "https://astanainternationalforum.org/assets/images/partner_cnn.png",
                link: "https://edition.cnn.com/"
            }
        ],
}