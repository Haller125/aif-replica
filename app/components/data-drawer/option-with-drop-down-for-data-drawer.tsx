import React from 'react';
import {DropdownIcon} from "@/app/components/bricks/icons";
import {IListLinks} from "@/public/static/data/list-links";

type LinksProps = {
    listLinks: IListLinks[];
    optionName: string;
}

const OptionWithDropDownForDataDrawer:React.FC<LinksProps> = ({listLinks, optionName}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={"m-0 text-white text-[26px] capitalize leading-[25px] 1s:leading-[20px] w-full flex-col text-left items-center justify-between"}>
            <div className={"flex"}>
                {optionName}
                <span className={"cursor-pointer mx-[10px]"} onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                <DropdownIcon isUp={isOpen}/>
            </span>
            </div>
            <div className={`overflow-hidden transition-[height] duration-[350ms] ease-in-out ${isOpen? "h-[215px]":"h-0"} px-[20px] flex-col`}>
                <ul >
                    {listLinks.map((link, index) => (
                        <a href={link.link} className={"text-gray-500 mb-[5px] mt-[10px] block"}  key={index}>
                            <li className={"text-[20px]"}>
                                {link.name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OptionWithDropDownForDataDrawer;