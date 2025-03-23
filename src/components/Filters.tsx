import cn from "classnames"
import { useProductStore } from "../store/products";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";

export default function Filters({ className = "" }) {
  const {
    categories,
    currectCategories,
    toggleCurrentCategory,
    selectAllCategories,
    priceRange,
    setPriceRange,
    ratingRange,
    setRatingRange
  } = useProductStore()

  return (
    <div className={cn("bg-black p-4 rounded-lg shadow-md mb-4", className)}>
      <CategoryFilter currectCategories={currectCategories} selectAllCategories={selectAllCategories} toggleCurrentCategory={toggleCurrentCategory} categories={categories} />
      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <RatingFilter ratingRange={ratingRange} setRatingRange={setRatingRange} />
    </div >
  );
}