import Link from "next/link";

const Home = () => {
  return (
    <div>
      Home
      <Link href="/products">Go to Products</Link>
    </div>
  );
};

export default Home;
