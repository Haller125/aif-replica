import React from 'react';
import {PaginationArrow, PaginationDoubleArrow} from "@/app/components/bricks/icons";
import {Meta} from "@/utils/backend-requests/types/back-api-basic-types";
import {paginatorNumberSet} from "@/utils/paginator-number-set";

type NewsCardsPaginatorProps = {
    meta: Meta
    setCurrentPage: (page: number) => void
}

const NewsCardsPaginator:React.FC<NewsCardsPaginatorProps> = ({meta, setCurrentPage}) => {
    const classesPaginator:string = "inline-flex text-[20px] 1s:text-[14px] h-[24px] transition-all min-w-[24px] text-gray-500 hover:text-color-primary cursor-pointer items-center justify-center !mr-[10px] leading-[24px] m-0 rounded-[6px]"

    return (
        <ul className={"text-[14px] leading-[1.5714] list-none flex"}>
            <li className={`transition-all duration-200 cursor-pointer rounded-[6px] align-middle text-center text-black inline-block !mr-[10px] leading-[24px] m-0 h-[24px] min-w-[24px]`}>
                <button
                    className={`select-none cursor-pointer transition-all duration-200 rounded-[6px] text-center text-[12px] p-0 w-full h-full block disabled:cursor-not-allowed disabled:opacity-25 hover:bg-gray-500`}
                    onClick={()=>{setCurrentPage(Math.max(Math.min(meta.current_page-1, meta.last_page), 1))}}>
                        <span className={"-align-[0.125em] inline-flex items-center"}>
                            <PaginationArrow className={"inline-block"}/>
                        </span>
                </button>
            </li>

            <li className={`${classesPaginator} ${1 === meta.current_page ? "border-[2px] border-color-primary" : ""}`}>
                <a rel={"nofollow"} onClick={()=>{setCurrentPage(1)}}>1</a>
            </li>

            {(meta.current_page > 4) && <Paginator5Pages currentPage={meta.current_page} setCurrentPage={setCurrentPage} lastPage={meta.last_page}/>}

            {paginatorNumberSet(meta.current_page, meta.last_page).map((item, index) => {
                return (
                    <li key={index} className={`${classesPaginator} ${item === meta.current_page ? "border-[2px] border-color-primary" : ""}`}
                    onClick={()=>{setCurrentPage(item)}}>
                        <a rel={"nofollow"}>{item}</a>
                    </li>
                )
            })}

            {(meta.current_page < (meta.last_page - 3)) && <Paginator5Pages isReversed={true} currentPage={meta.current_page} setCurrentPage={setCurrentPage} lastPage={meta.last_page}/>}

            <li className={`${classesPaginator} ${meta.last_page === meta.current_page ? "border-[2px] border-color-primary" : ""}`}>
                <a rel={"nofollow"} onClick={()=>{setCurrentPage(meta.last_page)}}>{meta.last_page}</a>
            </li>

            <li className={`transition-all duration-200 cursor-pointer rounded-[6px] align-middle text-center text-black inline-block !mr-[10px] leading-[24px] m-0 h-[24px] min-w-[24px]`}>
                <button
                    className={`select-none cursor-pointer transition-all duration-200 rounded-[6px] text-center text-[12px] p-0 w-full h-full block disabled:cursor-not-allowed disabled:opacity-25 hover:bg-gray-500`}
                    onClick={()=>{setCurrentPage(Math.max(Math.min(meta.current_page+1, meta.last_page), 1))}}>
                        <span className={"-align-[0.125em] inline-flex items-center"}>
                            <PaginationArrow className={"inline-block rotate-180"}/>
                        </span>
                </button>
            </li>
        </ul>
    );
};

export default NewsCardsPaginator;

const Paginator5Pages: React.FC<{
    isReversed?: boolean,
    setCurrentPage: (page:number)=>void,
    currentPage:number,
    lastPage: number}> =
    ({isReversed=false, setCurrentPage, currentPage, lastPage}) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);

    return (
        <li className={"w-[34px] h-[24px]"}>
            <a>
                <div className={"cursor-pointer"}
                     onMouseOver={()=>{setIsHover(true)}}
                     onMouseLeave={()=>{setIsHover(false)}}
                     onClick={()=>{ setCurrentPage(Math.max(Math.min((isReversed? currentPage+4:currentPage-4), lastPage), 1)) }}>
                    <span className={`${isHover? "": "hidden"} transition-all duration-300`}>
                        <PaginationDoubleArrow className={`inline-block ${isReversed? "rotate-180" : ""}`}/>
                    </span>
                    <span className={`opacity-50 ${isHover ? "hidden" : ""} duration-300`}>•••</span>
                </div>
            </a>
        </li>
    )
}