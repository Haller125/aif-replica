import React from 'react';
import {DiagArrow} from "@/app/components/bricks/icons";
import Link from "next/link";

type HeadOfSegmentProps = {
    title: string,
    isButton: boolean,
    buttonText?: string,
    buttonLink?: string,
}

const HeadOfSegment:React.FC<HeadOfSegmentProps> = ({title, buttonLink="#", buttonText, isButton}) => {
    return (
        <div>
            <div className={'container'}>
                <div
                    className={"flex items-center justify-between mx-0 mb-[50px] mt-[80px] 3s:mt-[60px] 3s:mb-[40px] 1s:mt-[40px] 1s:mb-[10px] 1s:flex-wrap 1s:justify-around"}>
                    <h2 className={"text-color-primary text-[64px] font-semibold 4s:text-[50px] 3s:text-[40px] 2s:text-[35px]"}>
                        {title}
                    </h2>
                    <Link href={buttonLink} className={`text-[16px] w-fit whitespace-nowrap text-white py-[15px] px-[30px] rounded-[5px] inline-flex justify-center items-center font-medium bg-color-secondary 4s:py-[10px] 4s:px-[30px] 3s:py-[10px] 3s:px-[20px] 1s:m-[20px] ${isButton? "" : "hidden"}`}>
                        {buttonText}
                        <DiagArrow/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeadOfSegment;