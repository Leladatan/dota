import {NextPage} from "next";
import getProPlayers from "@/actions/getProPlayers";
import ProPlayersList from "@/app/pro-players/components/ProPlayersList";
import {IProPlayer} from "@/types/pro-players";

const ProPlayersPage: NextPage = async () => {
    const players: IProPlayer[] | undefined = await getProPlayers();

    return (
        <>
            <ProPlayersList players={players} />
        </>
    );
};

export default ProPlayersPage;
