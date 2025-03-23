import SearchBar from "../components/SearchBar";
import { useCartStore } from "../store/cart";
import { Product } from "../types";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const { addToCart, cart, increaseQuantity, decreaseQuantity, setQuantity, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col space-y-6">
      <SearchBar />
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
        {products.map((product, index) =>
          <ProductCard
            key={index}
            product={product}
            addToCart={addToCart}
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            setQuantity={setQuantity}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  );
}