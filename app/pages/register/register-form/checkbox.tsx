import React, {useState} from 'react';
import {CheckboxIcon} from "@/app/components/bricks/icons";

type CheckboxProps = {
    label: string,
    field: {
        onChange: () => void,
        onBlur: () => void,
        value: boolean,
    },
}

const Checkbox:React.FC<CheckboxProps> = ({label, field}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <label className={"flex items-center"}>
            <input type="checkbox" className={"absolute scale-0"}
                   checked={field.value || false}
                   onChange={field.onChange}
                   onBlur={field.onBlur}/>
            <span className={`border-[1px] border-solid border-color-primary mr-[10px] flex items-center justify-center w-[30px] h-[30px] 1s:w-[20px] 1s:h-[20px]`}>
                <CheckboxIcon className={`${field.value? "" : "hidden"}`}/>
            </span>
            <p className={`1s:text-[14px]`}>
                {label}
            </p>
        </label>
    );
};

export default Checkbox;