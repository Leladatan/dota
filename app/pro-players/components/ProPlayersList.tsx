import {type FC} from 'react';
import {IProPlayer} from "@/types/pro-players";
import Image from "next/image";

interface ProPlayersListProps {
    players: IProPlayer[] | undefined;
}

const ProPlayersList: FC<ProPlayersListProps> = ({players}) => {
    return (
        <section className="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-4 gap-5 px-6">
            {players?.map(player => (
                <>
                    <p key={player.account_id} className="text-center">{player.name}</p>
                    {player.avatarfull && <Image src={player.avatarfull} width={50} height={50} alt={player.personaname} loading="lazy" />}
                </>
            ))}
        </section>
    );
};

export default ProPlayersList;
