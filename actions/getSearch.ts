import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IPlayerSearch} from "@/types/search";
import {IProPlayer} from "@/types/pro-players";
import getProPlayers from "@/actions/getProPlayers";

const getSearch = async (q: string): Promise<IPlayerSearch[] | IProPlayer[] | undefined> => {
    if (q === "") {
        return await getProPlayers();
    }

    try {
        const response: AxiosResponse<IPlayerSearch[]> = await axios.get(`${baseURL}search?q=${q}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getSearch;
