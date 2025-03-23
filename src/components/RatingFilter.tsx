import cn from "classnames";

interface RatingFilterProps {
  ratingRange: [number, number];
  setRatingRange: (range: [number, number]) => void;
}

export default function RatingFilter({ ratingRange, setRatingRange }: RatingFilterProps) {
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
        {/* <button className="text-[#51fa7b] underline">4★ и выше</button>
      <button className="text-gray-400">3★ и выше</button>
      <button className="text-gray-400">2★ и выше</button> */}
      </div>
    </div>
  );
}