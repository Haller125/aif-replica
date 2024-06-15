import React from 'react';
import Image from "next/image";
import Link from "next/link";

const LogoWithLinkDark:React.FC = () => {
    return (
        <Link href={"/"}>
            <Image src={"https://astanainternationalforum.org/assets/images/Logo-colored.png"} alt={"logo"} width={123} height={70}/>
        </Link>
    );
};

export default LogoWithLinkDark;