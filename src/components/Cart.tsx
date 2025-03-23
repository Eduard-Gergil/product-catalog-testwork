import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Куртка мужская",
    price: 55.99,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    quantity: 2,
  },
];

export default function Cart() {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="rounded-lg shadow-md w-full flex space-x-8 items-start">
      <div className="w-2/3">
        <div className="space-y-4 bg-black p-4 rounded">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
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