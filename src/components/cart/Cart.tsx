import { useCartStore } from "../../store/cart";
import CartItem from "./CartItem";
import cn from "classnames";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, setQuantity } = useCartStore();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="w-full flex items-start lg:flex-row flex-col lg:gap-8 lg:space-y-0 space-y-8">
      <div className={cn("lg:w-2/3 w-full", { "opacity-0": cart.length === 0 })}>
        <div className="space-y-4 bg-black p-4 rounded">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} setQuantity={setQuantity} />
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 w-full bg-black p-4 rounded">
        <div className="flex justify-between font-semibold">
          <span className="text-xl">Итого:</span>
          <span className="text-xl">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}