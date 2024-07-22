import React from 'react';
import Register from "@/app/pages/register/register";
import {GetServerSideProps, GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import WrapperDark from "@/app/components/wrappper-dark";

const Index:React.FC = () => {
    return (
        <>
            <WrapperDark>
                <Register/>
            </WrapperDark>
        </>
    );
};

export default Index;

export const getStaticProps:GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
                ...(await serverSideTranslations(locale || 'en', ['page-wrapper', 'register-page']))
            }
        }
    }
    catch (e:any) {
        console.log(e);
        return e;
    }
}