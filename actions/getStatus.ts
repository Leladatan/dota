import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IHeroes} from "@/types/heroes";
import {IStatus} from "@/types/status";

const getStatus = async (): Promise<IStatus | undefined> => {
    try {
        const response: AxiosResponse<IStatus> = await axios.get(`${baseURL}/status`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getStatus;
