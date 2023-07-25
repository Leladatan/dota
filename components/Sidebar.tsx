"use client";

import {FC} from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {Clock3, List, LucideIcon, MonitorPlay, Search, Star, Tv, User2} from "lucide-react";
import Image from "next/image";

export interface routes {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: string;
}

const routes: routes[] = [
    {
        label: "All Heroes",
        icon: List,
        href: "/heroes",
        color: "text-red-500",
    },
    {
        label: "Status",
        icon: Clock3,
        href: "/status",
        color: "text-sky-500",
    },
    {
        label: "Find matches",
        icon: Tv,
        href: "/find-matches",
        color: "text-emerald-500",
    },
    {
        label: "Live matches",
        icon: MonitorPlay,
        href: "/live-matches",
        color: "text-orange-500",
    },
    {
        label: "Find player",
        icon: User2,
        href: "/find-player",
        color: "text-violet-500",
    },
    {
        label: "Pro players",
        icon: Star,
        href: "/pro-players",
        color: "text-yellow-500",
    },
    {
        label: "Search",
        icon: Search,
        href: "/search",
        color: "text-neutral-500",
    },
];

const Sidebar: FC = () => {
    const pathname: string = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="flex flex-col gap-y-2 px-3 py-2 flex-1">
                <Link href="/" className="flex items-center pl-3 md-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image src="/logo.svg" fill alt="Dota logo" />
                    </div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-neutral-700 text-2xl font-bold">
                        Dota Info
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map(route => (
                        <Link href={route.href} key={route.href}
                              className={cn("text-sm group flex p-3 w-full justify-start " +
                                  "font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                  pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                              )}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                <h2>{route.label}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
