"use client";
import { useEffect, useState } from "react";

export default function Table() {
    const [clothes, setClothes] = useState<any[]>([]);
    useEffect(() => {
        const controller = new AbortController();
        const getClothes = async () => {
            try {
                const result = await fetch("http://localhost:8080/api/items", {signal: controller.signal});
                const data = await result.json();
                console.log("Fetched clothes data:", data);
                setClothes(data);
            } catch (error) {
                console.error("Error fetching clothes data:", error);
            }
        };
        getClothes();

        return () => controller.abort();
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600">
                <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">id</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Brand</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Color</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Discriptor</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Pattern</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Size</th>
                    </tr>
                </thead>
                <tbody>
                    {clothes.map((cloth) => (
                        <tr key={cloth.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3">{cloth.id}</td>
                            <td className="px-4 py-3">{cloth.brand}</td>
                            <td className="px-4 py-3">{cloth.color}</td>
                            <td className="px-4 py-3">{cloth.descriptor}</td>
                            <td className="px-4 py-3">{cloth.pattern}</td>
                            <td className="px-4 py-3">{cloth.size}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
