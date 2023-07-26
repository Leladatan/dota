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
            <section className="flex flex-col gap-y-2 px-6">
                <SearchInput />
                <div className={players?.length === 0 ? "flex items-center justify-center" :
                    "grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-4 gap-5"}
                >
                    {players?.length === 0 ?
                        <h2>Not players found</h2>
                        :
                        players?.map(player => (
                            <div key={player.account_id} className="flex flex-col items-center justify-center gap-y-2 overflow-hidden p-2">
                                {player.avatarfull && <Image src={player.avatarfull} width={50} height={50} alt={player.personaname} loading="lazy" />}
                                <h3 className="text-center truncate">{player.personaname}</h3>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default SearchContent;
