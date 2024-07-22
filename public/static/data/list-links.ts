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
        link: "/"
    },
    {
        name: "Program",
        link: "/"
    },
    {
        name: "AIF Guide",
        link: "/"
    },
    {
        name: "Media",
        link: "/"
    },
    {
        name: "Partners",
        link: "/"
    },
    {
        name: "Gallery",
        link: "/"
    }],
    "ru": [{
        name: "Спикеры",
        link: "/"
    },
    {
        name: "Программа",
        link: "/"
    },
    {
        name: "AIF Гид",
        link: "/"
    },
    {
        name: "Медиа",
        link: "/"
    },
    {
        name: "Партнеры",
        link: "/"
    },
    {
        name: "Галерея",
        link: "/"
    }],

};

export const aboutKazakhstanListLinks:ListLinks = {
    "en":[
        {
            name: "About Kazakhstan",
            link: "/"
        },
        {
            name: "Take a tour of Kazakhstan",
            link: "/"
        }
    ],
    "ru":[
        {
            name: "О Казахстане",
            link: "/"
        },
        {
            name: "Путешествие по Казахстану",
            link: "/"
        }
    ]
}