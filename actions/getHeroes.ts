import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IHeroes} from "@/types/heroes";
import compare from "@/functions/compare";

const getHeroes = async (): Promise<IHeroes[] | undefined> => {
    try {
        const response: AxiosResponse<IHeroes[]> = await axios.get(`${baseURL}/heroStats`);
        return response.data.sort(compare);
    } catch (e) {
        console.error(e);
    }
};

export default getHeroes;
