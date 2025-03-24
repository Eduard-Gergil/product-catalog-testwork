import { useProductStore } from "../../store/products";
import CategoryButton from "./CategoryButton";

export default function CategoryFilter() {
  const categories = useProductStore(state => state.categories)
  const currectCategories = useProductStore(state => state.currectCategories)
  const toggleCurrentCategory = useProductStore(state => state.toggleCurrentCategory)
  const selectAllCategories = useProductStore(state => state.selectAllCategories)

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 text-left text-gray-3200">Категория</h3>
      <div className="flex flex-wrap gap-2">
        <CategoryButton
          category={"Все"}
          active={currectCategories.length === 0}
          onClick={selectAllCategories}
        />

        {categories.map((category) => (
          <CategoryButton
            category={category}
            active={currectCategories.includes(category)}
            onClick={() => toggleCurrentCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}