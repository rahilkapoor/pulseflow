export default function Form() {
    return (
        <form className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name:
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter item name"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-slate-700">
                    Category:
                </label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="E.g., Clothing, Accessories"
                />
            </div>
            <button 
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
                Add to Almirah
            </button>
        </form>
    );
}