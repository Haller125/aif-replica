import React, {useState} from 'react';

type BurgerProps = {
    onClickLogic: () => void;
}

const Burger:React.FC<BurgerProps> = ({onClickLogic}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="cursor-pointer w-[30px] h-[20px] flex-col justify-between hidden 3s:flex"
             onMouseEnter={()=>{setIsHovered(true)}}
             onMouseLeave={()=>{setIsHovered(false)}}
             onClick={onClickLogic}
        >
            <div className={`transitionall ease-in-out duration-300 h-[2px] w-full bg-white ${isHovered? "!w-[25%]" : ""}`}></div>
            <div className={`transitionall ease-in-out duration-300 h-[2px] w-full bg-white ${isHovered? "!w-[90%]" : ""}`}></div>
            <div className={`transitionall ease-in-out duration-300 h-[2px] w-full bg-white ${isHovered? "!w-[50%]" : ""}`}></div>
        </div>
    );
};

export default Burger;