import TrashIcon from "./icons/TrashIcon";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <div className="flex items-center space-x-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 object-cover rounded"
        />
        <div className="text-left">
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs text-gray-500">Цена: ${item.price}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded">-</button>
        <span>{item.quantity}</span>
        <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded">+</button>
        <button className="w-8 h-8 p-0 bg-[#b7000067] rounded items-center justify-center flex">
          <TrashIcon className=" w-6 h-6" />
        </button>
      </div>
    </div >
  );
}