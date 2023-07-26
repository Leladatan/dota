import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IPlayerHeroes} from "@/types/PlayerHeroes";

const getPlayerHeroes = async (id: string): Promise<IPlayerHeroes[] | undefined> => {
    try {
        const response: AxiosResponse<IPlayerHeroes[]> = await axios.get(`${baseURL}players/${id}/heroes`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getPlayerHeroes;
