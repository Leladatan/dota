import {type FC} from 'react';
import SearchInput from "./SearchInput";
import Image from "next/image";
import {IFindPlayer} from "@/types/find-player";
import {IWL} from "@/types/WL";
import rank from "@/functions/rank";
import Link from "next/link";
import {IPlayerHeroes} from "@/types/PlayerHeroes";

interface SearchContentProps {
    player: IFindPlayer | undefined;
    searchParams: {
        id: string;
    };
    wl: IWL | undefined;
    heroesGames: IPlayerHeroes[] | undefined;
}

const SearchContent: FC<SearchContentProps> = async ({player, searchParams, wl, heroesGames}) => {
    return (
        <>
            <section className="flex flex-col gap-y-2 px-6">
                <SearchInput />
                <div>
                    {!player ?
                        <h2>Not players found</h2>
                        :
                        <div className="flex gap-x-4 overflow-hidden p-2 w-full">
                            <div>
                                {player.profile.avatarfull && <Image src={player.profile.avatarfull}
                                                                     width={50} height={50}
                                                                     alt={player.profile.personaname} loading="lazy"
                                />}
                                <h3 className="text-center truncate">{player.profile.personaname}</h3>
                                <p>{wl && ((wl.win / (wl.win + wl.lose)) * 100).toFixed(2)}%</p>
                            </div>
                            <div>
                                <span>{rank(player.mmr_estimate.estimate)}</span>
                                {player.profile.plus && <Image src="/Dota_Plus_icon.png" width={25} height={25} alt="Dota Plus" />}
                                {player.profile.steamid && <Link href={player.profile.steamid}><Image src="/steam.png" width={25} height={25} alt="Steam" /></Link>}
                                <p>{player.profile.loccountrycode}</p>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    );
};

export default SearchContent;
