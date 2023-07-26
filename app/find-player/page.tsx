import getPlayerById from "@/actions/getPlayersById";
import SearchContent from "@/app/find-player/components/SearchContent";
import getPlayerWL from "@/actions/getPlayerWL";
import {IWL} from "@/types/WL";
import {IFindPlayer} from "@/types/find-player";
import {IPlayerHeroes} from "@/types/PlayerHeroes";
import getPlayerHeroes from "@/actions/getPlayerHeroes";

interface FindPlayerPage {
    searchParams: {
        id: string;
    }
}

const FindPlayerPage = async ({searchParams}: FindPlayerPage) => {
    const player: IFindPlayer | undefined = await getPlayerById(searchParams.id);
    const wl: IWL | undefined = await getPlayerWL(searchParams.id);
    const heroesGames: IPlayerHeroes[] | undefined = await getPlayerHeroes(searchParams.id);

    return (
        <>
            <SearchContent player={player} wl={wl} heroesGames={heroesGames} searchParams={searchParams} />
        </>
    );
};

export default FindPlayerPage;
