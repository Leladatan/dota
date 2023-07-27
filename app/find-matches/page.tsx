import getMatchesById from "@/actions/getMatchesById";
import SearchContent from "@/app/find-matches/components/SearchContent";
import {IFindMatches} from "@/types/find-matches";
import {Metadata} from "next";

interface FindMatchesPage {
    searchParams: {
        id: string;
    }
}

export const metadata: Metadata = {
    title: 'Dota Info Find Matches',
    description: 'Dota Info',
};

const FindMatchesPage = async ({searchParams}: FindMatchesPage) => {
    const match: IFindMatches | undefined = await getMatchesById(searchParams.id);

    return (
        <>
            <SearchContent match={match} />
        </>
    );
};

export default FindMatchesPage;
