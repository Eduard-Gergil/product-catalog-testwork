import StarIcon from "./icons/StarIcon";

const product = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

const ProductCard = () => {
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