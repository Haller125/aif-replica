import React from 'react';
import Partner from "@/app/pages/main-page/components/partner";
import {partners} from "@/public/static/data/partners-data";
import {useTranslation} from "next-i18next";

const Partners:React.FC = () => {
    const {i18n} = useTranslation();
    return (
        <div className={"container my-[80px] grid gap-[30px] grid-cols-2 2s:grid-cols-1"}>
            {
                partners[i18n.language].map((partner, index) => (
                    <Partner key={index} partner={partner}/>
                ))
            }
        </div>
    );
};

export default Partners;