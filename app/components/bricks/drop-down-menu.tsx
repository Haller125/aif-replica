import React, {useEffect, useRef, useState} from 'react';
import {DropdownIcon} from "@/app/components/bricks/icons";
import {IListLinks} from "@/public/static/data/list-links";

type DropDownMenuProps = {
    links: IListLinks[]
}


const DropDownMenu:React.FC<DropDownMenuProps> = ({links}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Step 1: Create a ref
    const buttonRef = useRef<HTMLButtonElement>(null);



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ((dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) && (buttonRef.current && !buttonRef.current.contains(event.target as Node)) ) {
                setIsOpened(false) // Close the dropdown if the click is outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Cleanup the event listener
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpened(!isOpened);
    };


    return (
        <>
            <button ref={buttonRef} onClick={()=>{toggleDropdown()}}>
                <DropdownIcon isUp={isOpened}/>
            </button>
            <div ref={dropdownRef} className={"w-fit absolute z-[3] bg-white p-4 transition rounded easy-in-out text-black text-base font-medium origin-[85%_0%] top-full " + (isOpened ? "scale-100" : "scale-0")}>
                <ul className={"w-fit"}>
                    {links.map((link, index) => (
                        <a key={index} href={link.link} className={"hover:text-color-secondary w-fit"}>
                            <li className={"w-fit whitespace-nowrap"}>{link.name}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DropDownMenu;