import React from 'react';
import {NewsItem} from "@/utils/backend-requests/types/back-api-news-type";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, A11y, Pagination} from 'swiper/modules';
import bulletsForSwiper from "@/app/components/bullets-for-swiper";
import SwiperNewsCard from "@/app/components/swiper-news-card";
import {SwiperNext, SwiperPrev} from "@/app/components/bricks/icons";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

type SwiperNewsProps = {
    data: NewsItem[]
}

const SwiperNews:React.FC<SwiperNewsProps> = ({data}) => {

    const breakpoints = {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 1.50,
            slidesPerGroup: 1,
        },
        992: {
            slidesPerView: 1.50,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 1.50,
            slidesPerGroup: 1,
        },
    };

    const logButton = () => {
        console.log('button clicked');
    }

    return (
        <>
            <Swiper
                modules={[A11y, Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                className={"pointer-events-none"}

                breakpoints={breakpoints}
                centeredSlides={true}
                spaceBetween={50}

                navigation={{
                    nextEl: '.custom-next-news',
                    prevEl: '.custom-prev-news',
                }}
                pagination={{clickable: true, el: '.swiper-pagination-news', renderBullet: bulletsForSwiper}}
            >
                {data.map((news, index) => {
                    return (
                        <SwiperSlide key={index} className={"pointer-events-auto"}>
                            <SwiperNewsCard news={news}/>
                        </SwiperSlide>
                    );
                })}
                <div
                    className={"absolute top-[50%] flex justify-between w-[calc(66.6667%+100px)] left-[50%] -translate-x-[50%] -translate-y-[100%] z-[0.5] 2s:hidden"}>
                    <button
                        className="custom-prev-news cursor-pointer transition-all ease-in-out duration-200 disabled:opacity-25 pointer-events-auto"
                        onClick={logButton}>
                        <SwiperPrev/>
                    </button>
                    <button
                        className="custom-next-news cursor-pointer transition-all ease-in-out duration-200 disabled:opacity-25 pointer-events-auto"
                        onClick={logButton}>
                        <SwiperNext/>
                    </button>
                </div>
                <div className={"flex justify-center items-center"}>
                    <div className="swiper-pagination-news !w-[67%] h-full !static flex 1s:flex-wrap 1s:max-w-[90%] my-[30px] mx-[0px] items-center justify-center 2s:pointer-events-auto">

                    </div>
                </div>
            </Swiper>
        </>
    );
};

export default SwiperNews;