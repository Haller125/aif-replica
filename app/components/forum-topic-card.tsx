import React from 'react';
import {forumTopic} from "@/public/static/data/forum-topics-data";

type ForumTopicCardProps = {
    forumTopic: forumTopic
}

const ForumTopicCard:React.FC<ForumTopicCardProps> = ({forumTopic}) => {
    const style:string = "p-[30px] rounded-[10px] text-white transition-all duration-300 absolute overflow-hidden w-full h-full flex leading-[30px] shadow-[0_0_5px_3px_rgba(0,0,0,.2)] items-center 4s:leading-[25px]";
    // @TODO Add backside of card
    return (
        <div className={"h-[500px] transition-all relative 4s:h-[430px] 3s:h-[400px] 2s:h-[450px] hover:scale-[1.1]"}>
            <div className={`${style} text-center justify-center font-semibold text-[24px] 4s:text-[20px]`}>
                <div
                    className={"h-full w-full absolute top-0 -z-[2] after:absolute after:bg-[linear-gradient(0deg,rgba(7,28,68,.5),rgba(7,28,68,.5))] after:content-[''] after:w-full after:h-full after:z-[3] after:top-0 after:left-0"}>
                    <img alt={forumTopic.category} src={forumTopic.image} className={"absolute h-full w-full object-cover transition-all"}/>
                </div>
                <p>
                    {forumTopic.category}
                </p>
            </div>
        </div>
    );
};

export default ForumTopicCard;