import React, {useState} from 'react';
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import LogoWithLinkLight from "@/app/components/logo-with-link-light";
import ListOfLinksForHeader from "@/app/components/bricks/list-of-links-for-header";
import SocialNetworkList from "@/app/components/social-network-list";
import Burger from "@/app/components/burger";
import DataDrawer from "@/app/components/data-drawer/data-drawer";
import ChangeLanguageButton from "@/app/components/change-language-button";

type LayoutProps = {
    children: React.ReactNode;
    className?: string;
};

const WrapperLight: React.FC<LayoutProps>= ({children, className}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const handleBurgerClick = ():void => {
        setIsDrawerOpen(true);
        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 300);
    };

    const handleCloseDrawer = ():void => {
        setIsDrawerOpen(false);
        setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 300);
    };

    return (
        <>
            <DataDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}/>
            <Header preventContainer={false} preventHeaderClass={false} className={"text-white"}>
                <LogoWithLinkLight/>
                <ListOfLinksForHeader/>
                <SocialNetworkList/>
                <ChangeLanguageButton className={`text-white hover:text-color-secondary`}/>
                <Burger onClickLogic={handleBurgerClick}/>
            </Header>
            {children}
            <Footer/>
        </>
    );
};

export default WrapperLight;