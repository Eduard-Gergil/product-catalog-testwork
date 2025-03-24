import { CartStore } from "../store/cart";
import TrashIcon from "./icons/TrashIcon";
import QuantityControl from "./QuantityControl";

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
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center space-x-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-24 object-cover rounded flex-shrink-0"
        />
        <div className="text-left">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-md text-gray-500">Цена: ${item.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <QuantityControl
          onIncrease={() => increaseQuantity(item.id)}
          onDecrease={() => decreaseQuantity(item.id)}
          quantity={item.quantity}
          onChange={(e) => setQuantity(item.id, +e.target.value)}
        />

        {/* Кнопка удалить */}
        <button className="w-8 h-8 p-0 bg-red-900 hover:bg-opacity-70 rounded items-center justify-center flex" onClick={() => removeFromCart(item.id)}>
          <TrashIcon className=" w-6 h-6" />
        </button>
      </div>
    </div >
  );
}