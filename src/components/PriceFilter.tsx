import { ProductStore } from "../store/products";

interface PriceFilterProps {
  priceRange: ProductStore["priceRange"];
  setPriceRange: ProductStore["setPriceRange"];
}

export default function PriceFilter({ priceRange, setPriceRange }: PriceFilterProps) {
  
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-left text-gray-200">Цена</h3>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          placeholder="От"
          value={priceRange[0] === 0 ? "" : priceRange[0]}
          min={0}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="До"
          value={priceRange[1] === 0 ? "" : priceRange[1]}
          min={0}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
        />
      </div>
    </div>
  );
}