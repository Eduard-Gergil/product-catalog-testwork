import SearchBar from "../components/SearchBar";
import { Product } from "../types";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-col space-y-6">
      <SearchBar />
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
    </div>
  );
}