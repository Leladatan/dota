import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IFindPlayer} from "@/types/find-player";

const getPlayerById = async (id: string): Promise<IFindPlayer | undefined> => {
    try {
        const response: AxiosResponse<IFindPlayer> = await axios.get(`${baseURL}players/${id}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getPlayerById;
