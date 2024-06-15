import React from 'react';
import {IFileRestrictions} from "@/public/static/data/register/file-restrictions";

type RestrictionListProps = {
    restrictions: IFileRestrictions[],
}

const RestrictionList:React.FC<RestrictionListProps> = ({restrictions}) => {
    return (
        <ul className={`mt-[10px] mb-[50px] ml-[20px]`}>
            {restrictions.map((restriction, index) => (
                <li key={index} className={`list-disc list-outside text-color-primary mb-[5px] text-[14px]`}>
                    {restriction.text}
                </li>
            ))}
        </ul>
    );
};

export default RestrictionList;