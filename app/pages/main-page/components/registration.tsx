import React from 'react';
import Link from "next/link";
import Timer from "@/app/pages/main-page/components/timer";
import {DiagArrow} from "@/app/components/bricks/icons";
import {useTranslation} from "next-i18next";

const Registration:React.FC = () => {
    const { t } = useTranslation('main-page');


    return (
        <div className={"relative h-[200px] bottom-0 w-full bg-timer-bg bg-center 3.5s:min-h-[130px] "}>
            <div className={"container flex items-center justify-center h-full 3s:flex-wrap"}>
                <Timer/>
                <Link className={`text-white py-[15px] px-[30px] rounded inline-flex justify-center items-center font-medium bg-color-secondary w-[30%] m-5 max-w-[350px] relative 4s:px-[30px] 4s:py-[10px] 3s:px-[20px] 3s:max-w-[220px] 3s:w-full`}
                      href={"/register"}
                    >
                    {t('register')}
                    <DiagArrow/>
                </Link>

            </div>
        </div>
    );
};

export default Registration;