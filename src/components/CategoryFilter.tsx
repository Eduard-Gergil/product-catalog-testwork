import cn from "classnames";

interface CategoryFilterProps {
  currectCategories: string[];
  selectAllCategories: () => void;
  toggleCurrentCategory: (category: string) => void;
  categories: string[];
}

export default function CategoryFilter({ currectCategories, selectAllCategories, toggleCurrentCategory, categories }: CategoryFilterProps) {
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