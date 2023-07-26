import getMatchesById from "@/actions/getMatchesById";
import SearchContent from "@/app/find-matches/components/SearchContent";
import {IFindMatches} from "@/types/find-matches";

interface FindMatchesPage {
    searchParams: {
        id: string;
    }
}

const FindMatchesPage = async ({searchParams}: FindMatchesPage) => {
    const match: IFindMatches | undefined = await getMatchesById(searchParams.id);

    return (
        <>
            <SearchContent match={match} />
        </>
    );
};

export default FindMatchesPage;
