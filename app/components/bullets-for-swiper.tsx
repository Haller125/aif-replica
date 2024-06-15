import React from 'react';
import {className} from "postcss-selector-parser";

type BulletsForSwiperProps = {
    className: string;
    index: number;
}

const BulletsForSwiper = ( index:number, className:string) => {
    return '<span class="!h-[2px] !opacity-100 !rounded-[0px] !w-full !m-0  bg-black 2s:!mx-[5px] 2s:!h-[12px] 2s:!min-w-[12px] 1s:!max-w-[12px] !mt-[10px] ' + className + '"></span>'
};

export default BulletsForSwiper;