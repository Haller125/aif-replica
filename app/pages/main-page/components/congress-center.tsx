import React from 'react';
import HeadOfSegment from "@/app/components/head-of-segment";
import {useTranslation} from "next-i18next";

const CongressCenter:React.FC = () => {
    const {t} = useTranslation("main-page");

    return (
        <div className={"container "}>
            <HeadOfSegment title={t("congressCenter")} isButton={false}  />
            <div className={"flex h-[566px] 4s:h-[400px] 3s:h-fit 3s:flex-col"}>
                <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.203461533863!2d71.40804850607563!3d51.092332241350405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585ad0a5c0621%3A0x42c14eac2e46fcd3!2z0JrQvtC90LPRgNC10YHRgS3QptC10L3RgtGAINCQ0YHRgtCw0L3QsA!5e0!3m2!1sru!2skz!4v1682444762155!5m2!1sen!2sen"}
                className={"h-full min-w-[50%] 3s:h-[350px]"}></iframe>
                <div className={"relative w-full h-full 3s:hidden"}>
                    <img alt={"photo"} src={"https://astanainternationalforum.org/assets/images/location.jpg"}
                    className={"absolute h-full w-full top-0 bottom-0 left-0 right-0"}/>
                </div>
            </div>
        </div>
    );
};

export default CongressCenter;