import SearchBar from "../filters/SearchBar";
import { Product } from "../../types";
import Filters from "../filters/Filters";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[]
  loading: boolean
}

export default function ProductList(
  { products, loading }: ProductListProps
) {
  return (
    <div className="flex flex-col space-y-6">
      <SearchBar />
      <Filters />
      {products.length === 0 && !loading ? (
        <p className="text-center text-gray-500">Товаров не найдено</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
          {products.map((product, index) =>
            <ProductCard
              key={index}
              product={product}
            />
          )}
        </div>
      )}
    </div>
  );
}