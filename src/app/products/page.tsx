import Link from "next/link";
import { getAllProducts } from "@/utils/contents";

const ProductListPage = async () => {
  const products = await getAllProducts();
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
          Products List
        </h1>
        <ul className="space-y-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex items-center"
            >
              <Link
                href={`/products/${product.slug}`}
                className="text-lg font-semibold text-indigo-700 hover:underline"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProductListPage;
