import { CartStore } from "../store/cart";
import TrashIcon from "./icons/TrashIcon";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  increaseQuantity: CartStore["increaseQuantity"];
  decreaseQuantity: CartStore["decreaseQuantity"];
  removeFromCart: CartStore["removeFromCart"];
  setQuantity: CartStore["setQuantity"];
}

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart, setQuantity }: CartItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="text-left">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-md text-gray-500">Цена: ${item.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Регулировка кол-ва товара */}
        <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded" onClick={() => decreaseQuantity(item.id)}>-</button>
        <input
          type="number"
          min={1}
          value={item.quantity}
          onChange={(e) => setQuantity(item.id, +e.target.value)}
          className="w-16 h-8 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
        />
        <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded" onClick={() => increaseQuantity(item.id)}>+</button>

        {/* Кнопка удалить */}
        <button className="w-8 h-8 p-0 bg-[#b7000067] rounded items-center justify-center flex" onClick={() => removeFromCart(item.id)}>
          <TrashIcon className=" w-6 h-6" />
        </button>
      </div>
    </div >
  );
}