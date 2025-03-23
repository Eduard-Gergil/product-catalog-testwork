import { Product } from "../types";
import StarIcon from "./icons/StarIcon";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative rounded-lg shadow-md p-4 flex flex-col bg-black hover:pb-16 hover:-mb-16 hover:z-10">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>

      <div className="flex items-center gap-1 mt-2">
        <StarIcon className="w-4 h-4 text-yellow-500" />
        <span className="font-semibold">{product.rating.rate}</span>
        <span className="text-gray-400 text-sm">({product.rating.count} отзывов)</span>
      </div>

      <p className="text-xl font-bold mt-2">{product.price} $</p>

      <div className="hidden absolute w-full left-0 px-4 bottom-4 group-hover:block">
        <button className="mt-2 w-full bg-gray-900 text-gray-200 px-4 py-2 rounded-lg hover:bg-[#51fa7b] hover:text-black">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;