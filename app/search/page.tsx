import {IPlayerSearch} from "@/types/search";
import SearchContent from "@/app/search/components/SearchContent";
import {IProPlayer} from "@/types/pro-players";
import getSearch from "@/actions/getSearch";
import {Metadata} from "next";

interface SearchPage {
    searchParams: {
        q: string;
    }
}

export const metadata: Metadata = {
    title: 'Dota Info Search',
    description: 'Dota Info',
};

const SearchPage = async ({searchParams}: SearchPage) => {
    const players: IPlayerSearch[] | IProPlayer[] | undefined = await getSearch(searchParams.q);

    return (
        <>
            <SearchContent players={players} searchParams={searchParams}/>
        </>
    );
};

export default SearchPage;
