import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IHeroes} from "@/types/heroes";

const getHero = async (slug: string): Promise<IHeroes | undefined> => {
    try {
        const response: AxiosResponse<IHeroes[]> = await axios.get(`${baseURL}/heroStats`);
        return response.data.filter(hero => slug === hero.name)[0];
    } catch (e) {
        console.error(e);
    }
};

export default getHero;
