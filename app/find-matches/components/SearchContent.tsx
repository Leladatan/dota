import {type FC} from 'react';
import SearchInput from "./SearchInput";
import {IFindMatches} from "@/types/find-matches";
import Link from "next/link";
import {Coins} from "lucide-react";

interface SearchContentProps {
    match: IFindMatches | undefined;
}

const SearchContent: FC<SearchContentProps> = async ({match}) => {
    return (
        <>
            <section className="flex flex-col gap-y-2 px-6">
                <SearchInput />
                    {!match ?
                        <h2>Not matches found</h2>
                        :
                        <>
                            <div className="flex justify-between items-center">
                                <div className="flex items-start justify-start gap-x-4">
                                    <p>Match id: {match.match_id}</p>
                                    <Link href={match.replay_url}>Replay</Link>
                                </div>

                                <div className="flex items-center justify-end">
                                    <p className={match.radiant_win ? "text-green-500" : "text-red-500"}>Win: {match.radiant_win ? "Radiant" : "Dire"}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-x-6">
                                    <p className="text-green-500">Radiant: {match.radiant_score}</p>
                                    <p>{match.duration / 60} min</p>
                                    <p className="text-red-500">Dire: {match.dire_score}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h2>Radiant</h2>
                                <div className="grid grid-cols-5 gap-x-4">
                                    {match?.players.map(player => (
                                        <div key={player.account_id}>
                                            <div>
                                                <h3>{player.personaname}</h3>
                                            </div>
                                            <div>
                                                <p>Lvl: {player.level}</p>
                                            </div>
                                            <div>
                                                <p>K: {player.kills}</p>
                                                <p>D: {player.deaths}</p>
                                                <p>A: {player.assists}</p>
                                                <p>KDA: {player.kda}</p>
                                            </div>
                                            <div>
                                                <p className="flex gap-x-2">{player.total_gold} <Coins size={20} /></p>
                                                <p className="flex gap-x-2">{player.gold_per_min}/min <Coins size={20} /></p>
                                            </div>
                                            <div>
                                                <p>{player.last_hits}/{player.denies}</p>
                                            </div>
                                            <div>
                                                <p>Damage hero: {player.hero_damage}</p>
                                                <p>Healing hero: {player.hero_healing}</p>
                                                <p>Damage tower: {player.tower_damage}</p>
                                            </div>
                                        </div>
                                    )).slice(0, 5)}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h2>Dire</h2>
                                <div className="grid grid-cols-5 gap-x-4">
                                    {match?.players.map(player => (
                                        <div key={player.account_id}>
                                            <div>
                                                <h3>{player.personaname}</h3>
                                            </div>
                                            <div>
                                                <p>Lvl: {player.level}</p>
                                            </div>
                                            <div>
                                                <p>K: {player.kills}</p>
                                                <p>D: {player.deaths}</p>
                                                <p>A: {player.assists}</p>
                                                <p>KDA: {player.kda}</p>
                                            </div>
                                            <div>
                                                <p className="flex gap-x-2">{player.total_gold} <Coins size={20} /></p>
                                                <p className="flex gap-x-2">{player.gold_per_min}/min <Coins size={20} /></p>
                                            </div>
                                            <div>
                                                <p>{player.last_hits}/{player.denies}</p>
                                            </div>
                                            <div>
                                                <p>Damage hero: {player.hero_damage}</p>
                                                <p>Healing hero: {player.hero_healing}</p>
                                                <p>Damage tower: {player.tower_damage}</p>
                                            </div>
                                        </div>
                                    )).slice(5, 10)}
                                </div>
                            </div>
                        </>
                    }
            </section>
        </>
    );
};

export default SearchContent;
