import React from 'react';
import {InstagramIcon, LinkedinIcon, TelegramIcon, TwitterIcon, YoutubeIcon} from "@/app/components/bricks/icons";
import Link from "next/link";

type SocialNetworkListProps = {
    preventHide?: boolean;
}

const SocialNetworkList:React.FC<SocialNetworkListProps> = ({preventHide = false}) => {
    let stylesForIcons:string = "3.5s:w-[30px] 3.5s:h-[30px]"

    return (
        <div className={preventHide? "" : "3s:hidden"}>
            <div className={"flex"}>
                <Link href={"#"} className={"mr-[29px] 3.5s:!mr-[10px] 4s:mr-[20px]"}>
                    <LinkedinIcon className={stylesForIcons}/>
                </Link>
                <Link href={"#"} className={"mr-[29px] 3.5s:!mr-[10px] 4s:mr-[20px]"}>
                    <InstagramIcon className={stylesForIcons}/>
                </Link>
                <Link href={"#"} className={"mr-[29px] 3.5s:!mr-[10px] 4s:mr-[20px]"}>
                    <YoutubeIcon className={stylesForIcons}/>
                </Link>
                <Link href={"#"}  className={"mr-[29px] 3.5s:!mr-[10px] 4s:mr-[20px]"}>
                    <TwitterIcon className={stylesForIcons}/>
                </Link>
                <Link href={"#"}>
                    <TelegramIcon className={stylesForIcons}/>
                </Link>
            </div>
        </div>
    );
};

export default SocialNetworkList;