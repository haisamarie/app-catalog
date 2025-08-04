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
    <main>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </main>
  );
};

export default ProductDetailPage;
