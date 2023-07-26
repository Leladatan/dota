import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IWL} from "@/types/WL";

const getPlayerWL = async (id: string): Promise<IWL | undefined> => {
    try {
        const response: AxiosResponse<IWL> = await axios.get(`${baseURL}players/${id}/wl`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getPlayerWL;
