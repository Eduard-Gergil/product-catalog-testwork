import { useCartStore } from "../store/cart";
import CartItem from "./CartItem";
import cn from "classnames";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, setQuantity } = useCartStore();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="rounded-lg shadow-md w-full flex gap-8 items-start flex-wrap">
      <div className={cn("flex-grow", { "opacity-0": cart.length === 0 })}>
        <div className="space-y-4 bg-black p-4 rounded">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} setQuantity={setQuantity} />
          ))}
        </div>
      </div>

      <div className="min-w-72 flex-grow bg-black p-4 rounded">
        <div className="flex justify-between font-semibold">
          <span className="text-xl">Итого:</span>
          <span className="text-xl">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}