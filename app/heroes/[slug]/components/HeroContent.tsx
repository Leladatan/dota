import {type FC, useEffect} from 'react';
import {IHeroes} from "@/types/heroes";
import Image from "next/image";
import attr from "@/functions/attr";

interface HeroContentProps {
    hero: IHeroes | undefined;
}

const HeroContent: FC<HeroContentProps> = ({hero}) => {
    if (!hero) return <div>Not found</div>

    return (
        <>
            <section className="flex justify-between gap-x-4 px-6 w-full">
                <div>
                    <h2>{hero.localized_name}</h2>
                    <Image src={`https://api.opendota.com${hero.img}`}
                           width={80} height={80} alt={hero.localized_name} priority
                    />
                    <p>{attr(hero.primary_attr)}</p>
                    <p>{hero.attack_type}</p>
                    <div>
                        <h3>Roles</h3>
                        {hero.roles.map(role => (
                            <p key={role}>{role}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>Specifications</h2>
                    <p>Base health: {hero.base_health}</p>
                    <p>Base health regen: {hero.base_health_regen}</p>
                    <p>Base mana: {hero.base_mana}</p>
                    <p>Base attack: {hero.base_attack_max} - {hero.base_attack_min}</p>
                    <p>Base str: {hero.base_str} + 1 lvl = {hero.str_gain}</p>
                    <p>Base agi: {hero.base_agi} + 1 lvl = {hero.agi_gain}</p>
                    <p>Base int: {hero.base_int} + 1 lvl = {hero.int_gain}</p>
                    <p>Base attack rate: {hero.attack_rate}</p>
                    <p>Base move speed: {hero.move_speed}</p>
                    <p>Base day vision: {hero.day_vision}</p>
                    <p>Base night vision: {hero.night_vision}</p>
                </div>
            </section>
            <section className="px-6">
                <p>Turbo picks: {hero.turbo_picks} - {((hero.turbo_wins / hero.turbo_picks) * 100).toFixed(2)}%</p>
                <p>Pro picks: {hero.pro_pick} - {((hero.pro_win / hero.pro_pick) * 100).toFixed(2)}%</p>
                <p>Ban rate {hero.pro_ban}</p>
            </section>
            <section className="px-6">
                <p>1 pick: {hero["1_pick"]} - {((hero["1_win"] / hero["1_pick"]) * 100).toFixed(2)}%</p>
                <p>2 pick: {hero["2_pick"]} - {((hero["2_win"] / hero["2_pick"]) * 100).toFixed(2)}%</p>
                <p>3 pick: {hero["3_pick"]} - {((hero["3_win"] / hero["3_pick"]) * 100).toFixed(2)}%</p>
                <p>4 pick: {hero["4_pick"]} - {((hero["4_win"] / hero["4_pick"]) * 100).toFixed(2)}%</p>
                <p>5 pick: {hero["5_pick"]} - {((hero["5_win"] / hero["5_pick"]) * 100).toFixed(2)}%</p>
                <p>6 pick: {hero["6_pick"]} - {((hero["6_win"] / hero["6_pick"]) * 100).toFixed(2)}%</p>
                <p>7 pick: {hero["7_pick"]} - {((hero["7_win"] / hero["7_pick"]) * 100).toFixed(2)}%</p>
                <p>8 pick: {hero["8_pick"]} - {((hero["8_win"] / hero["8_pick"]) * 100).toFixed(2)}%</p>
            </section>
        </>
    );
};

export default HeroContent;
