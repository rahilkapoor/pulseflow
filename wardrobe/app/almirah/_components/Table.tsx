export default function Table() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-600">
                <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Name</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3">Shirt</td>
                        <td className="px-4 py-3">Clothing</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
