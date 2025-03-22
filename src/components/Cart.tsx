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
    <div className="bg-black p-4 rounded-lg shadow-md w-96">
      <h2 className="text-lg font-semibold mb-4">Корзина</h2>

      {/* Список товаров в корзине */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Итоговая сумма */}
      <div className="mt-4 flex justify-between font-semibold">
        <span>Итого:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      {/* Кнопка оформления заказа */}
      <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">
        Оформить заказ
      </button>
    </div>
  );
}