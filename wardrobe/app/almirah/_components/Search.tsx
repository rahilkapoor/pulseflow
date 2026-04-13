"use client";

import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const timeout = setTimeout(async () => {
            if (!search.trim()) {
                setFiltered([]);
                return;
            }

            try {
                setLoading(true);
                const res = await fetch(`${API_BASE_URL}/api/items?search=${encodeURIComponent(search)}`, { signal: controller.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setFiltered(data.slice(0, 5)); // limit to 5 results
            } catch (err) {
                if (err instanceof Error && err.name !== "AbortError") {
                    console.error("Search error:", err);
                }
                setFiltered([]);
            } finally {
                setLoading(false);
            }
        }, 1500); // debounce search

        return () => {
            clearTimeout(timeout);
            controller.abort();
        };
    }, [search]);

    return (
        <div className="space-y-2">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search items by name, brand, color, pattern, or size..."
                className="border border-slate-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {loading && <div className="text-sm text-slate-500">Searching...</div>}
            {filtered.length > 0 && (
                <div className="border border-slate-300 rounded-md max-h-64 overflow-y-auto bg-white">
                    {filtered.map((item) => (
                        <div key={item.id} className="border-b border-slate-200 py-3 px-4 hover:bg-slate-50 transition-colors">
                            <p className="font-semibold text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-600">
                                {[item.brand, item.color, item.size].filter(Boolean).join(" • ")}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            {search && !loading && filtered.length === 0 && (
                <div className="text-sm text-slate-500 py-4">No items found matching "{search}"</div>
            )}
        </div>
    );
}