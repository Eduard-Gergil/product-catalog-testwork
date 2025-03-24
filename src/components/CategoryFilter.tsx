import cn from "classnames";
import { useProductStore } from "../store/products";

export default function CategoryFilter() {
  const categories = useProductStore(state => state.categories)
  const currectCategories = useProductStore(state => state.currectCategories)
  const toggleCurrentCategory = useProductStore(state => state.toggleCurrentCategory)
  const selectAllCategories = useProductStore(state => state.selectAllCategories)  

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-left text-gray-3200">Категория</h3>
      <div className="flex space-x-2">
        <button
          className={cn(
            "px-4 py-0 rounded-lg border-b border-[#111914]",
            currectCategories.length === 0 ? "border-[#51fa7b] text-gray-100" : "text-gray-400"
          )}
          onClick={selectAllCategories}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "px-4 py-0 rounded-lg border-b border-[#111914]",
              currectCategories.includes(category) ? "border-[#51fa7b] text-gray-100" : "text-gray-400"
            )}
            onClick={() => toggleCurrentCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}