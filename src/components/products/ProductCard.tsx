import cn from "classnames";
import { Product } from "../../types";
import StarIcon from "../icons/StarIcon";
import { useCartStore } from "../../store/cart";
import QuantityControl from "../ui/QuantityControl";
import { useEffect, useRef } from "react";

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

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.minHeight = `${ref.current.clientHeight}px`
  }, [])

  return (
    <div className="relative h-full" ref={ref}>
      <div className={cn(
        "group relative rounded-lg shadow-md p-4 flex flex-col bg-black min-h-full hover:z-10 hover:ring hover:ring-primary hover:absolute hover:w-full",
      )}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain rounded-lg"
        />

        <h2 className="text-lg font-semibold mt-2 line-clamp-2 group-hover:line-clamp-none">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <span className="font-semibold">{product.rating.rate}</span>
          <span className="text-gray-400 text-sm">({product.rating.count} отзывов)</span>
        </div>

        <span className="text-xl font-bold mt-2">{product.price} $</span>

        <div className="hidden w-full left-0 bottom-4 group-hover:block mt-2">
          {productInCart ? (
            <div className="flex items-end gap-2">
              <QuantityControl
                onIncrease={() => increaseQuantity(product.id)}
                onDecrease={() => decreaseQuantity(product.id)}
                quantity={productInCart.quantity}
                onChange={(e) => setQuantity(product.id, +e.target.value)}
              />

              <button className="w-full bg-gray-900 text-gray-200 px-4 py-2 rounded-lg hover:bg-[#e33c3c] hover:text-black" onClick={() => removeFromCart(product.id)}>
                Удалить
              </button>
            </div>
          ) : (
            <button className="w-full bg-gray-900 text-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-black" onClick={() => addToCart(product)}>
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;