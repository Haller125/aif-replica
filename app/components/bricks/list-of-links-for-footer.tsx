import React from 'react';
import Link from "next/link";
import {useTranslation} from "next-i18next";

type ListOfLinksForFooterProps = {
    preventHide?: boolean
    className?: string
}

const ListOfLinksForFooter:React.FC<ListOfLinksForFooterProps> = ({preventHide, className}) => {
    const {t} = useTranslation("page-wrapper");

    return (
            <ul className={`flex flex-wrap space-x-4 text-[#8c99af] ${preventHide? "":"3.5s:hidden"} ${className}`}>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>{t("aif")}</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>{t("about")}</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"/news"}>{t("news")}</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>{t("gallery")}</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>{t("contactUs")}</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>FAQ</Link>
                </li>
                <li className={"hover:text-color-secondary"}>
                    <Link href={"#"}>{t("privacyPolicy")}</Link>
                </li>
            </ul>
    );
};

export default ListOfLinksForFooter;