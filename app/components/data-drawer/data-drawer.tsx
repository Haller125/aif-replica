import React from 'react';
import Header from "@/app/components/header";
import LogoWithLinkLight from "@/app/components/logo-with-link-light";
import SocialNetworkList from "@/app/components/social-network-list";
import {CrossIcon} from "@/app/components/bricks/icons";
import NavLinksForDataDrawer from "@/app/components/data-drawer/nav-links-for-data-drawer";

type DataDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const DataDrawer:React.FC<DataDrawerProps> = ({isOpen, onClose}) => {
    return (
        <div className={`bg-timer-bg bg-center z-[3] w-full h-full fixed transition-all duration-300 ease-in-out ${isOpen ? '' : '-translate-y-full'}`}>
            <div className={"container !p-[20px]"}>
                <div className={"mb-[40px] 1s:mb-0"}>
                    <Header>
                        <LogoWithLinkLight/>
                        <div className={"flex 1s:hidden"}>
                            <SocialNetworkList preventHide={true}/>
                        </div>
                        <div className={"cursor-pointer"}
                             onClick={onClose}>
                            <CrossIcon/>
                        </div>
                    </Header>
                </div>
                <div className={"hidden 1s:flex justify-center mt-[20px] mb-[40px]"}>
                    <SocialNetworkList preventHide={true}/>
                </div>
                <NavLinksForDataDrawer/>
            </div>
        </div>
    );
};

export default DataDrawer;