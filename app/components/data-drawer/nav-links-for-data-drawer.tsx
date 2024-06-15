import React from 'react';
import OptionWithDropDownForDataDrawer from "@/app/components/data-drawer/option-with-drop-down-for-data-drawer";
import {archiveListLinks} from "@/public/static/data/list-links";
import {aboutKazakhstanListLinks} from "@/public/static/data/list-links";
import {useTranslation} from "next-i18next";

const NavLinksForDataDrawer:React.FC = () => {
    const {i18n, t} = useTranslation("page-wrapper");

    return (
        <div>
            <div className={"w-fit mb-[20px]"}>
                <OptionWithDropDownForDataDrawer listLinks={archiveListLinks[i18n.language]} optionName={t("archive")}/>
            </div>
            <a className={"text-white text-[26px] block mb-[20px]"}>
                {t("home")}
            </a>
            <a className={"text-white text-[26px] block mb-[20px]"}>
                {t("participants")}
            </a>
            <a className={"text-white text-[26px] block mb-[20px]"}>
                {t("news")}
            </a>
            <div className={"w-fit"}>
                <OptionWithDropDownForDataDrawer listLinks={aboutKazakhstanListLinks[i18n.language]} optionName={t("about")}/>
            </div>
        </div>
    );
};

export default NavLinksForDataDrawer;