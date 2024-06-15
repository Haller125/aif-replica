export interface IRegisterFormInterface {
    firstName: string,
    lastName: string,
    country: string,
    phone: string,
    email: string,
    company: string,
    jobTitle: string,
    personalPhoto: File | null,
    passportPhoto: File | null,
    isJournalist: boolean,
    consent: boolean,
    confirmation: boolean,
}