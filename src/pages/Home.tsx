import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {[...Array(10)].map((_, index) => <ProductCard key={index} />)}
    </div>
  );
}

export default HomePage;