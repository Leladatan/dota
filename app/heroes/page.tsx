import {Metadata, NextPage} from "next";
import getHeroes from "@/actions/getHeroes";
import HeroesList from "@/components/pages/heroes/HeroesList";
import {IHeroes} from "@/types/heroes";

export const metadata: Metadata = {
    title: 'Dota Info Heroes',
    description: 'Dota Info',
};

const HeroesPage: NextPage = async () => {
    const heroes: IHeroes[] | undefined = await getHeroes();

    return (
        <>
            <HeroesList heroes={heroes} />
        </>
    );
};

export default HeroesPage;
