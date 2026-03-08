"use client";

import { useEffect, useState } from "react";

// pure helper placed outside component so it isn’t re‑created on every render
export function filterItems(items: any[], search: string) {
    const term = search.trim().toLowerCase();
    if (!term) return [];
    return items.filter((it: { name: string }) =>
        it.name.toLowerCase().includes(term)
    ).slice(0, 5); // limit to 5 results
}

export default function Search() {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState<any[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(async () => {
            try {
                const res = await fetch("http://localhost:8080/api/items", { signal: controller.signal });
                const data = await res.json();
                setFiltered(filterItems(data, search));
            } catch (err) {
                // fetch aborted or failed – ignore
            }
        }, 1500);

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [search]);

    return <>
        <input value={search} onChange={(e) => {e.preventDefault(); e.stopPropagation(); setSearch(e.target.value)}} type="text" placeholder="Search items..." className="border border-gray-300 rounded-md px-4 py-2 w-full" />
        <div>
            {filtered.map((item: any) => (
                <div key={item.id} className="border-b border-gray-200 py-2">
                    <p className="text-sm text-gray-700">{item.name}</p>
                </div>
            ))}
        </div>
    </>
}