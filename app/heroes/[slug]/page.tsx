import getHero from "@/actions/getHero";
import HeroContent from "@/app/heroes/[slug]/components/HeroContent";
import {IHeroes} from "@/types/heroes";
import {Metadata} from "next";

const HeroPage = async ({params}: {params: {
        slug: string
    }}) => {
    const hero: IHeroes | undefined = await getHero(params.slug);

    return (
        <>
            <HeroContent hero={hero} />
        </>
    );
};

export default HeroPage;
