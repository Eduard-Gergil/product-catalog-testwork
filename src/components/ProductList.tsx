import SearchBar from "../components/SearchBar";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="flex flex-col space-y-6">
      <SearchBar />
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {[...Array(10)].map((_, index) => <ProductCard key={index} />)}
      </div>
    </div>
  );
}