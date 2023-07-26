import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IFindPlayer} from "@/types/find-player";
import {IHeroes} from "@/types/heroes";

const getHeroById = async (id: number): Promise<IHeroes | undefined> => {
    try {
        const response: AxiosResponse<IHeroes[]> = await axios.get(`${baseURL}heroes`);
        return response.data.filter(hero => hero.id === id)[0];
    } catch (e) {
        console.error(e);
    }
};

export default getHeroById;
