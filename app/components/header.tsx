import React from 'react';

type HeaderInput = {
    children:  React.ReactNode[],
    preventContainer?: boolean,
    preventHeaderClass?: boolean,
    className?: string
}

const Header:React.FC<HeaderInput> = ({children, preventHeaderClass=true, preventContainer=true, className}) => {
    return (
        <header className={preventHeaderClass? "" : "absolute w-full top-8 z-[2] text-lg 4s:text-[18px]"}>
            <div className={preventContainer? "" : "container"}>
                <div className={`flex items-center justify-between ${className}`}>
                    {children}
                </div>
            </div>
        </header>
    );
};

export default Header;