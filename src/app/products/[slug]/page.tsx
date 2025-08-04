import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/utils/contents";

// generateStaticParams に列挙されていないパスは即 404 にする
export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // 全ての slug をビルド時に取得
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ProductDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  // データ取得関数が非同期の場合は await を付与
  const product = await getProductBySlug(slug);
  if (!product) {
    // 存在しない場合は 404 をスロー
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-white px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">
          {product.title}
        </h1>
        <p className="text-lg text-gray-700">{product.description}</p>
      </div>
    </main>
  );
};

export default ProductDetailPage;
