import React from 'react';
import Link from "next/link";
import {IPartnersType} from "@/public/static/data/partners-data";

type PartnerProps = {
    partner: IPartnersType
}

const Partner:React.FC<PartnerProps> = ({partner}) => {
    return (
        <div className={"flex flex-col items-center"}>
            <h2 className={"text-[47px] mb-[30px] 3.5s:text-[37px] 3s:text-[28px] 2s:text-[32px] "}> {partner.name} </h2>
            <a href={`${partner.link}`} className={"relative w-full flex items-center justify-center rounded-[120px] h-[150px] border-[1px] border-[#036ea4] border-solid 4s:h-[130px] 3s:h-[100px]"}>
                <img alt={"photo"} src={partner.imgSrc} className={"h-[80px] object-contain 4s:h-[60px] "}/>
            </a>
        </div>
    );
};

export default Partner;