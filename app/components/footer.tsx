import React from 'react';
import LogoWithLinkLight from "@/app/components/logo-with-link-light";
import ListOfLinksForFooter from "@/app/components/bricks/list-of-links-for-footer";
import SocialNetworkList from "@/app/components/social-network-list";
import {useTranslation} from "next-i18next";

const Footer:React.FC = () => {
    const {t} = useTranslation("page-wrapper");

    return (
        <footer className={"relative mt-auto py-[30px] bg-[#071c44]"} >
            <div className={"container"}>
                <div className={"flex items-center justify-between"}>
                    <LogoWithLinkLight/>
                    <ListOfLinksForFooter/>
                    <SocialNetworkList preventHide={true}/>
                </div>
                <div className={"hidden items-center 3.5s:flex 3.5s:my-[20px] justify-center"}>
                    <ListOfLinksForFooter preventHide={true} className={"3.5s:justify-center"} />
                </div>
                <div className={"flex justify-center mt-1"} style={{color: "#3f4f6c"}}>
                    <p>{t("allRightsReserved")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;