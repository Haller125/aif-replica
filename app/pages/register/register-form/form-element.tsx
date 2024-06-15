import React from 'react';

type FormElementProps = {
    children: React.ReactNode,
    label: string,
    errorMessage?: string,
}

const FormElement:React.FC<FormElementProps> = ({label, errorMessage, children}) => {
    return (
        <div className={"mb-[25px] relative"}>
            <p className={"text-[16px] font-medium nb-[10px] text-color-primary"}>
                {label}
            </p>

            <div className={"relative"}>
                {children}
            </div>

            <p className={"min-h-[20px] text-[#e44444]"}>
                {errorMessage}
            </p>
        </div>
    );
};

export default FormElement;