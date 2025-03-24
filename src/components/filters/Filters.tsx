import cn from "classnames"
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";

export default function Filters({ className = "" }) {
  return (
    <div className={cn("bg-black p-4 rounded-lg shadow-md mb-4", className)}>
      <CategoryFilter />
      <PriceFilter />
      <RatingFilter />
    </div >
  );
}