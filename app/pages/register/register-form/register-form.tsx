import React from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {IRegisterFormInterface} from "@/utils/types/register-form-interface";
import FormElement from "@/app/pages/register/register-form/form-element";
import Select, {StylesConfig} from "react-select";
import {countryOptions, CountryOptionsType} from "@/public/static/data/register/register-countries";

import FileInput from "@/app/pages/register/register-form/file-input";
import RestrictionList from "@/app/pages/register/register-form/restriction-list";
import {avatarRestrictionsList, passportRestrictionsList} from "@/public/static/data/register/file-restrictions";
import Checkbox from "@/app/pages/register/register-form/checkbox";
import {useTranslation} from "next-i18next";

const RegisterForm:React.FC = () => {
    const {t, i18n} = useTranslation("register-page");

    const {
        register,
        handleSubmit,
        formState:
            {
                errors
            },
        control,
        reset
    } = useForm<IRegisterFormInterface>( {
        defaultValues: {
            firstName: "",
            lastName: "",
            country: "",
            phone: "",
            email: "",
            company: "",
            jobTitle: "",
            personalPhoto: null,
            passportPhoto: null,
            isJournalist: false,
            consent: false,
            confirmation: false,
        },
        mode : "onBlur"
    });


    const onSubmit: SubmitHandler<IRegisterFormInterface> = (data) => {
        console.log(data);
    }

    const textInputStyles:string = "border-[1px] border-solid rounded-[5px] w-full leading-[20px] text-[16px] p-[20px] 1s:p-[10px] focus-visible:outline-none";

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={`my-[30px] mx-auto max-w-[750px]`}>
            <FormElement label={t("form.fname")} errorMessage={errors.firstName?.message}>
                <input type="text"
                       {...register("firstName", {
                           required: "This field is required",
                           minLength: {
                                 value: 2,
                                 message: "Minimum length is 2"
                           },
                           maxLength: {
                                 value: 50,
                                 message: "Maximum length is 50"
                           },
                            pattern: {
                                    value: /^[a-zA-Zа-яА-Я]+$/,
                                    message: "Only letters are allowed"
                            },
                       })}
                       className={`${errors.firstName? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.lname")} errorMessage={errors.lastName?.message}>
                <input type="text"
                       {...register("lastName", {
                           required: "This field is required",
                           minLength: {
                               value: 2,
                               message: "Minimum length is 2"
                           },
                           maxLength: {
                               value: 50,
                               message: "Maximum length is 50"
                           },
                           pattern: {
                               value: /^[a-zA-Zа-яА-Я]+$/,
                               message: "Only letters are allowed"
                           },
                       })}
                       className={`${errors.lastName? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.country")} errorMessage={errors.country?.message}>
                <Controller
                    name="country"
                    control={control}
                    rules={{
                        required: "This field is required",
                    }}
                    render={({field}) => (
                        <Select
                            {...field}
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    borderColor: errors.country?.message ? 'red' : base.borderColor,
                                    '&:hover': {
                                        borderColor: errors.country?.message ? 'red' : base.borderColor,
                                    },
                                }),
                                valueContainer: (base) => ({
                                    ...base,
                                    padding: '15px 20px',
                                }),
                                indicatorSeparator: (base) => ({
                                    ...base,
                                    display: 'none',
                                }),
                            }}
                            instanceId={"country"}
                            options={countryOptions as any}
                            className={`basic-single`}
                            classNamePrefix="select"
                        />
                    )}
                />
            </FormElement>

            <FormElement label={t("form.phone")} errorMessage={errors.phone?.message}>
                <input type={"number"}
                       inputMode={"tel"}
                       {...register("phone", {
                           required: "This field is required",
                            minLength: {
                                 value: 10,
                                 message: "Minimum length is 10"
                            },
                       })}
                       className={`${errors.phone? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.email")} errorMessage={errors.email?.message}>
                <input type="text"
                       {...register("email", {
                           required: "This field is required",
                            pattern: {
                                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                 message: "Invalid email"
                            },
                       })}
                       className={`${errors.email? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.company")} errorMessage={errors.company?.message}>
                <input type="text"
                       {...register("company", {
                           required: "This field is required"
                       })}
                       className={`${errors.company? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.jobt")} errorMessage={errors.jobTitle?.message}>
                <input type="text"
                       {...register("jobTitle", {
                           required: "This field is required",
                       })}
                       className={`${errors.jobTitle? "border-[#e44444]":"border-[#d1d6e0]"} ${textInputStyles}`}/>
            </FormElement>

            <FormElement label={t("form.persphoto")}>
                <Controller
                    control={control}
                    name={"personalPhoto"}
                    rules={{
                        required: "This field is required",
                    }}
                    render={({field}) => {
                        return (
                            <FileInput
                                field={{...field}} accept={[".png", ".jpeg", ".jpg"]}
                                error={errors.personalPhoto?.message}/>
                        );
                    }}/>
                <RestrictionList restrictions={avatarRestrictionsList[i18n.language]}/>
            </FormElement>

            <FormElement label={t("form.id/passp")}>
                <Controller
                    control={control}
                    name={"passportPhoto"}
                    rules={{
                        required: "This field is required",
                    }}
                    render={({field}) => {
                        return (
                            <FileInput field={{...field}} accept={[".png", ".jpeg", ".jpg", ".pdf"]} error={errors.passportPhoto?.message}/>
                        );
                    }}/>
                <RestrictionList restrictions={passportRestrictionsList[i18n.language]}/>
            </FormElement>

            <FormElement label={t("form.journalist")}>
                <Controller
                    control={control}
                    name={"isJournalist"}
                    render={({field}) => {
                        return (
                            <Checkbox label={t("form.yes")} field={{...field}}/>
                        );
                    }}/>
            </FormElement>

            <FormElement label={t("form.consent")} errorMessage={errors.consent?.message}>
                <Controller
                    control={control}
                    name={"consent"}
                    rules={{
                        required: "This field is required",
                    }}
                    render={({field}) => {
                        return (
                            <Checkbox
                                label={t("form.consentcontent")}
                                field={{...field}}/>
                        );
                    }}/>
            </FormElement>

            <FormElement label={t("form.confirm")} errorMessage={errors.confirmation?.message}>
                <Controller
                    control={control}
                    name={"confirmation"}
                    rules={{
                        required: "This field is required",
                    }}
                    render={({field}) => {
                        return (
                            <Checkbox
                                label={t("form.confirmcontent")}
                                field={{...field}}/>
                        );
                    }}/>
            </FormElement>

            <button className={`text-[24px] whitespace-nowrap text-white py-[15px] px-[30px] rounded-[5px] items-center justify-center inline-flex 4s:py-[10px] 3s:px-[20px] bg-color-secondary w-full text-center`}
                    type={"submit"}>
                {t("form.submit")}
            </button>
        </form>
    );
};

export default RegisterForm;