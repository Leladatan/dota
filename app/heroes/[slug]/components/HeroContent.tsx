import {type FC} from 'react';
import {IHeroes} from "@/types/heroes";
import Image from "next/image";

interface HeroContentProps {
    hero: IHeroes | undefined;
}

const HeroContent: FC<HeroContentProps> = ({hero}) => {
    if (!hero) return <div>Not found</div>

    return (
        <section className="px-6">
            {hero.localized_name}
            <Image src={`https://api.opendota.com${hero.img}`}
                   width={80} height={80} alt={hero.localized_name} priority
            />
        </section>
    );
};

export default HeroContent;
