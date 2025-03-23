import cn from "classnames"

export default function Filters({ className = "" }) {
  return (
    <div className={cn("bg-black p-4 rounded-lg shadow-md mb-4", className)}>
      {/* Фильтр по категории */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-left text-gray-3200">Категория</h3>
        <div className="flex space-x-2">
          {/* <button className="px-4 py-1 rounded-lg bg-[#51fa7b] text-black">Все</button>
          <button className="px-4 py-1 rounded-lg bg-[#111914] text-white">Мужская одежда</button> */}

          <button className="px-4 py-0 rounded-lg border-b border-[#51fa7b] text-gray-200">Все</button>
          <button className="px-4 py-0 rounded-lg border-b border-[#111914] text-gray-400">Мужская одежда</button>


          {/* <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500">Женская одежда</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500">Электроника</button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-500">Украшения</button> */}
        </div>
      </div>

      {/* Фильтр по цене */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-left text-gray-200">Цена</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="От"
            className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="До"
            className="w-20 px-3 py-0 border rounded-lg text-gray-200 border-[#747474]  outline-none bg-black focus:border-blue-500 focus-visible:border-[#51fa7b]"
          />
        </div>
      </div>

      {/* Фильтр по рейтингу */}
      <div>
        <h3 className="font-semibold mb-2">Рейтинг</h3>
        <div className="flex space-x-4">
          <button className="text-[#51fa7b] underline">4★ и выше</button>
          <button className="text-gray-400">3★ и выше</button>
          <button className="text-gray-400">2★ и выше</button>
        </div>
      </div>
    </div>
  );
}