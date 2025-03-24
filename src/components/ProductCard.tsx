import cn from "classnames";
import { Product } from "../types";
import StarIcon from "./icons/StarIcon";
import { useCartStore } from "../store/cart";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const productInCart = useCartStore(state => state.cart.find((item) => item.id === product.id))
  const addToCart = useCartStore(state => state.addToCart)
  const removeFromCart = useCartStore(state => state.removeFromCart)
  const increaseQuantity = useCartStore(state => state.increaseQuantity)
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
  const setQuantity = useCartStore(state => state.setQuantity)

  return (
    <div className={cn("group relative rounded-lg shadow-md p-4 flex flex-col bg-black hover:pb-16 hover:-mb-16 hover:z-10", { "hover:pb-28 hover:-mb-28": productInCart })}>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>

      <div className="flex items-center gap-1 mt-2">
        <StarIcon className="w-4 h-4 text-yellow-500" />
        <span className="font-semibold">{product.rating.rate}</span>
        <span className="text-gray-400 text-sm">({product.rating.count} отзывов)</span>
      </div>

      <p className="text-xl font-bold mt-2">{product.price} $</p>

      <div className="hidden absolute w-full left-0 px-4 bottom-4 group-hover:block">
        {productInCart ? (
          <div>
            <div className="mb-2">
              <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded" onClick={() => decreaseQuantity(product.id)}>-</button>
              <input
                type="number"
                min={1}
                value={productInCart.quantity}
                onChange={(e) => setQuantity(product.id, +e.target.value)}
                className="w-16 h-8 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
              />
              <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded" onClick={() => increaseQuantity(product.id)}>+</button>
            </div>

            <button className="w-full bg-gray-900 text-gray-200 px-4 py-2 rounded-lg hover:bg-[#e33c3c] hover:text-black" onClick={() => removeFromCart(product.id)}>
              Удалить из корзины
            </button>
          </div>
        ) : (
          <button className="mt-2 w-full bg-gray-900 text-gray-200 px-4 py-2 rounded-lg hover:bg-[#51fa7b] hover:text-black" onClick={() => addToCart(product)}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;