import {type FC} from 'react';
import {IHeroes} from "@/types/heroes";
import Image from "next/image";
import Link from "next/link";

interface HeroesListProps {
    heroes: IHeroes[] | undefined;
}

const HeroesList: FC<HeroesListProps> = ({heroes}) => {
    return (
        <section className="grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-4 gap-5 px-6">
            {heroes?.map(hero => (
                <Link href={`heroes/${hero.localized_name}`} key={hero.id}
                      className="flex flex-col items-center justify-center gap-y-2 h-[100px]"
                >
                    <Image className="rounded-md" src={`https://api.opendota.com${hero.img}`}
                           width={80} height={80} alt="img" loading="lazy"
                    />
                    <h2 className="text-center">{hero.localized_name}</h2>
                </Link>
            ))}
        </section>
    );
};

export default HeroesList;
