import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Dota Info',
    description: 'Dota Info',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={cn("h-full relative", inter.className)}>
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <main className="md:pl-72">
                <Navbar />
                {children}
            </main>
        </body>
        </html>
    )
};
