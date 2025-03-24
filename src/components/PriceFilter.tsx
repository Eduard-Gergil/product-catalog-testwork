import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useProductStore } from "../store/products";

export default function PriceFilter() {
  const priceRange = useProductStore(state => state.priceRange)
  const setPriceRange = useProductStore(state => state.setPriceRange)

  const [inputValue, setInputValue] = useState(priceRange);
  const updateLowerBound = (value: number) => {
    if (value > inputValue[1]) return;
    setInputValue([value, inputValue[1]]);
  }
  const updateUpperBound = (value: number) => {
    if (value < inputValue[0]) return;
    setInputValue([inputValue[0], value]);
  }

  const debouncedPriceRange = useDebounce(inputValue, 700);

  useEffect(() => {
    setPriceRange(debouncedPriceRange);
  }, [debouncedPriceRange]);

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-left text-gray-200">Цена</h3>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          placeholder="От"
          value={inputValue[0] === 0 ? "" : inputValue[0]}
          min={0}
          onChange={(e) => updateLowerBound(+e.target.value)}
          className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-primary"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="До"
          value={inputValue[1] === 0 ? "" : inputValue[1]}
          min={0}
          onChange={(e) => updateUpperBound(+e.target.value)}
          className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-primary"
        />
      </div>
    </div>
  );
}