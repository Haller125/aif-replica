export interface IListLinks  {
    name: string,
    link: string,
}

export type ListLinks = {
    [key: string]: IListLinks[];
}

export const archiveListLinks:ListLinks ={
    "en": [{
        name: "Speakers",
        link: "/en/archive2023?t=speakers_2023"
    },
    {
        name: "Program",
        link: "/en/archive2023?t=program_2023"
    },
    {
        name: "AIF Guide",
        link: "/en/archive2023?t=aif_guide_2023"
    },
    {
        name: "Media",
        link: "/en/archive2023?t=media_2023"
    },
    {
        name: "Partners",
        link: "/en/archive2023?t=partners_2023"
    },
    {
        name: "Gallery",
        link: "/en/gallery"
    }],
    "ru": [{
        name: "Спикеры",
        link: "/ru/archive2023?t=speakers_2023"
    },
    {
        name: "Программа",
        link: "/ru/archive2023?t=program_2023"
    },
    {
        name: "AIF Гид",
        link: "/ru/archive2023?t=aif_guide_2023"
    },
    {
        name: "Медиа",
        link: "/ru/archive2023?t=media_2023"
    },
    {
        name: "Партнеры",
        link: "/ru/archive2023?t=partners_2023"
    },
    {
        name: "Галерея",
        link: "/ru/gallery"
    }],

};

export const aboutKazakhstanListLinks:ListLinks = {
    "en":[
        {
            name: "About Kazakhstan",
            link: "/en/about-kazakhstan"
        },
        {
            name: "Take a tour of Kazakhstan",
            link: "/en/tours-cities"
        }
    ],
    "ru":[
        {
            name: "О Казахстане",
            link: "/ru/about-kazakhstan"
        },
        {
            name: "Путешествие по Казахстану",
            link: "/ru/tours-cities"
        }
    ]
}