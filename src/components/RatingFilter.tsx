import cn from "classnames";
import { useProductStore } from "../store/products";

export default function RatingFilter() {
  const ratingRange = useProductStore(state => state.ratingRange)
  const setRatingRange = useProductStore(state => state.setRatingRange)

  return (
    <div>
      <h3 className="font-semibold mb-2">Рейтинг</h3>
      <div className="flex space-x-4">
        {[...Array(5)].map((_, num) => (
          <button
            key={num}
            className={cn(ratingRange[0] === num ? "text-[#51fa7b] underline" : "text-gray-400")}
            onClick={() => setRatingRange([num, 5])}
          >
            {num === 0 ? "Все" : `${num}★ и выше`}
          </button>
        ))}
      </div>
    </div>
  );
}