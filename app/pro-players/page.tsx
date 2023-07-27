import {Metadata, NextPage} from "next";
import getProPlayers from "@/actions/getProPlayers";
import ProPlayersList from "@/app/pro-players/components/ProPlayersList";
import {IProPlayer} from "@/types/pro-players";

export const metadata: Metadata = {
    title: 'Dota Info Pro-Players',
    description: 'Dota Info',
};

const ProPlayersPage: NextPage = async () => {
    const players: IProPlayer[] | undefined = await getProPlayers();

    return (
        <>
            <ProPlayersList players={players} />
        </>
    );
};

export default ProPlayersPage;
