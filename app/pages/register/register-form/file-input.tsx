import React, {useState} from 'react';
import {useTranslation} from "next-i18next";

type AcceptType = ".png" | ".jpg" | ".jpeg" | ".gif" | ".bmp" | ".webp" | ".svg" | ".tiff" | ".ico" | ".heif" | ".indd" | ".ai" | ".eps" | ".pdf" | ".psd" | ".doc" | ".docx" | ".ppt" | ".pptx" | ".xls" | ".xlsx" | ".txt" | ".rtf" | ".csv" | ".mp4" | ".m4a" | ".mp3" | ".wav" | ".wma" | ".avi" | ".mpg" | ".mpeg" | ".mov" | ".flv" | ".mkv";

type FileInputProps = {
    field: {
        onChange: (files: File | null) => void,
        onBlur: () => void,
        value: File | null,
        ref: React.Ref<HTMLInputElement>,
    },
    error?: string | null,
    accept?: AcceptType[] | AcceptType,
    maxSize?: number,
}

const FileInput: React.FC<FileInputProps> =
    ({
         field,
         error,
         accept,
        maxSize = 7*1024*1024
     }) => {
    const { t } = useTranslation("register-page");

    const [isFileBig, setIsFileBig] = useState<boolean>(false)

    return (
        <div className={"w-full relative flex items-center flex-row 1s:flex-col"}>
            <label className={`${error ? "!text-red-700" : ""} text-[24px] w-fit whitespace-nowrap text-white rounded-[5px] inline-flex justify-center items-center py-[10px] px-[30px] 3s:px-[20px] bg-color-primary mr-[15px] cursor-pointer`}>
                {field.value? t("form.fileinput.change"): t("form.fileinput.choose") }
                <input
                    type="file"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files && e.target.files[0].size > maxSize) { setIsFileBig(true)}
                        else { setIsFileBig(false) }
                        field.onChange(e.target.files && e.target.files.length > 0 && e.target.files[0].size > maxSize? e.target.files[0] : null);
                    }}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    className={"scale-0 absolute"}
                    accept={`${accept}`}
                />
            </label>
            <p>
                {isFileBig? t("form.fileinput.toobig") : (field.value? field.value.name : t("form.fileinput.nofile"))}
            </p>
        </div>
    );
};

export default FileInput;
