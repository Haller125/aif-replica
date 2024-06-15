import React from 'react';
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const TabsNews:React.FC= () => {
    const {t} = useTranslation("news-page");

    return (
        <div className={"w-full mt-[40px] mb-[60px] 1s:my-[30px]"}>
            <div className={"flex justify-center"}>
                <Link href={"/news"} className={"uppercase leading-[24px] font-medium text-[24px] text-color-primary block"}>
                    {t("news")}
                    <span className={"leading-[unset]"}>|</span>
                </Link>
                <Link href={"/"}
                      className={"uppercase leading-[24px] font-medium text-[24px] block ml-[5px] text-gray-400"}>
                    {t("media")}
                </Link>
            </div>
        </div>
    );
};

export default TabsNews;