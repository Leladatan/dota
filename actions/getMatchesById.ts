import axios, {AxiosResponse} from "axios";
import {baseURL} from "@/const/axios";
import {IFindMatches} from "@/types/find-matches";

;

const getMatchesById = async (id: string): Promise<IFindMatches | undefined> => {
    try {
        const response: AxiosResponse<IFindMatches> = await axios.get(`${baseURL}matches/${id}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

export default getMatchesById;
