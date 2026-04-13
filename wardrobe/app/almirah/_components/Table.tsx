"use client";
import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Table() {
    const [clothes, setClothes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchClothes = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await fetch(`${API_BASE_URL}/api/items`, {signal: controller.signal});
                if (!result.ok) throw new Error(`HTTP ${result.status}`);
                const data = await result.json();
                console.log("Fetched clothes data:", data);
                setClothes(data);
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                    console.error("Error fetching clothes data:", error);
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchClothes();

        return () => controller.abort();
    }, []);

    if (loading) {
        return <div className="text-center py-8 text-slate-500">Loading items...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-600">Error: {error}</div>;
    }

    return (
        <div className="overflow-x-auto">
            {clothes.length === 0 ? (
                <div className="text-center py-8 text-slate-500">No items found</div>
            ) : (
                <table className="w-full text-sm text-slate-600">
                    <thead className="bg-slate-100 border-b border-slate-300">
                        <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">ID</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Name</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Brand</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Color</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Descriptor</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Pattern</th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-900">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clothes.map((cloth) => (
                            <tr key={cloth.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                                <td className="px-4 py-3 text-slate-700 font-mono text-xs">{cloth.id}</td>
                                <td className="px-4 py-3 text-slate-700">{cloth.name || "-"}</td>
                                <td className="px-4 py-3">{cloth.brand || "-"}</td>
                                <td className="px-4 py-3">{cloth.color || "-"}</td>
                                <td className="px-4 py-3">{cloth.descriptor || "-"}</td>
                                <td className="px-4 py-3">{cloth.pattern || "-"}</td>
                                <td className="px-4 py-3">{cloth.size || "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
