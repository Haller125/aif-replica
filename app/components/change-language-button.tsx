import React from 'react';
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

type ChangeLanguageButtonProps = {
    className?: string
}

const ChangeLanguageButton:React.FC<ChangeLanguageButtonProps> = ({className}) => {
    const { i18n } = useTranslation();

    const router = useRouter();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        console.log(router.pathname, lang)
        router.push(router.pathname, router.pathname, { locale: lang });
    };

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    const clientSideLanguageChange = (newLocale: string) => {
        i18n.changeLanguage(newLocale);
    }

    const changeTo = router.locale === 'en' ? 'ru' : 'en'

    return (
        <button onClick={() => onToggleLanguageClick(i18n.language === "ru" ? "en" : "ru")}
                className={className}>
            {i18n.language === "ru" ? "English" : "Русский"}
        </button>
    );
};

export default ChangeLanguageButton;