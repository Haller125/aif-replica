import React from 'react';
import {Participant} from "@/utils/backend-requests/types/back-api-participant-types";
import {useTranslation} from "next-i18next";
import {Locales} from "@/utils/types/interfaces";

type ParticipantCardProps = {
    participant: Participant
};

const ParticipantCard:React.FC<ParticipantCardProps> = ({participant}) => {
    const {i18n} = useTranslation("main-page")

    return (
        <div className={"relative shadow-[0_0_10px_5px_rgba(0,0,0,.1)] bg-white m-[10px] overflow-hidden w-auto max-w-[350px] rounded-[10px]"}>
            <div className={"h-[400px] relative 4s:h-[380px] 3s:h-[350px]"}>
                <div className={"relative w-full h-full "}>
                    <img src={participant.image} alt={participant[`last_name_${i18n.language as keyof Locales}`]}
                         className={"object-cover transition-all object-top absolute h-full w-full left-0 right-0 top-0 bottom-0"}/>
                </div>
            </div>
            <div className={"py-[30px] px-[20px] 4s:p-[20px]"}>
                <p className={"text-[#221f1f] font-medium text-[20px] overflow-hidden 4s:text-[18px] text-ellipsis line-clamp-1"}>
                    {participant[`name_${i18n.language as keyof Locales}`] + " "} {participant[`last_name_${i18n.language as keyof Locales}`]}
                </p>
                <p className={"mt-[18px] font-medium text-[#1f3c88] text-[14px] 4s:mt-[15px] line-clamp-2 h-[45px] text-ellipsis"}>
                    {participant[`description_${i18n.language as keyof Locales}`]}
                </p>

            </div>
        </div>
    );
};

export default ParticipantCard;