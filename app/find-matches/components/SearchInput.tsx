"use client";

import {type FC, useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import qs from "query-string";

const SearchInput: FC = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect((): void => {
        const query: {id: string} = {
            id: debouncedValue,
        };

        const url: string = qs.stringifyUrl({
            url: '/find-matches',
            query: query,
        });

        router.push(url);
    }, [debouncedValue, router]);

    return (
            <input
                type="text"
                placeholder="Search player by name..."
                value={value}
                onChange={e => setValue(e.target.value)}
                className="w-full p-2 rounded-md outline-none border-2"
            />
    );
};

export default SearchInput;
