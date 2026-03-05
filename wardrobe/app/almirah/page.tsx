
import Table from "./_components/Table";
import Form from "./_components/Form";
import Search from "./_components/Search";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome to your Almirah!</h1>
          <p className="text-lg text-slate-600">Check out your clothes!</p>
        </div>
        <Search />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Collection</h2>
              <Table />
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Add New Item</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}