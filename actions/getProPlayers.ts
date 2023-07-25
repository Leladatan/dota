import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IProPlayer} from "@/types/pro-players";

const getHero = async (): Promise<IProPlayer[] | undefined> => {
    try {
        const response: AxiosResponse<IProPlayer[]> = await axios.get(`${baseURL}/proPlayers`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getHero;
