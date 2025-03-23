import { useCartStore } from "../store/cart";
import CartItem from "./CartItem";
import cn from "classnames";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, setQuantity } = useCartStore();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="rounded-lg shadow-md w-full flex space-x-8 items-start">
      <div className={cn("w-2/3", { "opacity-0": cart.length === 0 })}>
        <div className="space-y-4 bg-black p-4 rounded">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} setQuantity={setQuantity} />
          ))}
        </div>
      </div>

      <div className="w-1/3 bg-black p-4 rounded">
        <div className="flex justify-between font-semibold">
          <span className="text-xl">Итого:</span>
          <span className="text-xl">${totalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full bg-[#51fa7b] text-black py-2 mt-4 rounded-lg">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}