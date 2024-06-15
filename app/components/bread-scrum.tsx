import React from 'react';
import {IListLinks} from "@/public/static/data/list-links";
import Link from "next/link";
import {BreadScrumAlignIcon} from "@/app/components/bricks/icons";

type BreadScrumProps = {
    items: IListLinks[];
}

const BreadScrum:React.FC<BreadScrumProps> = ({items}) => {
    return (
        <div className={"flex items-center capitalize py-[40px] font-medium"}>
            {items.map((item, index) => {
                return (
                    <span key={index} className={"flex items-center "}>
                        <Link href={item.link} className={`text-center ${(index < items.length - 1) ? "text-gray-400":""}`}> {item.name} </Link>
                        {index < items.length - 1 && <BreadScrumAlignIcon className={"mx-[10px]"}/>}
                    </span>
                )
            })}
        </div>
    );
};

export default BreadScrum;