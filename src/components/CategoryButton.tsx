import cn from "classnames";

interface CategoryButtonProps {
  category: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryButton({ category, active, onClick }: CategoryButtonProps) {
  return (
    <button
      key={category}
      className={cn(
        "px-4 py-0 rounded-lg border-b border-[#111914] hover:bg-[#1b1a1a]",
        active ? "border-primary text-gray-100" : "text-gray-400"
      )}
      onClick={onClick}
    >
      {category}
    </button>
  );
}