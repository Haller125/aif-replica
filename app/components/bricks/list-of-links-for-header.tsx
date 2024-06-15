import React from 'react';
import Link from "next/link";
import DropDownMenu from "@/app/components/bricks/drop-down-menu";
import {aboutKazakhstanListLinks, archiveListLinks} from "@/public/static/data/list-links";
import {useTranslation} from "next-i18next";

const ListOfLinksForHeader:React.FC = () => {
    const {i18n, t} = useTranslation("page-wrapper");

    return (
        <nav className={"flex space-x-4 3s:hidden"}>
            <div>
                <Link href={"/"} className={"hover:text-color-secondary"}>
                    {t("home")}
                </Link>
            </div>
            <div className={"relative flex"}>
                <Link href={"#"} className={"inline hover:text-color-secondary"}>
                    {t("aif")}
                </Link>
                <DropDownMenu links={archiveListLinks[i18n.language]}/>
            </div>
            <div>
                <Link href={"/news"} className={"hover:text-color-secondary"}>
                    {t("news")}
                </Link>
            </div>
            <div className={"relative flex w-fit"}>
                <Link href={"#"} className={"hover:text-color-secondary"}>
                    {t("about")}
                </Link>
                <DropDownMenu links={aboutKazakhstanListLinks[i18n.language]}/>
            </div>
        </nav>
    );
};

export default ListOfLinksForHeader;