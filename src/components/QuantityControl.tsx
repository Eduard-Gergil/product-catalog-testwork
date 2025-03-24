interface QuantityControlProps {
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuantityControl({ onIncrease, onDecrease, quantity, onChange }: QuantityControlProps) {
  return (
    <div className="flex gap-2">
      <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded hover:bg-red-700 hover:bg-opacity-25 active:bg-red-700" onClick={onDecrease}>-</button>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={onChange}
        className="w-16 h-8 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus-visible:border-primary"
      />
      <button className="w-8 h-8 p-0 bg-[#ffffff0f] rounded hover:bg-green-700 hover:bg-opacity-25 active:bg-green-700" onClick={onIncrease}>+</button>
    </div>
  )
}