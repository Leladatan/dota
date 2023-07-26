import {type FC} from 'react';
import {IPlayerSearch} from "@/types/search";
import SearchInput from "./SearchInput";
import {IProPlayer} from "@/types/pro-players";
import Image from "next/image";

interface SearchContentProps {
    players: IPlayerSearch[] | IProPlayer[] | undefined;
    searchParams: {
        q: string;
    }
}

const SearchContent: FC<SearchContentProps> = ({players, searchParams}) => {
    return (
        <>
            <div className="px-6">
                <SearchInput />
                <div className={players?.length === 0 ? "flex items-center justify-center" : "grid grid-cols-3 gap-5"}>
                    {players?.length === 0 ?
                        <h2>Not players found</h2>
                        :
                        players?.map(player => (
                            <div key={player.account_id}>
                                <h3>{player.personaname}</h3>
                                {player.avatarfull && <Image src={player.avatarfull} width={50} height={50} alt={player.personaname} loading="lazy" />}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default SearchContent;
