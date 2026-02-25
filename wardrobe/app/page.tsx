import Link from "next/link";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-xl text-slate-300 mb-8">Check out your wardrobe!</p>
        <Link 
          prefetch={false} 
          href="/almirah"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Open Almirah
        </Link>
      </div>
    </div>
  );
}