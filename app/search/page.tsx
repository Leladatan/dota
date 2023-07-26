import {IPlayerSearch} from "@/types/search";
import getPlayersByName from "@/actions/getPlayersByName";
import SearchContent from "@/app/search/components/SearchContent";
import {IProPlayer} from "@/types/pro-players";

interface SearchPage {
    searchParams: {
        q: string;
    }
}

const SearchPlayersPage = async ({searchParams}: SearchPage) => {
    const players: IPlayerSearch[] | IProPlayer[] | undefined = await getPlayersByName(searchParams.q);

    return (
        <>
            <SearchContent players={players} searchParams={searchParams}/>
        </>
    );
};

export default SearchPlayersPage;
