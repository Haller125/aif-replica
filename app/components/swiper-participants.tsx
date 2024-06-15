import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, A11y, Pagination} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/a11y';
import 'swiper/css/pagination';
import ParticipantCard from "@/app/components/participant-card";
import {Participant} from "@/utils/backend-requests/types/back-api-participant-types";
import {SwiperNext, SwiperPrev} from "@/app/components/bricks/icons";

type SwiperParticipantsProps = {
    participants: Participant[],
}

const SwiperParticipants:React.FC<SwiperParticipantsProps> = ({participants}) => {

    const renderBulletForLargeScreen:(index: number, className: string) => string = (index, className) => {
        return '<span class="!h-[2px] !opacity-100 !rounded-[0px] !w-full !m-0  bg-black 2s:!mx-[5px] 2s:!h-[12px] 2s:!min-w-[12px] 1s:!max-w-[12px] !mt-[10px] ' + className + '"></span>';
    }

    const breakpoints = {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    };

    return (
        <div>
            <Swiper
                modules={[A11y, Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={breakpoints}

                navigation={{
                    nextEl: '.custom-next-participants',
                    prevEl: '.custom-prev-participants',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination-participants', renderBullet: renderBulletForLargeScreen }}
            >
                {participants.map((participant, index) => {
                    return (
                        <SwiperSlide key={index}>
                           <ParticipantCard participant={participant}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={"flex justify-center items-center"}>
                <button className="custom-prev-participants cursor-pointer transition-all ease-in-out duration-200 2s:scale-0">
                    <SwiperPrev/>
                </button>
                <div className="swiper-pagination-participants !w-[66%] h-full !static flex 1s:flex-wrap 1s:max-w-[90%] my-[30px] mx-[0px] items-center justify-center"/>
                <button className="custom-next-participants cursor-pointer transition-all ease-in-out duration-200 2s:scale-0">
                    <SwiperNext/>
                </button>
            </div>
        </div>
    );
};
export default SwiperParticipants;