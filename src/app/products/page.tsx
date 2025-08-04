import Link from "next/link";
import { getAllProducts } from "@/utils/contents";

const ProductListPage = async () => {
  const products = await getAllProducts();
  return (
    <main>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.slug}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default ProductListPage;
