"use client";

import {FC, useEffect, useState} from "react";
import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";
import {cn} from "@/lib/utils";

const MobileSidebar: FC = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect((): void => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
