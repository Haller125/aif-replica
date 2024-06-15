import {Locales} from "@/utils/types/interfaces";

export interface IFileRestrictions{
    text: string;
}

type FileRestrictions = {
    [key: string]: IFileRestrictions[];
}

export const avatarRestrictionsList: FileRestrictions = {
    "en": [
        {
          text: "Color image",
        },
        {
          text: "Vertical",
        },
        {
          text: "The image of the face should occupy at least 70% and no more than 80% of the frame space",
        },
        {
          text: "No background",
        },
        {
          text: "Photo no later than 180 days at the time of upload",
        },
        {
          text: "Size within 50 Kb - 7 Mb",
        },
        {
          text: "Format jpg, jpeg or png (NOT PDF)",
        }],
    "ru": [
        {
          text: "Цветное изображение",
        },
        {
          text: "Вертикальное",
        },
        {
          text: "Изображение лица должно занимать не менее 70% и не более 80% пространства кадра",
        },
        {
          text: "Отсутствие фона",
        },
        {
          text: "Фото не позднее 180 дней на момент загрузки",
        },
        {
          text: "Размер в пределах 50 Кб - 7 Мб",
        },
        {
          text: "Формат jpg, jpeg или png (НЕ PDF)",
        }],
}

export const passportRestrictionsList: FileRestrictions = {
    en: [
        {
            text: "Color image",

        },
        {
            text: "Vertical or horizontal picture",
        },
        {
            text: "Current document by deadline",
        },
        {
            text: "If the document has several sides (pages), then combine them into one file before uploading.",
        },
        {
            text: "Size within 50 Kb - 7 Mb",
        },
        {
            text: "Format jpg, jpeg, png and pdf",
        }],
    ru: [
        {
            text: "Цветное изображение",
        },
        {
            text: "Вертикальное или горизонтальное изображение",
        },
        {
            text: "Действующий документ по срокам",
        },
        {
            text: "Если документ имеет несколько сторон (страниц), то объедините их в один файл перед загрузкой.",
        },
        {
            text: "Размер в пределах 50 Кб - 7 Мб",
        },
        {
            text: "Формат jpg, jpeg, png и pdf",
        }],
}