import axios, {AxiosInstance} from "axios";

const BASE_URL1:string|undefined = process.env.NEXT_PUBLIC_BACK_API_BASE_URL_DEV;

export const axiosInstanceBackAPI:AxiosInstance = axios.create({
    baseURL: `${BASE_URL1}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})
