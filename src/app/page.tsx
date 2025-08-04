import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white font-sans">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Home</h1>
      <Link
        href="/products"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-semibold text-lg shadow-lg transition hover:from-indigo-600 hover:to-indigo-800"
      >
        Go to Products
      </Link>
    </div>
  );
};

export default Home;
