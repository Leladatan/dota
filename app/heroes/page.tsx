import {NextPage} from "next";
import getHeroes from "@/actions/getHeroes";
import HeroesList from "@/components/pages/heroes/HeroesList";
import {IHeroes} from "@/types/heroes";

const HeroesPage: NextPage = async () => {
    const heroes: IHeroes[] | undefined = await getHeroes();

    return (
        <>
            <HeroesList heroes={heroes} />
        </>
    );
};

export default HeroesPage;
