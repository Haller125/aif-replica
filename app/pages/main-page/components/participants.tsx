import React from 'react';
import SwiperParticipants from "@/app/components/swiper-participants";
import {Participant} from "@/utils/backend-requests/types/back-api-participant-types";
import HeadOfSegment from "@/app/components/head-of-segment";
import {useTranslation} from "next-i18next";

type ParticipantsProps = {
    participants: Participant[],
}
const Participants:React.FC<ParticipantsProps> = ({participants}) => {
    const {t} = useTranslation('main-page');

    return (
        <div className={"container"}>
            <HeadOfSegment title={t("participants.title")} isButton={false} buttonText={t("participants.buttonText")}/>
            <div className={"relative my-[40px] "}>
                <SwiperParticipants participants={participants} />
            </div>
        </div>
    );
};

export default Participants;