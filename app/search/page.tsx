import {IPlayerSearch} from "@/types/search";
import SearchContent from "@/app/search/components/SearchContent";
import {IProPlayer} from "@/types/pro-players";
import getSearch from "@/actions/getSearch";

interface SearchPage {
    searchParams: {
        q: string;
    }
}

const SearchPage = async ({searchParams}: SearchPage) => {
    const players: IPlayerSearch[] | IProPlayer[] | undefined = await getSearch(searchParams.q);

    return (
        <>
            <SearchContent players={players} searchParams={searchParams}/>
        </>
    );
};

export default SearchPage;
