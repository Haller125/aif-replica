import React from 'react';
import BreadScrum from "@/app/components/bread-scrum";
import {breadScrumRegister} from "@/public/static/data/register/bread-scrum-register";
import {useTranslation} from "next-i18next";
import RegisterForm from "@/app/pages/register/register-form/register-form";

const Register:React.FC = () => {
    const {i18n, t} = useTranslation("register-page");

    return (
        <main
            style={{background: "url(https://astanainternationalforum.org/_next/static/media/Vector.8d43a1ed.png) 100% no-repeat, url(https://astanainternationalforum.org/_next/static/media/Vector.8d43a1ed.png) 0 no-repeat"}}>
            <div className={"pt-[15px] h-[85px]"}/>
            <div className={"container"}>
                <BreadScrum items={breadScrumRegister["en"]}/>
                <h1 className={`p-[40px] rounded-[120px] bg-[#071c44] text-white text-center 2s:p-[30px] 1s:p-[25px] text-[40px]`}>
                    {t("title")}
                </h1>
                <h2 className={`pt-[50px] pb-[70px] text-center text-[35px] 1s:text-[30px] 1s:pt-[40px] 1s:pb-[20px]`}>
                    {t("subTitle")}
                </h2>
                <RegisterForm/>
            </div>
        </main>
    );
};

export default Register;